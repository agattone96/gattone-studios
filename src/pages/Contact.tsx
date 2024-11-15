import { Navigation } from '../components/Navigation';
import { Contact as ContactSection } from '../components/Contact';
import { Footer } from '../components/Footer';

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;