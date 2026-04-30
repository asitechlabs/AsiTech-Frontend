import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import ToolsSection from "./components/ToolsSection";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="app-root">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="tools">
        <ToolsSection />
      </section>

      <Stats />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
