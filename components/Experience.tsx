import React from 'react';
import { EXPERIENCE } from '../constants';
import { useTheme } from '../ThemeContext';

export const Experience: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="experience" className={`py-20 md:py-32 relative transition-colors duration-300 ${isDark ? 'bg-cyber-darker' : 'bg-slate-50'}`}>
      {/* Background Grid */}
      <div className={`absolute inset-0 pointer-events-none opacity-20 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'}`} />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        {/* Echo Title */}
        <div className="relative mb-16">
          <h2 className={`text-5xl md:text-6xl font-black font-mono tracking-tight ${isDark ? 'text-cyber-accent' : 'text-light-accent'}`}>
            Experience
          </h2>
          <h2 className={`text-5xl md:text-6xl font-black font-mono absolute top-1 left-0 opacity-20 select-none pointer-events-none ${isDark ? 'text-cyber-accent' : 'text-light-accent'}`}>
            Experience
          </h2>
          <p className={`mt-3 font-mono text-xs uppercase tracking-widest ${
            isDark ? 'text-cyber-text/70' : 'text-light-text/70'
          }`}>
            // 5+ Years of Engineering Production Systems & National-Scale Applications
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {EXPERIENCE.map((job, index) => (
            <div 
              key={job.id} 
              className={`border-l-2 pl-8 transition-colors duration-300 relative group ${
                isDark ? 'border-cyber-border hover:border-cyber-accent' : 'border-light-border hover:border-light-accent'
              }`}
            >
              <span className={`font-mono text-xs ${isDark ? 'text-cyber-text/40' : 'text-light-text/40'}`}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className={`font-mono font-bold text-lg mt-1 transition-colors ${
                isDark ? 'text-cyber-heading group-hover:text-cyber-accent' : 'text-light-heading group-hover:text-light-accent'
              }`}>
                {job.role}
              </h3>

              <div className="flex flex-wrap items-center gap-3 mt-1">
                <span className={`font-mono text-sm font-medium ${isDark ? 'text-cyber-heading/80' : 'text-light-heading/80'}`}>
                  {job.company}
                </span>
                <span className={`font-mono text-xs font-semibold ${isDark ? 'text-cyber-accent' : 'text-light-accent'}`}>
                  {job.period}
                </span>
              </div>

              <span className={`font-mono text-xs block mt-1 ${isDark ? 'text-cyber-text/50' : 'text-light-text/50'}`}>
                {job.location}
              </span>

              <ul className="mt-3 space-y-1.5">
                {job.description.map((desc, i) => (
                  <li key={i} className={`font-mono text-xs uppercase leading-relaxed tracking-wide ${isDark ? 'text-cyber-text/70' : 'text-light-text/70'}`}>
                    • {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
