import React from 'react';
import { HIGHLIGHTS } from '../constants';
import { useTheme } from '../ThemeContext';
import { Briefcase, Building2, Cpu, MapPin, CheckCircle2 } from 'lucide-react';

export const Highlights: React.FC = () => {
  const { isDark } = useTheme();

  const icons = [Briefcase, Building2, Cpu, MapPin];

  return (
    <section aria-label="Key Highlights" className={`border-y relative z-20 transition-colors duration-300 ${
      isDark ? 'border-cyber-border bg-cyber-darker/90 backdrop-blur-md' : 'border-light-border bg-white/95 backdrop-blur-md shadow-sm'
    }`}>
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {HIGHLIGHTS.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div 
                key={index} 
                className={`p-4 rounded-xl border transition-all duration-300 group flex items-start gap-3.5 ${
                  isDark 
                    ? 'bg-cyber-card/40 border-cyber-border/80 hover:border-cyber-accent/40 hover:bg-cyber-card' 
                    : 'bg-slate-50 border-light-border/80 hover:border-light-accent/40 hover:bg-white shadow-sm'
                }`}
              >
                <div className={`p-2.5 rounded-lg flex-shrink-0 transition-transform group-hover:scale-110 ${
                  isDark ? 'bg-cyber-accent/10 text-cyber-accent' : 'bg-light-accent/10 text-light-accent'
                }`}>
                  <IconComponent size={18} />
                </div>
                <div className="flex flex-col">
                  <span className={`text-2xl sm:text-3xl font-black font-mono tracking-tight leading-tight ${
                    isDark ? 'text-cyber-heading group-hover:text-cyber-accent' : 'text-light-heading group-hover:text-light-accent'
                  }`}>
                    {item.value}
                  </span>
                  <span className={`text-[11px] font-mono uppercase tracking-wider mt-1 ${
                    isDark ? 'text-cyber-text/70' : 'text-light-text/70'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
