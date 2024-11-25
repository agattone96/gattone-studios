import { motion } from "framer-motion";
import { 
  Palette, Megaphone, Briefcase, Video, 
  Package, Users, PenTool, Heart, 
  Sparkles, Text
} from "lucide-react";

const skills = [
  { 
    name: "Creative Visionary", 
    icon: Palette,
    description: "Crafting bold branding and innovative design solutions through Alli Draws and Popping Peppers"
  },
  { 
    name: "Marketing Mastery", 
    icon: Megaphone,
    description: "Building engaging communities and captivating campaigns across social media platforms"
  },
  { 
    name: "Entrepreneurial Savvy", 
    icon: Briefcase,
    description: "Successfully managing multiple brands with strategic planning and efficient multitasking"
  },
  { 
    name: "Content Creator", 
    icon: Video,
    description: "Creating visually engaging content with a distinct voice that resonates with audiences"
  },
  { 
    name: "Product Innovator", 
    icon: Package,
    description: "Developing unique, high-quality culinary products that stand out in the market"
  },
  { 
    name: "Leadership & Team Building", 
    icon: Users,
    description: "Growing brands through effective leadership and team management"
  },
  { 
    name: "Graphic Design & Artistry", 
    icon: PenTool,
    description: "Expertise in custom designs and cross-medium artistic expression"
  },
  { 
    name: "Community Engagement", 
    icon: Heart,
    description: "Fostering connections and building loyal communities of passionate followers"
  },
  { 
    name: "Adaptability", 
    icon: Sparkles,
    description: "Pivoting strategies and balancing multiple ventures with flexibility"
  },
  { 
    name: "SEO & Copywriting", 
    icon: Text,
    description: "Crafting compelling, SEO-optimized content that drives engagement"
  },
];

export const Skills = () => {
  return (
    <section className="py-16">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 text-3xl md:text-4xl font-cinzel bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent bg-clip-text text-transparent"
      >
        Cosmic Capabilities
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-cosmic-dark/50 backdrop-blur-md rounded-lg p-6 border border-cosmic-accent/20 
                       hover:border-cosmic-accent/40 transition-all duration-300 group"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-cosmic-darker flex items-center justify-center border border-cosmic-accent/20
                         group-hover:border-cosmic-accent/60 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <Icon className="w-8 h-8 text-cosmic-accent group-hover:text-cosmic-purple transition-colors duration-300" />
              </motion.div>
              <h4 className="text-center text-xl font-cinzel bg-gradient-to-r from-cosmic-accent to-cosmic-purple bg-clip-text text-transparent mb-3">
                {skill.name}
              </h4>
              <p className="text-cosmic-light/80 text-center text-sm leading-relaxed">
                {skill.description}
              </p>
              <div className="w-full h-1 bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent 
                          rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300 mt-4" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};