import React, { createContext, useContext, useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeContextType {
  isDark: boolean;
  scrollProgress: number;
}

const ThemeContext = createContext<ThemeContextType>({ isDark: true, scrollProgress: 0 });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / scrollHeight;
      setScrollProgress(currentProgress);
      setIsDark(currentProgress < 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, scrollProgress }}>
      <div className="fixed top-4 right-4 z-50" role="status" aria-label="Day/Night indicator">
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? 'moon' : 'sun'}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="text-cosmic-accent"
          >
            {isDark ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          </motion.div>
        </AnimatePresence>
      </div>
      {children}
    </ThemeContext.Provider>
  );
};