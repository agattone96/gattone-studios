import { motion } from "framer-motion";
import { Palette, Code, Layout, Video, Lightbulb, Compass } from "lucide-react";

const skills = [
  { name: "Brand Development", icon: Palette },
  { name: "Digital Illustration", icon: Code },
  { name: "UI/UX Design", icon: Layout },
  { name: "Motion Graphics", icon: Video },
  { name: "Creative Direction", icon: Lightbulb },
  { name: "Web Design", icon: Compass },
];

export const Skills = () => {
  return (
    <section className="py-16">
      <h3 className="text-center mb-12 text-3xl md:text-4xl font-cinzel bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent bg-clip-text text-transparent">
        Cosmic Capabilities
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-cosmic-dark/50 backdrop-blur-md rounded-lg p-6 border border-cosmic-accent/20 
                       hover:border-cosmic-accent/40 transition-all duration-300 group"
            >
              <motion.div
                className="w-12 h-12 mx-auto mb-4 rounded-full bg-cosmic-darker flex items-center justify-center border border-cosmic-accent/20"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-6 h-6 text-cosmic-accent group-hover:text-cosmic-purple transition-colors duration-300" />
              </motion.div>
              <h4 className="text-center text-xl font-cinzel bg-gradient-to-r from-cosmic-accent to-cosmic-purple bg-clip-text text-transparent mb-2">
                {skill.name}
              </h4>
              <div className="w-full h-1 bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent 
                          rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};