import { motion } from "framer-motion";
import { Eye, Heart, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    Icon: Target,
    accent: "#2563eb",
    label: "Our Mission",
    title: "Delivering Outcomes,\nNot Just Software",
    desc: "We engineer robust, scalable, and secure technology infrastructure for businesses across industries — built to modern standards, designed for long-term growth.",
  },
  {
    Icon: Eye,
    accent: "#0ea5e9",
    label: "Our Vision",
    title: "Defining the Standard\nfor AI-Driven Development",
    desc: "To become the region's most trusted technology partner — setting the benchmark for intelligent automation, user-centric design, and enterprise software excellence.",
  },
  {
    Icon: Heart,
    accent: "#6366f1",
    label: "Our Values",
    title: "Transparency, Quality,\nand Client Success",
    desc: "We operate with integrity at every level — clear communication, clean architecture, and an unwavering commitment to delivering work we're proud to stand behind.",
  },
];

const About = () => {
  const navigate = useNavigate();
  return (
    <section
      id="about"
      className="section-pad mesh-bg"
      style={{ background: "var(--bg-subtle)", position: "relative" }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: "640px", marginBottom: "4rem" }}
        >
          <span
            className="label-chip"
            style={{ marginBottom: "1.25rem", display: "inline-flex" }}
          >
            About AsiTech
          </span>
          <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
            Bridging Complex Problems
            <br />
            with Precise Digital Solutions
          </h2>
          <p className="section-subtitle">
            AsiTech is a software and technology firm based in Lalitpur, Nepal. We
            specialise in full-stack web development, AI integration, and
            enterprise system design — helping organisations at every stage
            accelerate their digital transformation with clarity and confidence.
          </p>
        </motion.div>
  
        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
      
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "2rem",
                  right: "2rem",
                  height: "2px",
                  background: card.accent,
                  borderRadius: "0 0 2px 2px",
                  opacity: 0.6,
                }}
              />
  
              {/* Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  background: `${card.accent}18`,
                  border: `1px solid ${card.accent}30`,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: card.accent,
                }}
              >
                <card.Icon size={20} />
              </div>
  
              {/* Label */}
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: card.accent,
                  fontFamily: "var(--font-heading)",
                }}
              >
                {card.label}
              </span>
  
              {/* Title */}
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  lineHeight: 1.35,
                  letterSpacing: "-0.02em",
                  margin: "0.625rem 0 0.875rem",
                  whiteSpace: "pre-line",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {card.title}
              </h3>
  
              {/* Desc */}
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
  
        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            marginTop: "4rem",
            padding: "2rem 2.5rem",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "1.0625rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "0.25rem",
                fontFamily: "var(--font-heading)",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to build something remarkable?
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              From initial concept to production deployment — we handle the full
              journey.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/contact")}
            className="btn-primary"
            style={{ whiteSpace: "nowrap", flexShrink: 0 }}
          >
            Start a Conversation
          </motion.button>
        </motion.div>
  
        {/* How We Work */}
        <div
          style={{
            marginTop: "6rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-chip" style={{ marginBottom: "1.25rem" }}>
              Our Process
            </span>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              How We Work
            </h2>
            <p className="section-subtitle" style={{ fontSize: "1rem" }}>
              Our development process is built around clarity, scalability, and
              long-term maintainability. We start by understanding business
              requirements, followed by structured system design and architecture
              planning. Development is carried out using modular principles to
              ensure flexibility and future scalability. Each system is tested,
              optimized, and deployed with performance and reliability in mind.
            </p>
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              padding: "2.5rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "1.5rem",
              position: "relative",
            }}
          >
            <span className="label-chip" style={{ marginBottom: "1.25rem" }}>
              Methodology
            </span>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "1rem",
                fontFamily: "var(--font-heading)",
              }}
            >
              Our Technical Approach
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              We focus on building systems that are not only functional but also
              scalable and maintainable. Our approach emphasizes clean
              architecture, structured codebases, and efficient database design.
              We ensure that every system we build is ready to handle growth,
              increased users, and complex operations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
