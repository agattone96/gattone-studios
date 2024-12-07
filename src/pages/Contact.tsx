import { Navigation } from '../components/Navigation';
import { Contact as ContactSection } from '../components/Contact';
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
        <ContactSection />
      </motion.div>
    </main>
  );
};

export default Contact;