import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { useTheme } from '../ThemeContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 200;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? (isDark ? 'bg-cyber-dark/90 backdrop-blur-lg border-b border-cyber-border shadow-xl shadow-black/30' : 'bg-white/90 backdrop-blur-lg border-b border-light-border shadow-sm') 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 md:px-8 max-w-7xl flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 group"
          aria-label="Kawsar Hamid Home"
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-lg transition-transform duration-300 group-hover:scale-105 ${
            isDark ? 'bg-cyber-card border border-cyber-accent/40 text-cyber-accent shadow-md shadow-cyan-950/50' : 'bg-slate-900 text-white shadow-md'
          }`}>
            K<span className="text-cyan-400">°</span>
          </div>
          <div className="hidden sm:block">
            <span className={`font-mono text-sm font-bold block leading-tight ${isDark ? 'text-white' : 'text-light-heading'}`}>
              KAWSAR HAMID
            </span>
            <span className={`font-mono text-[10px] tracking-widest uppercase block ${isDark ? 'text-cyber-accent' : 'text-light-accent'}`}>
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? (isDark ? 'text-cyber-accent font-bold bg-cyber-accent/10' : 'text-light-accent font-bold bg-light-accent/10')
                    : (isDark ? 'text-cyber-text hover:text-white hover:bg-cyber-card' : 'text-light-text hover:text-light-heading hover:bg-slate-100')
                }`}
              >
                {link.name}
                {isActive && (
                  <span className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${
                    isDark ? 'bg-cyber-accent' : 'bg-light-accent'
                  }`} />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Nav Action items */}
        <div className="hidden md:flex items-center gap-3">
          {/* Resume button */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3.5 py-1.5 text-xs font-mono font-semibold rounded-lg border flex items-center gap-1.5 transition-all duration-200 ${
              isDark 
                ? 'border-cyber-border text-cyber-heading hover:border-cyber-accent/50 hover:bg-cyber-card hover:text-cyber-accent' 
                : 'border-light-border text-light-heading hover:border-light-accent/50 hover:bg-slate-100 hover:text-light-accent'
            }`}
          >
            <FileText size={13} /> Resume
          </a>

          {/* Theme Toggle button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-all duration-300 ${
              isDark 
                ? 'border-cyber-border text-cyber-accent hover:bg-cyber-card hover:border-cyber-accent/50' 
                : 'border-light-border text-light-accent hover:bg-slate-100 hover:border-light-accent/50'
            }`}
            aria-label="Toggle theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={17} className="transition-transform hover:rotate-45" /> : <Moon size={17} className="transition-transform hover:-rotate-12" />}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-lg border ${
              isDark ? 'border-cyber-border text-cyber-accent bg-cyber-card' : 'border-light-border text-light-accent bg-white'
            }`} 
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg border ${
              isDark ? 'border-cyber-border text-white bg-cyber-card' : 'border-light-border text-slate-800 bg-white'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className={`md:hidden border-b px-6 py-6 transition-all duration-300 ${
          isDark ? 'bg-cyber-darker/98 border-cyber-border text-cyber-text shadow-2xl backdrop-blur-xl' : 'bg-white/98 border-light-border text-light-text shadow-xl backdrop-blur-xl'
        }`}>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-mono font-medium py-2 px-3 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? (isDark ? 'bg-cyber-accent/15 text-cyber-accent font-bold' : 'bg-light-accent/15 text-light-accent font-bold')
                    : (isDark ? 'text-cyber-heading hover:bg-cyber-card' : 'text-light-heading hover:bg-slate-50')
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-dashed flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Kawsar_Hamid_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`py-2.5 px-4 rounded-lg font-mono text-xs font-bold text-center flex items-center justify-center gap-2 border ${
                  isDark ? 'bg-cyber-accent/10 border-cyber-accent text-cyber-accent' : 'bg-light-accent text-white border-light-accent'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FileText size={14} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
