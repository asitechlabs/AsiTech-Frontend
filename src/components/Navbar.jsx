import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about","features", "tools", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;

      setScrolled(scrollTop > 20);
      setScrollProgress((scrollTop / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Scroll Spy Logic
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Detect when section is roughly in the top part of the viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-[99999]"
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-[99998] transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md py-2"
            : "bg-white/60 backdrop-blur-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-2"
            >
              <img
                src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/652354329_122119029831182352_7674516002346519096_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=l_y4Yl2-hzsQ7kNvwH7M6il&_nc_oc=AdpgkyHOMY24RMltKkwgz3_QpECSLshAT1SniX9Yp2gL3JIwzf-TS91mhHOggwVwews&_nc_zt=23&_nc_ht=scontent.fjkr2-1.fna&_nc_gid=UpvDZ1FLqfkrxeH8yoHEGg&_nc_ss=7b2a8&oh=00_Af3IvMg4D8fkPmlxZh5-s0sJhER7M3vjQ46t-ikMqeM_iQ&oe=69F8AB0F"
                className="h-9 sm:h-10 md:h-12"
                alt="logo"
              />
              <span className="text-lg sm:text-xl font-bold">
                ASI TECH
              </span>
            </motion.button>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-8 text-sm font-medium ">
              {sections.slice(0, 5).map((sec) => (
                <button
                  key={sec}
                  onClick={() => handleNavClick(sec)}
                  className={`relative text-gray-700 hover:text-blue-600 transition-colors duration-300 ${
                    activeSection === sec ? "text-blue-600" : ""
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  {activeSection === sec && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </button>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick("contact")}
                className={`px-4 py-2 rounded-lg shadow-md transition-colors duration-300 ${
                  activeSection === "contact"
                    ? "bg-blue-700 text-white ring-2 ring-blue-300"
                    : "bg-blue-600 text-white"
                }`}
              >
                Contact
              </motion.button>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl z-100000"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full bg-white shadow-xl md:hidden z-[99997] overflow-y-auto max-h-[calc(100vh-64px)]"
          >
            <div className="flex flex-col p-6 space-y-4">
              {sections.map((sec) => (
                <motion.button
                  key={sec}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  onClick={() => handleNavClick(sec)}
                  className={`text-left text-lg py-2 border-b border-gray-100 transition-colors ${
                    activeSection === sec ? "text-blue-600 font-bold" : "text-gray-700"
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;