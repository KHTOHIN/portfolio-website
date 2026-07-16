import React from 'react';
import { Section } from './ui/Section';
import { BLOG_POSTS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export const Writing: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <Section className={isDark ? 'bg-slate-800' : 'bg-slate-50'}>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
           <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Writing & Talks</h2>
           <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>I like to document what I learn — it helps me think clearly.</p>
        </div>
        <a href="#" className="font-medium text-blue-600 hover:text-blue-700 flex items-center">
          View All Articles <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <a key={post.id} href={post.link} className={`group block p-6 rounded-xl border shadow-sm hover:shadow-md transition-all ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-100'}`}>
            <h3 className={`text-lg font-bold group-hover:text-blue-600 transition-colors mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {post.title}
            </h3>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {post.summary}
            </p>
          </a>
        ))}
      </div>
    </Section>
  );
};
