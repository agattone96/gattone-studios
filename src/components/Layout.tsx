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
        {/* Primary Background */}
        <div 
          className="fixed inset-0 bg-cover bg-center opacity-10 mix-blend-overlay transition-opacity duration-500"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=2000')",
            opacity: isDark ? 0.1 : 0.3
          }}
          aria-hidden="true"
        />
        
        {/* Creative Elements Overlay */}
        <div 
          className="fixed inset-0 bg-cover bg-center opacity-5 mix-blend-overlay"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=2000')",
          }}
          aria-hidden="true"
        />
        
        {/* Gradient Overlay */}
        <div 
          className="fixed inset-0 bg-gradient-to-b from-cosmic-dark/90 via-cosmic-dark/70 to-cosmic-dark/90 pointer-events-none" 
          aria-hidden="true"
        />
        
        {/* Floating Elements */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=300"
              alt=""
              className="w-full h-full object-cover rounded-full animate-float"
            />
          </div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=300"
              alt=""
              className="w-full h-full object-cover rounded-full animate-float"
              style={{ animationDelay: '1s' }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-cosmic-light">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};