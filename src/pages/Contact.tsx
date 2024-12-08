import { motion } from "framer-motion";
import { Layout } from '../components/Layout';
import { ContactSection } from '../components/Contact';

const Contact = () => {
  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        <ContactSection />
      </motion.div>
    </Layout>
  );
};

export default Contact;