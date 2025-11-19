import React from 'react';
import { THOUGHTS } from '../constants';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

export const Mind: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Mind</h1>
        <p className="text-lg text-slate-500">
          Reflections on technology, design, and the spaces in between.
        </p>
      </motion.div>

      <div className="space-y-6">
        {THOUGHTS.map((post, idx) => (
          <Card key={post.id} delay={idx * 0.1} className="group cursor-pointer border-none shadow-none hover:shadow-none hover:bg-slate-50/50 p-0 mb-8 rounded-none border-b border-slate-100 pb-8">
             <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
             </div>
             <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-qy-blue transition-colors">{post.title}</h2>
             <p className="text-slate-500 mb-4 leading-relaxed">{post.excerpt}</p>
             <div className="flex gap-2">
               {post.tags.map(tag => (
                 <span key={tag} className="text-xs font-medium text-qy-blue bg-blue-50 px-2 py-1 rounded">{tag}</span>
               ))}
             </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
