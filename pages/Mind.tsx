import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';

export const Mind: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-slate-900 mb-6">{content.mind.title}</h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          {content.mind.description}
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {content.advantages.map((adv, idx) => {
          const Icon = adv.icon;
          return (
            <Card key={adv.id} delay={idx * 0.1} className="flex flex-col relative overflow-hidden border-t-4 border-t-transparent hover:border-t-qy-blue transition-all">
              <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 ${adv.color}`}>
                <Icon size={24} />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{adv.title}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">{adv.description}</p>
              
              <div className="mt-auto space-y-3 pt-4 border-t border-slate-50">
                {adv.details.map((detail, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="font-medium text-slate-700">{detail.label}</span>
                    <span className="text-slate-400">{detail.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-2xl bg-slate-900 text-white text-center"
      >
        <h3 className="text-2xl font-bold mb-4">{content.mind.contactTitle}</h3>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          {content.mind.contactDesc}
        </p>
        <a href="mailto:contact@qingyang.ai" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
          {content.mind.contactBtn}
        </a>
      </motion.div>
    </div>
  );
};