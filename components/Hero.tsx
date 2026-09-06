import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { useTheme } from '../ThemeContext';
import { ArrowDown, FileText, Send, Sparkles, Terminal, Code2, Database, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const { isDark } = useTheme();

  const corePills = ["PHP", "Laravel", "Java", "Spring Boot", "MySQL", "Linux", "Docker", "REST API"];

  return (
    <section id="hero" className={`relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 transition-colors duration-300 ${
      isDark ? 'bg-cyber-dark text-white' : 'bg-light-bg text-slate-900'
    }`}>
      {/* Background Decorative Grid & Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 opacity-40 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'}`} />
        <div className={`absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 ${
          isDark ? 'bg-cyan-500' : 'bg-cyan-400'
        }`} style={{ filter: 'blur(140px)' }} />
        <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-10 ${
          isDark ? 'bg-blue-600' : 'bg-teal-400'
        }`} style={{ filter: 'blur(120px)' }} />
      </div>

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 pt-6">
            {/* Top Greeting Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                isDark ? 'bg-cyber-card border-cyber-border text-cyber-accent' : 'bg-white border-light-border text-light-accent shadow-sm'
              }`}>
                <Terminal size={12} />
                I'M {PERSONAL_INFO.name.toUpperCase()}
              </span>

              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border ${
                isDark ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Full-time (Remote & On-site)
              </div>
            </div>

            {/* Giant Bold Typographic Title */}
            <div className="space-y-1">
              <h1 className={`text-6xl sm:text-7xl md:text-8xl font-black font-mono leading-none tracking-tight ${
                isDark ? 'text-cyber-heading' : 'text-light-heading'
              }`}>
                Software
              </h1>
              <h1 className={`text-6xl sm:text-7xl md:text-8xl font-black font-mono leading-none tracking-tight flex items-baseline gap-2 ${
                isDark ? 'text-cyber-accent drop-shadow-[0_0_35px_rgba(0,240,255,0.25)]' : 'text-light-accent'
              }`}>
                Engineer
                <span className="text-2xl sm:text-4xl animate-bounce">_</span>
              </h1>
            </div>

            {/* Headline / Summary */}
            <p className={`text-base sm:text-lg font-mono max-w-2xl leading-relaxed ${
              isDark ? 'text-cyber-text' : 'text-light-text'
            }`}>
              {PERSONAL_INFO.headline}
            </p>

            {/* Core Tech Stack Ticker / Badges */}
            <div className="pt-2">
              <span className={`text-[11px] font-mono uppercase tracking-wider block mb-2 ${
                isDark ? 'text-cyber-text/50' : 'text-light-text/50'
              }`}>
                // Core Technologies:
              </span>
              <div className="flex flex-wrap gap-2">
                {corePills.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border transition-all duration-200 hover:-translate-y-0.5 ${
                      isDark 
                        ? 'bg-cyber-card/80 border-cyber-border text-cyber-heading hover:border-cyber-accent/50 hover:text-cyber-accent' 
                        : 'bg-white border-light-border text-slate-800 hover:border-light-accent/50 hover:text-light-accent shadow-sm'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                  isDark 
                    ? 'bg-cyber-accent text-cyber-darker border-cyber-accent hover:shadow-lg hover:shadow-cyan-400/40 hover:-translate-y-0.5' 
                    : 'bg-light-accent text-white border-light-accent hover:bg-light-accentDim hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                Explore Enterprise Work <ArrowDown size={14} />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Kawsar_Hamid_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider border transition-all duration-200 ${
                  isDark 
                    ? 'bg-cyber-card border-cyber-border text-cyber-heading hover:border-cyber-accent/60 hover:text-cyber-accent' 
                    : 'bg-white border-light-border text-light-heading hover:border-light-accent/60 hover:text-light-accent shadow-sm'
                }`}
              >
                <FileText size={14} /> Download CV
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-1.5 px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isDark ? 'text-cyber-text hover:text-cyber-accent' : 'text-light-text hover:text-light-accent'
                }`}
              >
                Let's Talk <Send size={12} />
              </a>
            </div>
          </div>

          {/* Right Column: Futuristic Tech Orbit & Visual Radar Card (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
            {/* Geometric Concentric Rings */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Outer Glowing Circle */}
              <div className={`absolute inset-0 rounded-full border border-dashed animate-spin-slow ${
                isDark ? 'border-cyber-accent/30' : 'border-light-accent/30'
              }`} />

              {/* Middle Circle */}
              <div className={`absolute inset-8 rounded-full border ${
                isDark ? 'border-cyber-border/80' : 'border-light-border'
              }`} />

              {/* Inner Circle with Soft Glow */}
              <div className={`absolute inset-16 rounded-full border ${
                isDark ? 'border-cyber-accent/20 bg-cyber-card/40 backdrop-blur-sm' : 'border-light-accent/20 bg-white/40 backdrop-blur-sm'
              }`} />

              {/* Center Core Chip Card */}
              <div className={`relative z-10 p-6 rounded-2xl border text-center shadow-2xl transition-transform duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-cyber-card/90 border-cyber-accent/50 shadow-cyan-950/80 backdrop-blur-md' 
                  : 'bg-white border-light-border shadow-xl backdrop-blur-md'
              }`}>
                <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 ${
                  isDark ? 'bg-cyber-accent/15 text-cyber-accent' : 'bg-light-accent/15 text-light-accent'
                }`}>
                  <Code2 size={24} />
                </div>
                <h3 className={`text-base font-bold font-mono ${isDark ? 'text-white' : 'text-light-heading'}`}>
                  Full-Stack Specialist
                </h3>
                <p className={`text-xs font-mono mt-1 ${isDark ? 'text-cyber-accent' : 'text-light-accent'}`}>
                  Gov & Enterprise Systems
                </p>
                <div className={`mt-3 pt-3 border-t flex items-center justify-center gap-2 text-[11px] font-mono ${
                  isDark ? 'border-cyber-border text-cyber-text/70' : 'border-light-border text-light-text/70'
                }`}>
                  <Database size={11} /> High-Scale SQL Expert
                </div>
              </div>

              {/* Floating Orbiting Satellite Badges */}
              <div className={`absolute -top-3 left-6 px-3 py-1 rounded-lg text-[11px] font-mono font-bold border shadow-md animate-float ${
                isDark ? 'bg-cyber-darker border-cyber-accent/40 text-cyber-accent' : 'bg-white border-light-accent/40 text-light-accent'
              }`}>
                ⚡ 30% Query Boost
              </div>

              <div className={`absolute -bottom-2 right-4 px-3 py-1 rounded-lg text-[11px] font-mono font-bold border shadow-md animate-float ${
                isDark ? 'bg-cyber-darker border-amber-500/40 text-amber-300' : 'bg-white border-amber-300 text-amber-700'
              }`} style={{ animationDelay: '1.5s' }}>
                🏛️ DAE & CCI&E Portals
              </div>

              <div className={`absolute top-1/2 -left-6 -translate-y-1/2 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold border shadow-md hidden sm:block ${
                isDark ? 'bg-cyber-darker border-cyber-border text-cyber-heading' : 'bg-white border-light-border text-slate-700'
              }`}>
                🔒 Digital Security
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
