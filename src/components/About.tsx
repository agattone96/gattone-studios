import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faFacebookF,
  faArtstation,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Type definitions
interface SocialLink {
  platform: string;
  url: string;
  icon: any;
}

interface ContactInfo {
  email: string;
  phone: string;
  social: SocialLink[];
}

interface PersonalInfo {
  name: string;
  location: string;
  contact: ContactInfo;
}

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

// Main component
export const About: React.FC = () => {
  const personalInfo: PersonalInfo = {
    name: "Allison Gattone",
    location: "Tampa, Florida",
    contact: {
      email: "allisongattone@gmail.com",
      phone: "+1 (727) 271-2748",
      social: [
        {
          platform: "LinkedIn",
          url: "https://www.linkedin.com/in/allison-gattone/",
          icon: faLinkedinIn,
        },
        {
          platform: "Instagram",
          url: "https://www.instagram.com/allidraws_official/",
          icon: faInstagram,
        },
        {
          platform: "ArtStation",
          url: "https://www.artstation.com/allisongattone",
          icon: faArtstation,
        },
        {
          platform: "Facebook",
          url: "https://www.facebook.com/AllisonGattone/",
          icon: faFacebookF,
        },
        {
          platform: "Email",
          url: "mailto:allisongattone@gmail.com",
          icon: faEnvelope,
        },
      ],
    },
  };

  const timeline: TimelineEntry[] = [
    {
      year: "2020–Present",
      title: "Alli Draws",
      description:
        "Established Alli Draws as a visionary creative studio, delivering bold designs and innovative branding solutions across industries.",
    },
    {
      year: "2020–2023",
      title: "Tune Up the Manly Salon",
      description:
        "Spearheaded branding initiatives that transformed Tune Up the Manly Salon’s visual identity.",
    },
    {
      year: "2023–Present",
      title: "Popping Peppers",
      description:
        "Launched Popping Peppers, crafting a distinctive, vibrant identity reflecting bold flavors through cohesive packaging and branding strategies.",
    },
    {
      year: "2023–2024",
      title: "Staxx",
      description:
        "Designed sleek, minimalist branding solutions for Staxx, showcasing adaptability and professionalism.",
    },
    {
      year: "2023–Present",
      title: "SCL",
      description:
        "Developed compelling social media campaigns and striking visuals for SCL to enhance engagement and drive results.",
    },
  ];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-[#2A1F3D] to-cosmic-dark opacity-50" />
      <div className="container mx-auto px-4 relative z-10">

        {/* About Me Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="relative w-48 h-48 mx-auto mb-8">
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
          </div>

          <h2 className="font-cinzel text-4xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="text-cosmic-light/90 text-lg mb-12 space-y-4">
            <p>
              I’m Allison Gattone, an artist and creative professional passionate about merging art and strategy to build brands that stand out.
            </p>
            <p>
              As the founder of <span className="text-cosmic-accent">Alli Draws</span>, I’ve had the privilege of collaborating with clients from diverse industries, bringing their visions to life through thoughtful, impactful design.
            </p>
            <p>
              Whether crafting bold brand identities, designing product packaging, or developing digital campaigns, my goal is to help businesses connect with their audiences through meaningful and memorable visuals.
            </p>
            <div className="flex flex-col items-center space-y-2">
              <p className="font-semibold">{personalInfo.location}</p>
              <p>{personalInfo.contact.email}</p>
              <p>{personalInfo.contact.phone}</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <section className="mb-16">
          <h2 className="font-cinzel text-4xl text-center mb-10 text-cosmic-accent">Vision & Mission</h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="font-cinzel text-2xl mb-4 text-cosmic-accent">Vision</h3>
            <p className="text-cosmic-light/90 text-lg mb-6">
              To inspire connection and creativity through thoughtful design, crafting stories that leave lasting impressions and empower brands.
            </p>
            <h3 className="font-cinzel text-2xl mb-4 text-cosmic-accent">Mission</h3>
            <p className="text-cosmic-light/90 text-lg mb-6">
              To provide dynamic design solutions that amplify brand identity and engage audiences.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="font-cinzel text-4xl text-center mb-10 text-cosmic-accent">Skills</h2>
          <ul className="list-disc list-inside text-cosmic-light/90 text-lg max-w-3xl mx-auto">
            <li>Brand development and identity creation</li>
            <li>Digital illustration and concept art</li>
            <li>Packaging design</li>
            <li>Social media campaigns</li>
            <li>Collaborative client-focused approach</li>
          </ul>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="font-cinzel text-4xl text-center mb-10 text-cosmic-accent">Achievements</h2>
          <ul className="list-disc list-inside text-cosmic-light/90 text-lg max-w-3xl mx-auto">
            <li>Successfully launched and branded Popping Peppers</li>
            <li>Revitalized Tune Up the Manly Salon’s branding</li>
            <li>Built a loyal client base with Alli Draws</li>
            <li>Designed compelling social media campaigns for SCL</li>
            <li>Showcased versatility through diverse creative projects</li>
          </ul>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className="font-cinzel text-4xl text-center mb-10 text-cosmic-accent">Timeline</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {timeline.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className="w-24 text-right font-cinzel text-cosmic-accent">{entry.year}</div>
                <div className="w-4 h-4 rounded-full bg-cosmic-accent animate-pulse" />
                <div className="flex-1 p-4 rounded-lg bg-cosmic-dark/50">
                  <h4 className="font-cinzel mb-2">{entry.title}</h4>
                  <p>{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center py-16">
          <h3 className="font-cinzel text-3xl text-cosmic-accent mb-6">Let’s Create Something Amazing Together</h3>
          <p className="text-cosmic-light/90 text-lg mb-8 max-w-3xl mx-auto">
            Whether you’re looking to craft a bold new brand identity or elevate your digital presence, let’s collaborate.
          </p>
          <a
            href="mailto:allisongattone@gmail.com"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-lg bg-cosmic-accent text-cosmic-dark hover:bg-cosmic-light/90 transition-all duration-300"
          >
            Contact Me
          </a>
        </section>
      </div>
    </section>
  );
};

