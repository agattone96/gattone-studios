import { motion } from "framer-motion";

export const InstructionsPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                 bg-cosmic-darker/80 backdrop-blur-md rounded-lg p-4 
                 border border-cosmic-accent/20 max-w-md text-center"
    >
      <h4 className="text-cosmic-accent font-cinzel mb-2">Explore the Constellation</h4>
      <p className="text-cosmic-light/80 text-sm">
        Hover over each star to discover detailed insights about each skill. 
        The connecting lines represent the harmonious integration of these abilities 
        in my creative journey.
      </p>
    </motion.div>
  );
};