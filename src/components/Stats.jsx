import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    desc: "Across startups and enterprises",
  },
  {
    value: 15,
    suffix: "+",
    label: "Clients Served",
    desc: "From Nepal and globally",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years of Operation",
    desc: "Continuous service excellence",
  },
  {
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    desc: "Based on project outcomes",
  },
];

const useCounter = (target, isInView) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return count;
};

const StatCard = ({ value, suffix, label, desc, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      style={{
        textAlign: "center",
        padding: "2.5rem 1.5rem",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--brand), transparent)",
        }}
      />

      <div
        style={{
          fontSize: "clamp(2.25rem, 4vw, 3rem)",
          fontWeight: 800,
          color: "var(--brand)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          fontFamily: "var(--font-sans)",
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        style={{
          fontSize: "0.9375rem",
          fontWeight: 600,
          color: "var(--text-primary)",
          margin: "0.625rem 0 0.25rem",
          letterSpacing: "-0.01em",
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)" }}>
        {desc}
      </div>
    </motion.div>
  );
};

const Stats = () => (
  <section style={{ background: "var(--bg)", padding: "5rem 1.5rem" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "3.5rem" }}
      >
        <span
          className="label-chip"
          style={{ marginBottom: "1rem", display: "inline-flex" }}
        >
          By the Numbers
        </span>
        <h2
          className="section-title"
          style={{ maxWidth: "480px", margin: "0 auto" }}
        >
          Results That Speak for Themselves
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
