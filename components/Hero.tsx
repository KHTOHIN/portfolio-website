import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { useTheme } from '../ThemeContext';

export const Hero: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <Section className={`min-h-screen flex flex-col justify-center pt-20 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="max-w-4xl space-y-8">
        <h1 className={`text-3xl md:text-5xl font-bold tracking-tight leading-[1.2] ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {PERSONAL_INFO.headline.split('SQL expertise').map((part, i) => 
            i === 0 ? part : <span key={i} className="text-blue-600">SQL expertise{part}</span>
          )}
        </h1>
        
        <p className={`text-xl md:text-2xl max-w-2xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {PERSONAL_INFO.subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button as="a" href="#projects" size="lg" className="group">
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button as="a" href="/Kawsar_Hamid_FlowCV_Resume_2026-07-08.pdf" download variant={isDark ? 'secondary' : 'outline'} size="lg">
            Download Resume
            <Download className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className={`flex items-center gap-2 text-sm pt-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          {PERSONAL_INFO.availability}
        </div>
      </div>
    </Section>
  );
};
