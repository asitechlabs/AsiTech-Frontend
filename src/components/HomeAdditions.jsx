import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Cpu,
  ShoppingCart,
  Truck,
  CreditCard,
  Users,
  Database,
  ArrowRight,
  Globe,
  ShieldCheck,
  Zap
} from "lucide-react";

const capabilities = [
  {
    Icon: Cpu,
    title: "Custom Software Development",
    desc: "Tailored to business workflows for maximum efficiency.",
  },
  {
    Icon: ShoppingCart,
    title: "Multi-vendor E-commerce",
    desc: "Marketplace platforms built for scale and security.",
  },
  {
    Icon: Truck,
    title: "Logistics & Shipping Systems",
    desc: "End-to-end management for complex operations.",
  },
  {
    Icon: CreditCard,
    title: "Payment & Financial Systems",
    desc: "Secure gateway integration and financial processing.",
  },
  {
    Icon: Users,
    title: "CRM & Process Automation",
    desc: "Tools to streamline customer and business processes.",
  },
  {
    Icon: Database,
    title: "Backend & API Architecture",
    desc: "Scalable infrastructure designed to handle growth.",
  },
];

const featuredServices = [
  {
    Icon: Cpu,
    title: "AI & Automation",
    desc: "Integrate LLMs and predictive analytics into your core workflows.",
  },
  {
    Icon: Globe,
    title: "Web Development",
    desc: "Responsive, performant web applications built for reliability.",
  },
  {
    Icon: ShieldCheck,
    title: "Security Engineering",
    desc: "Enterprise-grade security built in from day one.",
  },
];

const HomeAdditions = ({ theme }) => {
  return (
    <>
      {/* What We Build */}
      <section className="section-pad" style={{ background: "var(--bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <span className="label-chip" style={{ marginBottom: "1.25rem" }}>
              Our Focus
            </span>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              What We Build
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              We build scalable, high-performance digital platforms for modern businesses.
              Our systems are designed to handle complex operations including multi-vendor commerce,
              logistics management, payment processing, and customer relationship management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="section-pad" style={{ background: "var(--bg-subtle)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "4rem" }}
          >
            <span className="label-chip" style={{ marginBottom: "1.25rem" }}>
              Expertise
            </span>
            <h2 className="section-title">Our Capabilities</h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
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
                  <cap.Icon size={24} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are (About Preview) */}
      <section className="section-pad" style={{ background: "var(--bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="label-chip" style={{ marginBottom: "1.25rem" }}>
                Who We Are
              </span>
              <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                Bridging Complex Problems with Precise Solutions
              </h2>
              <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
                AsiTech is a technology firm based in Nepal, specializing in full-stack engineering,
                AI integration, and enterprise systems. We help organizations accelerate their digital transformation
                with clarity and confidence.
              </p>
              <Link
                to="/about"
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glass"
              style={{ padding: "2.5rem" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {[
                  { label: "Our Mission", value: "Delivering outcomes, not just software." },
                  { label: "Our Vision", value: "Setting the benchmark for enterprise excellence." },
                ].map((item) => (
                  <div key={item.label}>
                    <h4 style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "var(--brand)",
                      letterSpacing: "0.1em",
                      marginBottom: "0.5rem"
                    }}>
                      {item.label}
                    </h4>
                    <p style={{ fontSize: "1.125rem", color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services (Features Preview) */}
      <section className="section-pad" style={{ background: "var(--bg-subtle)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "2rem"
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="label-chip" style={{ marginBottom: "1.25rem" }}>
                What We Offer
              </span>
              <h2 className="section-title">Featured Services</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/features"
                className="btn-ghost"
                style={{ textDecoration: "none" }}
              >
                View All Services <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {featuredServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-glass"
                style={{ padding: "2rem" }}
              >
                <div style={{ color: "var(--brand)", marginBottom: "1.5rem" }}>
                  <service.Icon size={32} />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Technology (Tools Preview) */}
      <section className="section-pad" style={{ background: "var(--bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <span className="label-chip" style={{ marginBottom: "1.25rem" }}>
              Our Stack
            </span>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              Engineered with Modern Technology
            </h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              {[
                "MERN Stack",
                "Python + FastAPI",
                "Next.js Full-Stack",
                "AI / ML Pipelines",
              ].map((stack) => (
                <span
                  key={stack}
                  style={{
                    padding: "0.5rem 1.25rem",
                    background: "var(--bg-subtle)",
                    border: "1px solid var(--border)",
                    borderRadius: "999px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                  }}
                >
                  {stack}
                </span>
              ))}
            </div>
            <div style={{ marginTop: "3rem" }}>
              <Link
                to="/tools"
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                Explore Full Stack <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomeAdditions;

