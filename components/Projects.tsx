import React from 'react';
import { Section } from './ui/Section';
import { Badge } from './ui/Badge';
import { PROJECTS, PERSONAL_INFO } from '../constants';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export const Projects: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <Section id="projects" className={isDark ? 'bg-slate-900' : ''}>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
           <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Selected Work</h2>
           <h3 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Featured Projects</h3>
        </div>
        <a href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer" className={`flex items-center transition-colors font-medium hover:text-blue-600 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          View GitHub Profile <ArrowUpRight className="ml-1 w-4 h-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className={`rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.name}</h4>
                <div className="flex gap-2">
                  {project.links.code && (
                     <a href={project.links.code} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`} aria-label="View Code">
                       <Github size={20} />
                     </a>
                  )}
                  {project.links.live && (
                     <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`} aria-label="View Live Site">
                       <ExternalLink size={20} />
                     </a>
                  )}
                </div>
              </div>
              
              <p className="text-sm font-medium text-blue-600 mb-4">{project.tagline}</p>
              <p className={`mb-6 text-sm leading-relaxed flex-grow ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
              
              <div className="mb-6">
                 <h5 className={`text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>Key Tech</h5>
                 <div className="flex flex-wrap gap-2">
                   {project.techStack.slice(0, 4).map(tech => (
                     <Badge key={tech} variant="outline" className={`text-xs ${isDark ? 'border-slate-600 text-slate-300' : ''}`}>{tech}</Badge>
                   ))}
                   {project.techStack.length > 4 && (
                     <span className="text-xs text-slate-500 self-center">+{project.techStack.length - 4}</span>
                   )}
                 </div>
              </div>

              <div className={`pt-6 border-t ${isDark ? 'border-slate-700' : 'border-slate-100'}`}>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className={`text-xs flex items-start ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <span className="mr-2 text-blue-500">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
