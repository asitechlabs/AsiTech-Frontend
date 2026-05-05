import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const SERVICES = [
  "Web Applications",
  "AI Integration",
  "Cloud Infrastructure",
  "Full-Stack Systems",
];

const Hero = ({ theme }) => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const svcTimer = setInterval(() => {
      setServiceIndex((p) => (p + 1) % SERVICES.length);
    }, 2800);
    return () => {
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
        height: "100vh", // Perfect full screen
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >

      {/* ── Gradient overlay (untouched) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            theme === "dark"
              ? "linear-gradient(to bottom, rgba(5,10,20,0.7) 0%, rgba(5,10,20,0.4) 50%, rgba(5,10,20,0.85) 100%)"
              : "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",
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
              fontSize: "0.625rem", // Slightly smaller
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
            fontSize: "clamp(2rem, 5vw, 3.75rem)", // Reduced from 2.5-4.5rem
            fontWeight: 500,
            color: theme === "dark" ? "#f1f5f9" : "#0f172a",
            lineHeight: 1.15, // Slightly more space
            letterSpacing: "-0.04em",
            margin: "1rem 0 0", // Reduced from 1.25rem
            fontFamily: "var(--font-heading)",
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
              fontWeight: 500,
            }}
          >
            <br />
            ASI Tech
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
            fontSize: "1rem",
            lineHeight: 1.6,
            color: theme === "dark" ? "#94a3b8" : "#475569",
            maxWidth: "600px",
            margin: "1rem auto 1.75rem",
            textShadow:
              theme === "dark"
                ? "0 2px 10px rgba(0,0,0,0.7)"
                : "0 2px 8px rgba(255,255,255,0.9)",
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
            marginTop: "1.75rem", // Reduced from 2.25rem
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
              fontSize: "0.875rem",
              padding: "0.75rem 1.625rem",
              borderRadius: "0.625rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(37,99,235,0.45)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Explore Services <ArrowRight size={16} />
          </motion.button>

          {/* Secondary CTA — glass button */}
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/contact")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background:
                theme === "dark"
                  ? "rgba(17,24,39,0.52)"
                  : "rgba(255,255,255,0.55)",
              color: theme === "dark" ? "#f1f5f9" : "#0f172a",
              fontWeight: 600,
              fontSize: "0.875rem",
              padding: "0.75rem 1.625rem",
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
              fontFamily: "var(--font-heading)",
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
            marginTop: "2.5rem", // Reduced from 3.5rem
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
              background: `linear-gradient(90deg, transparent, ${theme === "dark"
                ? "rgba(255,255,255,0.06)"
                : "rgba(255,255,255,0.65)"
                } 40%, ${theme === "dark"
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
                  fontSize: "1.25rem", // Reduced from 1.375rem
                  fontWeight: 100,
                  color: theme === "dark" ? "#f1f5f9" : "#0f172a",
                  letterSpacing: "-0.03em",
                  fontFamily: "var(--font-heading)",
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
      {/* <div
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
      </div> */}
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