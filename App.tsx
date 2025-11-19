import React, { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { ChatWidget } from './components/ChatWidget';
import { Section } from './types';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { Mind } from './pages/Mind';
import { About } from './pages/About';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  // Simple page routing logic
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home onNavigate={setActiveSection} />;
      case 'works':
      case 'products': // Combining for simplicity in this demo
      case 'universe': // Combining for simplicity in this demo
        return <Works />;
      case 'mind':
        return <Mind />;
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-qy-blue/20 selection:text-qy-dark relative overflow-x-hidden">
      
      {/* Subtle Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] opacity-50"></div>
         <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[120px] opacity-40"></div>
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
           <p>© {new Date().getFullYear()} Qingyang. All rights reserved. <br /> Designed with light.</p>
        </footer>
      </main>

      <ChatWidget />
    </div>
  );
};

export default App;
