import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Status
  const [status, setStatus] = useState('');

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const serviceID = "service_v46keqo";
    const templateID = "template_eyf54tc";
    const publicKey = "AtoLUlc898Wti45To";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus('Sent successfully! 🎉');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        setStatus('Failed to send message ❌');
      });
  };

  // Google Map link
  const mapSrc =
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4486.301677318353!2d85.29848507105801!3d27.67212832306894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa4ab8369e1e172d%3A0xc8cd87e8ab9e1ada!2sASI%20logistics!5e0!3m2!1sen!2snp!4v1776417494418!5m2!1sen!2snp" 
  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-100"
    >

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-200 blur-3xl opacity-30 rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-indigo-200 blur-3xl opacity-30 rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-blue-600 bg-blue-50 px-4 py-1 rounded-full uppercase">
            Contact Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Start Your Project Journey With Us
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Share your idea, requirements, or collaboration request.
            We build modern and scalable digital solutions.
          </p>
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl p-6 sm:p-10"
          >
            <h3 className="text-xl font-semibold text-center mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-xl focus:ring-4 focus:ring-blue-100 outline-none"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-xl focus:ring-4 focus:ring-blue-100 outline-none"
                required
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-xl resize-none focus:ring-4 focus:ring-blue-100 outline-none"
                required
              />

              {/* Status */}
              {status && (
                <p className="text-center text-sm font-medium text-blue-600">
                  {status}
                </p>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="w-full h-112.5 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                title="Company Location Map"
                src={mapSrc}
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;