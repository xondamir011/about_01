import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n";

const About = () => {
  const { lang } = useLang();
  const t = translations[lang] || translations["en"];

  const skillsList = [
    { key: "html", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { key: "css", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { key: "tailwind", img: "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png" },
    { key: "js", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { key: "react", img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { key: "github", img: "https://cdn-icons-png.flaticon.com/512/733/733609.png" },
    { key: "node", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { key: "figma", img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
  ];

  const featuresList = [
    { key: "seo", icon: "🌐" },
    { key: "design", icon: "🎨" },
    { key: "development", icon: "💎" },
    { key: "fast", icon: "⏱️" },
  ];

  return (
    <div className="p-3 text-white max-w-xl mx-auto pb-24">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl text-purple-400 mb-4 text-center font-bold">
        {t.aboutPage.title}
      </motion.h1>

      <hr className="border-3 mb-5 mt-6 border-purple-400"/>

      {/* TEXT */}
      <motion.p initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 mb-8 text-lg text-center">
        {t.aboutPage.description}
      </motion.p>

      {/* SKILLS */}
      <h2 className="text-2xl text-purple-400 mb-5 text-center">
        {t.aboutPage.skillsTitle}
      </h2>

      <div className="grid grid-cols-2 gap-5 mb-10">
        {skillsList.map((skill, i) => (
          <motion.div
            key={skill.key}
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: i * 0.1,
              type: "spring",
            }}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0px 0px 25px #a855f7",
            }}
            className="bg-[#111] rounded-2xl p-6 flex flex-col items-center cursor-pointer">
            <motion.img
              src={skill.img}
              className="w-12 h-12 mb-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}/>

            <p className="text-sm text-gray-300">
              {t.skills?.[skill.key] || skill.key}
            </p>
          </motion.div>
        ))}
      </div>

      {/* FEATURES */}
      <h2 className="text-2xl text-purple-400 mb-6 text-center">
        {t.aboutPage.featuresTitle}
      </h2>

      <div className="space-y-5">
        {featuresList.map((f, i) => (
          <motion.div
            key={f.key}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.15,
            }}
            whileHover={{
              x: 10,
              boxShadow: "0px 0px 30px #a855f7",
            }}
            className="flex items-center gap-5 bg-[#111] p-6 rounded-3xl cursor-pointer">
            <motion.div
              className="text-3xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}>
              {f.icon}
            </motion.div>

            <div>
              <h3 className="font-bold text-white">
                {t.features?.[f.key]?.title || f.key}
              </h3>
              <p className="text-gray-400 text-sm">
                {t.features?.[f.key]?.desc || ""}
              </p>
            </div>
          </motion.div>
        ))}
       </div>
    </div>
  );
};

export default About;