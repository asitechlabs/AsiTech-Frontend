import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Pages
import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import ToolsPage from "./pages/ToolsPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";





import { BackgroundGradientAnimation } from "./components/BackgroundGradientAnimation";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div
      className="app-root"
      style={{
        background: pathname === "/" ? "transparent" : "var(--bg)",
        transition: "background 0.3s ease",
      }}
    >
      {/* ── Global Fixed Background (Home only) ── */}
      {pathname === "/" && (
        <BackgroundGradientAnimation
          gradientBackgroundStart={theme === "dark" ? "rgb(8, 12, 20)" : "rgb(255, 255, 255)"}
          gradientBackgroundEnd={theme === "dark" ? "rgb(5, 10, 20)" : "rgb(240, 244, 255)"}
          firstColor={theme === "dark" ? "37, 99, 235" : "37, 99, 235"}
          secondColor={theme === "dark" ? "108, 0, 162" : "14, 165, 233"}
          thirdColor={theme === "dark" ? "0, 17, 82" : "56, 189, 248"}
          fourthColor={theme === "dark" ? "14, 165, 233" : "186, 230, 253"}
          fifthColor={theme === "dark" ? "8, 12, 20" : "241, 245, 249"}
          pointerColor={theme === "dark" ? "140, 100, 255" : "37, 99, 235"}
        />
      )}

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;

