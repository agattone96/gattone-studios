import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const AboutHero = () => {
  return (
    <div className="relative mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10"
      >
        <div className="relative w-48 h-48 mx-auto mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent opacity-20"
          />
          <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-cosmic-accent/30">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Allison Gattone"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            className="absolute -right-4 -top-4 w-12 h-12 bg-cosmic-darker rounded-full border border-cosmic-accent flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star className="w-6 h-6 text-cosmic-accent" />
          </motion.div>
        </div>
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl mb-6 animate-float">
          <span className="bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent bg-clip-text text-transparent animate-glow">
            Cosmic Creative
          </span>
        </h1>
        <p className="text-cosmic-light/90 text-lg mb-12 max-w-2xl mx-auto px-4 animate-fade-in leading-relaxed">
          I'm Allison Gattone, a visionary artist and creative professional passionate about merging art 
          and strategy to build brands that stand out in the digital cosmos. With a unique blend of 
          artistic talent and entrepreneurial spirit, I transform ideas into captivating visual experiences.
        </p>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark/50 via-transparent to-cosmic-dark/50" />
    </div>
  );
};