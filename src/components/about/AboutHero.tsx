import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";

export const AboutHero = () => {
  return (
    <div className="relative mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10"
      >
        {/* Profile Image Container with Enhanced Glow Effect */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          {/* Cosmic Halo Effect */}
          <motion.div
            animate={{ 
              boxShadow: ["0 0 20px #FF719A", "0 0 40px #FF719A", "0 0 20px #FF719A"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cosmic-accent/20 via-cosmic-purple/20 to-cosmic-accent/20"
          />
          
          {/* Rotating Gradient Border with Enhanced Glow */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent opacity-30"
          />
          
          {/* Profile Image with Improved Border */}
          <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-cosmic-accent/40 backdrop-blur-sm">
            <img
              src="https://i.postimg.cc/dQjhM1PW/professional-headshot.jpg"
              alt="Allison Gattone Professional Headshot"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Enhanced Decorative Elements */}
          <motion.div
            className="absolute -right-4 -top-4 w-12 h-12 bg-cosmic-darker/80 rounded-full 
                       border border-cosmic-accent shadow-lg backdrop-blur-sm
                       flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1], boxShadow: ["0 0 10px #FF719A", "0 0 20px #FF719A", "0 0 10px #FF719A"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star className="w-6 h-6 text-cosmic-accent animate-pulse" />
          </motion.div>
          <motion.div
            className="absolute -left-4 -bottom-4 w-10 h-10 bg-cosmic-darker/80 rounded-full 
                       border border-cosmic-purple shadow-lg backdrop-blur-sm
                       flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 10px #9b87f5", "0 0 20px #9b87f5", "0 0 10px #9b87f5"] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <Sparkles className="w-5 h-5 text-cosmic-purple animate-pulse" />
          </motion.div>
        </div>

        {/* Enhanced Title and Description */}
        <motion.h1 
          className="font-cinzel text-4xl sm:text-5xl md:text-6xl mb-6 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent 
                         bg-clip-text text-transparent animate-glow inline-block">
            Meet Allison:
          </span>
          <br />
          <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-accent 
                         bg-clip-text text-transparent animate-glow inline-block mt-2">
            A Visionary Creative
          </span>
        </motion.h1>

        <motion.p 
          className="text-cosmic-light/90 text-lg mb-12 max-w-2xl mx-auto px-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm Allison Gattone, a visionary artist and creative professional passionate about merging art 
          and strategy to build brands that stand out in the digital cosmos. With a unique blend of 
          artistic talent and entrepreneurial spirit, I transform ideas into captivating visual experiences.
        </motion.p>

        {/* Enhanced Explore Work Button */}
        <motion.a
          href="#work"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 113, 154, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="btn mx-auto scale-110"
        >
          <strong className="tracking-wider">EXPLORE MY WORK</strong>
          <div id="container-stars">
            <div id="stars" className="animate-twinkle" />
          </div>
          <div id="glow">
            <div className="circle animate-pulse" />
            <div className="circle animate-pulse delay-75" />
          </div>
        </motion.a>
      </motion.div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark/50 via-transparent to-cosmic-dark/50" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 animate-float" />
    </div>
  );
};