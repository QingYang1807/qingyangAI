import React, { useState } from 'react';
import { ALL_PROJECTS } from '../constants';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

interface WorksProps {
  filter?: 'all' | 'product' | 'case-study';
}

export const Works: React.FC<WorksProps> = ({ filter = 'all' }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const categories = ['All', 'AI Architecture', 'AI Platform', 'AI Application', 'Data Platform', 'Product'];

  const filteredProjects = ALL_PROJECTS.filter(p => {
    if (filter === 'product') return p.category === 'Product';
    
    if (activeFilter === 'All') {
      if (filter === 'case-study') return p.category !== 'Product';
      return true;
    }
    return p.category === activeFilter;
  });

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {filter === 'product' ? 'Products' : 'Projects & Architectures'}
        </h1>
        <p className="text-lg text-slate-500 max-w-3xl">
          {filter === 'product' 
            ? 'Live tools built for efficiency and creativity.' 
            : 'Enterprise-grade systems, architectures, and AI applications delivered for impact.'}
        </p>
      </motion.div>

      {filter === 'all' && (
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat 
                  ? 'bg-qy-dark text-white shadow-md' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-8">
        {filteredProjects.map((item, idx) => (
          <Card key={item.id} delay={idx * 0.05} className="group flex flex-col lg:flex-row gap-8 p-8 border-slate-200 hover:border-qy-blue/30">
             <div className="w-full lg:w-1/3 aspect-video lg:aspect-auto lg:h-64 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 relative border border-slate-100">
                {item.image ? (
                  <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                ) : (
                  <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-300">No Preview</div>
                )}
             </div>
             
             <div className="flex-1">
               <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                 <div className="flex items-center gap-3">
                   <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                   <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                     item.status === 'completed' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-blue-50 text-blue-700 border-blue-100'
                   }`}>
                     {item.status}
                   </span>
                   {item.category === 'Product' && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">Product</span>
                   )}
                 </div>
                 {item.link && (
                   <a href={item.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium text-qy-blue hover:underline">
                     Visit Live <ExternalLink size={14} />
                   </a>
                 )}
               </div>

               <p className="text-slate-600 mb-6 leading-relaxed">{item.longDescription}</p>
               
               {item.results && (
                 <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                   {item.results.map((res, i) => (
                     <div key={i} className="flex items-start gap-2 text-sm text-slate-500">
                       <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                       <span>{res}</span>
                     </div>
                   ))}
                 </div>
               )}

               <div>
                 <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Tech Stack</h4>
                 <div className="flex flex-wrap gap-2">
                   {item.technologies.map(tech => (
                     <span key={tech} className="px-2 py-1 rounded-md bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100">
                       {tech}
                     </span>
                   ))}
                 </div>
               </div>
             </div>
          </Card>
        ))}
      </div>
    </div>
  );
};