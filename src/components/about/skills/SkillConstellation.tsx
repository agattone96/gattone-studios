import { motion } from "framer-motion";
import { SkillNode } from "./SkillNode";

const skills = [
  {
    name: "Digital Media Strategy",
    starName: "Electra",
    description: "Expert in campaign planning, execution, and analytics, driving measurable results through data-driven strategies.",
    x: 20,
    y: 15,
    icon: "network"
  },
  {
    name: "Content Creation & Analytics",
    starName: "Taygete",
    description: "Crafting engaging digital content while leveraging analytics for continuous optimization and improved performance.",
    x: 25,
    y: 35,
    icon: "video"
  },
  {
    name: "Event Coordination",
    starName: "Maia",
    description: "Strategic planning and flawless execution of events, ensuring memorable experiences and successful outcomes.",
    x: 45,
    y: 25,
    icon: "calendar"
  },
  {
    name: "Client Relationship Management",
    starName: "Celaeno",
    description: "Building and maintaining strong client partnerships through effective communication and exceptional service delivery.",
    x: 65,
    y: 35,
    icon: "users"
  },
  {
    name: "Branding and Visual Design",
    starName: "Alcyone",
    description: "Creating cohesive and impactful brand experiences through innovative visual design solutions.",
    x: 70,
    y: 60,
    icon: "palette"
  },
  {
    name: "Social Media Management",
    starName: "Sterope",
    description: "Driving engagement and visibility through strategic social media campaigns and community management.",
    x: 40,
    y: 75,
    icon: "share"
  },
  {
    name: "Custom Product Design",
    starName: "Merope",
    description: "Developing unique merchandise and products that align with brand identity and market demands.",
    x: 85,
    y: 75,
    icon: "package"
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
                   backdrop-blur-sm rounded-lg border border-cosmic-accent/10"
      >
        {/* Constellation Title */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-cinzel text-cosmic-light text-center mt-4 mb-8"
        >
          Seven Sisters Skills Constellation
        </motion.h3>

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
                strokeDasharray="5,5"
                className="animate-pulse"
              />
            ))
          ))}
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9b87f5" />
              <stop offset="50%" stopColor="#FF719A" />
              <stop offset="100%" stopColor="#9b87f5" />
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

        {/* Star Names */}
        {skills.map((skill) => (
          <motion.div
            key={`star-${skill.starName}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1 }}
            className="absolute text-cosmic-light/50 text-sm"
            style={{
              left: `${skill.x}%`,
              top: `${skill.y + 8}%`,
              transform: 'translate(-50%, 0)'
            }}
          >
            {skill.starName}
          </motion.div>
        ))}

        {/* Background Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cosmic-purple/20 via-transparent to-transparent animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
};