import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles, UserCheck, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export const Testimonials: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof TESTIMONIALS[0] | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'synesis' | 'dsi'>('all');
  const [showAll, setShowAll] = useState(false);

  const filtered = TESTIMONIALS.filter(t => {
    if (activeTab === 'synesis') return t.company.includes('Synesis');
    if (activeTab === 'dsi') return t.company.includes('Dynamic Solution');
    return true;
  });

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="testimonials" className={`py-20 md:py-32 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-dark' : 'bg-white'
    }`}>
      {/* Background Grid */}
      <div className={`absolute inset-0 pointer-events-none opacity-20 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'}`} />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        {/* Echo Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="relative">
              <h2 className={`text-5xl md:text-6xl font-black font-mono tracking-tight ${
                isDark ? 'text-cyber-accent' : 'text-light-accent'
              }`}>
                Testimonials
              </h2>
              <h2 className={`text-5xl md:text-6xl font-black font-mono absolute top-1 left-0 opacity-20 select-none pointer-events-none ${
                isDark ? 'text-cyber-accent' : 'text-light-accent'
              }`}>
                Testimonials
              </h2>
            </div>
            <p className={`mt-3 font-mono text-xs uppercase tracking-widest ${
              isDark ? 'text-cyber-text/70' : 'text-light-text/70'
            }`}>
              // Peer Endorsements, Manager Recommendations & Leadership Feedback ({TESTIMONIALS.length} Reviews)
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                setActiveTab('all');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                activeTab === 'all'
                  ? (isDark ? 'bg-cyber-accent text-cyber-darker border-cyber-accent font-bold' : 'bg-light-accent text-white border-light-accent font-bold')
                  : (isDark ? 'bg-cyber-card border-cyber-border text-cyber-text' : 'bg-slate-50 border-light-border text-light-text')
              }`}
            >
              All ({TESTIMONIALS.length})
            </button>
            <button
              onClick={() => {
                setActiveTab('synesis');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                activeTab === 'synesis'
                  ? (isDark ? 'bg-cyber-accent text-cyber-darker border-cyber-accent font-bold' : 'bg-light-accent text-white border-light-accent font-bold')
                  : (isDark ? 'bg-cyber-card border-cyber-border text-cyber-text' : 'bg-slate-50 border-light-border text-light-text')
              }`}
            >
              Synesis IT PLC
            </button>
            <button
              onClick={() => {
                setActiveTab('dsi');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                activeTab === 'dsi'
                  ? (isDark ? 'bg-cyber-accent text-cyber-darker border-cyber-accent font-bold' : 'bg-light-accent text-white border-light-accent font-bold')
                  : (isDark ? 'bg-cyber-card border-cyber-border text-cyber-text' : 'bg-slate-50 border-light-border text-light-text')
              }`}
            >
              DSI (Dynamic Solution)
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((t) => {
            const initials = t.author
              .split(' ')
              .map(n => n[0])
              .filter(Boolean)
              .slice(0, 2)
              .join('');

            return (
              <div
                key={t.id}
                className={`p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group ${
                  isDark 
                    ? 'bg-cyber-card/85 border-cyber-border hover:border-cyber-accent/60 shadow-lg shadow-black/20 backdrop-blur-sm' 
                    : 'bg-white border-light-border hover:border-light-accent/60 shadow-md'
                }`}
              >
                <div>
                  {/* Card Header: Rating + Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" />
                      ))}
                    </div>
                    <Quote className={`w-6 h-6 transition-colors ${
                      isDark ? 'text-cyber-accent/40 group-hover:text-cyber-accent' : 'text-light-accent/40 group-hover:text-light-accent'
                    }`} />
                  </div>

                  {/* Recommendation snippet */}
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 italic ${
                    isDark ? 'text-cyber-text' : 'text-light-text'
                  }`}>
                    "{t.content.length > 180 ? `${t.content.slice(0, 180)}...` : t.content}"
                  </p>
                  
                  {t.content.length > 180 && (
                    <button
                      onClick={() => setSelectedTestimonial(t)}
                      className={`text-xs font-mono font-semibold mb-4 transition-colors ${
                        isDark ? 'text-cyber-accent hover:underline' : 'text-light-accent hover:underline'
                      }`}
                    >
                      Read Full Endorsement →
                    </button>
                  )}
                </div>

                {/* Author Info */}
                <div className={`pt-4 border-t flex items-center gap-3.5 ${
                  isDark ? 'border-cyber-border' : 'border-light-border'
                }`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs uppercase flex-shrink-0 border ${
                    isDark ? 'bg-cyber-darker text-cyber-accent border-cyber-accent/40 shadow-sm' : 'bg-slate-100 text-light-accent border-slate-200'
                  }`}>
                    {initials}
                  </div>

                  <div className="min-w-0">
                    <h4 className={`font-bold font-mono text-xs sm:text-sm truncate ${
                      isDark ? 'text-white' : 'text-light-heading'
                    }`}>
                      {t.author}
                    </h4>
                    <p className={`text-[11px] font-mono truncate ${
                      isDark ? 'text-cyber-accent' : 'text-light-accent'
                    }`}>
                      {t.role}
                    </p>
                    <p className={`text-[10px] font-mono truncate ${
                      isDark ? 'text-cyber-text/60' : 'text-light-text/60'
                    }`}>
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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
                <>Show All ({filtered.length}) Testimonials <ChevronDown size={15} /></>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Full Testimonial Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className={`max-w-xl w-full p-6 sm:p-8 rounded-2xl border relative shadow-2xl ${
            isDark ? 'bg-cyber-card border-cyber-accent/50 text-white shadow-cyan-950/80' : 'bg-white border-light-border text-slate-900 shadow-2xl'
          }`}>
            <button
              onClick={() => setSelectedTestimonial(null)}
              className={`absolute top-4 right-4 p-2 rounded-lg border transition-colors ${
                isDark ? 'border-cyber-border text-cyber-text hover:text-white hover:bg-cyber-dark' : 'border-light-border text-slate-600 hover:bg-slate-100'
              }`}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full ${
                isDark ? 'bg-cyber-dark text-cyan-300 border border-cyber-border' : 'bg-slate-100 text-slate-700'
              }`}>
                Verified Professional Recommendation
              </span>
            </div>

            <p className={`text-sm sm:text-base leading-relaxed mb-6 italic ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}>
              "{selectedTestimonial.content}"
            </p>

            <div className="pt-4 border-t border-dashed flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-bold text-sm border ${
                isDark ? 'bg-cyber-dark text-cyber-accent border-cyber-accent/50' : 'bg-slate-100 text-light-accent border-slate-300'
              }`}>
                {selectedTestimonial.author.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h5 className="font-bold font-mono text-sm">{selectedTestimonial.author}</h5>
                <p className={`text-xs font-mono ${isDark ? 'text-cyber-accent' : 'text-light-accent'}`}>
                  {selectedTestimonial.role}
                </p>
                <p className={`text-[11px] font-mono ${isDark ? 'text-cyber-text/70' : 'text-light-text/70'}`}>
                  {selectedTestimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
