import { motion } from "framer-motion";

export const About = () => {
  const values = [
    { icon: "🔮", title: "Curiosity", description: "Always exploring new creative frontiers" },
    { icon: "💜", title: "Authenticity", description: "True to vision and values" },
    { icon: "✨", title: "Imagination", description: "Pushing boundaries of possibility" }
  ];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-[#2A1F3D] to-cosmic-dark opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent opacity-20"
            />
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
                alt="Allison Gattone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-cosmic-light/90 text-lg mb-12">
            Digital artist and designer crafting unique experiences at the intersection of cosmic wonder and gothic elegance. 
            My work explores the boundaries between light and shadow, merging celestial beauty with dark sophistication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20 hover:border-cosmic-accent/40 transition-colors"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-cinzel text-xl mb-2 text-cosmic-accent">{value.title}</h3>
              <p className="text-cosmic-light/80">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="font-cinzel text-2xl mb-6 text-center text-cosmic-accent">Journey Through The Stars</h3>
          <div className="space-y-8">
            {[2021, 2022, 2023].map((year, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className="w-24 text-right font-cinzel text-cosmic-accent">{year}</div>
                <div className="w-4 h-4 rounded-full bg-cosmic-accent animate-pulse" />
                <div className="flex-1 p-4 rounded-lg bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20">
                  <h4 className="font-cinzel mb-2">Milestone Achievement</h4>
                  <p className="text-cosmic-light/80">
                    Significant project or achievement description for {year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};