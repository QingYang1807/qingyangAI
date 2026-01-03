import React, { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { ChatWidget } from './components/ChatWidget';
import { Section } from './types';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { Mind } from './pages/Mind';
import { Universe } from './pages/Universe';
import { About } from './pages/About';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { Lanterns } from './components/Lanterns';
import { Fireworks } from './components/Fireworks';

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const { config } = useTheme();

  // Simple page routing logic
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home onNavigate={setActiveSection} />;
      case 'works':
        return <Works filter="all" />;
      case 'products':
        return <Works filter="product" />; // Reuse Works component with filter
      case 'mind':
        return <Mind />;
      case 'universe':
        return <Universe />;
      case 'about':
        return <About />;
      default:
        return <Home onNavigate={setActiveSection} />;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className={`min-h-screen bg-${config.colors.background} text-${config.colors.text} font-sans ${config.colors.selectionBg} ${config.colors.selectionText} relative overflow-x-hidden transition-colors duration-500`}>

      {/* Subtle Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-all duration-1000">
        <div className={`absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br ${config.gradients.hero} rounded-full blur-[120px] opacity-50`}></div>
        <div className={`absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr ${config.gradients.hero} rounded-full blur-[120px] opacity-40`}></div>

        {/* Atmospheric Effects */}
        <AnimatePresence>
          {config.name === '2026 New Year' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Lanterns />
              <Fireworks />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Nav activeSection={activeSection} onNavigate={setActiveSection} />

      <main className="relative z-10 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-grow"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>

        <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-50 mt-auto">
          <p>© {new Date().getFullYear()} Qingyang. All rights reserved. <br /> Engineering Intelligence.</p>
        </footer>
      </main>

      <ChatWidget />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;