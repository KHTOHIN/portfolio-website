import React, { useState } from 'react';
import { SKILLS } from '../constants';
import { useTheme } from '../ThemeContext';
import { Code2, Layers, Database, Terminal, Cpu, Search, Sparkles, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ElementType> = {
    "Languages": Code2,
    "Frameworks & Libraries": Layers,
    "Databases": Database,
    "Tools & Environments": Terminal,
    "Key Concepts": Cpu,
  };

  const allCategories = ['All', ...SKILLS.map(s => s.title)];

  const filteredCategories = SKILLS.map(cat => {
    const isCategoryMatch = selectedCategory === 'All' || selectedCategory === cat.title;
    if (!isCategoryMatch) return null;

    const filteredSkills = cat.skills.filter(skill =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean) as typeof SKILLS;

  const totalSkillCount = SKILLS.reduce((acc, curr) => acc + curr.skills.length, 0);

  return (
    <section id="skills" className={`py-20 md:py-32 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-darker' : 'bg-slate-50'
    }`}>
      {/* Background Grid */}
      <div className={`absolute inset-0 pointer-events-none opacity-30 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'}`} />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        {/* Echo Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="relative">
              <h2 className={`text-5xl md:text-6xl font-black font-mono tracking-tight ${
                isDark ? 'text-cyber-accent' : 'text-light-accent'
              }`}>
                Skills
              </h2>
              <h2 className={`text-5xl md:text-6xl font-black font-mono absolute top-1 left-0 opacity-20 select-none pointer-events-none ${
                isDark ? 'text-cyber-accent' : 'text-light-accent'
              }`}>
                Skills
              </h2>
            </div>
            <p className={`mt-3 font-mono text-xs uppercase tracking-widest ${
              isDark ? 'text-cyber-text/70' : 'text-light-text/70'
            }`}>
              // Core Technical Matrix & Architecture Competencies ({totalSkillCount} Key Technologies)
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search size={15} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
              isDark ? 'text-cyber-text/50' : 'text-light-text/50'
            }`} />
            <input
              type="text"
              placeholder="Search skill (e.g., Spring, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs font-mono border outline-none transition-all ${
                isDark 
                  ? 'bg-cyber-card border-cyber-border text-white placeholder-cyber-text/40 focus:border-cyber-accent' 
                  : 'bg-white border-light-border text-slate-900 placeholder-light-text/40 focus:border-light-accent shadow-sm'
              }`}
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 ${
                selectedCategory === cat
                  ? (isDark ? 'bg-cyber-accent text-cyber-darker border-cyber-accent font-bold shadow-md shadow-cyan-950/40' : 'bg-light-accent text-white border-light-accent font-bold shadow-sm')
                  : (isDark ? 'bg-cyber-card/60 border-cyber-border text-cyber-text hover:border-cyber-accent/40 hover:text-white' : 'bg-white border-light-border text-light-text hover:border-light-accent/40 hover:text-black')
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIcons[category.title] || Code2;

            return (
              <div
                key={category.title}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between ${
                  isDark 
                    ? 'bg-cyber-card/80 border-cyber-border hover:border-cyber-accent/50 shadow-lg shadow-black/20 backdrop-blur-sm' 
                    : 'bg-white border-light-border hover:border-light-accent/50 shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg ${
                        isDark ? 'bg-cyber-accent/10 text-cyber-accent' : 'bg-light-accent/10 text-light-accent'
                      }`}>
                        <IconComponent size={18} />
                      </div>
                      <h3 className={`font-mono font-bold text-sm ${
                        isDark ? 'text-cyber-heading group-hover:text-cyber-accent' : 'text-light-heading group-hover:text-light-accent'
                      }`}>
                        {category.title}
                      </h3>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isDark ? 'bg-cyber-darker text-cyber-text border border-cyber-border' : 'bg-slate-100 text-light-text'
                    }`}>
                      {category.skills.length}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 hover:scale-105 inline-flex items-center gap-1.5 ${
                          isDark 
                            ? 'bg-cyber-dark text-cyber-heading border-cyber-border hover:border-cyber-accent hover:text-cyber-accent' 
                            : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-light-accent hover:text-light-accent'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          isDark ? 'bg-cyber-accent/60' : 'bg-light-accent/60'
                        }`} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`mt-6 pt-3 border-t border-dashed flex items-center justify-between text-[11px] font-mono ${
                  isDark ? 'border-cyber-border text-cyber-text/50' : 'border-light-border text-light-text/50'
                }`}>
                  <span>Production Tested</span>
                  <CheckCircle2 size={12} className={isDark ? 'text-cyber-accent' : 'text-light-accent'} />
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className={`p-12 text-center rounded-2xl border ${
            isDark ? 'bg-cyber-card border-cyber-border text-cyber-text' : 'bg-white border-light-border text-light-text'
          }`}>
            <p className="font-mono text-sm">No skills found matching "{searchQuery}".</p>
          </div>
        )}
      </div>
    </section>
  );
};
