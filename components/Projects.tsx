import React, { useState } from 'react';
import { PROJECTS } from '../data/profile';
import { ProjectStatus } from '../types';
import { CheckCircle2, ChevronDown, ChevronUp, ArrowUpRight, CalendarDays } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { EchoTitle } from './ui/EchoTitle';

const statusStyles: Record<ProjectStatus, { dark: string; light: string }> = {
  'Production': {
    dark: 'bg-emerald-950/40 border-emerald-500/40 text-emerald-400',
    light: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  },
  'Ready for go-live': {
    dark: 'bg-cyan-950/40 border-cyan-400/40 text-cyan-300',
    light: 'bg-cyan-50 border-cyan-200 text-cyan-800',
  },
  'In development': {
    dark: 'bg-amber-950/40 border-amber-500/40 text-amber-300',
    light: 'bg-amber-50 border-amber-200 text-amber-800',
  },
};

export const Projects: React.FC = () => {
  const { isDark } = useTheme();
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <section id="projects" className={`py-20 md:py-32 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-dark' : 'bg-light-bg'
    }`}>
      {/* Subtle Background Pattern */}
      <div className={`absolute inset-0 pointer-events-none opacity-30 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'}`} />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        {/* Echo Title */}
        <EchoTitle
          title="Projects"
          subtitle="// Flagship Government & Enterprise Systems Engineered for National Scale"
          className="mb-16"
        />

        {/* Project Cards Grid / Stack */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {displayed.map((project, index) => (
            <div 
              key={project.id} 
              className={`min-w-0 p-5 sm:p-9 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
                isDark 
                  ? 'bg-cyber-card/90 border-cyber-border hover:border-cyber-accent/60 shadow-xl shadow-black/30 backdrop-blur-sm' 
                  : 'bg-white border-light-border hover:border-light-accent/60 shadow-lg shadow-slate-200/50'
              }`}
            >
              {/* Left Accent Glow Stripe */}
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors ${
                isDark ? 'bg-cyber-accent group-hover:bg-cyan-400' : 'bg-light-accent group-hover:bg-teal-600'
              }`} />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                      isDark ? 'bg-cyber-accent/15 text-cyber-accent border border-cyber-accent/30' : 'bg-light-accent/10 text-light-accent border border-light-accent/20'
                    }`}>
                      #{String(index + 1).padStart(2, '0')}
                    </span>

                    <span className={`text-[11px] font-mono uppercase tracking-wider ${
                      isDark ? 'text-cyber-text/60' : 'text-light-text/60'
                    }`}>
                      Gov / Enterprise
                    </span>

                    {project.status && (
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        isDark ? statusStyles[project.status].dark : statusStyles[project.status].light
                      }`}>
                        {project.status}
                      </span>
                    )}
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold font-mono tracking-tight mt-2 ${
                    isDark ? 'text-white group-hover:text-cyber-accent' : 'text-light-heading group-hover:text-light-accent'
                  }`}>
                    {project.name}
                  </h3>
                  
                  <p className={`text-xs sm:text-sm font-mono font-medium ${
                    isDark ? 'text-cyber-accent' : 'text-light-accent'
                  }`}>
                    {project.tagline}
                  </p>
                </div>

                {/* Direct Live Link Button */}
                {project.links.live && (
                  <a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border transition-all duration-200 self-start ${
                      isDark 
                        ? 'bg-cyber-dark border-cyber-accent/40 text-cyber-accent hover:bg-cyber-accent hover:text-cyber-darker shadow-md' 
                        : 'bg-slate-50 border-light-accent/40 text-light-accent hover:bg-light-accent hover:text-white shadow-sm'
                    }`}
                  >
                    Live Portal <ArrowUpRight size={14} />
                  </a>
                )}
              </div>

              {/* Full Description */}
              <p className={`text-sm leading-relaxed mb-5 ${
                isDark ? 'text-cyber-text' : 'text-light-text'
              }`}>
                {project.description}
              </p>

              {/* Key Architectural Highlights */}
              <div className="space-y-2 mb-6">
                <span className={`text-[11px] font-mono uppercase tracking-wider block font-bold ${
                  isDark ? 'text-cyber-heading' : 'text-light-heading'
                }`}>
                  // Key Deliverables & Impact:
                </span>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className={`text-xs flex items-start gap-2 ${
                      isDark ? 'text-cyber-text/90' : 'text-light-text'
                    }`}>
                      <CheckCircle2 size={13} className={`flex-shrink-0 mt-0.5 ${
                        isDark ? 'text-cyber-accent' : 'text-light-accent'
                      }`} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-dashed flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-[11px] font-mono mr-1 ${isDark ? 'text-cyber-text/50' : 'text-light-text/50'}`}>
                    Stack:
                  </span>
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className={`font-mono text-xs px-2.5 py-1 rounded-lg border ${
                        isDark 
                          ? 'bg-cyber-dark text-cyber-heading border-cyber-border' 
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className={`text-[11px] font-mono flex items-center gap-1 ${
                  isDark ? 'text-cyber-text/60' : 'text-light-text/60'
                }`}>
                  <CalendarDays size={12} className={isDark ? 'text-cyber-accent' : 'text-light-accent'} /> {project.period}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Show Less Toggle Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`inline-flex items-center gap-2 px-7 py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xl border transition-all duration-300 ${
              isDark 
                ? 'border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10 shadow-lg shadow-cyan-950/40' 
                : 'border-light-accent text-light-accent hover:bg-light-accent/10 shadow-md'
            }`}
          >
            {showAll ? (
              <>Show Less <ChevronUp size={15} /></>
            ) : (
              <>View All {PROJECTS.length} Enterprise Systems <ChevronDown size={15} /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
