import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n";
import { motion } from "framer-motion";

const Contact = () => {
  const { lang } = useLang();
  const t = translations[lang] || translations["en"];

  return (
    <div className="p-6 text-center text-white max-w-xl mx-auto pb-24">

      {/* PROFILE IMAGE */}
      <motion.img
        src="https://i.pinimg.com/736x/95/f0/de/95f0de29e435ee78b91a326237e333e6.jpg"
        alt="Profile"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-32 h-32 sm:w-40 sm:h-40 mx-auto object-cover mb-8 
        border-4 border-purple-500 rounded-tl-[40px] rounded-br-[40px]
        shadow-[0_0_30px_#a855f7]"/>

      {/* NAME */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-4xl font-bold text-purple-400 mb-3"
      >
        {t.contactPage.name}
      </motion.h1>

      {/* ROLE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 mb-8 sm:text-lg"
      >
        {t.contactPage.role}
      </motion.p>

      {/* BADGES */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {[t.contactPage.frontend, t.contactPage.ui, t.contactPage.freelancer].map((b, i) => (
          <motion.div
            key={i}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 rounded-xl bg-[#111] border border-purple-500
            shadow-[0_0_15px_#a855f7] text-sm"
          >
            {b}
          </motion.div>
        ))}
      </div>

      {/* LINKS */}
      <div className="flex flex-col gap-4 mt-6">

        <motion.a
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          href="https://t.me/xondamir_mi"
          target="_blank"
          className="p-3 rounded-xl bg-[#111] border border-purple-500
          hover:shadow-[0_0_20px_#22d3ee] transition"
        >
          📩 {t.contactPage.telegram}
        </motion.a>

        <motion.a
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          href="https://github.com/xondmair011"
          target="_blank"
          className="p-3 rounded-xl bg-[#111] border border-purple-500
          hover:shadow-[0_0_20px_#f22b8e] transition">
            
          💻 {t.contactPage.github}
        </motion.a>

        <motion.a
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          href="mailto:xondamirmadaliyev79@gmail.com"
          className="p-3 rounded-xl bg-[#111] border border-purple-500
          hover:shadow-[0_0_20px_#f59e0b] transition">
          📧 {t.contactPage.email}
        </motion.a>

        <motion.a
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          href="tel:+998935607563"
          className="p-3 rounded-xl bg-[#111] border border-purple-500
          hover:shadow-[0_0_20px_#10b981] transition">
          📞 {t.contactPage.phone}
        </motion.a>
      </div>

      {/* EXIT BUTTON */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.location.href = "/"}
        className="px-6 py-3 mt-12 rounded-xl cursor-pointer bg-red-500/20 border border-red-500
        hover:bg-red-500 hover:text-white transition">
        {t.contactPage.exit}
      </motion.button>
    </div>
  );
};

export default Contact;