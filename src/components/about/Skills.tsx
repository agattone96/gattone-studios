import { motion } from "framer-motion";
import { SkillConstellation } from "./skills/SkillConstellation";
import { Link } from "react-router-dom";

export const Skills = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-cinzel mb-4 cosmic-heading">
          Unleashing Cosmic Potential
        </h2>
        <p className="cosmic-text max-w-2xl mx-auto">
          A fusion of artistry, strategy, and innovation to create impactful digital experiences.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <SkillConstellation />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <h3 className="cosmic-heading mb-6">
          Let's create something extraordinary
        </h3>
        <p className="cosmic-text mb-8 max-w-3xl mx-auto">
          Explore the universe of creativity and strategy I bring to every project.
        </p>
        <Link to="/projects" className="btn mx-auto">
          <strong>EXPLORE MY WORK</strong>
          <div id="container-stars">
            <div id="stars" />
          </div>
          <div id="glow">
            <div className="circle" />
            <div className="circle" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};