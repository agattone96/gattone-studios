import { motion } from "framer-motion";

const skills = [
  "Brand Development",
  "Digital Illustration",
  "UI/UX Design",
  "Motion Graphics",
  "Creative Direction",
  "Web Design",
];

export const Skills = () => {
  return (
    <section className="py-16">
      <h3 className="text-center mb-12">Cosmic Capabilities</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-cosmic-dark/50 backdrop-blur-md rounded-lg p-6 border border-cosmic-accent/20 
                     hover:border-cosmic-accent/40 transition-all duration-300"
          >
            <h4 className="text-center text-cosmic-accent mb-2">{skill}</h4>
            <div className="w-full h-1 bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent 
                          rounded-full opacity-50" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};