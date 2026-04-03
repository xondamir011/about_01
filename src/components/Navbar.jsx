import { Home, User, Folder, Mail } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n";
import { motion } from "framer-motion";

const Navbar = ({ active, setActive }) => {
  const { lang, changeLang } = useLang();
  const t = translations[lang] || translations.en;

  const [openLang, setOpenLang] = useState(false);
  const langRef = useRef();

  // 🔥 outside bosilsa yopiladi
  useEffect(() => {
    const handleClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setOpenLang(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const languages = [ 
    { code: "en", label: "English", flag: "https://flagcdn.com/w40/us.png" },
    { code: "uz", label: "O‘zbek", flag: "https://flagcdn.com/w40/uz.png" },
    { code: "ru", label: "Русский", flag: "https://flagcdn.com/w40/ru.png" },
    { code: "tr", label: "Türkçe", flag: "https://flagcdn.com/w40/tr.png" },
    { code: "de", label: "Deutsch", flag: "https://flagcdn.com/w40/de.png" },
    { code: "fr", label: "Français", flag: "https://flagcdn.com/w40/fr.png" },
    { code: "es", label: "Español", flag: "https://flagcdn.com/w40/es.png" },
    { code: "it", label: "Italiano", flag: "https://flagcdn.com/w40/it.png" },
    { code: "pt", label: "Português", flag: "https://flagcdn.com/w40/pt.png" },
    { code: "ar", label: "العربية", flag: "https://flagcdn.com/w40/sa.png" },
    { code: "hi", label: "हिन्दी", flag: "https://flagcdn.com/w40/in.png" },
    { code: "zh", label: "中文", flag: "https://flagcdn.com/w40/cn.png" },
    { code: "ko", label: "한국어", flag: "https://flagcdn.com/w40/kr.png" },
    { code: "ja", label: "日本語", flag: "https://flagcdn.com/w40/jp.png" }, 
  ];

  const currentLang = languages.find(l => l.code === lang);

  const items = [
    { id: "home", icon: <Home size={20} />, label: t.home },
    { id: "about", icon: <User size={20} />, label: t.about },
    { id: "projects", icon: <Folder size={20} />, label: t.projects?.title || "Projects" },
    { id: "contact", icon: <Mail size={20} />, label: t.contact },
  ];

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden md:flex fixed top-0 w-full items-center px-8 py-4 backdrop-blur bg-base-content z-50">
         <div className="flex justify-center mr-15 items-center mx-auto gap-5"> 
            <div className="dropdown"> 
              <div tabIndex={0} role="button" className="btn bg-gray-400 hover:bg-base-300"> 
                Theme 
                <svg width="12px" height="12px" className="inline-block h-2 w-2 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"> 
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path> 
                </svg> 
                </div> 
                <ul tabIndex="-1" className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"> 
                  <li>
                    <input type="radio" name="theme-dropdown" className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="white" />
                    </li>
                     <li>
                      <input type="radio" name="theme-dropdown" className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro" />
                      </li>
                       <li>
                        <input type="radio" name="theme-dropdown" className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk" />
                        </li> 
                        <li>
                        <input type="radio" name="theme-dropdown" className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine" />
                        </li> 
                        <li>
                          <input type="radio" name="theme-dropdown" className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua" />
                          </li> 
                        </ul> 
            </div>
          </div> 

        {/* MENU */}
        <div className="flex-1 flex justify-center gap-10">
          {items.map(item => (
            <motion.button
              key={item.id}
              onClick={() => setActive(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`flex items-center gap-2 cursor-pointer transition ${
                active === item.id
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-cyan-400"
              }`}>
              {item.icon} {item.label}
            </motion.button>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 ml-auto flex-row-reverse">
         
          {/* 🌐 LANGUAGE */}
          <div className="relative" ref={langRef}>
            <button onClick={() => setOpenLang(!openLang)}
              className="btn flex items-center gap-2 bg-gray-400 hover:bg-base-300">
             <img src={currentLang?.flag} className="w-5 h-5"/>            
              {currentLang?.label}
               <svg width="12px" height="12px" className="inline-block h-2 w-2 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"> 
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path> 
                </svg>
            </button>

            {openLang && (
              <div className="absolute right-0 mt-3 w-40 bg-base-300 rounded-xl shadow-xl">
                {languages.map(l => (
                  <div key={l.code}
                    onClick={() => {
                      changeLang(l.code);
                      setOpenLang(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-purple-500/20  flex gap-2">
                    <img src={l.flag} className="w-5 h-4 " />
                    {l.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* GITHUB */}
         <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer"
         className="btn p-4 bg-gray-400 rounded-md hover:bg-base-300 transition"> 
         <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor" className="inline"> 
          <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.56 7.56 0 012 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/> 
          </svg>
         </a>
        </div>
      </div>

      {/* 📱 MOBILE TOP */}
      <div className="md:hidden fixed top-0 w-full flex justify-between px-4 py-3 backdrop-blur bg-base-content z-50">

        {/* LANGUAGE */}
       <div className="relative">
         <button onClick={() => setOpenLang(!openLang)} className="btn flex items-center gap-1 p-3 text-xs bg-gray-400 hover:bg-base-300"> 
          <img src={currentLang?.flag} className="w-5 h-5 rounded-sm"/> 
          {currentLang?.label} 
           <svg width="12px" height="12px" className="inline-block h-2 w-2 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"> 
             <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path> 
          </svg>
        </button>
        
          {openLang && (
            <div className="absolute mt-2 w-36 bg-base-300 rounded-xl shadow-xl">
              {languages.map(l => (
                <div key={l.code}
                  onClick={() => {
                    changeLang(l.code);
                    setOpenLang(false);
                  }}
                  className="px-3 py-2 hover:bg-purple-500/20 flex gap-2">
                  <img src={l.flag} className="w-5 h-4" />
                  {l.label}
                </div>
              ))}
            </div>
          )}
        </div>

         <div className="flex justify-center items-center mx-auto gap-5"> 
            <div className="dropdown"> 
              <div tabIndex={0} role="button" className="btn bg-gray-400 hover:bg-base-300"> 
                Theme 
                <svg width="12px" height="12px" className="inline-block h-2 w-2 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"> 
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path> 
                </svg> 
              </div> 
                <ul tabIndex="-1" className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"> 
                  <li>
                    <input type="radio" name="theme-dropdown" className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="white" />
                    </li>
                     <li>
                      <input type="radio" name="theme-dropdown" className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro" />
                      </li>
                       <li>
                        <input type="radio" name="theme-dropdown" className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk" />
                        </li> 
                        <li>
                        <input type="radio" name="theme-dropdown" className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine" />
                        </li> 
                        <li>
                          <input type="radio" name="theme-dropdown" className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua" />
                          </li> 
                        </ul> 
                    </div>
          </div> 

        {/* GITHUB */}
        <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer"
         className="btn p-4 bg-gray-400 rounded-md hover:bg-base-300 transition"> 
         <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor" className="inline"> 
          <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.56 7.56 0 012 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/> 
          </svg>
         </a>
      </div>

      {/* 📱 MOBILE BOTTOM */}
      <div className="md:hidden fixed bottom-0 w-full bg-base-content flex justify-around py-3 border-t z-50">
        {items.map(item => (
          <motion.button
            key={item.id}
            onClick={() => setActive(item.id)}
            whileTap={{ scale: 0.9 }}
            className={`flex flex-col items-center ${
              active === item.id ? "text-purple-400" : "text-gray-400"
            }`}>
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </>
  );
};

export default Navbar;