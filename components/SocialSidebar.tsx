import React from 'react';
import { Github, Linkedin, Facebook, Mail, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { useTheme } from '../ThemeContext';

export const SocialSidebar: React.FC = () => {
  const { isDark } = useTheme();

  const socials = [
    { icon: Linkedin, href: PERSONAL_INFO.social.linkedin, label: 'LinkedIn' },
    { icon: Github, href: PERSONAL_INFO.social.github, label: 'GitHub' },
    { icon: Facebook, href: PERSONAL_INFO.social.facebook, label: 'Facebook' },
    { icon: Mail, href: PERSONAL_INFO.social.email, label: 'Email Me' },
    { icon: MessageSquare, href: PERSONAL_INFO.social.whatsapp, label: 'WhatsApp' },
  ];

  return (
    <aside 
      aria-label="Social Profiles" 
      className="fixed left-5 bottom-0 z-40 hidden 2xl:flex flex-col items-center gap-4"
    >
      <div className="flex flex-col items-center gap-3.5">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-xl border transition-all duration-300 relative group ${
              isDark 
                ? 'bg-cyber-card/80 border-cyber-border text-cyber-text/70 hover:text-cyber-accent hover:border-cyber-accent/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-950/50' 
                : 'bg-white border-light-border text-light-text/70 hover:text-light-accent hover:border-light-accent/60 hover:-translate-y-1 hover:shadow-md'
            }`}
            aria-label={label}
          >
            <Icon size={16} />
            {/* Tooltip on right */}
            <span className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none ${
              isDark ? 'bg-cyber-card text-cyber-accent border border-cyber-border shadow-md' : 'bg-white text-light-accent border border-light-border shadow-md'
            }`}>
              {label}
            </span>
          </a>
        ))}
      </div>
      <div className={`w-px h-20 transition-colors ${isDark ? 'bg-gradient-to-b from-cyber-border to-transparent' : 'bg-gradient-to-b from-light-border to-transparent'}`} />
    </aside>
  );
};
