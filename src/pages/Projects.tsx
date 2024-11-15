import { Navigation } from '../components/Navigation';
import { Projects as ProjectsSection } from '../components/Projects';
import { Footer } from '../components/Footer';

const Projects = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
};

export default Projects;