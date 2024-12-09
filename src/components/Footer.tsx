```jsx
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faFacebookF, faArtstation } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Star, Sparkles } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: faInstagram,
      url: "https://www.instagram.com/allidraws_official",
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      icon: faFacebookF,
      url: "https://www.facebook.com/AllisonGattone",
      label: "Facebook",
      color: "hover:text-blue-400"
    },
    {
      icon: faLinkedinIn,
      url: "https://www.linkedin.com/in/allison-gattone",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: faArtstation,
      url: "https://www.artstation.com/allisongattone",
      label: "ArtStation",
      color: "hover:text-blue-300"
    },
    {
      icon: faEnvelope,
      url: "mailto:allisongattone@gmail.com",
      label: "Email",
      color: "hover:text-cosmic-accent"
    }
  ];

  return (
    <footer className="relative py-16 overflow-hidden bg-gradient-to-b from-cosmic-darker via-cosmic-dark to-cosmic-darker">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark via-transparent to-transparent" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="font-cinzel text-xl mb-4 text-cosmic-accent flex items-center gap-2">
                <Star className="w-5 h-5 animate-pulse" />
                Navigation
              </h4>
              <ul className="space-y-3">
                {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
                      className="text-cosmic-light/80 hover:text-cosmic-accent transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="h-px w-4 bg-cosmic-accent/30 group-hover:w-6 transition-all duration-300" />
                      <span>{item}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="font-cinzel text-xl mb-4 text-cosmic-accent flex items-center gap-2">
                <Sparkles className="w-5 h-5 animate-pulse" />
                Stay in Orbit
              </h4>
              <p className="text-cosmic-light/80 mb-6">Join our cosmic journey for updates and insights</p>
              <form className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-lg bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 text-cosmic-light focus:border-cosmic-accent/60 focus:outline-none transition-colors hover:border-cosmic-accent/40"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-cosmic-accent to-cosmic-purple text-white rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-cosmic-accent/20"
                >
                  Join the Journey
                </motion.button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h4 className="font-cinzel text-xl mb-4 text-cosmic-accent">Connect</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 flex items-center justify-center text-cosmic-light ${link.color} hover:border-cosmic-accent transition-all duration-300`}
                    aria-label={link.label}
                  >
                    <FontAwesomeIcon icon={link.icon} className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-cosmic-light/60 pt-8 border-t border-cosmic-accent/20"
          >
            <p className="text-sm">
              © 2024 Allison Gattone. All rights reserved. 
              <span className="inline-block mx-2">•</span> 
              Crafted with passion in the digital cosmos
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```