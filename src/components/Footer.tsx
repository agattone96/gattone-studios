import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark to-transparent" />
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-cinzel text-xl mb-4 text-cosmic-accent">Navigation</h4>
              <ul className="space-y-2">
                {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-cosmic-light/80 hover:text-cosmic-accent transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-cinzel text-xl mb-4 text-cosmic-accent">Stay in Orbit</h4>
              <p className="text-cosmic-light/80 mb-4">Subscribe to receive updates and insights</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 
                           text-cosmic-light focus:border-cosmic-accent/60 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-cosmic-accent text-white rounded-r-lg hover:bg-cosmic-accent/90 transition-colors"
                >
                  Join
                </button>
              </form>
            </div>

            <div>
              <h4 className="font-cinzel text-xl mb-4 text-cosmic-accent">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/allidraws_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 
                           flex items-center justify-center text-cosmic-light hover:border-cosmic-accent/60 
                           hover:text-cosmic-accent transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/AllisonGattone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 
                           flex items-center justify-center text-cosmic-light hover:border-cosmic-accent/60 
                           hover:text-cosmic-accent transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/allison-gattone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 
                           flex items-center justify-center text-cosmic-light hover:border-cosmic-accent/60 
                           hover:text-cosmic-accent transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:allisongattone@gmail.com"
                  className="w-10 h-10 rounded-full bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 
                           flex items-center justify-center text-cosmic-light hover:border-cosmic-accent/60 
                           hover:text-cosmic-accent transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-cosmic-light/60 pt-8 border-t border-cosmic-accent/20">
            <p>© 2024 Allison Gattone. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};