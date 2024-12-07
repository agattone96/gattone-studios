import { Layout } from '../components/Layout';
import { About as AboutSection } from '../components/About';
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        <AboutSection />
      </motion.div>
    </Layout>
  );
};

export default About;