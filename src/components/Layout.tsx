import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isDark } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay transition-opacity duration-500"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=2000')",
            opacity: isDark ? 0.1 : 0.3
          }}
        />
        <canvas
          id="starfieldCanvas"
          className="absolute inset-0 z-0"
          style={{
            opacity: isDark ? 1 : 0.3,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        <div className="relative z-10">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};