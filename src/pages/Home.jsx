import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ToolsSection from '../components/ToolsSection';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className="flex flex-col">
      {/* Note: IDs like "features", "tools", etc., should be inside 
          their respective components or wrapped in divs here 
      */}
      <Hero />
      
      <div id="features" className="scroll-mt-20">
        <Features />
      </div>

      <div id="tools" className="scroll-mt-20">
        <ToolsSection />
      </div>

      <div id="about" className="scroll-mt-20">
        <About />
      </div>

      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>

      <Footer />
    </main>
  );
};

export default Home;