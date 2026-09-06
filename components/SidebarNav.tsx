import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { ArrowUp, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const SidebarNav: React.FC = () => {
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const sections = [
    { id: 'hero', name: 'Hero' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Enterprise' },
    { id: 'personal-projects', name: 'Personal Work' },
    { id: 'experience', name: 'Experience' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'blog', name: 'Writing' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside 
      aria-label="Quick Page Navigation" 
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-center gap-2.5 p-2 rounded-full border backdrop-blur-md transition-all duration-300"
      style={{
        backgroundColor: isDark ? 'rgba(15, 21, 37, 0.75)' : 'rgba(255, 255, 255, 0.85)',
        borderColor: isDark ? 'rgba(26, 35, 64, 0.8)' : 'rgba(226, 232, 240, 0.9)',
        boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 25px rgba(0,0,0,0.06)'
      }}
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        const isHovered = hoveredSection === section.id;

        return (
          <div 
            key={section.id} 
            className="relative flex items-center justify-center group"
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Tooltip on left */}
            <div 
              className={`absolute right-full mr-3 px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap pointer-events-none transition-all duration-200 ${
                isHovered || isActive
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-2'
              } ${
                isActive
                  ? (isDark ? 'bg-cyber-accent text-cyber-darker font-bold shadow-md shadow-cyan-950/50' : 'bg-light-accent text-white font-bold shadow-md')
                  : (isDark ? 'bg-cyber-card text-cyber-text border border-cyber-border' : 'bg-white text-light-text border border-light-border shadow-sm')
              }`}
            >
              {section.name}
            </div>

            {/* Nav Pill/Dot */}
            <a
              href={`#${section.id}`}
              className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                isActive
                  ? `w-3 h-7 ${isDark ? 'bg-cyber-accent shadow-lg shadow-cyan-400/50' : 'bg-light-accent shadow-md shadow-cyan-600/40'}`
                  : `w-2.5 h-2.5 ${isDark ? 'bg-cyber-text/30 hover:bg-cyber-accent/80 hover:scale-125' : 'bg-light-text/30 hover:bg-light-accent/80 hover:scale-125'}`
              }`}
              aria-label={`Jump to ${section.name}`}
            />
          </div>
        );
      })}

      <div className={`w-4 h-px my-1 ${isDark ? 'bg-cyber-border' : 'bg-light-border'}`} />

      {/* Direct Resume Link */}
      <a
        href={PERSONAL_INFO.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-1.5 rounded-full transition-colors relative group ${
          isDark ? 'text-cyber-text/60 hover:text-cyber-accent hover:bg-cyber-card' : 'text-light-text/60 hover:text-light-accent hover:bg-slate-100'
        }`}
        aria-label="View Resume"
      >
        <FileText size={13} />
        <span className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
          isDark ? 'bg-cyber-card text-cyber-accent border border-cyber-border' : 'bg-white text-light-accent border border-light-border shadow-sm'
        }`}>
          Resume
        </span>
      </a>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`p-1.5 rounded-full transition-colors relative group ${
          isDark ? 'text-cyber-text/60 hover:text-cyber-accent hover:bg-cyber-card' : 'text-light-text/60 hover:text-light-accent hover:bg-slate-100'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={13} />
        <span className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
          isDark ? 'bg-cyber-card text-cyber-text border border-cyber-border' : 'bg-white text-light-text border border-light-border shadow-sm'
        }`}>
          Top
        </span>
      </button>
    </aside>
  );
};
