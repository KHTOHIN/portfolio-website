import React, { useState } from 'react';
import { Section } from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export const Testimonials: React.FC = () => {
  const { isDark } = useTheme();
  const [page, setPage] = useState(0);
  const perPage = 4;
  const totalPages = Math.ceil(TESTIMONIALS.length / perPage);
  const visible = TESTIMONIALS.slice(page * perPage, page * perPage + perPage);

  return (
    <Section className={isDark ? 'bg-slate-900' : ''}>
      <div className="text-center mb-16">
        <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>LinkedIn Recommendations</h2>
        <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {TESTIMONIALS.length} recommendations from colleagues and managers
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {visible.map((t) => (
          <div key={t.id} className={`p-8 rounded-2xl relative ${isDark ? 'bg-slate-800' : 'bg-slate-50'}`}>
            <Quote className={`w-10 h-10 absolute top-6 left-6 -z-0 ${isDark ? 'text-slate-700' : 'text-blue-100'}`} />
            <div className="relative z-10">
              <p className={`text-base italic mb-6 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>"{t.content}"</p>
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full mr-4 flex items-center justify-center text-sm font-bold ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-blue-100 text-blue-700'}`}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.author}</div>
                  <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className={`p-2 rounded-full transition-colors ${page === 0 ? 'opacity-30 cursor-not-allowed' : isDark ? 'hover:bg-slate-700 text-slate-300' : 'hover:bg-slate-200 text-slate-600'}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className={`p-2 rounded-full transition-colors ${page === totalPages - 1 ? 'opacity-30 cursor-not-allowed' : isDark ? 'hover:bg-slate-700 text-slate-300' : 'hover:bg-slate-200 text-slate-600'}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </Section>
  );
};
