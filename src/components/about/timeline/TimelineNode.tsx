import { motion } from "framer-motion";
import { Star, Medal } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TimelineNodeProps {
  index: number;
  year: string;
}

export const TimelineNode = ({ index, year }: TimelineNodeProps) => {
  return (
    <div className="relative flex items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div 
              className="w-12 h-12 rounded-full bg-cosmic-dark border-2 border-cosmic-accent 
                       flex items-center justify-center group hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              {index === 0 ? (
                <Star className="w-6 h-6 text-cosmic-accent" />
              ) : (
                <Medal className="w-6 h-6 text-cosmic-accent" />
              )}
            </motion.div>
          </TooltipTrigger>
          <TooltipContent 
            className="bg-cosmic-darker/95 border-cosmic-accent/20 text-cosmic-light"
          >
            Click to view more details
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
      <motion.div 
        className={`absolute ${
          index % 2 === 0 ? 'left-full ml-4' : 'right-full mr-4'
        } text-sm font-cinzel text-cosmic-accent whitespace-nowrap px-4 py-1 rounded-full 
        bg-cosmic-darker border border-cosmic-accent/20 shadow-glow hidden md:block`}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {year}
      </motion.div>
    </div>
  );
};