import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Section } from '../types';
import { motion } from 'framer-motion';
import { Sparkles, Globe, PartyPopper } from 'lucide-react';

interface NavProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

export const Nav: React.FC<NavProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, content } = useLanguage();
  const { theme, toggleTheme, config } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/80 backdrop-blur-md border-b border-slate-100/50' : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className={`w-8 h-8 bg-gradient-to-br ${config.gradients.icon} rounded-lg flex items-center justify-center text-white shadow-glow transition-all duration-500`}>
            {theme === 'default' ? <Sparkles size={16} className="fill-white" /> : <PartyPopper size={16} className="text-white" />}
          </div>
          <span className={`font-bold text-lg tracking-tight text-${config.colors.text} group-hover:text-${config.colors.primary} transition-colors`}>
            qingyang.ai
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-50/50 p-1 rounded-full border border-slate-200/50">
          {content.nav.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as Section)}
                className={`relative px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                    ? 'text-slate-900'
                    : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 ${config.gradients.pill} rounded-full shadow-sm border border-slate-100/50`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 bg-slate-100/50 hover:bg-slate-200/50 text-slate-600 rounded-full transition-colors backdrop-blur-sm"
            title={theme === 'default' ? "Switch to 2026 New Year Theme" : "Switch to Default Theme"}
          >
            {theme === 'default' ? <PartyPopper size={14} /> : <Sparkles size={14} />}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs font-medium bg-slate-100/50 hover:bg-slate-200/50 text-slate-600 px-3 py-1.5 rounded-full transition-colors backdrop-blur-sm"
          >
            <Globe size={14} />
            <span>{language === 'en' ? 'EN' : '中文'}</span>
          </button>

          {/* Mobile Menu Placeholder (Simplified) */}
          <button className="md:hidden p-2 text-slate-600">
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </button>
        </div>
      </div>
    </header>
  );
};