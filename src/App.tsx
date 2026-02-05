import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MissionVision } from './components/MissionVision';
import { Projects } from './components/Projects';
import { Values } from './components/Values';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Loader from './components/Loader';
import './styles/globals.css';
import 'aos/dist/aos.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    import('aos').then(AOS => {
      AOS.default.init({
        duration: 800,
        once: true,
        offset: 100
      });
    });

    // Simulate loading time - you can adjust this duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Projects />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
