import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    id: 1,
    title: "Popping Peppers",
    category: "Branding with Bite",
    description: "Bold and vibrant hot sauce brand featuring striking logo design, eye-catching product labels, and custom packaging.",
    image: "https://images.unsplash.com/photo-1601560496309-fa7d98d0aabd?auto=format&fit=crop&w=800",
    tools: "Adobe Illustrator, Photoshop",
    images: [
      "https://images.unsplash.com/photo-1601560496309-fa7d98d0aabd?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1516876902004-79f4bd1cb0dc?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1578242174372-3d9b276c9fe7?auto=format&fit=crop&w=800"
    ],
    fullDescription: "A fiery brand identity that captures the essence of bold flavors and passionate craftsmanship. The project encompasses logo design, product labels, custom packaging, high-resolution photography, and engaging social media graphics.",
  },
  {
    id: 2,
    title: "Alli Draws",
    category: "A Universe of Creativity",
    description: "Personal creative showcase featuring hand-drawn art, custom designs, and innovative products.",
    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=800",
    tools: "Traditional Media, Digital Illustration, Adobe Creative Suite",
    images: [
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800"
    ],
    fullDescription: "A creative playground showcasing intricate illustrations, custom packaging designs, and merchandise featuring signature artwork. The style blends cosmic and magical elements with a distinctive palette of purples, blacks, and neon accents.",
  },
  {
    id: 3,
    title: "Tune Up the Manly Salon",
    category: "Bold Visual Branding",
    description: "Strong, cohesive visual branding for a modern men's salon, featuring photography and promotional materials.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800",
    tools: "Photography, Adobe Photoshop, Illustrator",
    images: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800"
    ],
    fullDescription: "A comprehensive branding project that captures the masculine and modern atmosphere of the salon through professional photography, impactful sticker design, and eye-catching social media graphics.",
  },
  {
    id: 4,
    title: "Staxx",
    category: "Modern Logo Design",
    description: "Sleek, modern logo and visual identity design focusing on sophistication and professionalism.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800",
    tools: "Adobe Illustrator, After Effects",
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800"
    ],
    fullDescription: "A minimalist yet sophisticated branding project featuring a custom logo design and cohesive social media assets, blending professional aesthetics with cosmic undertones.",
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const navigate = useNavigate();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-[#2A1F3D] to-cosmic-dark opacity-50" />
      
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark/90 via-cosmic-dark/70 to-cosmic-dark/90" />
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="font-cinzel text-4xl md:text-5xl mb-12 text-center">
          <span className="bg-gradient-to-r from-cosmic-accent via-cosmic-purple to-cosmic-accent bg-clip-text text-transparent animate-glow">
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

        {/* Call to Action Banner */}
        <div className="mt-20 text-center p-8 bg-cosmic-dark/50 backdrop-blur-lg rounded-lg border border-cosmic-accent/20">
          <h3 className="font-cinzel text-2xl mb-4 text-cosmic-light">
            Inspired by what you see? Let's create something extraordinary together!
          </h3>
          <Button 
            onClick={() => navigate('/contact')}
            className="cosmic-button bg-cosmic-accent hover:bg-cosmic-accent/80 text-white"
          >
            Contact Me
          </Button>
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
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {selectedProject?.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={image}
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="mt-4">
              <p className="text-cosmic-light/80 mb-2">{selectedProject?.category}</p>
              <p className="text-cosmic-light/90 mb-4">{selectedProject?.fullDescription}</p>
              <p className="text-cosmic-accent text-sm">Tools: {selectedProject?.tools}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};