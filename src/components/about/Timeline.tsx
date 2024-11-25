import { motion } from "framer-motion";

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
              <h4 className="mb-2">{entry.title}</h4>
              <p className="text-cosmic-light/80">{entry.description}</p>
            </div>
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-cosmic-accent animate-pulse" />
              <div className="absolute top-1/2 -translate-y-1/2 text-sm font-cinzel text-cosmic-accent">
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