import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Jobs section disabled - uncomment to re-enable
// import Jobs from './components/Jobs';
// import PasswordProtection from './components/PasswordProtection';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    // <PasswordProtection>
      <LanguageProvider>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main className="space-y-0">
            <section id="hero" className="mb-0">
              <Hero />
            </section>
            <section id="services" className="mb-0">
              <Services />
            </section>
            <section id="about" className="mb-0">
              <About />
            </section>
            <section id="technologies" className="mb-0">
              <Technologies />
            </section>
            {/* Jobs section disabled - uncomment to re-enable */}
            {/* <section id="jobs" className="mb-0">
              <Jobs />
            </section> */}
            <section id="contact" className="mb-0">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    // </PasswordProtection>
  );
}
