import { useEffect, useRef } from 'react';

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Stars configuration
    const stars: Array<{ x: number; y: number; size: number; twinkle: number }> = [];
    const shootingStars: Array<{ x: number; y: number; speed: number; length: number; active: boolean }> = [];
    
    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        twinkle: Math.random() * 0.02,
      });
    }

    // Create shooting stars
    for (let i = 0; i < 5; i++) {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: 0,
        speed: 5 + Math.random() * 10,
        length: 50 + Math.random() * 50,
        active: false,
      });
    }

    let frame = 0;
    const animate = () => {
      frame++;
      ctx.fillStyle = 'rgba(26, 31, 44, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate stars
      stars.forEach((star) => {
        const opacity = Math.sin(frame * star.twinkle) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(229, 222, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Animate shooting stars
      shootingStars.forEach((star) => {
        if (!star.active && Math.random() < 0.01) {
          star.active = true;
          star.x = Math.random() * canvas.width;
          star.y = 0;
        }

        if (star.active) {
          ctx.strokeStyle = 'rgba(255, 113, 154, 0.8)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x - star.length, star.y - star.length);
          ctx.stroke();

          star.x += star.speed;
          star.y += star.speed;

          if (star.y > canvas.height) {
            star.active = false;
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cosmic-dark via-[#2A1F3D] to-cosmic-dark">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="font-cinzel text-6xl md:text-7xl lg:text-8xl mb-6 animate-float">
          <span className="bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent bg-clip-text text-transparent animate-glow">
            Cosmic Creations
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-cosmic-light/90 font-inter">
          Crafting Digital Magic & Memorable Experiences in the Dark Cosmos
        </p>
        <button className="cosmic-button group relative overflow-hidden">
          <span className="relative z-10">Explore My Work</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple via-cosmic-accent to-cosmic-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </div>
  );
};