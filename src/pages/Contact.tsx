import { Layout } from '../components/Layout';
import { Contact as ContactSection } from '../components/Contact';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <ContactSection />
    </motion.div>
  );
};

export default Contact;