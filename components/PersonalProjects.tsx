import React, { useState } from 'react';
import { Section } from './ui/Section';
import { PERSONAL_PROJECTS } from '../constants';
import { Github, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export const PersonalProjects: React.FC = () => {
  const { isDark } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? PERSONAL_PROJECTS : PERSONAL_PROJECTS.slice(0, 6);

  return (
    <Section id="personal-projects" className={isDark ? 'bg-slate-800' : 'bg-slate-50'}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        Personal Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((p) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block p-5 rounded-xl border transition-all hover:shadow-md ${isDark ? 'bg-slate-900 border-slate-700 hover:border-slate-500' : 'bg-white border-slate-200 hover:border-blue-300'}`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h5 className={`font-semibold text-sm group-hover:text-blue-600 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {p.name}
              </h5>
              <Github className={`w-4 h-4 flex-shrink-0 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
            </div>
            <p className={`text-xs mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{p.description}</p>
            <span className={`text-xs font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{p.tech}</span>
          </a>
        ))}
      </div>
      {PERSONAL_PROJECTS.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`inline-flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition-colors ${isDark ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
          >
            {showAll ? 'Show Less' : `Show All (${PERSONAL_PROJECTS.length})`}
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      )}
    </Section>
  );
};
