import React from 'react';
import { Section } from './ui/Section';
import { SKILLS } from '../constants';
import { Badge } from './ui/Badge';
import { useTheme } from '../ThemeContext';

export const Skills: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <Section id="skills" className={isDark ? 'bg-slate-800' : 'bg-slate-50'}>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Skills & Stack</h2>
        <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>A curated list of technologies I use to build robust applications.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((category, index) => (
          <div key={index} className={`p-6 rounded-xl shadow-sm border hover:shadow-md transition-all ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-100'}`}>
            <h3 className={`font-bold text-lg mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="outline" className={isDark ? 'bg-slate-800 border-slate-600 text-slate-300' : 'bg-slate-50'}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
