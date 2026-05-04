import { ArrowUpRight } from "lucide-react";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const navLinks = ["Home", "About", "Features", "Tools", "Contact"];
const services = [
  "Web Development",
  "AI Integration",
  "Cloud Solutions",
  "Data Analytics",
  "Security Engineering",
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 1.5rem 0",
        }}
      >
        {/* Top CTA strip */}
        <div
          style={{
            background: "var(--brand)",
            borderRadius: "1rem",
            padding: "2.5rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            flexWrap: "wrap",
            marginBottom: "4rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "-40px",
              top: "-40px",
              width: "200px",
              height: "200px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "50%",
            }}
          />
          <div>
            <p
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "0.375rem",
                fontFamily: "var(--font-heading)",
                letterSpacing: "-0.02em",
              }}
            >
              Let's build something great together.
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(219,234,254,0.85)",
                margin: 0,
              }}
            >
              Modern solutions for complex problems — from concept to
              production.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#fff",
              color: "var(--brand)",
              fontWeight: 600,
              fontSize: "0.9rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.625rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Start a Project <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                textDecoration: "none",
                marginBottom: "1.25rem",
              }}
            >
              <img
                src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/652354329_122119029831182352_7674516002346519096_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=l_y4Yl2-hzsQ7kNvwH7M6il&_nc_oc=AdpgkyHOMY24RMltKkwgz3_QpECSLshAT1SniX9Yp2gL3JIwzf-TS91mhHOggwVwews&_nc_zt=23&_nc_ht=scontent.fjkr2-1.fna&_nc_gid=UpvDZ1FLqfkrxeH8yoHEGg&_nc_ss=7b2a8&oh=00_Af3IvMg4D8fkPmlxZh5-s0sJhER7M3vjQ46t-ikMqeM_iQ&oe=69F8AB0F"
                alt="AsiTech"
                style={{
                  height: "32px",
                  width: "32px",
                  borderRadius: "6px",
                  objectFit: "cover",
                }}
              />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-heading)",
                  letterSpacing: "-0.02em",
                }}
              >
                ASI<span style={{ color: "var(--brand)" }}>TECH</span>
              </span>
            </a>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
                maxWidth: "280px",
              }}
            >
              We build modern, scalable, and intelligent software solutions.
              Specialising in{" "}
              <span style={{ color: "var(--brand)", fontWeight: 500 }}>
                web development
              </span>
              ,{" "}
              <span style={{ color: "var(--brand)", fontWeight: 500 }}>
                AI integration
              </span>
              , and{" "}
              <span style={{ color: "var(--brand)", fontWeight: 500 }}>
                full-stack systems
              </span>{" "}
              that help businesses grow digitally.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { href: "https://www.linkedin.com/company/technology-asi/  ", Icon: FiLinkedin },

 
                {
                  href: "https://www.facebook.com/profile.php?id=61585470568856",
                  Icon: FiFacebook,
                },
                {
                  href: "https://www.instagram.com/asitech.official/",
                  Icon: FiInstagram,
                },
              ].map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "34px",
                    height: "34px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--bg-card-alt)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
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
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-heading)",
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(item.toLowerCase())
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--brand)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-heading)",
              }}
            >
              Services
            </h4>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {services.map((s) => (
                <li
                  key={s}
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-heading)",
              }}
            >
              Contact
            </h4>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {[
                {
                  Icon: FiMail,
                  label: "asi.research@gmail.com",
                  href: "mailto:asi.research@gmail.com",
                },
                {
                  Icon: FiPhone,
                  label: "+977 9768552107",
                  href: "tel:+9779768552107",
                },
                {
                  Icon: FiMapPin,
                  label: "Bagdol, Lalitpur, Nepal",
                  href: "https://www.google.com/maps?q=Bagdol+Lalitpur+Nepal",
                },
              ].map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--brand)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    <Icon
                      size={14}
                      style={{
                        marginTop: "2px",
                        flexShrink: 0,
                        color: "var(--brand)",
                      }}
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            padding: "1.5rem 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <span
            style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)" }}
          >
            © {year} AsiTech. All rights reserved.
          </span>
          {/* <span
            style={{
              fontSize: "0.8125rem",
              color: "var(--text-tertiary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Built with React · Tailwind · Framer Motion
          </span> */}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
