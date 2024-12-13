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
              title: "SC Liquidator",
              role: "Executive Assistant, Digital Media & Operations Support",
              description: "Led B2B wholesale operations overhaul driving 10% revenue increase, while optimizing event coordination and operational workflows using Salesforce Lightning. Increased executive efficiency by 15% through streamlined processes.",
              image: "https://i.postimg.cc/hjSC1fc6/SCL-Logo-Profile-Pic.jpg",
              imageAlt: "SC Liquidator Logo",
              skills: ["Digital Operations", "Salesforce Lightning", "B2B Strategy"],
              gallery: "https://allisongattone.artstation.com/projects/DLdnO9"
            },
            {
              year: "2019–Present",
              title: "Alli Draws Inc.",
              role: "Owner & Digital Media Specialist",
              description: "Founded and operated a successful creative business specializing in custom merchandise design and digital media services. Consistently achieved 100% client satisfaction through end-to-end creative process management.",
              image: "https://cdna.artstation.com/p/assets/images/images/082/458/512/large/allison-gattone-popping-peppers-full-logo-design-red-orange-variant.jpg?1733058734",
              imageAlt: "Alli Draws Logo",
              skills: ["Brand Design", "Digital Media", "Creative Direction"],
              gallery: "https://allisongattone.artstation.com"
            },
            {
              year: "2022",
              title: "Beasley Media Group",
              role: "Digital Client Service Manager",
              description: "Achieved 20% improvement in client satisfaction through data-driven campaigns and streamlined content approval processes, reducing turnaround time by 25%. Enhanced engagement metrics by 15% through cross-team collaboration.",
              image: "https://images.unsplash.com/photo-1598128558393-70ff21433be0?auto=format&fit=crop&w=800",
              imageAlt: "Beasley Media Group Representation",
              skills: ["Client Management", "Campaign Optimization", "Analytics"]
            },
            {
              year: "2021",
              title: "Tune Up - The Manly Salon",
              role: "Executive Management Assistant & Social Media Coordinator",
              description: "Reinvigorated social media strategy resulting in 20% increased engagement. Organized promotional events to expand brand reach and visibility while managing administrative operations.",
              image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800",
              imageAlt: "Tune Up - The Manly Salon",
              skills: ["Social Media Strategy", "Event Planning", "Brand Management"],
              gallery: "https://allisongattone.artstation.com/projects/bgV68G"
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
          <motion.a
            href="mailto:allisongattone@gmail.com"
            className="btn mx-auto scale-125"
            whileHover={{ 
              scale: 1.35,
              boxShadow: "0 0 30px rgba(255, 113, 154, 0.5)"
            }}
            whileTap={{ scale: 1.25 }}
          >
            <strong className="tracking-wider">GET IN TOUCH</strong>
            <div id="container-stars">
              <div id="stars" className="animate-twinkle" />
            </div>
            <div id="glow">
              <div className="circle animate-pulse" />
              <div className="circle animate-pulse delay-75" />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};