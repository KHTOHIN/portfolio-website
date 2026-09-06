import React, { useState } from 'react';
import { PERSONAL_PROJECTS } from '../constants';
import { Github, ExternalLink, ChevronDown, ChevronUp, FolderGit2, Search, Code2 } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export const PersonalProjects: React.FC = () => {
  const { isDark } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'PHP & Web', 'Java & Desktop', 'IoT & Hardware', 'Cryptography & OpenGL'];

  const filtered = PERSONAL_PROJECTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.description.toLowerCase().includes(search.toLowerCase()) ||
                          p.tech.toLowerCase().includes(search.toLowerCase());
    
    if (!matchesSearch) return false;

    if (selectedTag === 'All') return true;
    if (selectedTag === 'PHP & Web') return p.tech.includes('PHP') || p.tech.includes('Bootstrap') || p.tech.includes('JavaScript');
    if (selectedTag === 'Java & Desktop') return p.tech.includes('Java');
    if (selectedTag === 'IoT & Hardware') return p.tech.includes('C++') || p.tech.includes('Bluetooth') || p.tech.includes('Sensors') || p.tech.includes('Arduino');
    if (selectedTag === 'Cryptography & OpenGL') return p.name.includes('Cryptography') || p.name.includes('OpenGL') || p.name.includes('Cipher');

    return true;
  });

  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="personal-projects" className={`py-20 md:py-28 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-darker' : 'bg-slate-50'
    }`}>
      {/* Background Grid */}
      <div className={`absolute inset-0 pointer-events-none opacity-20 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'}`} />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        {/* Echo Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="relative">
              <h2 className={`text-4xl md:text-5xl font-black font-mono tracking-tight ${
                isDark ? 'text-cyber-accent' : 'text-light-accent'
              }`}>
                Personal Projects
              </h2>
              <h2 className={`text-4xl md:text-5xl font-black font-mono absolute top-1 left-0 opacity-20 select-none pointer-events-none ${
                isDark ? 'text-cyber-accent' : 'text-light-accent'
              }`}>
                Personal Projects
              </h2>
            </div>
            <p className={`mt-3 font-mono text-xs uppercase tracking-widest ${
              isDark ? 'text-cyber-text/70' : 'text-light-text/70'
            }`}>
              // Open Source Repositories, R&D Prototypes & Academic Tools ({PERSONAL_PROJECTS.length} Projects)
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search size={14} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
              isDark ? 'text-cyber-text/50' : 'text-light-text/50'
            }`} />
            <input
              type="text"
              placeholder="Search repositories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs font-mono border outline-none transition-all ${
                isDark 
                  ? 'bg-cyber-card border-cyber-border text-white placeholder-cyber-text/40 focus:border-cyber-accent' 
                  : 'bg-white border-light-border text-slate-900 placeholder-light-text/40 focus:border-light-accent shadow-sm'
              }`}
            />
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                selectedTag === tag
                  ? (isDark ? 'bg-cyber-accent text-cyber-darker border-cyber-accent font-bold' : 'bg-light-accent text-white border-light-accent font-bold')
                  : (isDark ? 'bg-cyber-card border-cyber-border text-cyber-text hover:text-white' : 'bg-white border-light-border text-light-text hover:text-black')
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Repositories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((p, i) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                isDark 
                  ? 'bg-cyber-card/80 border-cyber-border hover:border-cyber-accent/60 shadow-lg shadow-black/20' 
                  : 'bg-white border-light-border hover:border-light-accent/60 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono font-bold ${
                      isDark ? 'text-cyber-accent/70' : 'text-light-accent/70'
                    }`}>
                      #{String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className={`font-bold text-sm font-mono transition-colors line-clamp-1 ${
                      isDark ? 'text-white group-hover:text-cyber-accent' : 'text-light-heading group-hover:text-light-accent'
                    }`}>
                      {p.name}
                    </h4>
                  </div>
                  
                  <div className={`p-1.5 rounded-lg transition-colors ${
                    isDark ? 'bg-cyber-dark text-cyber-text group-hover:text-cyber-accent' : 'bg-slate-100 text-slate-600 group-hover:text-light-accent'
                  }`}>
                    <Github size={14} />
                  </div>
                </div>

                <p className={`text-xs leading-relaxed mb-4 ${
                  isDark ? 'text-cyber-text' : 'text-light-text'
                }`}>
                  {p.description}
                </p>
              </div>

              <div className="pt-3 border-t border-dashed flex items-center justify-between">
                <span className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded ${
                  isDark ? 'bg-cyber-dark text-cyber-accent/80 border border-cyber-border' : 'bg-slate-50 text-light-accent border border-slate-200'
                }`}>
                  {p.tech}
                </span>

                <span className={`text-[11px] font-mono inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ${
                  isDark ? 'text-cyber-accent' : 'text-light-accent'
                }`}>
                  Code <ExternalLink size={10} />
                </span>
              </div>
            </a>
          ))}
        </div>

        {filtered.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border transition-all ${
                isDark 
                  ? 'border-cyber-border text-cyber-accent hover:bg-cyber-accent/10 hover:border-cyber-accent/50' 
                  : 'border-light-border text-light-accent hover:bg-light-accent/10 hover:border-light-accent/50'
              }`}
            >
              {showAll ? 'Show Less' : `Show All (${filtered.length}) Repositories`}
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
