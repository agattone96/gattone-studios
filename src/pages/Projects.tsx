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
        <div className="absolute inset-0 pointer-events-none">
          <div id="stars" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-transparent to-cosmic-dark" />
        </div>
        <ProjectsSection />
      </motion.div>
    </main>
  );
};

export default Projects;