import React, { useState } from 'react';
import { ABOUT, CERTIFICATIONS, EDUCATION, ACHIEVEMENTS, PERSONAL_INFO } from '../constants';
import { useTheme } from '../ThemeContext';
import { 
  GraduationCap, 
  Award, 
  ExternalLink, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  MapPin, 
  Briefcase,
  ShieldCheck,
  Terminal,
  Database,
  Layers
} from 'lucide-react';
import myPic from '../assets/my_pic.jpg';

export const About: React.FC = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'credentials'>('all');

  const pillars = [
    { icon: Layers, title: "Gov & Enterprise Systems", desc: "Large-scale citizen services (DAE, CCI&E, BWDB)" },
    { icon: Database, title: "SQL & Query Optimization", desc: "Indexing, query tuning & high-concurrency storage" },
    { icon: ShieldCheck, title: "Security & Digital Signing", desc: "PDF signature workflows, malware scanning & BTRC APIs" },
    { icon: Terminal, title: "Linux & Workflow Automation", desc: "Cron jobs, Shell scripting, backup automation" },
  ];

  return (
    <section id="about" className={`py-20 md:py-32 relative transition-colors duration-300 ${isDark ? 'bg-cyber-dark' : 'bg-light-bg'}`}>
      {/* Background Accent Grid / Glow */}
      <div className={`absolute inset-0 pointer-events-none opacity-40 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'}`} />
      
      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        {/* Echo Title */}
        <div className="relative mb-16">
          <h2 className={`text-5xl md:text-6xl font-black font-mono tracking-tight ${isDark ? 'text-cyber-accent' : 'text-light-accent'}`}>
            About
          </h2>
          <h2 className={`text-5xl md:text-6xl font-black font-mono absolute top-1 left-0 opacity-20 select-none pointer-events-none ${isDark ? 'text-cyber-accent' : 'text-light-accent'}`}>
            About
          </h2>
          <p className={`mt-3 font-mono text-xs uppercase tracking-widest ${isDark ? 'text-cyber-text/70' : 'text-light-text/70'}`}>
            // Background, Academic Journey & Engineering Philosophy
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bio & Core Values (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Photo & Identity Card */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 ${
              isDark 
                ? 'bg-cyber-card/80 border-cyber-border hover:border-cyber-accent/40 shadow-xl shadow-black/40 backdrop-blur-sm' 
                : 'bg-white border-light-border hover:border-light-accent/40 shadow-lg shadow-slate-200/60'
            }`}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Photo with Frame */}
                <div className="relative group flex-shrink-0">
                  <div className={`w-36 h-44 rounded-xl overflow-hidden border-2 transition-transform duration-300 group-hover:scale-[1.02] ${
                    isDark ? 'border-cyber-accent/40 group-hover:border-cyber-accent shadow-lg shadow-cyan-950/50' : 'border-light-accent/40 group-hover:border-light-accent shadow-md'
                  }`}>
                    <img 
                      src={myPic} 
                      alt="Kawsar Hamid" 
                      className="w-full h-full object-cover object-center" 
                    />
                  </div>
                  <div className={`absolute -bottom-2 -right-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 ${
                    isDark ? 'bg-cyber-darker text-cyber-accent border border-cyber-accent/30' : 'bg-slate-900 text-cyan-300 border border-slate-700'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-2 text-center sm:text-left">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-full ${
                    isDark ? 'bg-cyber-accent/10 text-cyber-accent' : 'bg-light-accent/10 text-light-accent'
                  }`}>
                    <Briefcase size={12} /> Software Engineer I
                  </span>
                  <h3 className={`text-xl font-bold font-mono tracking-tight ${isDark ? 'text-cyber-heading' : 'text-light-heading'}`}>
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className={`text-xs font-mono flex items-center justify-center sm:justify-start gap-1 ${isDark ? 'text-cyber-text/80' : 'text-light-text/80'}`}>
                    <MapPin size={12} className={isDark ? 'text-cyber-accent' : 'text-light-accent'} /> Dhaka, Bangladesh
                  </p>
                  <p className={`text-xs font-mono pt-2 ${isDark ? 'text-cyber-text/70' : 'text-light-text/70'}`}>
                    5+ Years crafting government & enterprise solutions.
                  </p>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className={`mt-6 pt-6 border-t space-y-4 text-sm leading-relaxed ${
                isDark ? 'border-cyber-border text-cyber-text' : 'border-light-border text-light-text'
              }`}>
                <p>
                  {ABOUT.intro}
                </p>
                {ABOUT.body.map((para, i) => (
                  <p key={i}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-dashed flex flex-wrap items-center gap-3">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Kawsar_Hamid_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold rounded-lg border transition-all duration-300 ${
                    isDark 
                      ? 'bg-cyber-accent/10 border-cyber-accent text-cyber-accent hover:bg-cyber-accent hover:text-cyber-darker shadow-lg shadow-cyan-950/40' 
                      : 'bg-light-accent text-white border-light-accent hover:bg-light-accentDim shadow-md'
                  }`}
                >
                  <FileText size={14} /> Download Resume
                </a>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-medium rounded-lg border transition-all ${
                    isDark 
                      ? 'border-cyber-border text-cyber-heading hover:border-cyber-accent/40 hover:bg-cyber-card' 
                      : 'border-light-border text-light-heading hover:border-light-accent/40 hover:bg-slate-50'
                  }`}
                >
                  Contact Me <ArrowRight size={13} />
                </a>
              </div>
            </div>

            {/* Core Capability Pillars */}
            <div className="grid sm:grid-cols-2 gap-3">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className={`p-3.5 rounded-xl border transition-all duration-200 ${
                      isDark 
                        ? 'bg-cyber-card/60 border-cyber-border hover:border-cyber-accent/30' 
                        : 'bg-white border-light-border hover:border-light-accent/30 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <IconComponent size={14} className={isDark ? 'text-cyber-accent' : 'text-light-accent'} />
                      <h4 className={`text-xs font-mono font-bold ${isDark ? 'text-cyber-heading' : 'text-light-heading'}`}>
                        {item.title}
                      </h4>
                    </div>
                    <p className={`text-[11px] leading-tight ${isDark ? 'text-cyber-text/70' : 'text-light-text/70'}`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Redesigned Education & Achievements/Certifications (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* View Mode Filter Tabs */}
            <div className={`p-1.5 rounded-xl border inline-flex items-center gap-1 text-xs font-mono ${
              isDark ? 'bg-cyber-card border-cyber-border' : 'bg-slate-100 border-light-border'
            }`}>
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'all'
                    ? (isDark ? 'bg-cyber-accent text-cyber-darker font-bold shadow-sm' : 'bg-white text-light-heading font-bold shadow-sm')
                    : (isDark ? 'text-cyber-text hover:text-white' : 'text-light-text hover:text-black')
                }`}
              >
                All Overview
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'education'
                    ? (isDark ? 'bg-cyber-accent text-cyber-darker font-bold shadow-sm' : 'bg-white text-light-heading font-bold shadow-sm')
                    : (isDark ? 'text-cyber-text hover:text-white' : 'text-light-text hover:text-black')
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab('credentials')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'credentials'
                    ? (isDark ? 'bg-cyber-accent text-cyber-darker font-bold shadow-sm' : 'bg-white text-light-heading font-bold shadow-sm')
                    : (isDark ? 'text-cyber-text hover:text-white' : 'text-light-text hover:text-black')
                }`}
              >
                Certifications & Awards
              </button>
            </div>

            {/* 1. Education Section */}
            {(activeTab === 'all' || activeTab === 'education') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-cyber-accent/10 text-cyber-accent' : 'bg-light-accent/10 text-light-accent'}`}>
                      <GraduationCap size={18} />
                    </div>
                    <h3 className={`text-xl font-bold font-mono ${isDark ? 'text-cyber-heading' : 'text-light-heading'}`}>
                      Academic Background
                    </h3>
                  </div>
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${isDark ? 'bg-cyber-card border border-cyber-border text-cyber-accent' : 'bg-white border border-light-border text-light-accent'}`}>
                    Higher Education
                  </span>
                </div>

                {EDUCATION.map((edu) => (
                  <div 
                    key={edu.id} 
                    className={`p-6 rounded-2xl border relative overflow-hidden transition-all duration-300 group ${
                      isDark 
                        ? 'bg-cyber-card/90 border-cyber-border hover:border-cyber-accent/50 shadow-lg' 
                        : 'bg-white border-light-border hover:border-light-accent/50 shadow-md'
                    }`}
                  >
                    {/* Top Glow bar on hover */}
                    <div className={`absolute top-0 left-0 right-0 h-1 transition-opacity opacity-0 group-hover:opacity-100 ${
                      isDark ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gradient-to-r from-teal-500 to-cyan-600'
                    }`} />

                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                          isDark ? 'bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/20' : 'bg-light-accent/10 text-light-accent border border-light-accent/20'
                        }`}>
                          Undergraduate Degree
                        </span>
                        <h4 className={`text-lg font-bold font-mono mt-1.5 ${isDark ? 'text-white' : 'text-light-heading'}`}>
                          {edu.institution}
                        </h4>
                      </div>

                      <div className="text-right">
                        <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full inline-block ${
                          isDark ? 'bg-cyber-darker text-cyber-accent border border-cyber-border' : 'bg-slate-100 text-light-accent border border-slate-200'
                        }`}>
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    <p className={`text-sm font-mono font-semibold flex items-center gap-2 ${
                      isDark ? 'text-cyber-accent' : 'text-light-accent'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {edu.degree}
                    </p>

                    {edu.fieldOfStudy && (
                      <p className={`text-xs font-mono mt-1 ${isDark ? 'text-cyber-text/70' : 'text-light-text/70'}`}>
                        Focus: <span className={isDark ? 'text-cyber-heading' : 'text-light-heading'}>{edu.fieldOfStudy}</span> • {edu.location}
                      </p>
                    )}

                    {edu.highlights && (
                      <ul className="mt-4 pt-4 border-t border-dashed space-y-2">
                        {edu.highlights.map((item, idx) => (
                          <li key={idx} className={`text-xs flex items-start gap-2 ${isDark ? 'text-cyber-text' : 'text-light-text'}`}>
                            <CheckCircle2 size={13} className={`flex-shrink-0 mt-0.5 ${isDark ? 'text-cyber-accent' : 'text-light-accent'}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* 2. Special Achievement Recognition Banner */}
            {(activeTab === 'all' || activeTab === 'credentials') && (
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>
                    <Award size={18} />
                  </div>
                  <h3 className={`text-xl font-bold font-mono ${isDark ? 'text-cyber-heading' : 'text-light-heading'}`}>
                    Key Accolades & Recognition
                  </h3>
                </div>

                {ACHIEVEMENTS.map((ach) => (
                  <div 
                    key={ach.id}
                    className={`p-5 rounded-2xl border transition-all duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-r from-cyber-card to-cyber-card/60 border-amber-500/30 hover:border-amber-400/60' 
                        : 'bg-gradient-to-r from-amber-50/50 to-white border-amber-200 hover:border-amber-300 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`p-2.5 rounded-xl flex-shrink-0 ${isDark ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-200/60 text-amber-800'}`}>
                        <Sparkles size={18} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className={`text-sm font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {ach.title}
                          </h4>
                          {ach.date && (
                            <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                              isDark ? 'bg-cyber-darker text-amber-300 border border-amber-500/30' : 'bg-amber-100 text-amber-800'
                            }`}>
                              {ach.date}
                            </span>
                          )}
                        </div>
                        {ach.description && (
                          <p className={`text-xs leading-relaxed ${isDark ? 'text-cyber-text' : 'text-light-text'}`}>
                            {ach.description}
                          </p>
                        )}
                        <span className={`text-[11px] font-mono inline-block pt-1 ${isDark ? 'text-amber-400/80' : 'text-amber-700'}`}>
                          Issued by: {ach.organization || 'Synesis IT PLC'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 3. Featured Certifications Grid */}
            {(activeTab === 'all' || activeTab === 'credentials') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className={`text-xl font-bold font-mono ${isDark ? 'text-cyber-heading' : 'text-light-heading'}`}>
                    Featured Certifications
                  </h3>
                  <a
                    href="#certifications"
                    className={`text-xs font-mono font-semibold flex items-center gap-1 transition-colors ${
                      isDark ? 'text-cyber-accent hover:underline' : 'text-light-accent hover:underline'
                    }`}
                  >
                    View All (10+) <ArrowRight size={12} />
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  {CERTIFICATIONS.slice(0, 4).map((cert, index) => (
                    <div
                      key={cert.id}
                      className={`p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between ${
                        isDark 
                          ? 'bg-cyber-card/70 border-cyber-border hover:border-cyber-accent/40' 
                          : 'bg-white border-light-border hover:border-light-accent/40 shadow-sm'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-[11px] font-mono ${isDark ? 'text-cyber-text/50' : 'text-light-text/50'}`}>
                            #{String(index + 1).padStart(2, '0')}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            isDark ? 'bg-cyber-darker text-cyber-accent border border-cyber-border' : 'bg-slate-100 text-light-accent'
                          }`}>
                            {cert.date}
                          </span>
                        </div>

                        <h4 className={`text-xs font-bold font-mono line-clamp-2 uppercase ${isDark ? 'text-cyber-heading' : 'text-light-heading'}`}>
                          {cert.title}
                        </h4>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-dashed flex items-center justify-between">
                        <span className={`text-xs font-mono font-medium ${isDark ? 'text-cyber-text/80' : 'text-light-text/80'}`}>
                          {cert.issuer}
                        </span>
                        {cert.link ? (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-[11px] font-mono inline-flex items-center gap-1 transition-colors ${
                              isDark ? 'text-cyber-accent hover:underline' : 'text-light-accent hover:underline'
                            }`}
                          >
                            Verify <ExternalLink size={10} />
                          </a>
                        ) : (
                          <span className={`text-[10px] font-mono ${isDark ? 'text-cyber-text/40' : 'text-light-text/40'}`}>
                            Certified
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="#certifications"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium rounded-lg border transition-all ${
                      isDark 
                        ? 'border-cyber-accent/50 text-cyber-accent hover:bg-cyber-accent/10' 
                        : 'border-light-accent/50 text-light-accent hover:bg-light-accent/10'
                    }`}
                  >
                    Explore Complete Certifications Matrix <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
