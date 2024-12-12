import { TimelineEntry } from "./timeline/TimelineEntry";
import { TooltipProvider } from "@/components/ui/tooltip";

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  skills?: string[];
  image?: string;
  imageAlt?: string;
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
            <TimelineEntry key={index} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};