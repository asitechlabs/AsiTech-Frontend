import { motion } from "framer-motion";
import { BarChart3, Cloud, Cpu, Globe, ShieldCheck, Zap, Truck, CreditCard, Lock, Package } from "lucide-react";

const features = [
  {
    Icon: Cpu,
    title: "AI & Automation",
    tag: "Intelligent Systems",
    desc: "Integrate large language models, computer vision, and predictive analytics into your core workflows — turning manual bottlenecks into autonomous, intelligent processes.",
  },
  {
    Icon: Globe,
    title: "Web Development",
    tag: "Full-Stack Engineering",
    desc: "Responsive, performant web applications built with React, Next.js, Node.js, and FastAPI. From MVPs to enterprise-scale platforms, we architect for reliability and speed.",
  },
  {
    Icon: ShieldCheck,
    title: "Security Engineering",
    tag: "Infrastructure & Compliance",
    desc: "Security is not an afterthought — it's built in from day one. We implement industry-standard practices covering authentication, encryption, and vulnerability management.",
  },
  {
    Icon: BarChart3,
    title: "Data & Analytics",
    tag: "Insight & Visualisation",
    desc: "Transform raw data into strategic advantage. We design end-to-end data pipelines, dashboards, and visualisation layers that surface actionable insights in real time.",
  },
  {
    Icon: Cloud,
    title: "Cloud Solutions",
    tag: "DevOps & Deployment",
    desc: "Architect, deploy, and scale your applications on modern cloud infrastructure. CI/CD pipelines, containerisation, and auto-scaling built for production workloads.",
  },
  {
    Icon: Zap,
    title: "Performance Optimisation",
    tag: "Speed & Reliability",
    desc: "Systematic auditing and refactoring to achieve sub-second load times and 99.9% uptime. Every millisecond reduced is a measurable improvement to your user experience.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const Features = () => (
  <section
    id="services"
    className="section-pad"
    style={{ background: "var(--bg)", position: "relative" }}
  >
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: "600px", marginBottom: "4rem" }}
      >

        <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
          Services Built for
          <br />
          Modern Businesses
        </h2>
        <p className="section-subtitle">
          We deliver cutting-edge solutions designed to help your organisation
          grow, scale, and innovate confidently — whatever stage you're at.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "1rem",
              padding: "1.875rem",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
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
            {/* Number watermark */}
            <span
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.5rem",
                fontSize: "0.6875rem",
                fontFamily: "var(--font-heading)",
                color: "var(--border)",
                userSelect: "none",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Icon */}
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
                transition: "background 0.2s ease",
              }}
              className="feature-icon"
            >
              <f.Icon size={20} />
            </div>

            {/* Tag */}
            <span
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-tertiary)",
                fontFamily: "var(--font-heading)",
              }}
            >
              {f.tag}
            </span>

            <h3
              style={{
                fontSize: "1.0625rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                margin: "0.5rem 0 0.875rem",
              }}
            >
              {f.title}
            </h3>

            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              {f.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Advanced System Capabilities */}
      <div style={{ marginTop: "8rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: "600px", marginBottom: "4rem" }}
        >
          <span className="label-chip" style={{ marginBottom: "1.25rem" }}>
            Advanced Systems
          </span>
          <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
            Advanced System
            <br />
            Capabilities
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              title: "Logistics Optimization",
              desc: "Real-time shipping cost calculation, carrier comparison, and intelligent logistics optimization based on cost and performance.",
              Icon: Truck,
            },
            {
              title: "Payment Processing",
              desc: "Multi-gateway payment processing with secure transaction handling and robust financial integration.",
              Icon: CreditCard,
            },
            {
              title: "Access Control",
              desc: "Granular role-based access control (RBAC) for secure, tiered system management and data protection.",
              Icon: Lock,
            },
            {
              title: "Inventory Management",
              desc: "Multi-warehouse inventory tracking and management systems designed for complex supply chains.",
              Icon: Package,
            },
            {
              title: "Business Analytics",
              desc: "Integrated analytics and reporting dashboards for data-driven business insights and forecasting.",
              Icon: BarChart3,
            },
            {
              title: "System Security",
              desc: "Enterprise-grade security protocols ensuring data integrity and protection against modern threats.",
              Icon: ShieldCheck,
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glass"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
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
                <item.Icon size={24} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Features;
