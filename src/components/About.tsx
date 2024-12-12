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
              year: "2023–Present",
              title: "Popping Peppers",
              description: "Crafted a distinctive, vibrant brand identity that perfectly captures bold flavors through cohesive packaging and innovative branding strategies.",
              image: "https://i.postimg.cc/1tRRb1kc/1f24af025c4f01e3.png",
              imageAlt: "Popping Peppers Logo",
              skills: ["Branding", "Package Design", "Marketing Strategy"]
            },
            {
              year: "2022–Present",
              title: "Staxx",
              description: "Leading creative initiatives and brand development for an innovative retail concept, combining modern aesthetics with strategic marketing approaches.",
              image: "https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.30808-6/461268755_1095215785324161_9120966974527925569_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=8HuXOUd9WOgQ7kNvgECPxOR&_nc_zt=23&_nc_ht=scontent.ftpa1-2.fna&_nc_gid=APqHeFtXqfu2QrwG8OOQkj4&oh=00_AYB6yl_hCFvuHq0Vz3iUtPuxlrIKJxiSyBvYk_1KBesBsA&oe=6760B390",
              imageAlt: "Staxx Logo",
              skills: ["Brand Development", "Visual Design", "Marketing"]
            },
            {
              year: "2020–Present",
              title: "SC Liquidator",
              description: "Established comprehensive branding initiatives and marketing strategies that elevated the company's market presence and customer engagement.",
              image: "https://i.postimg.cc/hjSC1fc6/SCL-Logo-Profile-Pic.jpg",
              imageAlt: "SC Liquidator Logo",
              skills: ["Brand Strategy", "Digital Marketing", "Customer Engagement"]
            }
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