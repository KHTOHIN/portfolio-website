import React from 'react';
import { Section } from './ui/Section';
import { CERTIFICATIONS } from '../constants';
import { Award, ExternalLink } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export const Certifications: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <Section id="certifications" className={isDark ? 'bg-slate-900' : 'bg-white'}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        Certifications
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTIFICATIONS.map((cert) => {
          const inner = (
            <div className={`flex items-start gap-4 p-5 rounded-xl border transition-all hover:shadow-md ${isDark ? 'bg-slate-800 border-slate-700 hover:border-slate-500' : 'bg-slate-50 border-slate-200 hover:border-blue-300'}`}>
              <Award className={`w-8 h-8 flex-shrink-0 mt-0.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <div className="min-w-0">
                <h5 className={`font-semibold text-sm leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {cert.title}
                  {cert.link && <ExternalLink className="inline w-3 h-3 ml-1 opacity-50" />}
                </h5>
                <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </div>
          );

          return cert.link ? (
            <a key={cert.id} href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
              {inner}
            </a>
          ) : (
            <div key={cert.id}>{inner}</div>
          );
        })}
      </div>
    </Section>
  );
};
