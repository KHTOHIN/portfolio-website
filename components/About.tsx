import React from 'react';
import { Section } from './ui/Section';
import { ABOUT } from '../constants';
import { CheckCircle } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export const About: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <Section id="about" className={isDark ? 'bg-slate-900' : ''}>
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5 relative">
          <div className={`aspect-[4/5] rounded-2xl overflow-hidden shadow-xl relative z-10 ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
             <img 
               src="/my_pic.jpg" 
               alt="Kawsar Hamid" 
               className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
             />
          </div>
          <div className={`absolute -bottom-6 -right-6 w-full h-full border-2 rounded-2xl -z-0 hidden md:block ${isDark ? 'border-slate-700' : 'border-slate-200'}`} />
        </div>
        
        <div className="md:col-span-7 space-y-8">
          <div>
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">About Me</h2>
            <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>{ABOUT.intro}</h3>
          </div>
          
          <div className={`space-y-4 text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {ABOUT.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-6">
            <h4 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Core Values</h4>
            <ul className="grid gap-3">
              {ABOUT.values.map((value, index) => (
                <li key={index} className={`flex items-center ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
