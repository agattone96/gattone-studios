import { motion } from "framer-motion";
import { Layout } from '../components/Layout';
import { Contact as ContactSection } from '../components/Contact';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContactSection />
    </motion.div>
  );
};

export default Contact;