import React, { useState } from 'react';
import { Toast } from '../components/ui/Toast';
import { useLanguage } from '../contexts/LanguageContext';
import { Section } from '../types';

// New Components
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { FeaturedWork } from '../components/home/FeaturedWork';
import { Button } from '../components/ui/Button';

interface HomeProps {
  onNavigate: (section: Section) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [showToast, setShowToast] = useState(false);
  const { content } = useLanguage();

  return (
    <div className="pt-20 pb-20">
      <Toast
        message={content.hero.toastPrivate}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      {/* Hero Section */}
      <HeroSection onNavigate={onNavigate} />

      {/* Stats / Trust Bar */}
      <StatsSection />

      {/* Capabilities */}
      <CapabilitiesSection />

      {/* Featured Work (Editorial) */}
      <FeaturedWork />

      {/* Bottom CTA */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Ready to build intelligent systems?
        </h2>
        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
          From enterprise knowledge graphs to real-time RAG agents, I can help architect your AI future.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => onNavigate('works')} className="h-12 px-8 text-lg">
            View All Projects
          </Button>
          <Button variant="secondary" onClick={() => onNavigate('about')} className="h-12 px-8 text-lg">
            About Me
          </Button>
        </div>
      </section>
    </div>
  );
};