import React from 'react';
import HeroSection from './sections/HeroSection';
import Timeline from './sections/Timeline';
import Projects from './sections/Projects';
import CertificationsAwards from './sections/CertificationsAwards';
import Footer from './sections/Footer';
import VerticalNavbar from './components/VeritcalNavbar';
import { Element } from 'react-scroll';

const App: React.FC = () => {
  return (
    <div>
      <VerticalNavbar />
      <Element name="home">
        <HeroSection />
      </Element>
      <Element name="timeline">
        <Timeline />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="certifications-awards">
        <CertificationsAwards />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
};

export default App;
