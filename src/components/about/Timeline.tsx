import { motion } from "framer-motion";
import { Calendar, Star, Medal } from "lucide-react";

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export const Timeline = ({ entries }: { entries: TimelineEntry[] }) => {
  return (
    <div className="relative py-16">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-cosmic-accent via-cosmic-purple to-cosmic-accent opacity-30" />
      <div className="space-y-16">
        {entries.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex items-center gap-8 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
              <div className="flex items-center gap-2 mb-2 justify-end">
                <Calendar className="w-5 h-5 text-cosmic-accent animate-pulse" />
                <h4 className="text-xl md:text-2xl font-cinzel bg-gradient-to-r from-cosmic-accent to-cosmic-purple bg-clip-text text-transparent">
                  {entry.title}
                </h4>
              </div>
              <p className="text-cosmic-light/80 font-bitter">{entry.description}</p>
            </div>
            <div className="relative group">
              <motion.div 
                className="w-12 h-12 rounded-full bg-cosmic-dark border-2 border-cosmic-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {index === 0 ? (
                  <Star className="w-6 h-6 text-cosmic-accent" />
                ) : (
                  <Medal className="w-6 h-6 text-cosmic-accent" />
                )}
              </motion.div>
              <div className="absolute top-1/2 -translate-y-1/2 text-sm font-cinzel text-cosmic-accent whitespace-nowrap px-4 py-1 rounded-full bg-cosmic-darker border border-cosmic-accent/20 shadow-glow">
                {entry.year}
              </div>
            </div>
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};