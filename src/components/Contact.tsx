import { motion } from "framer-motion";
import { ContactForm } from "./contact/ContactForm";

export const ContactSection = () => {
  return (
    <section className="cosmic-section">
      <div className="cosmic-gradient" />
      <div className="cosmic-container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="cosmic-heading text-4xl md:text-5xl mb-6"
          >
            Connect Across the Stars
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="cosmic-text text-lg"
          >
            Ready to embark on a creative journey together? Let's make something extraordinary.
          </motion.p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};