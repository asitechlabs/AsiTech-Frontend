import React, { useState, useEffect } from "react";

const sections = ["home", "features", "tools", "about", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll progress + navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.55, rootMargin: "-80px 0px 0px 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  const navClass = (id) =>
    `relative cursor-pointer transition-all duration-300 ${
      activeSection === id
        ? "text-blue-600 font-semibold"
        : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 h-0.75 bg-blue-600 z-60 transition-all"
        style={{
          width: `${(window.scrollY /
            (document.body.scrollHeight - window.innerHeight)) * 100}%`
        }}
      />

      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-md"
            : "bg-white/40 backdrop-blur-md"
        } border-b border-gray-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">

            {/* Logo */}
            <button onClick={() => handleNavClick("home")} className="flex items-center gap-2">
              <img
                src="/src/assets/logo.png"
                alt="Logo"
                className="h-10 md:h-12 cursor-pointer hover:scale-105 transition"
              />
              <span className="text-2xl font-bold cursor-pointer text-gray-900">
                AsiTech
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center text-sm font-medium">

              {sections.slice(0, 4).map((sec) => (
                <button
                  key={sec}
                  onClick={() => handleNavClick(sec)}
                  className={navClass(sec)}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}

                  {/* active underline animation */}
                  {activeSection === sec && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 rounded-full animate-pulse" />
                  )}
                </button>
              ))}

              {/* CTA Button */}
              <button
                onClick={() => handleNavClick("contact")}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition hover:scale-105 active:scale-95"
              >
                Contact
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl text-gray-700"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (animated) */}
      <div
        className={`fixed top-16 left-0 w-full bg-white border-b shadow-lg md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 text-gray-700">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => handleNavClick(sec)}
              className="text-left hover:text-blue-600 transition"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;