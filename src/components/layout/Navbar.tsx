import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 transition-all duration-300">
      <nav 
        className={`glass-pill px-4 sm:px-6 py-2.5 rounded-full flex items-center justify-between gap-4 sm:gap-8 max-w-4xl w-full transition-all duration-300 ${
          scrolled ? 'shadow-lg shadow-ink-950/5 border-ink-950/10' : ''
        }`}
      >
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2 text-ink-900 font-bold tracking-tight text-sm sm:text-base">
          <div className="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse" />
          <span className="font-display tracking-tight">MUHAMMED KOCA</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold text-ink-700">
          <a href="#manifesto" className="hover:text-accent-emerald transition-colors">01 / Manifesto</a>
          <a href="#works" className="hover:text-accent-emerald transition-colors">02 / Works</a>
          <a href="#skills" className="hover:text-accent-emerald transition-colors">03 / Arsenal</a>
          <a href="#lab" className="hover:text-accent-emerald transition-colors flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-accent-green" />
            04 / Lab & Notes
          </a>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <a 
            href="#contact" 
            className="px-3.5 py-1.5 rounded-full bg-ink-900 text-cream-50 text-xs font-medium flex items-center gap-1 hover:bg-accent-emerald transition-all duration-150"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
};
