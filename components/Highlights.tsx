import React from 'react';
import { HIGHLIGHTS } from '../constants';
import { useTheme } from '../ThemeContext';

export const Highlights: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className={`border-y ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          {HIGHLIGHTS.map((item, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.value}</span>
              <span className={`text-sm font-medium uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
