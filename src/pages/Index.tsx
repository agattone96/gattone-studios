import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
      </motion.div>
    </Layout>
  );
};

export default Index;