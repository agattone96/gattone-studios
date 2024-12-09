import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <Hero />
    </motion.div>
  );
};

export default Index;