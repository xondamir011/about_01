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

  // FILTER BUTTONS
  const filters = [
    { key: "all", label: t.projects?.all || "All" },
    { key: "frontend", label: t.projects?.frontend || "Frontend" },
    { key: "landing", label: t.projects?.landing || "Landing" },
    { key: "real", label: t.projects?.real || "Real" },
  ];

  // PROJECTS DATA
  const projects = [
    {
      title: t.projects?.movie || "Movie UZ",
      category: "real",
      img: img1,
      tech: ["React", "Tailwind Css", "JavaScript", "Backend"],
      github: "https://github.com/",
    },
    {
      title: t.projects?.cosmos || "Cosmos",
      category: "landing",
      img: img2,
      tech: ["Tailwind", "React", "3D", "UI"],
      github: "https://github.com/",
    },
    {
      title: t.projects?.jarvis || "Jarvis",
      category: "frontend",
      img: img3,
      tech: ["AI", "Backend", "JavaScript"],
      github: "https://github.com/",
    },
    {
      title: t.projects?.edugames || "Edu Games",
      category: "real",
      img: img4,
      tech: ["UI", "UX", "React JSX"],
      github: "https://github.com/",
    },
     {
      title: t.projects?.trading || "Trading demo",
      category: "frontend",
      img: img5,
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/",
    },
     {
      title: t.projects?.valyuta || "Valyuta",
      category: "landing",
      img: img6,
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/",
    },
    {
      title: t.projects?.premiumsoat || "Premium Soat",
      category: "landing",
      img: img7,
      tech: ["HTML", "Style Css", "JavaScript"],
      github: "https://github.com/",
    },
    {
      title: t.projects?.obhavo || "Ob-Havo",
      category: "real",
      img: img8,
      tech: ["React", "Tailwind Css", "UI", "UX"],
      github: "https://github.com/",
    },
     {
      title: t.projects?.dashboard || "Dashboard",
      category: "real",
      img: img9,
      tech: ["React", "Tailwind Css", "Chart AI"],
      github: "https://github.com/",
    },
    {
      title: t.projects?.cashier || "Cashier",
      category: "real",
      img: img10,
      tech: ["React", "Tailwind Css", "UI", "UX"],
      github: "https://github.com/",
    },
    {
      title: t.projects?.hamstercombat || "Hamster Combat",
      category: "frontend",
      img: img11,
      tech: ["React", "Tailwind Css", "JavaScript"],
      github: "https://github.com/",
    },
    {
      title: t.projects?.products || "Products",
      category: "landing",
      img: img12,
      tech: ["React", "JavaScript", "Footer"],
      github: "https://github.com/",
    },
     {
      title: t.projects?.footballproducts || "Football Products",
      category: "landing",
      img: img13,
      tech: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/",
    },
    {
      title: t.projects?.marsspace || "Mars Space",
      category: "landing",
      img: img14,
      tech: ["HTML", "Style Css", "Img"],
      github: "https://github.com/",
    },
     {
      title: t.projects?.trafalgar || "Trafalgar",
      category: "frontend",
      img: img15,
      tech: ["HTML", "Style Css", "Img"],
      github: "https://github.com/",
    },
  ];

  const filtered = projects.filter((p) => {
    const matchesFilter = filter === "all" || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-4 pb-24 text-white max-w-6xl mx-auto">

      {/* TITLE */}
      <h1 className="text-4xl text-purple-400 text-center mt-3 font-bold mb-3">
        {t.projects?.title || "Projects"}
      </h1>
      <hr className="border-purple-400 border-2 mx-auto w-16 sm:w-32 mb-6" />

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {filters.map((f) => (
          <button key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-xl cursor-pointer transition-all ${
              filter === f.key
                ? "bg-purple-500 shadow-[0_0_10px_#a855f7]"
                : "bg-[#1a1a1a] hover:bg-purple-500"
            }`}>
            {f.label}
          </button>
        ))}
      </div>

      {/* SEARCH INPUT */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder={t.projects?.search || "Search..."}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-xl bg-[#111] border border-purple-500
           w-full max-w-md outline-none focus:border-purple-500 transition"
        />
      </div>

      {/* PROJECT GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px #a855f7",
            }}
            className="bg-[#111] rounded-2xl overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 bg-black/70 p-2 rounded-xl 
                 opacity-0 group-hover:opacity-100 transition"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{p.title}</h2>
              <p className="text-purple-400 text-sm flex flex-wrap gap-1">
                {p.tech.map((tech, idx) => (
                  <span key={idx}>#{tech}</span>
                ))}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          😕 {t.projects?.notFound || "No projects found"}
        </p>
      )}
    </div>
  );
};

export default Projects;