import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  title: string;
  category: string;
  fullDescription: string;
  tools: string;
  images: string[];
}

interface ProjectDialogProps {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}

export const ProjectDialog = ({ project, onOpenChange }: ProjectDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent className="bg-cosmic-dark/95 border-cosmic-accent/20 text-cosmic-light max-w-4xl">
        <DialogHeader>
          <DialogTitle className="font-cinzel text-2xl text-cosmic-accent">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
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
            <p className="text-cosmic-light/80 mb-2">{project.category}</p>
            <p className="text-cosmic-light/90 mb-4">{project.fullDescription}</p>
            <p className="text-cosmic-accent text-sm">Tools: {project.tools}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};