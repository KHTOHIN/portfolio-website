import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { PersonalProjects } from './components/PersonalProjects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Testimonials } from './components/Testimonials';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';

const AppContent: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? 'bg-slate-900 selection:bg-blue-900 selection:text-blue-100' : 'bg-slate-50 selection:bg-blue-100 selection:text-blue-900'}`}>
      <Navbar />
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
