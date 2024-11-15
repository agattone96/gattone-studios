import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </Layout>
  );
};

export default Index;