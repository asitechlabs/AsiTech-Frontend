import About from "../components/About";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ToolsSection from "../components/ToolsSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <ToolsSection />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
