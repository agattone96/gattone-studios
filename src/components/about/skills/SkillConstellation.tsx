import { motion } from "framer-motion";
import { SkillNode } from "./SkillNode";
import { ConstellationLines } from "./ConstellationLines";
import { InstructionsPanel } from "./InstructionsPanel";
import { SkillType } from "./types";

const skills: SkillType[] = [
  {
    name: "Digital Media Strategy",
    description: "Expert in campaign planning, execution, and analytics, driving measurable results through data-driven strategies.",
    x: 35,
    y: 25,
    icon: "network",
    color: "#FF719A"
  },
  {
    name: "Content Creation & Analytics",
    description: "Crafting engaging digital content while leveraging analytics for continuous optimization and improved performance.",
    x: 45,
    y: 15,
    icon: "video",
    color: "#9b87f5"
  },
  {
    name: "Event Coordination",
    description: "Strategic planning and flawless execution of events, ensuring memorable experiences and successful outcomes.",
    x: 55,
    y: 30,
    icon: "calendar",
    color: "#FF719A"
  },
  {
    name: "Client Relationship Management",
    description: "Building and maintaining strong client partnerships through effective communication and exceptional service delivery.",
    x: 65,
    y: 20,
    icon: "users",
    color: "#9b87f5"
  },
  {
    name: "Branding and Visual Design",
    description: "Creating cohesive and impactful brand experiences through innovative visual design solutions.",
    x: 75,
    y: 35,
    icon: "palette",
    color: "#FF719A"
  },
  {
    name: "Social Media Management",
    description: "Driving engagement and visibility through strategic social media campaigns and community management.",
    x: 40,
    y: 45,
    icon: "share",
    color: "#9b87f5"
  },
  {
    name: "Custom Product Design",
    description: "Developing unique merchandise and products that align with brand identity and market demands.",
    x: 60,
    y: 50,
    icon: "package",
    color: "#FF719A"
  }
];

export const SkillConstellation = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-cosmic-dark/50 to-cosmic-darker/50 
                   backdrop-blur-sm rounded-lg border border-cosmic-accent/10
                   hover:border-cosmic-accent/20 transition-all duration-300"
      >
        <ConstellationLines skills={skills} />

        {skills.map((skill, index) => (
          <SkillNode
            key={skill.name}
            {...skill}
            delay={index * 0.2}
          />
        ))}

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                         from-cosmic-purple/20 via-transparent to-transparent animate-pulse" />
        </div>

        <InstructionsPanel />
      </motion.div>
    </div>
  );
};