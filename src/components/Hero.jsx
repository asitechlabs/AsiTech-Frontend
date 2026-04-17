import React, { useState, useEffect, useRef } from 'react';
import bg1 from '../assets/hero/1.jpg';
import bg2 from '../assets/hero/2.jpg';
import bg3 from '../assets/hero/3.jpg';
import bg4 from '../assets/hero/4.jpg';

const images = [bg1, bg2, bg3, bg4];

const text = "Empowering your digital future through innovative IT solutions, AI integration, and scalable web architectures.";


const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);

  // Auto slideshow (only when visible)
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Detect visibility (in view)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Background Images (ALL ACTIVE WITH SLIDESHOW EFFECT) */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              index === currentImage
                ? "opacity-100 scale-105 z-20"
                : "opacity-0 scale-100 z-10"
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/80 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">

        <span className="inline-flex py-1.5 px-4 mb-6 text-xs font-bold tracking-widest text-blue-200 bg-blue-900/20 border border-blue-400/20 rounded-full backdrop-blur-md uppercase">
          Innovation Meets Intelligence
        </span>


<h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight text-center">
  {"Welcome to AsiTech".split(" ").map((word, index) => (
    <span
      key={index}
      className={`word ${word === "AsiTech" ? "text-blue-500" : ""}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {word}&nbsp;
    </span>
  ))}
</h1>


<p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed text-center">
  {text.split(" ").map((word, index) => (
    <span
      key={index}
      className="word"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {word}&nbsp;
    </span>
  ))}
</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('features')}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-bold rounded-xl transition-all hover:-translate-y-1 shadow-lg"
          >
            Get Started
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 cursor-pointer text-white font-semibold rounded-xl border border-white/20 backdrop-blur-md transition hover:-translate-y-1"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentImage
                ? 'w-12 bg-blue-500'
                : 'w-4 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;