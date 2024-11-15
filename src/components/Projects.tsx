import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Cosmic Dreams",
    category: "Digital Art",
    image: "https://source.unsplash.com/random/800x600/?space",
  },
  {
    id: 2,
    title: "Mystic Portals",
    category: "Web Design",
    image: "https://source.unsplash.com/random/800x600/?galaxy",
  },
  {
    id: 3,
    title: "Enchanted Realms",
    category: "Illustration",
    image: "https://source.unsplash.com/random/800x600/?fantasy",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="font-cinzel text-4xl mb-12 text-center">
          Featured <span className="text-cosmic-accent">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-cosmic-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-cinzel text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-cosmic-light/80">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};