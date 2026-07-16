import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, Facebook } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { useTheme } from '../ThemeContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isDark ? 'bg-slate-900/90 backdrop-blur-md shadow-sm py-3' : 'bg-white/90 backdrop-blur-md shadow-sm py-3') : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
        <a href="#" className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {PERSONAL_INFO.name}<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${isDark ? 'text-yellow-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a 
            href={PERSONAL_INFO.social.email} 
            className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${isDark ? 'text-yellow-400' : 'text-slate-600'}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className={`focus:outline-none ${isDark ? 'text-white' : 'text-slate-700'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 border-t shadow-lg p-4 flex flex-col space-y-4 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-base font-medium hover:text-blue-600 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className={`flex space-x-4 pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
             <a href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer" className={`hover:text-blue-600 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><Github size={20} /></a>
             <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className={`hover:text-blue-600 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><Linkedin size={20} /></a>
             <a href={PERSONAL_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className={`hover:text-blue-600 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><Facebook size={20} /></a>
             <a href={PERSONAL_INFO.social.email} className={`hover:text-blue-600 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><Mail size={20} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};
