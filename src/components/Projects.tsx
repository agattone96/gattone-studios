import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
  return (
    <section className="cosmic-section">
      <div className="cosmic-gradient" />
      <div className="cosmic-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="cosmic-heading font-cinzel text-4xl sm:text-5xl md:text-6xl mb-6 animate-float">
            Cosmic Creations
          </h2>
          <p className="cosmic-text text-lg max-w-2xl mx-auto">
            Explore a universe of design where creativity knows no bounds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-cosmic-dark/30 backdrop-blur-lg rounded-lg border border-cosmic-accent/20 overflow-hidden hover:border-cosmic-accent/40 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/90 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-cosmic-light">
                  {project.title}
                </h3>
                <p className="text-cosmic-light/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(project.links).map(([label, url], idx) => (
                    <a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-cosmic-accent hover:text-cosmic-accent/80 transition-colors"
                    >
                      {label}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center p-8 bg-cosmic-dark/50 backdrop-blur-lg rounded-lg border border-cosmic-accent/20"
        >
          <h3 className="cosmic-heading mb-4">Ready to Start Your Journey?</h3>
          <p className="cosmic-text text-lg mb-8">
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
    </section>
  );
};