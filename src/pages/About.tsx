import { motion } from "framer-motion";
import { About as AboutSection } from '../components/About';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AboutSection />
    </motion.div>
  );
};

export default About;