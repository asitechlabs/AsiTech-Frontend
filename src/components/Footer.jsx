import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiFacebook, FiInstagram } from 'react-icons/fi';
import Logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="AsiTech Logo" className="h-12 w-12 object-contain" />
              <h3 className="text-2xl font-bold text-gray-900">AsiTech</h3>
            </a>

            <p className="text-sm text-gray-600 leading-relaxed">
              We build modern, scalable, and intelligent software solutions.
              Specializing in <span className="text-blue-600 font-medium">web development</span>,
              <span className="text-blue-600 font-medium"> AI integration</span>, and
              <span className="text-blue-600 font-medium"> full-stack systems</span> that help businesses grow digitally.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5 text-gray-500">
               <a href="#" className="hover:text-blue-600 transition">
                <FiLinkedin size={18} />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <FiInstagram size={18} />
              </a>
             
              
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {['Home', 'About', 'Features', 'Tools', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-600 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Contact</h4>

            <ul className="space-y-3 text-sm text-gray-600">

              <li className="flex items-center gap-2">
                <FiMail className="text-blue-600" />
                <a href="mailto:info@asitech.com" className="hover:text-blue-600">
                  info@asitech.com
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FiPhone className="text-blue-600" />
                <a href="tel:+9771XXXXXXX" className="hover:text-blue-600">
                  +977 9768552107
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FiMapPin className="text-blue-600" />
                <a
                  href="https://www.google.com/maps?q=Bagdol+Lalitpur+Nepal"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600"
                >
                  Bagdol, Lalitpur, Nepal
                </a>
              </li>

            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">
                Let’s Work Together
              </h4>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Have a project in mind? We are ready to help you build modern,
                scalable digital solutions.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-2 px-5 rounded-xl transition"
            >
              Contact Us
            </a>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
          © {currentYear} AsiTech. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;