import { motion } from "framer-motion";

export const About = () => {
  const personalInfo = {
    name: "Allison Gattone",
    location: "Tampa, Florida",
    contact: {
      email: "allisongattone@gmail.com",
      phone: "+1 (727) 271-2748",
      social: [
        { platform: "Instagram", url: "www.instagram.com/poppingpeppersofficial" },
        { platform: "Facebook", url: "www.facebook.com/poppingpeppersofficial" },
        { platform: "Twitter", url: "www.twitter.com/PoppingPeppers" },
        { platform: "LinkedIn", url: "www.linkedin.com/in/allison-gattone" }
      ]
    }
  };

  const projects = [
    {
      year: 2023,
      title: "Alli Draws Launch",
      description: "Launched creative design studio specializing in custom designs and branding strategies"
    },
    {
      year: 2022,
      title: "Popping Peppers Brand Creation",
      description: "Created and launched the fiery hot sauce brand with complete brand identity"
    },
    {
      year: 2021,
      title: "Creative Director Position",
      description: "Began role as Creative Director, leading brand innovation projects"
    }
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
          <div className="text-cosmic-light/90 text-lg mb-12 space-y-4">
            <p>
              Born in Atlanta, Georgia, Allison Gattone embodies a bold and adventurous spirit. As a self-taught artist, 
              her journey into the creative world began purely out of passion. With no formal training, she has cultivated 
              a unique, compelling voice through her work, drawing inspiration from her global travels and deep appreciation 
              for storytelling.
            </p>
            <div className="flex flex-col items-center space-y-2">
              <p className="font-semibold">{personalInfo.location}</p>
              <p>{personalInfo.contact.email}</p>
              <p>{personalInfo.contact.phone}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-6 rounded-lg bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20"
          >
            <h3 className="font-cinzel text-2xl mb-4 text-cosmic-accent">Professional Expertise</h3>
            <p className="text-cosmic-light/80">
              Allison excels as a Creative Director and Brand Innovator, specializing in bringing bold, unforgettable ideas to life. 
              She is the driving force behind two standout brands: Alli Draws and Popping Peppers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-6 rounded-lg bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20"
          >
            <h3 className="font-cinzel text-2xl mb-4 text-cosmic-accent">Connect With Me</h3>
            <div className="space-y-2">
              {personalInfo.contact.social.map((platform) => (
                <a
                  key={platform.platform}
                  href={`https://${platform.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cosmic-light/80 hover:text-cosmic-accent transition-colors"
                >
                  {platform.platform}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="font-cinzel text-2xl mb-6 text-center text-cosmic-accent">Journey Through The Stars</h3>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className="w-24 text-right font-cinzel text-cosmic-accent">{project.year}</div>
                <div className="w-4 h-4 rounded-full bg-cosmic-accent animate-pulse" />
                <div className="flex-1 p-4 rounded-lg bg-cosmic-dark/50 backdrop-blur-lg border border-cosmic-accent/20">
                  <h4 className="font-cinzel mb-2">{project.title}</h4>
                  <p className="text-cosmic-light/80">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};