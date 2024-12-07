import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectDialog } from './projects/ProjectDialog';
import { projects } from '../data/projects';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-[#2A1F3D] to-cosmic-dark opacity-50" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark/90 via-cosmic-dark/70 to-cosmic-dark/90" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Cosmic Creations</h2>
          <p className="text-cosmic-light/90 text-lg max-w-2xl mx-auto">
            Explore a universe of design where creativity knows no bounds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center p-8 bg-cosmic-dark/50 backdrop-blur-lg rounded-lg border border-cosmic-accent/20"
        >
          <h3 className="mb-4">Ready to Start Your Journey?</h3>
          <p className="text-cosmic-light/90 text-lg mb-8">
            Let's create something extraordinary together!
          </p>
          <Link to="/contact" className="btn mx-auto">
            <strong>CONTACT ME</strong>
            <div id="container-stars">
              <div id="stars" />
            </div>
            <div id="glow">
              <div className="circle" />
              <div className="circle" />
            </div>
          </Link>
        </motion.div>
      </div>

      <ProjectDialog 
        project={selectedProject} 
        onOpenChange={() => setSelectedProject(null)} 
      />
    </section>
  );
};