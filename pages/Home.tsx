import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ArrowRight, Cpu, Globe, Zap } from 'lucide-react';
import { FEATURED_WORKS } from '../constants';
import { Card } from '../components/ui/Card';

interface HomeProps {
  onNavigate: (section: any) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-qy-blue tracking-wide mb-6 uppercase">
            v3.0 Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
            Crafting the <br />
            <span className="bg-gradient-to-r from-qy-blue to-cyan-400 bg-clip-text text-transparent">
              Future of Intelligence
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Qingyang is an AI Engineer & Designer bridging the gap between complex algorithms and human-centric experiences.
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => onNavigate('works')} icon>Explore Work</Button>
            <Button variant="secondary" onClick={() => onNavigate('about')}>Read Philosophy</Button>
          </div>
        </motion.div>
        
        {/* Decorative Abstract UI */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 relative h-64 md:h-96 w-full max-w-5xl mx-auto overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-b from-slate-50/50 to-white shadow-soft flex items-center justify-center"
        >
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
           <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse-slow"></div>
           <div className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
           
           <div className="relative z-10 grid grid-cols-3 gap-8 opacity-80">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-qy-blue">
                  <Cpu size={32} />
                </div>
                <span className="text-sm font-medium text-slate-600">Model Architecture</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-teal-500">
                  <Zap size={32} />
                </div>
                <span className="text-sm font-medium text-slate-600">Performance</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-purple-500">
                  <Globe size={32} />
                </div>
                <span className="text-sm font-medium text-slate-600">Scalability</span>
              </div>
           </div>
        </motion.div>
      </section>

      {/* Selected Works Preview */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <div>
             <h2 className="text-3xl font-bold text-slate-900">Selected Works</h2>
             <p className="text-slate-500 mt-2">Recent breakthroughs and designs.</p>
           </div>
           <Button variant="ghost" onClick={() => onNavigate('works')} icon>View All</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_WORKS.map((work, idx) => (
            <Card key={work.id} delay={idx * 0.1} className="flex flex-col h-full group cursor-pointer">
              <div className="aspect-video rounded-lg overflow-hidden bg-slate-100 mb-4 relative">
                 <img src={work.image} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-slate-600">
                    {work.year}
                 </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-qy-blue transition-colors">{work.title}</h3>
              <p className="text-xs font-medium text-qy-blue mb-2">{work.category}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{work.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
