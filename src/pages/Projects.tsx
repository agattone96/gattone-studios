import { Navigation } from '../components/Navigation';
import { Projects as ProjectsSection } from '../components/Projects';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <main className="min-h-screen bg-cosmic-dark">
      <Navigation />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        <ProjectsSection />
      </motion.div>
    </main>
  );
};

export default Projects;