import { Navigation } from '../components/Navigation';
import { About as AboutSection } from '../components/About';
import { Footer } from '../components/Footer';

const About = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
};

export default About;