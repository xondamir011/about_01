import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  const [active, setActive] = useState("home");
 
  const renderPage = () => {
    switch (active) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <LanguageProvider>
    <div className="min-h-screen bg-[size:40px_40px] 
    bg-[linear-gradient(#222_1px,transparent_1px),linear-gradient(90deg,#222_1px,transparent_1px)]">

     <Navbar active={active} setActive={setActive} />

      <AnimatePresence mode="wait">
         <motion.div
          key={active} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen pt-20 pb-20">
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
 </LanguageProvider>
  );
};

export default App;