import { motion } from "framer-motion";
import { SkillConstellation } from "./skills/SkillConstellation";

export const Skills = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmic-purple/5 via-transparent to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-cinzel mb-4 cosmic-heading">
          Cosmic Skill Constellation
        </h2>
        <p className="cosmic-text max-w-2xl mx-auto">
          Explore the universe of creativity and strategy I bring to every project
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <SkillConstellation />
      </motion.div>

      {/* Background Stars Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div id="stars" className="animate-twinkle" />
      </div>
    </section>
  );
};