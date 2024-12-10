import { motion } from "framer-motion";
import { SkillNode } from "./SkillNode";

const skills = [
  {
    name: "Creative Visionary",
    description: "Crafting bold branding and innovative design solutions through Alli Draws and Popping Peppers",
    x: 20,
    y: 30
  },
  {
    name: "Marketing Mastery",
    description: "Building engaging communities and captivating campaigns across social media platforms",
    x: 60,
    y: 20
  },
  {
    name: "Entrepreneurial Savvy",
    description: "Successfully managing multiple brands with strategic planning and efficient multitasking",
    x: 80,
    y: 40
  },
  {
    name: "Content Creator",
    description: "Creating visually engaging content with a distinct voice that resonates with audiences",
    x: 30,
    y: 60
  },
  {
    name: "Product Innovator",
    description: "Developing unique, high-quality culinary products that stand out in the market",
    x: 70,
    y: 70
  }
];

export const SkillConstellation = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-cosmic-dark/50 to-cosmic-darker/50 
                   backdrop-blur-sm rounded-lg border border-cosmic-accent/10"
      >
        {/* Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {skills.map((skill, index) => (
            skills.slice(index + 1).map((nextSkill, nextIndex) => (
              <motion.line
                key={`${index}-${nextIndex}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                x1={`${skill.x}%`}
                y1={`${skill.y}%`}
                x2={`${nextSkill.x}%`}
                y2={`${nextSkill.y}%`}
                stroke="url(#skillGradient)"
                strokeWidth="2"
                className="animate-pulse"
              />
            ))
          ))}
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF719A" />
              <stop offset="50%" stopColor="#9b87f5" />
              <stop offset="100%" stopColor="#FF719A" />
            </linearGradient>
          </defs>
        </svg>

        {/* Skill Nodes */}
        {skills.map((skill, index) => (
          <SkillNode
            key={skill.name}
            {...skill}
            delay={index * 0.2}
          />
        ))}
      </motion.div>
    </div>
  );
};