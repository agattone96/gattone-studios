import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faFacebookF, faArtstation } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const socialLinks = [
    {
      icon: faInstagram,
      url: "https://www.instagram.com/allidraws_official",
      label: "Instagram"
    },
    {
      icon: faFacebookF,
      url: "https://www.facebook.com/AllisonGattone",
      label: "Facebook"
    },
    {
      icon: faLinkedinIn,
      url: "https://www.linkedin.com/in/allison-gattone",
      label: "LinkedIn"
    },
    {
      icon: faArtstation,
      url: "https://www.artstation.com/allisongattone",
      label: "ArtStation"
    },
    {
      icon: faEnvelope,
      url: "mailto:allisongattone@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Enhanced gradient background with pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark via-cosmic-dark/90 to-transparent">
        <div className="absolute inset-0 opacity-5" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
             }}
        />
      </div>
      
      {/* Animated gradient border */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <h4 className="font-cinzel text-xl mb-4 text-cosmic-accent">Navigation</h4>
              <ul className="space-y-3">
                {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
                      className="text-cosmic-light/80 hover:text-cosmic-accent transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span className="h-px w-4 bg-cosmic-accent/30"></span>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-cinzel text-xl mb-4 text-cosmic-accent">Stay in Orbit</h4>
              <p className="text-cosmic-light/80 mb-6">Subscribe to receive updates and insights</p>
              <form className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-lg bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 
                           text-cosmic-light focus:border-cosmic-accent/60 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-cosmic-accent text-white rounded-lg hover:bg-cosmic-accent/90 
                           transition-all duration-300 transform hover:translate-y-[-2px]"
                >
                  Join the Journey
                </button>
              </form>
            </div>

            <div className="space-y-4">
              <h4 className="font-cinzel text-xl mb-4 text-cosmic-accent">Connect</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 
                             flex items-center justify-center text-cosmic-light hover:border-cosmic-accent 
                             hover:text-cosmic-accent hover:scale-110 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <FontAwesomeIcon icon={link.icon} className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center text-cosmic-light/60 pt-8 border-t border-cosmic-accent/20">
            <p className="text-sm">
              © 2024 Allison Gattone. All rights reserved. 
              <span className="inline-block mx-2">•</span> 
              Crafted with passion in the digital cosmos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};