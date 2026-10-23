import React from 'react';
import { useTheme } from '../../ThemeContext';

interface EchoTitleProps {
  title: string;
  subtitle?: React.ReactNode;
  size?: 'lg' | 'md';
  className?: string;
}

/** Section heading with the offset "echo" copy. Only the first copy is a real <h2>. */
export const EchoTitle: React.FC<EchoTitleProps> = ({ title, subtitle, size = 'lg', className = '' }) => {
  const { isDark } = useTheme();
  const sizeClass = size === 'lg' ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-3xl sm:text-4xl md:text-5xl';
  const colorClass = isDark ? 'text-cyber-accent' : 'text-light-accent';

  return (
    <div className={`min-w-0 ${className}`}>
      <div className="relative">
        <h2 className={`${sizeClass} font-black font-mono tracking-tight break-words ${colorClass}`}>
          {title}
        </h2>
        <span
          aria-hidden="true"
          className={`${sizeClass} font-black font-mono break-words absolute top-1 left-0 opacity-20 select-none pointer-events-none ${colorClass}`}
        >
          {title}
        </span>
      </div>
      {subtitle && (
        <p className={`mt-3 font-mono text-xs uppercase tracking-widest ${isDark ? 'text-cyber-text/70' : 'text-light-text/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
