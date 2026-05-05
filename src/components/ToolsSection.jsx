import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Settings, Link as LinkIcon, Printer, Package, Store, TrendingUp } from "lucide-react";
import { toolUsed } from "../data/Tool";

const categories = [
  "All",
  ...Array.from(new Set(toolUsed.map((t) => t.category))),
];

const ToolsSection = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? toolUsed : toolUsed.filter((t) => t.category === active);

  return (
    <section
      id="tools"
      className="section-pad"
      style={{ background: "var(--bg-subtle)" }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <span
            className="label-chip"
            style={{ marginBottom: "1.25rem", display: "inline-flex" }}
          >
            Technology Stack
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <h2
                className="section-title"
                style={{ marginBottom: "0.875rem" }}
              >
                Tools We Engineer With
              </h2>
              <p className="section-subtitle">
                A modern, production-grade tech stack powering scalable
                applications, intelligent systems, and seamless user
                experiences.
              </p>
            </div>

            {/* Category filter */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    padding: "0.375rem 0.875rem",
                    borderRadius: "999px",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    border: "1px solid",
                    cursor: "pointer",
                    fontFamily: "var(--font-heading)",
                    transition: "all 0.2s ease",
                    borderColor:
                      active === cat ? "var(--brand)" : "var(--border)",
                    background: active === cat ? "var(--brand)" : "transparent",
                    color: active === cat ? "#fff" : "var(--text-secondary)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1.125rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((tool) => (
              <motion.div
                key={tool.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -5 }}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.875rem",
                  padding: "1.5rem",
                  cursor: "default",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "1rem",
                    lineHeight: 1,
                  }}
                >
                  {tool.icon}
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.375rem",
                  }}
                >
                  {tool.name}
                </h3>

                {/* Category badge */}
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: "var(--brand)",
                    background: "var(--brand-dim)",
                    border: "1px solid var(--brand-mid)",
                    padding: "0.2rem 0.625rem",
                    borderRadius: "999px",
                    fontFamily: "var(--font-heading)",
                    marginBottom: "0.875rem",
                  }}
                >
                  {tool.category}
                </span>

                {/* Desc */}
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

   
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: "3rem",
            padding: "1.5rem 2rem",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "0.875rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "0.6875rem",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--brand)",
            }}
          >
            Stack expertise:
          </span>
          {[
            "MERN Stack",
            "Python + FastAPI",
            "Next.js Full-Stack",
            "NestJS + TypeScript",
            "AI / ML Pipelines",
          ].map((s) => (
            <span
              key={s}
              style={{
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                background: "var(--bg-card-alt)",
                border: "1px solid var(--border)",
                padding: "0.3rem 0.75rem",
                borderRadius: "6px",
              }}
            >
              {s}
            </span>
          ))}
        </motion.div>
        {/* System Tools & Engines */}
        <div style={{ marginTop: "6rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "3rem" }}
          >
            <span className="label-chip" style={{ marginBottom: "1.25rem" }}>
              Core Infrastructure
            </span>
            <h2 className="section-title" style={{ marginBottom: "0.875rem" }}>
              System Tools & Engines
            </h2>
            <p className="section-subtitle">
              Specialized backend engines and management systems powering complex
              business operations and automated workflows.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              {
                title: "Shipping Rate Calculation Engine",
                desc: "High-performance engine for real-time rate retrieval and logistics rule enforcement.",
                Icon: Settings,
              },
              {
                title: "Multi-Carrier Integration System",
                desc: "Unified interface for connecting with global and local shipping carriers seamlessly.",
                Icon: LinkIcon,
              },
              {
                title: "Label Generation & Printing Engine",
                desc: "Automated generation of shipping labels, invoices, and thermal print-ready documents.",
                Icon: Printer,
              },
              {
                title: "Order & Package Management",
                desc: "Robust system for tracking order lifecycles from placement to final delivery.",
                Icon: Package,
              },
              {
                title: "Vendor & Marketplace Tools",
                desc: "Management dashboards for multi-vendor onboarding, product sync, and payouts.",
                Icon: Store,
              },
              {
                title: "Analytics & Reporting Dashboard",
                desc: "Real-time visibility into system performance, business metrics, and operational health.",
                Icon: TrendingUp,
              },
            ].map((tool, i) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-glass"
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "var(--brand-dim)",
                    border: "1px solid var(--brand-mid)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--brand)",
                  }}
                >
                  <tool.Icon size={24} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "0.5rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {tool.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                      margin: 0,
                    }}
                  >
                    {tool.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
