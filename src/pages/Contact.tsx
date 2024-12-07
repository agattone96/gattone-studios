import { Navigation } from '../components/Navigation';
import { Contact as ContactSection } from '../components/Contact';
import { Footer } from '../components/Footer';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <main className="min-h-screen bg-cosmic-dark">
      <Navigation />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div id="stars" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-transparent to-cosmic-dark" />
        </div>
        <ContactSection />
      </motion.div>
      <Footer />
    </main>
  );
};

export default Contact;