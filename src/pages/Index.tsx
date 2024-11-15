import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { MeetTheArtist } from '../components/MeetTheArtist';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <MeetTheArtist />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;