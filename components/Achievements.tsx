import React from 'react';
import { Section } from './ui/Section';
import { ACHIEVEMENTS } from '../constants';
import { Trophy } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export const Achievements: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <Section id="achievements" className={isDark ? 'bg-slate-900' : 'bg-white'}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        Achievements
      </h2>
      <ul className="space-y-4">
        {ACHIEVEMENTS.map((a) => (
          <li key={a.id} className={`flex items-center gap-3 p-4 rounded-xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
            <Trophy className="w-5 h-5 text-yellow-500 flex-shrink-0" />
            <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>{a.title}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};
