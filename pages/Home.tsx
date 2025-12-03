import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Database, Network, Brain } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/ui/Card';
import { Toast } from '../components/ui/Toast';

interface HomeProps {
  onNavigate: (section: any) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [showToast, setShowToast] = useState(false);
  const { content } = useLanguage();
  const featuredProjects = content.projects.filter(p => p.featured).slice(0, 3);

  const handleProjectClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      setShowToast(true);
    }
  };

  return (
    <div className="pt-32 pb-20">
      <Toast 
        message={content.hero.toastPrivate}
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-qy-blue tracking-wide mb-6 uppercase">
            {content.hero.tag}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
            {content.hero.title1} <br />
            <span className="bg-gradient-to-r from-qy-blue to-emerald-400 bg-clip-text text-transparent">
              {content.hero.title2}
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            {content.hero.description} <br className="hidden md:block"/>
            <strong className="text-slate-700 font-medium">{content.hero.chain[0]}</strong> → <strong className="text-slate-700 font-medium">{content.hero.chain[1]}</strong> → <strong className="text-slate-700 font-medium">{content.hero.chain[2]}</strong> → <strong className="text-slate-700 font-medium">{content.hero.chain[3]}</strong>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => onNavigate('works')} icon>{content.hero.ctaPrimary}</Button>
            <Button variant="secondary" onClick={() => onNavigate('products')}>{content.hero.ctaSecondary}</Button>
          </div>
        </motion.div>
        
        {/* Decorative Abstract UI */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 relative h-64 md:h-80 w-full max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-b from-slate-50/50 to-white shadow-soft flex items-center justify-center"
        >
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
           <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse-slow"></div>
           <div className="absolute w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
           
           <div className="relative z-10 grid grid-cols-3 gap-12 opacity-80">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-qy-blue">
                  <Database size={32} />
                </div>
                <span className="text-sm font-medium text-slate-600">Data</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-500">
                  <Brain size={32} />
                </div>
                <span className="text-sm font-medium text-slate-600">Reasoning</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-purple-500">
                  <Network size={32} />
                </div>
                <span className="text-sm font-medium text-slate-600">Agent</span>
              </div>
           </div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <div>
             <h2 className="text-3xl font-bold text-slate-900">{content.hero.featuredTitle}</h2>
             <p className="text-slate-500 mt-2">{content.hero.featuredDesc}</p>
           </div>
           <Button variant="ghost" onClick={() => onNavigate('works')} icon>{content.hero.viewAll}</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((work, idx) => (
            <Card 
              key={work.id} 
              delay={idx * 0.1} 
              onClick={() => handleProjectClick(work.link)}
              className="flex flex-col h-full group"
            >
              <div className="aspect-video rounded-lg overflow-hidden bg-slate-100 mb-4 relative">
                 {work.image ? (
                   <img src={work.image} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50">{content.hero.noImage}</div>
                 )}
                 <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-slate-600 border border-slate-200">
                    {work.category}
                 </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-qy-blue transition-colors flex items-center gap-2">
                {work.title}
                {work.link && <span className="text-slate-300 text-xs group-hover:text-qy-blue">↗</span>}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mt-2 line-clamp-3">{work.description}</p>
              
              <div className="mt-auto pt-4 flex flex-wrap gap-1">
                {work.technologies.slice(0,3).map(t => (
                  <span key={t} className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded">{t}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};