import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ToolsSection from "./components/ToolsSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <section id="home" className="pt-20">
        <Hero />
      </section>

      <section id="features" className="pt-20">
        <Features />
      </section>

      <section id="tools" className="pt-20">
        <ToolsSection />
      </section>

      <section id="about" className="pt-20">
        <About />
      </section>

      <section id="contact" className="pt-20">
        <Contact />
      </section>

      <Footer />
    </>
  );
};

export default App;