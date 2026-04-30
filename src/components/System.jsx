import { motion } from "framer-motion";
import {
    ArrowRight,
    BarChart2,
    CheckCircle,
    Code2,
    Database,
    GitBranch,
    Layers,
    Lock,
    Server,
} from "lucide-react";
import { useState } from "react";

/* ─── Data ─────────────────────────────────────────────────── */
const capabilities = [
  {
    Icon: Layers,
    title: "Monolithic to Microservices",
    desc: "We architect systems that begin lean and scale horizontally — decomposing services as your traffic and team grow, with zero downtime migrations.",
  },
  {
    Icon: Server,
    title: "API-First Architecture",
    desc: "RESTful and GraphQL APIs designed for extensibility. Every system we build exposes clean, versioned interfaces that integrate with any frontend or third-party service.",
  },
  {
    Icon: Database,
    title: "Polyglot Persistence",
    desc: "Choosing the right database for each domain: MongoDB for flexible documents, PostgreSQL for relational integrity, Redis for caching — all working in harmony.",
  },
  {
    Icon: Lock,
    title: "Auth & Access Control",
    desc: "JWT, OAuth 2.0, and role-based access control implemented at the infrastructure level — not bolted on after the fact. Secure by design.",
  },
  {
    Icon: GitBranch,
    title: "CI/CD Pipelines",
    desc: "Automated testing, linting, containerisation, and deployment workflows that reduce human error and ship features to production faster and more reliably.",
  },
  {
    Icon: BarChart2,
    title: "Observability & Monitoring",
    desc: "Structured logging, distributed tracing, and real-time alerts built into every layer — so your team knows about issues before your users do.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Scoping",
    desc: "We begin with a focused discovery session to understand your goals, constraints, existing infrastructure, and the exact problem we're solving — before writing a line of code.",
  },
  {
    num: "02",
    title: "Architecture Design",
    desc: "Our engineers produce detailed system diagrams, data models, and API contracts. You get full visibility into the technical blueprint before any implementation begins.",
  },
  {
    num: "03",
    title: "Iterative Development",
    desc: "Two-week sprints with regular demos and genuine feedback loops. We build incrementally so you can validate direction early and course-correct without costly rework.",
  },
  {
    num: "04",
    title: "Testing & QA",
    desc: "Unit, integration, and end-to-end tests are non-negotiable. Every feature ships with test coverage; security audits and performance benchmarks happen before any release.",
  },
  {
    num: "05",
    title: "Deployment & Handoff",
    desc: "We handle production deployment, environment configuration, and monitoring setup. You receive complete documentation so your team can confidently maintain and extend the system.",
  },
  {
    num: "06",
    title: "Ongoing Support",
    desc: "Post-launch retainer options, critical bug SLAs, and architecture consultation as your product evolves. We're a long-term partner, not a one-off vendor.",
  },
];

const integrations = [
  "Stripe / Payment Gateways",
  "SendGrid / Email Systems",
  "AWS / GCP / Azure",
  "Twilio / SMS & Voice",
  "Firebase / Supabase",
  "OpenAI / Anthropic APIs",
  "Webhook Ecosystems",
  "Custom ERP Connectors",
];

/* ─── Component ─────────────────────────────────────────────── */
const Systems = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        paddingTop: "80px",
      }}
    >
      {/* ── Hero ── */}
      <section
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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: "680px" }}
          >
            <span
              className="label-chip"
              style={{ marginBottom: "1.25rem", display: "inline-flex" }}
            >
              System Capabilities
            </span>
            <h1
              className="section-title"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                marginBottom: "1.25rem",
              }}
            >
              Enterprise-Grade Systems,
              <br />
              Built to Last
            </h1>
            <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
              Every product we build is engineered with the fundamentals in
              place — clean architecture, scalable infrastructure, and systems
              that your team can own, extend, and trust in production.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <button
                className="btn-primary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Discuss Your System <ArrowRight size={15} />
              </button>
              <button
                className="btn-ghost"
                onClick={() =>
                  document
                    .getElementById("capabilities")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Capabilities
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Capabilities Grid ── */}
      <section
        id="capabilities"
        className="section-pad"
        style={{ background: "var(--bg)" }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: "3.5rem" }}
          >
            <span
              className="label-chip"
              style={{ marginBottom: "1rem", display: "inline-flex" }}
            >
              Technical Capabilities
            </span>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              What We Engineer Into Every System
            </h2>
            <p className="section-subtitle">
              From architecture to observability, these are the engineering
              practices and capabilities we apply consistently across every
              project we take on.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "1rem",
                  padding: "1.875rem",
                  cursor: "default",
                  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
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
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "var(--brand-dim)",
                    border: "1px solid var(--brand-mid)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--brand)",
                    marginBottom: "1.375rem",
                  }}
                >
                  <cap.Icon size={20} />
                </div>
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {cap.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section
        className="section-pad"
        style={{ background: "var(--bg-subtle)" }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: "3.5rem" }}
          >
            <span
              className="label-chip"
              style={{ marginBottom: "1rem", display: "inline-flex" }}
            >
              How We Work
            </span>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              Our Development Process
            </h2>
            <p className="section-subtitle">
              A structured, transparent process designed to keep you informed
              and confident at every stage — from the first conversation to
              production launch and beyond.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setActiveStep(i)}
                style={{
                  background: "var(--bg-card)",
                  border: `1px solid ${activeStep === i ? "var(--brand)" : "var(--border)"}`,
                  borderRadius: "1rem",
                  padding: "1.75rem",
                  cursor: "pointer",
                  boxShadow: activeStep === i ? "var(--shadow-md)" : "none",
                  transition: "all 0.25s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color:
                      activeStep === i
                        ? "var(--brand)"
                        : "var(--text-tertiary)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {step.num}
                </span>
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                    margin: "0.625rem 0 0.75rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="section-pad" style={{ background: "var(--bg)" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: "3rem" }}
          >
            <span
              className="label-chip"
              style={{ marginBottom: "1rem", display: "inline-flex" }}
            >
              Third-Party Integrations
            </span>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              We Integrate with Your Ecosystem
            </h2>
            <p className="section-subtitle">
              Whether it's payment systems, cloud providers, communication
              tools, or AI APIs — we've built production integrations with the
              services that matter.
            </p>
          </motion.div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {integrations.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.625rem 1rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  transition: "border-color 0.2s ease, color 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand)";
                  e.currentTarget.style.color = "var(--brand)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                <CheckCircle size={13} style={{ color: "var(--brand)" }} />
                {item}
              </motion.span>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              marginTop: "4rem",
              padding: "2.5rem",
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  marginBottom: "0.5rem",
                }}
              >
                <Code2 size={18} style={{ color: "var(--brand)" }} />
                <span
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Have a system in mind?
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                Share your architecture requirements and we'll map out a clear
                path forward — no commitment required.
              </p>
            </div>
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              Talk to an Engineer <ArrowRight size={15} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Systems;
