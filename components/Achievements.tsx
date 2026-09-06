import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import { Trophy, Sparkles, Award, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export const Achievements: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="achievements" className={`py-16 md:py-24 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-dark' : 'bg-white'
    }`}>
      {/* Background Grid */}
      <div className={`absolute inset-0 pointer-events-none opacity-20 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'}`} />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        {/* Echo Title */}
        <div className="relative mb-12">
          <h2 className={`text-4xl md:text-5xl font-black font-mono tracking-tight ${
            isDark ? 'text-cyber-accent' : 'text-light-accent'
          }`}>
            Achievements
          </h2>
          <h2 className={`text-4xl md:text-5xl font-black font-mono absolute top-1 left-0 opacity-20 select-none pointer-events-none ${
            isDark ? 'text-cyber-accent' : 'text-light-accent'
          }`}>
            Achievements
          </h2>
          <p className={`mt-3 font-mono text-xs uppercase tracking-widest ${
            isDark ? 'text-cyber-text/70' : 'text-light-text/70'
          }`}>
            // Organizational Honors, Special Recognitions & Impact Awards
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {ACHIEVEMENTS.map((a) => (
            <div 
              key={a.id} 
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                isDark 
                  ? 'bg-gradient-to-r from-cyber-card via-cyber-card/90 to-amber-950/20 border-amber-500/40 shadow-xl shadow-black/30' 
                  : 'bg-gradient-to-r from-amber-50/70 via-white to-amber-50/40 border-amber-200 shadow-md'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border ${
                  isDark ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-lg shadow-amber-950/50' : 'bg-amber-100 text-amber-700 border-amber-200'
                }`}>
                  <Trophy size={28} />
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      isDark ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {a.badge || 'Honor Award'}
                    </span>
                    {a.date && (
                      <span className={`text-xs font-mono ${isDark ? 'text-cyber-text/70' : 'text-light-text/70'}`}>
                        {a.date}
                      </span>
                    )}
                  </div>

                  <h3 className={`text-lg sm:text-xl font-bold font-mono tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {a.title}
                  </h3>

                  {a.description && (
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-cyber-text' : 'text-light-text'
                    }`}>
                      {a.description}
                    </p>
                  )}

                  <div className={`pt-2 text-xs font-mono font-semibold ${
                    isDark ? 'text-amber-400/90' : 'text-amber-700'
                  }`}>
                    Awarded by: {a.organization || 'Synesis IT PLC'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
