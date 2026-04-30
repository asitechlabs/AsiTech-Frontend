import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Contact2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d220.841674042465!2d85.30071020436857!3d27.671964377869376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42a69446721c7583%3A0xb6e603b7d680cd4e!2sAsi%20Tech!5e0!3m2!1sen!2snp!4v1777544297101!5m2!1sen!2snp";

const contactDetails = [
  {
    Icon: Mail,
    label: "Email",
    value: "asi.research@gmail.com",
    href: "mailto:asi.research@gmail.com",
  },
  {
    Icon: Phone,
    label: "Contact",
    value: "+977 9768552107",
  },
  {
    Icon: MapPin,
    label: "Address",
    value: "Bagdol, Lalitpur, Nepal",
    href: "https://www.google.com/maps?q=Bagdol+Lalitpur+Nepal",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_v46keqo",
        "template_eyf54tc",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "AtoLUlc898Wti45To",
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => setStatus("error"))
      .finally(() => setLoading(false));
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    background: "var(--bg-subtle)",
    border: "1px solid var(--border)",
    borderRadius: "0.625rem",
    fontSize: "0.9375rem",
    color: "var(--text-primary)",
    fontFamily: "var(--font-sans)",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    boxSizing: "border-box",
  };

  return (
    <section
      id="contact"
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
          style={{ marginBottom: "3.5rem" }}
        >
          <span
            className="label-chip"
            style={{ marginBottom: "1.25rem", display: "inline-flex" }}
          >
            Contact Us
          </span>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Start Your Project Journey
          </h2>
          <p className="section-subtitle">
            Share your idea, requirements, or collaboration request — and we'll
            get back to you with a clear, no-obligation proposal within 24
            hours.
          </p>
        </motion.div>

        {/* Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* LEFT: contact info + map */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "1.75rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Get in Touch Directly
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.125rem",
                }}
              >
                {contactDetails.map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "Address" ? "_blank" : undefined}
                    rel={label === "Address" ? "noreferrer" : undefined}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.875rem",
                      textDecoration: "none",
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--brand)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    <span
                      style={{
                        width: "36px",
                        height: "36px",
                        background: "var(--brand-dim)",
                        border: "1px solid var(--brand-mid)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--brand)",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} />
                    </span>
                    <span>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-tertiary)",
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {label}
                      </div>
                      <div style={{ fontWeight: 500 }}>{value}</div>
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid var(--border)",
                height: "240px",
              }}
            >
              <iframe
                title="AsiTech Location"
                src={mapSrc}
                style={{ width: "100%", height: "100%", border: "none" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "1rem",
              padding: "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.375rem",
                letterSpacing: "-0.02em",
              }}
            >
              Send a Message
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                marginBottom: "1.75rem",
              }}
            >
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {[
                { name: "name", type: "text", placeholder: "Your full name" },
                { name: "email", type: "email", placeholder: "your@email.com" },
                {
                  name: "phone",
                  type: "tel",
                  placeholder: "+977 1234567890",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      marginBottom: "0.375rem",
                      textTransform: "capitalize",
                    }}
                  >
                    {field.name}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.name !== "phone"} // Phone is optional
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--brand)";
                      e.target.style.boxShadow = "0 0 0 3px var(--brand-dim)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginBottom: "0.375rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--brand)";
                    e.target.style.boxShadow = "0 0 0 3px var(--brand-dim)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Status */}
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "0.625rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    background:
                      status === "success"
                        ? "rgba(34,197,94,0.1)"
                        : "rgba(239,68,68,0.1)",
                    border: `1px solid ${status === "success" ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
                    color: status === "success" ? "#16a34a" : "#dc2626",
                  }}
                >
                  {status === "success"
                    ? "✓ Message sent successfully. We'll be in touch shortly."
                    : "✕ Something went wrong. Please try again or email us directly."}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background: loading ? "var(--text-tertiary)" : "var(--brand)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  padding: "0.875rem 1.5rem",
                  borderRadius: "0.625rem",
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontFamily: "var(--font-sans)",
                  boxShadow: loading
                    ? "none"
                    : "0 4px 14px rgba(37,99,235,0.3)",
                  transition: "background 0.2s ease",
                }}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
