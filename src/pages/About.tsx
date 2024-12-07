import { Navigation } from '../components/Navigation';
import { About as AboutSection } from '../components/About';
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="min-h-screen bg-cosmic-dark">
      <Navigation />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        <AboutSection />
      </motion.div>
    </main>
  );
};

export default About;