import { motion } from "framer-motion";
import { SkillType } from "./types";

interface ConstellationLinesProps {
  skills: SkillType[];
}

export const ConstellationLines = ({ skills }: ConstellationLinesProps) => {
  return (
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
            stroke={`url(#gradient-${index}-${nextIndex})`}
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
        ))
      ))}
      <defs>
        {skills.map((skill, index) => 
          skills.slice(index + 1).map((nextSkill, nextIndex) => (
            <linearGradient
              key={`gradient-${index}-${nextIndex}`}
              id={`gradient-${index}-${nextIndex}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={skill.color} />
              <stop offset="100%" stopColor={nextSkill.color} />
            </linearGradient>
          ))
        )}
      </defs>
    </svg>
  );
};