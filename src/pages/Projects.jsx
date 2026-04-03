import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";
import img15 from "../assets/img15.png";

const Projects = () => {
  const { lang } = useLang();
  const t = translations[lang] || translations["en"];

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [activeCard, setActiveCard] = useState(null); // 🔥 mobile uchun

  const filters = [
    { key: "all", label: t.projects?.all || "All" },
    { key: "frontend", label: t.projects?.frontend || "Frontend" },
    { key: "landing", label: t.projects?.landing || "Landing" },
    { key: "real", label: t.projects?.real || "Real" },
  ];

  const projects = [
    { title: t.projects?.movie || "Movie UZ", category: "real", img: img1, tech: ["React","Tailwind","JS"], github: "#" },
    { title: t.projects?.cosmos || "Cosmos", category: "landing", img: img2, tech: ["3D","UI"], github: "#" },
    { title: t.projects?.jarvis || "Jarvis", category: "frontend", img: img3, tech: ["AI","JS"], github: "#" },
    { title: t.projects?.edugames || "Edu Games", category: "real", img: img4, tech: ["React","UI"], github: "#" },
    { title: t.projects?.trading || "Trading", category: "frontend", img: img5, tech: ["HTML","CSS"], github: "#" },
    { title: t.projects?.valyuta || "Valyuta", category: "landing", img: img6, tech: ["React"], github: "#" },
    { title: t.projects?.premiumsoat || "Premium Soat", category: "landing", img: img7, tech: ["JS"], github: "#" },
    { title: t.projects?.obhavo || "Ob-havo", category: "real", img: img8, tech: ["API"], github: "#" },
    { title: t.projects?.dashboard || "Dashboard", category: "real", img: img9, tech: ["Chart"], github: "#" },
    { title: t.projects?.cashier || "Cashier", category: "real", img: img10, tech: ["POS"], github: "#" },
    { title: t.projects?.hamstercombat || "Hamster", category: "frontend", img: img11, tech: ["Game"], github: "#" },
    { title: t.projects?.products || "Products", category: "landing", img: img12, tech: ["Shop"], github: "#" },
    { title: t.projects?.footballproducts || "Football", category: "landing", img: img13, tech: ["Store"], github: "#" },
    { title: t.projects?.marsspace || "Mars", category: "landing", img: img14, tech: ["HTML"], github: "#" },
    { title: t.projects?.trafalgar || "Trafalgar", category: "frontend", img: img15, tech: ["Landing"], github: "#" },
  ];

  const filtered = projects.filter((p) => {
    return (
      (filter === "all" || p.category === filter) &&
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="p-4 pb-24 text-white max-w-6xl mx-auto">

      {/* TITLE */}
      <h1 className="text-4xl text-purple-400 text-center font-bold mb-4">
        {t.projects?.title || "Projects"}
      </h1>

      {/* FILTER */}    
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {filters.map((f) => (
          <button key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-xl cursor-pointer transition ${
              filter === f.key
                ? "bg-purple-500 shadow-[0_0_15px_#a855f7]"
                : "bg-[#111] hover:bg-purple-500"
            }`}>
            {f.label}
          </button>
        ))}
      </div>

      {/* SEARCH */}
      <div className="flex justify-center mb-8">
        <input type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-xl bg-[#111] border border-purple-500 w-full max-w-md outline-none"/>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => {
          const isActive = activeCard === i;

          return (
            <motion.div
              key={i}
              onClick={() => setActiveCard(isActive ? null : i)} // 🔥 tap
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px #a855f7", }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#111] rounded-2xl overflow-hidden cursor-pointer">
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className={`w-full h-48 object-cover transition duration-500 ${
                    isActive ? "scale-110" : ""
                  }`}/>

                {/* 🔥 MOBILE + HOVER BUTTON */}
                <div
                  className={`absolute top-3 right-3 transition ${
                    isActive ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
                  }`}
                >
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/70 p-2 rounded-xl"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-4">
                <h2 className="text-lg font-bold">{p.title}</h2>

                <p className="text-purple-400 text-sm flex flex-wrap gap-1 mt-2">
                  {p.tech.map((t, idx) => (
                    <span key={idx}>#{t}</span>
                  ))}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          😕 No projects found
        </p>
      )}
    </div>
  );
};

export default Projects;