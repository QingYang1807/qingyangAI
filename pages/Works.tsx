import React from 'react';
import { FEATURED_WORKS, PRODUCTS } from '../constants';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';

export const Works: React.FC = () => {
  const allItems = [...FEATURED_WORKS, ...PRODUCTS];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Archive</h1>
        <p className="text-lg text-slate-500 max-w-2xl">
          A curated list of commercial projects, open-source contributions, and experiments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {allItems.map((item, idx) => (
          <Card key={item.id} delay={idx * 0.1} className="group cursor-pointer flex flex-col md:flex-row gap-6 items-start">
             <div className="w-full md:w-48 h-32 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                {item.image && <img src={item.image} className="w-full h-full object-cover" />}
             </div>
             <div>
               <div className="flex items-center gap-3 mb-2">
                 <h3 className="text-xl font-bold text-slate-900 group-hover:text-qy-blue transition-colors">{item.title}</h3>
                 <span className="px-2 py-0.5 rounded-full bg-slate-100 text-xs font-medium text-slate-500 border border-slate-200">{item.category}</span>
               </div>
               <p className="text-slate-500 mb-4 text-sm leading-relaxed">{item.description}</p>
               <span className="text-xs font-mono text-slate-400">{item.year}</span>
             </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
