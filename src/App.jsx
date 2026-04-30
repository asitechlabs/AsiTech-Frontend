import { Routes, Route } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import AuthLayout from './layout/AuthLayout';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ToolsSection from './components/ToolsSection';
import About from './components/About';
import Contact from './components/Contact';
import Career from './components/Career';
import Footer from './components/Footer';

import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Routes>
      {/* 🌐 MAIN WEBSITE (Navbar + Footer) */}
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <>
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="features">
                <Features />
              </section>
              <section id="tools">
                <ToolsSection />
              </section>
              <section id="career">
                <Career />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          }
        />
      </Route>

<<<<<<< HEAD
      {/* 🔐 AUTH PAGES (NO Navbar/Footer) */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
=======
      <section id="home" className="pt-20">
        <Hero />
      </section>
       <section id="about" className="pt-20">
        <About />
      </section>

      <section id="features" className="pt-20">
        <Features />
      </section>

      <section id="tools" className="pt-20">
        <ToolsSection />
      </section>

     

      {/* <section id="career" className="pt-20">
        <Career />
      </section> */}

      <section id="contact" className="pt-20">
        <Contact />
      </section>

      <Footer />
    </>
>>>>>>> 76a30178d732f09251300d5828c70c8583b257a6
  );
};

export default App;
