import { AboutHero } from "./about/AboutHero";
import { Timeline } from "./about/Timeline";
import { Skills } from "./about/Skills";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2020–Present",
    title: "Alli Draws",
    description: "Established Alli Draws as a visionary creative studio, delivering bold designs and innovative branding solutions.",
  },
  {
    year: "2020–2023",
    title: "Tune Up the Manly Salon",
    description: "Spearheaded branding initiatives that transformed the salon's visual identity.",
  },
  {
    year: "2023–Present",
    title: "Popping Peppers",
    description: "Crafted a distinctive, vibrant identity reflecting bold flavors through cohesive packaging and branding strategies.",
  },
];

export const About = () => {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-[#2A1F3D] to-cosmic-dark opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <AboutHero />
        <Skills />
        <Timeline entries={timeline} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-20"
        >
          <h3 className="mb-6">Let's Create Something Amazing</h3>
          <p className="text-cosmic-light/90 text-lg mb-8 max-w-3xl mx-auto">
            Whether you're looking to craft a bold new brand identity or elevate your digital presence,
            let's collaborate on something extraordinary.
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