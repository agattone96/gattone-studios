import { AboutHero } from "./about/AboutHero";
import { Timeline } from "./about/Timeline";
import { Skills } from "./about/Skills";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="cosmic-section">
      <div className="cosmic-gradient" />
      <div className="cosmic-container">
        <AboutHero />
        <Skills />
        <Timeline
          entries={[
            {
              year: "2020–Present",
              title: "Alli Draws",
              description: "Established Alli Draws as a visionary creative studio, delivering bold designs and innovative branding solutions that captivate and inspire.",
            },
            {
              year: "2020–2023",
              title: "Tune Up the Manly Salon",
              description: "Spearheaded comprehensive branding initiatives that transformed the salon's visual identity and elevated their market presence.",
            },
            {
              year: "2023–Present",
              title: "Popping Peppers",
              description: "Crafted a distinctive, vibrant brand identity that perfectly captures bold flavors through cohesive packaging and innovative branding strategies.",
            },
          ]}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="cosmic-heading mb-6">Driven by passion, inspired by the cosmos</h3>
          <p className="cosmic-text mb-8 max-w-3xl mx-auto">
            Whether you're looking to craft a bold new brand identity or elevate your digital presence,
            I'm here to help transform your vision into reality. Let's create something extraordinary together.
          </p>
          <a
            href="mailto:allisongattone@gmail.com"
            className="btn mx-auto"
          >
            <strong>GET IN TOUCH</strong>
            <div id="container-stars">
              <div id="stars" />
            </div>
            <div id="glow">
              <div className="circle" />
              <div className="circle" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};