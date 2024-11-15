import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;