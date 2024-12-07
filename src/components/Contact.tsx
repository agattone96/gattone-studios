import { motion } from "framer-motion";
import { ContactForm } from "./contact/ContactForm";

export const Contact = () => {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-[#2A1F3D] to-cosmic-dark opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cinzel text-4xl md:text-5xl mb-6"
          >
            <span className="bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent bg-clip-text text-transparent">
              Connect Across the Stars
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cosmic-light/90 text-lg"
          >
            Ready to embark on a creative journey together? Let's make something extraordinary.
          </motion.p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};