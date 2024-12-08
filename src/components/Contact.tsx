import { motion } from "framer-motion";
import { ContactForm } from "./contact/ContactForm";

export const ContactSection = () => {
  return (
    <section className="cosmic-section">
      <div className="cosmic-gradient" />
      <div className="cosmic-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="cosmic-heading font-cinzel text-4xl sm:text-5xl md:text-6xl mb-6">
            Contact Me
          </h2>
          <p className="cosmic-text text-lg max-w-2xl mx-auto">
            Let's create something extraordinary together.
          </p>
        </motion.div>
        <ContactForm />
      </div>
    </section>
  );
};