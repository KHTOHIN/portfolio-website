import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import { Navbar } from './components/Navbar';
import { SidebarNav } from './components/SidebarNav';
import { SocialSidebar } from './components/SocialSidebar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { PersonalProjects } from './components/PersonalProjects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Testimonials } from './components/Testimonials';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';

const AppContent: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${isDark ? 'bg-cyber-dark selection:bg-cyber-accent/20 selection:text-cyber-accent' : 'bg-light-bg selection:bg-light-accent/20 selection:text-light-accent'}`}>
      <Navbar />
      <SidebarNav />
      <SocialSidebar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Skills />
        <Projects />
        <PersonalProjects />
        <Experience />
        <Certifications />
        <Achievements />
        <Testimonials />
        <Writing />
      </main>
      <Contact />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
