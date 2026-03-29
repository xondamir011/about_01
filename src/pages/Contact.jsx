import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n";

const Contact = () => {
  const { lang } = useLang();
  const t = translations[lang] || translations["en"];

  return (
    <div className="p-6 text-center text-white max-w-xl mx-auto">
     <img src="https://i.pinimg.com/736x/95/f0/de/95f0de29e435ee78b91a326237e333e6.jpg" alt="Profile"
      className="w-40 h-40 mx-auto sm:w-40 sm:h-40 object-cover mb-10 border-3 border-purple-500 rounded-tl-[40px] rounded-br-[40px]"/>

      {/* NAME */}
      <h1 className="sm:text-4xl text-2xl font-bold text-base-100 mt-5 mb-5">
        {t.contactPage.name}
      </h1>

      {/* ROLE */}
      <p className="text-gray-300 mb-10 sm:text-lg">
        {t.contactPage.role}
      </p>

      {/* BADGES */}
      <div className="flex flex-wrap justify-center items-center gap-3 text-xl mb-6">
        <div className="flex gap-3">
          <h2 className="badge-ghost w-24 h-10 flex items-center justify-center rounded-xl shadow-lg shadow-purple-400">
            {t.contactPage.frontend}
          </h2>
          <h2 className="badge-ghost w-24 h-10 flex items-center justify-center rounded-xl shadow-lg shadow-purple-500">
            {t.contactPage.ui}
          </h2>
        </div>

        <div className="w-full flex justify-center">
          <h2 className="badge-ghost w-24 h-10 flex items-center justify-center mb-5 rounded-xl shadow-lg shadow-purple-500">
            {t.contactPage.freelancer}
          </h2>
        </div>
      </div>

      {/* LINKS */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
        <a href="https://t.me/xondamir_mi"
          target="_blank"
          className="px-4 py-2 rounded-md border hover:text-info transition text-center">
          {t.contactPage.telegram}
        </a>

        <a href="https://github.com/xondmair011"
          target="_blank"
          className="px-4 py-2 rounded-md border hover:text-secondary transition text-center">
          {t.contactPage.github}
        </a>

        <a href="mailto:xondamirmadaliyev79@gmail.com"
          className="px-4 py-2 rounded-md border hover:text-accent transition text-center">
          {t.contactPage.email}
        </a>

        <a href="#"
          className="px-4 py-2 rounded-md border hover:text-primary transition text-center">
          {t.contactPage.phone}: +998 93 560 75 63
        </a>
      </div>

      {/* EXIT */}
      <button onClick={() => window.location.href = "/"}
        className="px-5 py-3 mt-12 rounded-md cursor-pointer border hover:text-red-500 transition">
        {t.contactPage.exit}
      </button>
    </div>
  );
};

export default Contact;