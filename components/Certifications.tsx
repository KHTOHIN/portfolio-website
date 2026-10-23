import React, { useState } from 'react';
import { CERTIFICATIONS, CERTIFICATION_CATEGORIES } from '../data/profile';
import { CertificationCategory } from '../types';
import { ExternalLink, ShieldCheck, CheckCircle2, FileText, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { EchoTitle } from './ui/EchoTitle';

export const Certifications: React.FC = () => {
  const { isDark } = useTheme();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<'All' | CertificationCategory>('All');
  const [showAll, setShowAll] = useState(false);

  const categories: ('All' | CertificationCategory)[] = ['All', ...CERTIFICATION_CATEGORIES];

  const filtered = CERTIFICATIONS.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(search.toLowerCase()) ||
                          cert.issuer.toLowerCase().includes(search.toLowerCase());
    if (!matchesSearch) return false;

    return category === 'All' || cert.category === category;
  });

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="certifications" className={`py-20 md:py-32 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-dark' : 'bg-white'
    }`}>
      {/* Background Grid */}
      <div className={`absolute inset-0 pointer-events-none opacity-25 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'}`} />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        {/* Echo Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <EchoTitle
            title="Certifications"
            subtitle={`// Professional Licenses, Global Credentials & Specialized Trainings (${CERTIFICATIONS.length} Total)`}
          />

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search size={14} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
              isDark ? 'text-cyber-text/50' : 'text-light-text/50'
            }`} />
            <input
              type="text"
              placeholder="Search credentials..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs font-mono border outline-none transition-all ${
                isDark 
                  ? 'bg-cyber-card border-cyber-border text-white placeholder-cyber-text/40 focus:border-cyber-accent' 
                  : 'bg-slate-50 border-light-border text-slate-900 placeholder-light-text/40 focus:border-light-accent shadow-sm'
              }`}
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                category === cat
                  ? (isDark ? 'bg-cyber-accent text-cyber-darker border-cyber-accent font-bold shadow-md' : 'bg-light-accent text-white border-light-accent font-bold shadow-sm')
                  : (isDark ? 'bg-cyber-card border-cyber-border text-cyber-text hover:text-white' : 'bg-white border-light-border text-light-text hover:text-black')
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((cert, index) => (
            <div
              key={cert.id}
              className={`min-w-0 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group ${
                isDark 
                  ? 'bg-cyber-card/85 border-cyber-border hover:border-cyber-accent/60 shadow-lg shadow-black/20 backdrop-blur-sm' 
                  : 'bg-white border-light-border hover:border-light-accent/60 shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${
                    isDark ? 'text-cyber-accent/60' : 'text-light-accent/60'
                  }`}>
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <span className={`inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full ${
                    isDark ? 'bg-cyber-dark text-cyan-300 border border-cyber-border' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {cert.date}
                  </span>
                </div>

                <h3 className={`font-bold text-sm sm:text-base font-mono mb-2 uppercase tracking-tight transition-colors ${
                  isDark ? 'text-white group-hover:text-cyber-accent' : 'text-light-heading group-hover:text-light-accent'
                }`}>
                  {cert.title}
                </h3>

                <p className={`text-xs font-mono flex items-center gap-1.5 ${
                  isDark ? 'text-cyber-text' : 'text-light-text'
                }`}>
                  <ShieldCheck size={13} className={`flex-shrink-0 ${isDark ? 'text-cyber-accent' : 'text-light-accent'}`} />
                  {cert.issuer}
                </p>

                {cert.expires && (
                  <p className={`mt-1.5 text-[11px] font-mono ${isDark ? 'text-cyber-text/60' : 'text-light-text/60'}`}>
                    Expires {cert.expires}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-dashed flex flex-wrap items-center justify-between gap-2">
                {cert.link ? (
                  <span className={`text-[11px] font-mono flex items-center gap-1 ${
                    isDark ? 'text-emerald-400' : 'text-emerald-600'
                  }`}>
                    <CheckCircle2 size={12} /> Verified
                  </span>
                ) : (
                  <span className={`text-[11px] font-mono flex items-center gap-1 ${
                    isDark ? 'text-cyber-text/60' : 'text-light-text/60'
                  }`}>
                    <FileText size={12} /> Certificate of completion
                  </span>
                )}

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold transition-all ${
                      isDark 
                        ? 'text-cyber-accent hover:text-white hover:underline' 
                        : 'text-light-accent hover:text-teal-700 hover:underline'
                    }`}
                  >
                    View Credential <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All / Show Less Toggle Button */}
        {filtered.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`inline-flex items-center gap-2 px-7 py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xl border transition-all duration-300 ${
                isDark 
                  ? 'border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10 shadow-lg shadow-cyan-950/40' 
                  : 'border-light-accent text-light-accent hover:bg-light-accent/10 shadow-md'
              }`}
            >
              {showAll ? (
                <>Show Less <ChevronUp size={15} /></>
              ) : (
                <>Show All ({filtered.length}) Certifications <ChevronDown size={15} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
