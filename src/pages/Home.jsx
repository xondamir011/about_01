import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n";

const Home = () => {
  const { lang } = useLang();
  const t = translations[lang] || translations["en"];

  const cards = t.homePage?.cards ? Object.values(t.homePage.cards): [
    t.homePage.cards.nav,
    t.homePage.cards.tech,  
    t.homePage.cards.projects,
    t.homePage.cards.contact,
    t.homePage.cards.design,
    t.homePage.cards.speed,
  ];

  return (
    <div className="text-white px-4 pb-24">

      <div className="flex flex-col items-center justify-center text-center mt-16">
        <h1 className="text-4xl font-bold mb-5">
         <span className="text-purple-400">{t.homePage.title}</span>
        </h1>

        <p className="text-gray-400 text-xl mb-10">
          {t.homePage.subtitle}
        </p>
      </div>

        <hr className="border-purple-400 border-2 mx-auto w-1/1 sm:w-1/3 md:w-1/2"/>

      {/* CARDS */}
      <div className="mt-12 space-y-6 max-w-xl mx-auto">

        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.15,
              duration: 0.5,
              type: "spring",
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 25px #a855f7",
            }}
            className="bg-[#111] p-6 rounded-3xl border border-purple-500/20">
            <h2 className="text-lg font-bold text-white mb-2">
              {card.title}
            </h2>

            <p className="text-gray-400 text-sm">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;