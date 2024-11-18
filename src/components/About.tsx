import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faFacebookF, faArtstation } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  const personalInfo = {
    name: "Allison Gattone",
    location: "Tampa, Florida",
    contact: {
      email: "allisongattone@gmail.com",
      phone: "+1 (727) 271-2748",
      social: [
        { 
          platform: "LinkedIn", 
          url: "https://www.linkedin.com/in/allison-gattone/", 
          icon: faLinkedinIn 
        },
        { 
          platform: "Instagram", 
          url: "https://www.instagram.com/allidraws_official/", 
          icon: faInstagram 
        },
        { 
          platform: "ArtStation", 
          url: "https://www.artstation.com/allisongattone", 
          icon: faArtstation 
        },
        { 
          platform: "Facebook", 
          url: "https://www.facebook.com/AllisonGattone/", 
          icon: faFacebookF 
        },
        { 
          platform: "Email", 
          url: "mailto:allisongattone@gmail.com", 
          icon: faEnvelope 
        }
      ]
    }
  };

  const timeline = [
    {
      year: "2020–Present",
      title: "Alli Draws",
      description:
        "Built Alli Draws as a versatile and passion-driven brand, producing art and design projects that span multiple industries."
    },
    {
      year: "2020–2023",
      title: "Tune Up the Manly Salon",
      description:
        "Elevated Tune Up the Manly Salon's branding with polished photography and creative promotional materials."
    },
    {
      year: "2023–Present",
      title: "Popping Peppers",
      description:
        "Established Popping Peppers as a bold, cohesive hot sauce brand that highlights expertise in branding and product design."
    },
    {
      year: "2023–2024",
      title: "Staxx",
      description:
        "Delivered sleek, minimalist branding solutions for Staxx, showcasing adaptability and professionalism."
    },
    {
      year: "2023–Present",
      title: "SCL",
      description:
        "Created impactful social media campaigns and assets for SCL, aligning visuals with strategic goals."
    }
  ];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-[#2A1F3D] to-cosmic-dark opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Profile Image Section */}
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

          {/* About Section */}
          <h2 className="font-cinzel text-4xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="text-cosmic-light/90 text-lg mb-12 space-y-4">
            <p>
              Born in Atlanta, Georgia, and raised in Peachtree Corners, Allison Gattone is a self-taught artist and brand visionary 
              whose creative journey spans art, design, and storytelling. With a passion for bold expression and an eye for detail, 
              she has crafted a portfolio that speaks to her versatility and drive.
            </p>
            <p>
              Allison is the founder of <span className="text-cosmic-accent">Alli Draws</span>, a creative studio showcasing her talent 
              for blending intricate artistry with functional design. From custom branding to merchandise creation, she thrives on turning 
              ideas into visually compelling realities. Her work includes building unique brands that reflect her passion for storytelling 
              and design innovation.
            </p>
            <div className="flex flex-col items-center space-y-2">
              <p className="font-semibold">{personalInfo.location}</p>
              <p>{personalInfo.contact.email}</p>
              <p>{personalInfo.contact.phone}</p>
            </div>
          </div>

          {/* Social Links */}
          <h3 className="font-cinzel text-2xl mb-4 text-cosmic-accent">Connect With Me</h3>
          <div className="flex justify-center space-x-6 mb-16">
            {personalInfo.contact.social.map((platform) => (
              <motion.a
                key={platform.platform}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 
                         flex items-center justify-center text-cosmic-light hover:border-cosmic-accent/60 
                         hover:text-cosmic-accent transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <FontAwesomeIcon icon={platform.icon} className="text-xl" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-cinzel text-2xl mb-6 text-center text-cosmic-accent">Timeline</h3>
          <div className="space-y-8">
            {timeline.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className="w-24 text-right font-cinzel text-cosmic-accent">{entry.year}</div>
                <div className="w-4 h-4 rounded-full bg-cosmic-accent animate-pulse" />
                <div className="flex-1 p-4 rounded-lg bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20">
                  <h4 className="font-cinzel mb-2">{entry.title}</h4>
                  <p className="text-cosmic-light/80">{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};