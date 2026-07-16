import React from 'react';
import { Section } from './ui/Section';
import { EXPERIENCE } from '../constants';
import { Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export const Experience: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <Section id="experience" className={isDark ? 'bg-slate-800' : 'bg-slate-50'}>
      <div className="max-w-3xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>Work Experience</h2>
        
        <div className="space-y-12">
          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className="relative pl-8 md:pl-0">
              {index !== EXPERIENCE.length - 1 && (
                <div className={`hidden md:block absolute left-[50%] top-16 bottom-[-48px] w-px -translate-x-1/2 ${isDark ? 'bg-slate-600' : 'bg-slate-200'}`}></div>
              )}
              
              <div className={`md:flex items-start justify-between gap-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 shadow-sm -translate-x-1.5 md:-translate-x-1/2 mt-1.5 ${isDark ? 'border-slate-800' : 'border-white'}`}></div>

                <div className="md:w-1/2 mb-2 md:mb-0">
                   <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} mb-1`}>
                     <span className="inline-flex items-center text-sm font-semibold text-blue-600 mb-1">
                        <Calendar className="w-3 h-3 mr-1" /> {job.period}
                     </span>
                     <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{job.role}</h3>
                     <h4 className={`text-md font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{job.company}</h4>
                     <span className={`inline-flex items-center text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                        <MapPin className="w-3 h-3 mr-1" /> {job.location}
                     </span>
                   </div>
                </div>

                <div className={`md:w-1/2 p-6 rounded-xl shadow-sm border ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-100'}`}>
                  <ul className="space-y-3">
                    {job.description.map((desc, i) => (
                      <li key={i} className={`text-sm leading-relaxed flex items-start ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        <span className="mr-2 text-blue-400 mt-1.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
