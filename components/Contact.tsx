import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Facebook, Mail, Phone, MessageSquare, MapPin, Send, Check, Copy, ArrowUp, Sparkles } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sentStatus, setSentStatus] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
    window.location.href = mailtoLink;
    setSentStatus(true);
    setTimeout(() => setSentStatus(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border font-mono text-xs outline-none transition-all ${
    isDark 
      ? 'bg-cyber-dark/80 border-cyber-border text-white placeholder-cyber-text/40 focus:border-cyber-accent focus:bg-cyber-dark' 
      : 'bg-slate-50 border-light-border text-slate-900 placeholder-light-text/40 focus:border-light-accent focus:bg-white shadow-sm'
  }`;

  return (
    <footer id="contact" className={`py-20 md:py-32 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-darker text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Background Grid */}
      <div className={`absolute inset-0 pointer-events-none opacity-20 ${isDark ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'}`} />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="relative mb-6">
                <h2 className={`text-5xl md:text-6xl font-black font-mono tracking-tight ${
                  isDark ? 'text-cyber-accent' : 'text-light-accent'
                }`}>
                  Contact
                </h2>
                <h2 className={`text-5xl md:text-6xl font-black font-mono absolute top-1 left-0 opacity-20 select-none pointer-events-none ${
                  isDark ? 'text-cyber-accent' : 'text-light-accent'
                }`}>
                  Contact
                </h2>
              </div>

              <p className={`font-mono text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-cyber-text' : 'text-light-text'
              }`}>
                Looking to build high-scale enterprise applications, automate government workflows, or optimize database architectures? Let's connect and discuss how I can bring tangible value to your team.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                isDark ? 'bg-cyber-card/80 border-cyber-border' : 'bg-white border-light-border shadow-sm'
              }`}>
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-cyber-accent/10 text-cyber-accent' : 'bg-light-accent/10 text-light-accent'}`}>
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className={`text-[10px] font-mono uppercase tracking-wider block ${isDark ? 'text-cyber-text/60' : 'text-light-text/60'}`}>
                      Email Address
                    </span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className={`text-xs font-mono font-bold truncate block ${isDark ? 'text-white hover:text-cyber-accent' : 'text-slate-900 hover:text-light-accent'}`}>
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className={`p-2 rounded-lg border text-xs font-mono flex items-center gap-1 transition-all ${
                    isDark ? 'border-cyber-border text-cyber-text hover:text-white hover:bg-cyber-dark' : 'border-light-border text-slate-600 hover:bg-slate-100'
                  }`}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                </button>
              </div>

              {/* WhatsApp / Phone Card */}
              <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                isDark ? 'bg-cyber-card/80 border-cyber-border' : 'bg-white border-light-border shadow-sm'
              }`}>
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                    <MessageSquare size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className={`text-[10px] font-mono uppercase tracking-wider block ${isDark ? 'text-cyber-text/60' : 'text-light-text/60'}`}>
                      WhatsApp & Direct Call
                    </span>
                    <span className={`text-xs font-mono font-bold truncate block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-bold flex items-center gap-1 transition-all ${
                    isDark ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-black' : 'bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-600 hover:text-white'
                  }`}
                >
                  Chat
                </a>
              </div>

              {/* Location Card */}
              <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                isDark ? 'bg-cyber-card/80 border-cyber-border' : 'bg-white border-light-border shadow-sm'
              }`}>
                <div className={`p-2 rounded-lg ${isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}`}>
                  <MapPin size={16} />
                </div>
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider block ${isDark ? 'text-cyber-text/60' : 'text-light-text/60'}`}>
                    Current Location
                  </span>
                  <span className={`text-xs font-mono font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {PERSONAL_INFO.location} • Available Worldwide (Remote)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="pt-2">
              <span className={`text-[11px] font-mono uppercase tracking-wider block mb-3 ${isDark ? 'text-cyber-text/60' : 'text-light-text/60'}`}>
                // Connect Across Networks:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: Linkedin, href: PERSONAL_INFO.social.linkedin, label: 'LinkedIn' },
                  { icon: Github, href: PERSONAL_INFO.social.github, label: 'GitHub' },
                  { icon: Facebook, href: PERSONAL_INFO.social.facebook, label: 'Facebook' },
                  { icon: Mail, href: PERSONAL_INFO.social.email, label: 'Email' },
                  { icon: MessageSquare, href: PERSONAL_INFO.social.whatsapp, label: 'WhatsApp' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl border transition-all duration-200 flex items-center gap-2 text-xs font-mono ${
                      isDark 
                        ? 'bg-cyber-card border-cyber-border text-cyber-text hover:text-cyber-accent hover:border-cyber-accent/60' 
                        : 'bg-white border-light-border text-light-text hover:text-light-accent hover:border-light-accent/60 shadow-sm'
                    }`}
                  >
                    <Icon size={14} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className={`p-7 sm:p-9 rounded-2xl border ${
              isDark ? 'bg-cyber-card/90 border-cyber-border shadow-xl backdrop-blur-sm' : 'bg-white border-light-border shadow-md'
            }`}>
              <h3 className={`text-lg font-bold font-mono mb-2 ${isDark ? 'text-white' : 'text-light-heading'}`}>
                Send Direct Message
              </h3>
              <p className={`text-xs font-mono mb-6 ${isDark ? 'text-cyber-text/70' : 'text-light-text/70'}`}>
                Fill in the form below and it will compose your direct email message instantly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block font-mono text-xs uppercase tracking-wider mb-1.5 ${isDark ? 'text-cyber-text' : 'text-light-text'}`}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label className={`block font-mono text-xs uppercase tracking-wider mb-1.5 ${isDark ? 'text-cyber-text' : 'text-light-text'}`}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={`block font-mono text-xs uppercase tracking-wider mb-1.5 ${isDark ? 'text-cyber-text' : 'text-light-text'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Architecture Consulting"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={`block font-mono text-xs uppercase tracking-wider mb-1.5 ${isDark ? 'text-cyber-text' : 'text-light-text'}`}>
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your project, team requirements or message..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    required
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs font-mono">
                    {sentStatus && (
                      <span className="text-emerald-400 font-bold inline-flex items-center gap-1">
                        <Check size={14} /> Opening mail client...
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`px-7 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border transition-all duration-300 flex items-center gap-2 ${
                      isDark 
                        ? 'bg-cyber-accent text-cyber-darker border-cyber-accent hover:shadow-lg hover:shadow-cyan-400/40 hover:-translate-y-0.5' 
                        : 'bg-light-accent text-white border-light-accent hover:bg-light-accentDim hover:shadow-md hover:-translate-y-0.5'
                    }`}
                  >
                    Send Message <Send size={13} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Global Footer */}
        <div className={`mt-20 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
          isDark ? 'border-cyber-border text-cyber-text/60' : 'border-light-border text-light-text/60'
        }`}>
          <div>
            &copy; {year} <span className={isDark ? 'text-white' : 'text-slate-900'}>{PERSONAL_INFO.name}</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className={isDark ? 'text-cyber-accent' : 'text-light-accent'}>
              Engineered with React, TypeScript & Tailwind CSS
            </span>

            <button
              onClick={scrollToTop}
              className={`p-2 rounded-lg border transition-colors flex items-center gap-1 ${
                isDark ? 'border-cyber-border hover:text-white hover:bg-cyber-card' : 'border-light-border hover:text-black hover:bg-white shadow-sm'
              }`}
              aria-label="Back to top"
            >
              <ArrowUp size={13} /> Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
