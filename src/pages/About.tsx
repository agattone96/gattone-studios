import { Navigation } from '../components/Navigation';
import { MeetTheArtist } from '../components/MeetTheArtist';
import { Footer } from '../components/Footer';

const About = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <MeetTheArtist />
      </div>
      <Footer />
    </main>
  );
};

export default About;