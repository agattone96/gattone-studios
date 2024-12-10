import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SkillNodeProps {
  name: string;
  description: string;
  x: number;
  y: number;
  delay?: number;
}

export const SkillNode = ({ name, description, x, y, delay = 0 }: SkillNodeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-16 h-16 rounded-full bg-cosmic-dark/50 backdrop-blur-md 
                         border border-cosmic-accent/20 flex items-center justify-center
                         group hover:border-cosmic-accent/60 transition-all duration-300"
            >
              <Star className="w-8 h-8 text-cosmic-accent group-hover:text-cosmic-purple 
                              transition-colors duration-300" />
            </motion.div>
          </TooltipTrigger>
          <TooltipContent className="bg-cosmic-darker/90 border border-cosmic-accent/20 p-4 max-w-xs">
            <h4 className="font-cinzel text-cosmic-accent mb-2">{name}</h4>
            <p className="text-cosmic-light/80 text-sm">{description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};