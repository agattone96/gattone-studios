import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cosmic-dark/90 backdrop-blur-sm py-4' : 'py-6'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-cinzel text-2xl font-bold">
          <span className="text-cosmic-accent">A</span>llison Gattone
        </h1>
        <div className="space-x-8">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};