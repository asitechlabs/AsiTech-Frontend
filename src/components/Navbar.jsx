import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const sections = ["home", "about", "features", "tools", "contact"];

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.slice(1) || "home";
    if (sections.includes(path)) {
      setActiveSection(path);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 30);
      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (id === "home") {
      navigate("/");
    } else {
      navigate(`/${id}`);
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] z-[99999]"
        style={{ background: "var(--brand)", width: `${scrollProgress}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 99998,
          /* ── Glassmorphism surface when scrolled ── */
          background: scrolled ? "var(--glass-bg)" : "transparent",
          backdropFilter: scrolled ? "var(--glass-blur)" : "none",
          WebkitBackdropFilter: scrolled ? "var(--glass-blur)" : "none",
          boxShadow: scrolled
            ? "var(--glass-shadow), var(--glass-inset)"
            : "none",
          borderBottom: scrolled
            ? "1px solid var(--glass-border)"
            : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "72px",
            }}
          >
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick("home")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <img
                src="/logo.png"
                alt="AsiTech"
                style={{
                  height: "36px",
                  width: "36px",
                  borderRadius: "8px",
                  objectFit: "cover",
                  background: theme === "dark" ? "white" : "transparent",
                  transform: theme === "light" ? "translateY(-5px)" : "none",
                }}
              />
              <span

                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-heading)",
                  transition: "color 0.3s ease",
                }}
              >
                ASI{" "}<span style={{ color: "var(--brand)" }}>{" "}TECH</span>
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
              className="hidden-mobile"
            >
              {sections.map((sec) => (
                <button
                  key={sec}
                  onClick={() => handleNavClick(sec)}
                  style={{
                    position: "relative",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.5rem 0.875rem",
                    fontSize: "0.875rem",
                    fontWeight: activeSection === sec ? 600 : 400,
                    color:
                      activeSection === sec
                        ? "var(--brand)"
                        : "var(--text-secondary)",
                    fontFamily: "var(--font-heading)",
                    borderRadius: "6px",
                    transition: "color 0.2s ease",
                  }}
                  className="nav-btn"
                  onMouseEnter={(e) => {
                    if (activeSection !== sec)
                      e.currentTarget.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== sec)
                      e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              ))}

              <div
                style={{
                  width: "1px",
                  height: "20px",
                  background: "var(--border)",
                  margin: "0 0.5rem",
                }}
              />

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  /* ── Glass surface on the icon button ── */
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  backdropFilter: "var(--glass-blur)",
                  WebkitBackdropFilter: "var(--glass-blur)",
                  borderRadius: "8px",
                  cursor: "pointer",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                }}
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavClick("contact")}
                className="btn-primary"
                style={{
                  marginLeft: "0.5rem",
                  padding: "0.5rem 1.25rem",
                  fontSize: "0.875rem",
                }}
              >
                Get in Touch
              </motion.button>
            </div>

            {/* Mobile controls */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}
              className="mobile-only"
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  /* ── Glass surface on mobile theme toggle ── */
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  backdropFilter: "var(--glass-blur)",
                  WebkitBackdropFilter: "var(--glass-blur)",
                  borderRadius: "8px",
                  cursor: "pointer",
                  color: "var(--text-secondary)",
                }}
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  /* ── Glass surface on mobile hamburger ── */
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  backdropFilter: "var(--glass-blur)",
                  WebkitBackdropFilter: "var(--glass-blur)",
                  borderRadius: "8px",
                  cursor: "pointer",
                  color: "var(--text-primary)",
                }}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu — full glass panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "68px",
              left: 0,
              right: 0,
              /* ── Glassmorphism mobile drawer ── */
              background: "var(--glass-bg)",
              backdropFilter: "var(--glass-blur)",
              WebkitBackdropFilter: "var(--glass-blur)",
              borderBottom: "1px solid var(--glass-border)",
              boxShadow: "var(--glass-shadow)",
              zIndex: 99997,
              padding: "1rem 1.5rem 1.5rem",
            }}
            className="mobile-only"
          >
            {sections.map((sec, i) => (
              <motion.button
                key={sec}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNavClick(sec)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "0.875rem 0",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid var(--border-subtle)",
                  fontSize: "0.9375rem",
                  fontWeight: activeSection === sec ? 600 : 400,
                  color:
                    activeSection === sec
                      ? "var(--brand)"
                      : "var(--text-secondary)",
                  fontFamily: "var(--font-heading)",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                }}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </motion.button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="btn-primary"
              style={{
                marginTop: "1rem",
                width: "100%",
                justifyContent: "center",
              }}
            >
              Get in Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) { .mobile-only { display: none !important; } }
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </>
  );
};

export default Navbar;