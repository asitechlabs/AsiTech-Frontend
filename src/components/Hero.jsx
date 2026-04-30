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

const Hero = () => {
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
      {/* Background slideshow */}
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

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(5,10,20,0.82) 0%, rgba(5,10,20,0.55) 50%, rgba(5,10,20,0.90) 100%)",
        }}
      />

      {/* Mesh accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
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
              color: "rgba(147,197,253,1)",
              background: "rgba(37,99,235,0.18)",
              border: "1px solid rgba(37,99,235,0.35)",
              borderRadius: "999px",
              padding: "0.3rem 1rem",
              backdropFilter: "blur(8px)",
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
            Nepal's Emerging Technology Partner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            margin: "1.25rem 0 0",
            fontFamily: "var(--font-sans)",
          }}
        >
          Build Smarter with{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AsiTech
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
                color: "rgba(147,197,253,0.9)",
                letterSpacing: "-0.01em",
              }}
            >
              {SERVICES[serviceIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontSize: "clamp(0.9375rem, 1.6vw, 1.0625rem)",
            lineHeight: 1.75,
            color: "rgba(203,213,225,0.85)",
            maxWidth: "600px",
            margin: "1.25rem auto 0",
          }}
        >
          Empowering your digital future through innovative IT solutions, AI
          integration, and scalable web architectures — engineered for
          businesses that demand excellence.
        </motion.p>

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

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              fontWeight: 500,
              fontSize: "0.9375rem",
              padding: "0.8125rem 1.875rem",
              borderRadius: "0.625rem",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Start a Project
          </motion.button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "3.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "50+", label: "Projects Delivered" },
            { num: "15+", label: "Clients Worldwide" },
            { num: "3+", label: "Years of Excellence" },
          ].map((stat) => (
            <div key={stat.num} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(148,163,184,0.8)",
                  marginTop: "2px",
                  letterSpacing: "0.03em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
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

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        style={{
          position: "absolute",
          bottom: "4.5rem",
          right: "2rem",
          zIndex: 3,
          color: "rgba(148,163,184,0.6)",
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
