import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../assets/hero/1.jpg";
import bg2 from "../assets/hero/2.jpg";
import bg3 from "../assets/hero/3.jpg";
import bg4 from "../assets/hero/4.jpg";

const images = [bg1, bg2, bg3, bg4];

const text =
  "Empowering your digital future through innovative IT solutions, AI integration, and scalable web architectures.";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useRef(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto slideshow (always runs safely)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden z-0"
    >
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            alt="hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.span
          variants={itemVariants}
          className="inline-flex py-1.5 px-4 mb-6 text-xs font-bold tracking-widest text-blue-200 bg-blue-900/20 border border-blue-400/20 rounded-full backdrop-blur-md uppercase"
        >
          Innovation Meets Intelligence
        </motion.span>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight break-words"
        >
          Welcome to <span className="text-blue-500">AsiTech</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
        >
          {text}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("features")}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-lg"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-md transition"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Dots */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentImage
                ? "w-12 bg-blue-500"
                : "w-4 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;