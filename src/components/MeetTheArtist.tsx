import { motion } from "framer-motion";
import CTAButton from './ui/cta-button';

export const MeetTheArtist = () => {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-[#2A1F3D] to-cosmic-dark opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent opacity-20"
              />
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
                  alt="Allison Gattone"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-cosmic-accent/10 rounded-full animate-pulse" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h2 className="font-cinzel text-4xl md:text-5xl mb-6">
              <span className="bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent bg-clip-text text-transparent">
                Bold creativity meets cosmic vision.
              </span>
            </h2>
            <p className="text-cosmic-light/90 text-lg mb-8 leading-relaxed">
              I'm Allison Gattone, a designer and storyteller who thrives on crafting imaginative branding 
              and design solutions. My journey includes collaborating on exciting projects at Beasley Media Group, 
              developing the bold and adventurous branding for Popping Peppers, and creating visionary designs 
              for Alli Draws, my personal creative brand.
            </p>
            <CTAButton>
              Explore My Journey
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};