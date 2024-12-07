import { Layout } from '../components/Layout';
import { Projects as ProjectsSection } from '../components/Projects';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24"
      >
        <ProjectsSection />
      </motion.div>
    </Layout>
  );
};

export default Projects;