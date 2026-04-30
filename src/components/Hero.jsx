import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import bg1 from "../assets/hero/1.jpg";
import bg2 from "../assets/hero/2.jpg";
import bg3 from "../assets/hero/3.jpg";
import bg4 from "../assets/hero/4.jpg";

const images = [bg1, bg2, bg3, bg4];

const SERVICES = [
  "Web Applications",
  "AI Integration",
  "Cloud Infrastructure",
  "Full-Stack Systems",
];

const Hero = ({ theme }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const imgTimer = setInterval(() => {
      setCurrentImage((p) => (p + 1) % images.length);
    }, 5000);
    const svcTimer = setInterval(() => {
      setServiceIndex((p) => (p + 1) % SERVICES.length);
    }, 2800);
    return () => {
      clearInterval(imgTimer);
      clearInterval(svcTimer);
    };
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* ── Animated background slideshow (untouched) ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </AnimatePresence>
      </div>

      {/* ── Gradient overlay (untouched) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            theme === "dark"
              ? "linear-gradient(to bottom, rgba(5,10,20,0.85) 0%, rgba(5,10,20,0.6) 50%, rgba(5,10,20,0.95) 100%)"
              : "linear-gradient(to bottom, rgba(255,255,255,0.14) 0%, rgba(198,183,183,0.4) 50%, rgba(255,255,255,0.19) 100%)",
          transition: "background 0.3s ease",
        }}
      />

      {/* ── Mesh accent (untouched) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background:
            theme === "dark"
              ? "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(37,99,235,0.15) 0%, transparent 75%)"
              : "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(37,99,235,0.08) 0%, transparent 70%)",
          transition: "background 0.3s ease",
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
          paddingTop: "80px",
        }}
      >
        {/* Badge — glass pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: theme === "dark" ? "rgba(147,197,253,1)" : "var(--brand)",
              background:
                theme === "dark"
                  ? "rgba(17,24,39,0.52)"
                  : "rgba(255,255,255,0.55)",
              border:
                theme === "dark"
                  ? "1px solid rgba(255,255,255,0.09)"
                  : "1px solid rgba(255,255,255,0.75)",
              borderRadius: "999px",
              padding: "0.3rem 1rem",
              backdropFilter: "blur(18px) saturate(1.6)",
              WebkitBackdropFilter: "blur(18px) saturate(1.6)",
              boxShadow:
                theme === "dark"
                  ? "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)"
                  : "0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.8)",
              transition: "all 0.3s ease",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#60a5fa",
                animation: "pulse-dot 2s infinite",
              }}
            />
             Emerging Technology
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            color: theme === "dark" ? "#f1f5f9" : "#0f172a",
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            margin: "1.25rem 0 0",
            fontFamily: "var(--font-sans)",
            textShadow:
              theme === "dark"
                ? "0 2px 24px rgba(0,0,0,0.6)"
                : "0 2px 16px rgba(255,255,255,0.6)",
            transition: "color 0.3s ease",
          }}
        >
          Build Smarter with{" "}
          <span
            style={{
              color: theme === "dark" ? "#ffffff" : "#2563eb",
              fontWeight: 800,
            }}
          >
            <br />
            Asi Tech
          </span>
        </motion.h1>

        {/* Animated service label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ marginTop: "0.875rem", height: "2rem", overflow: "hidden" }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={serviceIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                fontWeight: 500,
                color:
                  theme === "dark" ? "rgba(147,197,253,0.9)" : "var(--brand)",
                letterSpacing: "-0.01em",
                transition: "color 0.3s ease",
              }}
            >
              {SERVICES[serviceIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontSize: "clamp(0.9375rem, 1.6vw, 1.0625rem)",
            lineHeight: 1.75,
            color: theme === "dark" ? "rgba(148,163,184,0.95)" : "#334155",
            maxWidth: "600px",
            margin: "1.25rem auto 0",
            textShadow:
              theme === "dark"
                ? "0 1px 8px rgba(0,0,0,0.5)"
                : "0 1px 6px rgba(255,255,255,0.7)",
            transition: "color 0.3s ease",
          }}
        >
          Empowering your digital future through innovative IT solutions, AI
          integration, and scalable web architectures — engineered for
          businesses that demand excellence.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            display: "flex",
            gap: "0.875rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "2.25rem",
          }}
        >
          {/* Primary CTA — solid brand */}
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("features")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--brand)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.9375rem",
              padding: "0.8125rem 1.875rem",
              borderRadius: "0.625rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(37,99,235,0.45)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Explore Services <ArrowRight size={16} />
          </motion.button>

          {/* Secondary CTA — glass button */}
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background:
                theme === "dark"
                  ? "rgba(17,24,39,0.52)"
                  : "rgba(255,255,255,0.55)",
              color: theme === "dark" ? "#f1f5f9" : "#0f172a",
              fontWeight: 500,
              fontSize: "0.9375rem",
              padding: "0.8125rem 1.875rem",
              borderRadius: "0.625rem",
              border:
                theme === "dark"
                  ? "1px solid rgba(255,255,255,0.09)"
                  : "1px solid rgba(255,255,255,0.75)",
              cursor: "pointer",
              backdropFilter: "blur(18px) saturate(1.6)",
              WebkitBackdropFilter: "blur(18px) saturate(1.6)",
              boxShadow:
                theme === "dark"
                  ? "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)"
                  : "0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.8)",
              fontFamily: "var(--font-sans)",
              transition: "all 0.3s ease",
            }}
          >
            Start a Project
          </motion.button>
        </motion.div>

        {/* Trust bar — glass card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0",
            marginTop: "3.5rem",
            flexWrap: "wrap",
            background:
              theme === "dark"
                ? "rgba(17,24,39,0.52)"
                : "rgba(255,255,255,0.55)",
            border:
              theme === "dark"
                ? "1px solid rgba(255,255,255,0.09)"
                : "1px solid rgba(255,255,255,0.75)",
            borderRadius: "1rem",
            backdropFilter: "blur(18px) saturate(1.6)",
            WebkitBackdropFilter: "blur(18px) saturate(1.6)",
            boxShadow:
              theme === "dark"
                ? "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)"
                : "0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.8)",
            padding: "0.75rem 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* top-edge highlight streak */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "10%",
              right: "10%",
              height: "1px",
              background: `linear-gradient(90deg, transparent, ${
                theme === "dark"
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(255,255,255,0.65)"
              } 40%, ${
                theme === "dark"
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(255,255,255,0.65)"
              } 60%, transparent)`,
              pointerEvents: "none",
            }}
          />

          {[
            { num: "5+", label: "Projects Delivered" },
            { num: "10+", label: "Clients Worldwide" },
            { num: "2+", label: "Years of Excellence" },
          ].map((stat, i, arr) => (
            <div
              key={stat.num}
              style={{
                textAlign: "center",
                padding: "0.5rem 2.25rem",
                borderRight:
                  i < arr.length - 1
                    ? theme === "dark"
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(0,0,0,0.08)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: theme === "dark" ? "#f1f5f9" : "#0f172a",
                  letterSpacing: "-0.03em",
                  transition: "color 0.3s ease",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color:
                    theme === "dark"
                      ? "rgba(148,163,184,0.85)"
                      : "var(--text-secondary)",
                  marginTop: "2px",
                  letterSpacing: "0.03em",
                  transition: "color 0.3s ease",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Slideshow dots ── */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: 0,
          right: 0,
          zIndex: 3,
          display: "flex",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            style={{
              height: "3px",
              width: i === currentImage ? "28px" : "12px",
              background:
                i === currentImage ? "#3b82f6" : "rgba(255,255,255,0.3)",
              borderRadius: "2px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        style={{
          position: "absolute",
          bottom: "4.5rem",
          right: "2rem",
          zIndex: 2,
          color: theme === "dark" ? "rgba(148,163,184,0.6)" : "rgba(15,23,42,0.4)",
          transition: "color 0.3s ease",
        }}
      >
        <ChevronDown size={20} />
      </motion.div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
};

export default Hero;