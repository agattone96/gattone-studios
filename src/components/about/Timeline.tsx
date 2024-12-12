import { motion } from "framer-motion";
import { Calendar, Briefcase, Star, Medal, ChevronRight, Image } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  skills?: string[];
  image?: string;
}

export const Timeline = ({ entries }: { entries: TimelineEntry[] }) => {
  return (
    <TooltipProvider>
      <div className="relative py-16 px-4 md:px-0" role="region" aria-label="Career Timeline">
        {/* Timeline Line */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-px 
                     bg-gradient-to-b from-cosmic-accent via-cosmic-purple to-cosmic-accent 
                     opacity-30 md:block hidden"
          aria-hidden="true"
        />
        
        {/* Mobile Line */}
        <div 
          className="absolute left-8 top-0 h-full w-px 
                     bg-gradient-to-b from-cosmic-accent via-cosmic-purple to-cosmic-accent 
                     opacity-30 md:hidden"
          aria-hidden="true"
        />
        
        {/* Timeline Entries */}
        <div className="space-y-16">
          {entries.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row flex-row" : "md:flex-row-reverse flex-row"
              } relative`}
            >
              {/* Content */}
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div 
                    className={`flex-1 group cursor-pointer p-6 rounded-lg
                               bg-cosmic-darker/50 backdrop-blur-sm border border-cosmic-accent/10
                               hover:border-cosmic-accent/30 transition-all duration-300
                               ${index % 2 === 0 ? "md:text-right text-left" : "text-left"}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div 
                      className="flex items-center gap-2 mb-2"
                      style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}
                    >
                      <Calendar className="w-5 h-5 text-cosmic-accent animate-pulse" />
                      <h4 className="text-xl md:text-2xl font-cinzel bg-gradient-to-r from-cosmic-accent to-cosmic-purple bg-clip-text text-transparent">
                        {entry.title}
                      </h4>
                    </div>
                    
                    <p className="text-cosmic-light/80 font-bitter">{entry.description}</p>
                    
                    {entry.skills && (
                      <div className="mt-4 flex flex-wrap gap-2 justify-end">
                        {entry.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="text-sm px-3 py-1 rounded-full bg-cosmic-accent/10 
                                     text-cosmic-light/70 border border-cosmic-accent/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </DialogTrigger>
                
                <DialogContent className="bg-cosmic-darker/95 border-cosmic-accent/20">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-cinzel text-cosmic-light">
                      {entry.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-cosmic-light/80">{entry.description}</p>
                    {entry.image && (
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={entry.image} 
                          alt={`Visual representation of ${entry.title}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>

              {/* Timeline Node */}
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
                
                {/* Year Label */}
                <motion.div 
                  className={`absolute ${
                    index % 2 === 0 ? 'left-full ml-4' : 'right-full mr-4'
                  } text-sm font-cinzel text-cosmic-accent whitespace-nowrap px-4 py-1 rounded-full 
                  bg-cosmic-darker border border-cosmic-accent/20 shadow-glow hidden md:block`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {entry.year}
                </motion.div>
              </div>
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};