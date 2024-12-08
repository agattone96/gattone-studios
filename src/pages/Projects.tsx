import { motion } from "framer-motion";
import { Projects as ProjectsSection } from '../components/Projects';

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsSection />
    </motion.div>
  );
};

export default Projects;