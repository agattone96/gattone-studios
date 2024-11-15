import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Ethereal Branding",
    category: "Brand Identity",
    description: "A collection of mystical brand identities that transcend conventional design.",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800",
    fullDescription: "Exploring the intersection of cosmic aesthetics and brand identity, creating memorable and mystical visual experiences.",
  },
  {
    id: 2,
    title: "Dark Elegance",
    category: "Web Design",
    description: "Minimalist yet moody web experiences that captivate and engage.",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800",
    fullDescription: "Web designs that blend dark aesthetics with elegant functionality, creating immersive digital experiences.",
  },
  {
    id: 3,
    title: "Luminous Visions",
    category: "Digital Art",
    description: "Bold experimental works with glowing, otherworldly elements.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800",
    fullDescription: "A series of digital artworks exploring the boundaries between light and darkness in the cosmic realm.",
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-[#2A1F3D] to-cosmic-dark opacity-50" />
      <div className="container mx-auto relative z-10">
        <h2 className="font-cinzel text-4xl md:text-5xl mb-12 text-center">
          <span className="bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="project-card group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-cinzel text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-cosmic-light/80 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {project.category}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-cosmic-accent/0 group-hover:border-cosmic-accent/50 rounded-lg transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-cosmic-dark/95 border-cosmic-accent/20 text-cosmic-light max-w-4xl">
          <DialogHeader>
            <DialogTitle className="font-cinzel text-2xl text-cosmic-accent">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-cosmic-light/80 mb-2">{selectedProject?.category}</p>
            <p className="text-cosmic-light/90">{selectedProject?.fullDescription}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};