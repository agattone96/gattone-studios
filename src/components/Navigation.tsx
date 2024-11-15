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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-cosmic-dark/90 backdrop-blur-sm py-4 shadow-lg' : 'py-6'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="font-cinzel text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('hero')}>
          <span className="bg-gradient-to-r from-cosmic-accent to-cosmic-purple bg-clip-text text-transparent">
            Allison Gattone
          </span>
        </h1>
        <div className="space-x-8 hidden md:block">
          <button onClick={() => scrollToSection('hero')} className="nav-link group">
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cosmic-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link group">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cosmic-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          <button onClick={() => scrollToSection('meet-the-artist')} className="nav-link group">
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cosmic-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link group">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cosmic-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
    </nav>
  );
};