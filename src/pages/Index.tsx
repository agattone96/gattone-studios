import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
    </main>
  );
};

export default Index;