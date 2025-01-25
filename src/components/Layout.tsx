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
    <div className="min-h-screen flex flex-col" role="document">
      <header role="banner">
        <Navigation />
      </header>
      <main className="flex-grow relative" role="main">
        <div 
          className="fixed inset-0 bg-cover bg-center opacity-10 mix-blend-overlay transition-opacity duration-500"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=2000')",
            opacity: isDark ? 0.1 : 0.3
          }}
          aria-hidden="true"
        />
        <div 
          className="fixed inset-0 bg-gradient-to-b from-cosmic-dark/90 via-cosmic-dark/70 to-cosmic-dark/90 pointer-events-none" 
          aria-hidden="true"
        />
        <div className="relative z-10 text-cosmic-light">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};