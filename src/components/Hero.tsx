export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark to-transparent" />
      <div className="relative z-10 text-center">
        <h1 className="font-cinzel text-6xl md:text-8xl text-cosmic-light">Welcome to My Cosmic Collection</h1>
        <p className="mt-4 text-cosmic-light/80 text-xl md:text-2xl">Exploring the depths of creativity and design</p>
      </div>
    </section>
  );
};
