import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
       <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left: Bio */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
             <h1 className="text-5xl font-bold text-slate-900 mb-8">Design. <br/>Code. <br/>Intelligence.</h1>
             <div className="prose prose-slate prose-lg text-slate-500">
                <p className="mb-6">
                  I am Qingyang, a multidisciplinary builder focused on the intersection of Generative AI and Product Design.
                </p>
                <p className="mb-6">
                  With a background in Computer Science and a passion for typography, I build tools that feel inevitable. I believe the future of software isn't just about capability, but about the subtle orchestration of data and interaction.
                </p>
                <p>
                  Currently building the next generation of AI-native interfaces.
                </p>
             </div>
          </motion.div>

          {/* Right: Stats / Stack */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
             <Card className="mb-6 bg-gradient-to-br from-slate-50 to-white">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Current Focus</h3>
                <ul className="space-y-3">
                   <li className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                      <span className="font-medium text-slate-700">Agentic Workflows</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Researching</span>
                   </li>
                   <li className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                      <span className="font-medium text-slate-700">Multimodal Interfaces</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Building</span>
                   </li>
                </ul>
             </Card>

             <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-slate-900 text-white">
                   <div className="text-3xl font-bold mb-1">5+</div>
                   <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                 <div className="p-6 rounded-2xl bg-qy-blue text-white">
                   <div className="text-3xl font-bold mb-1">20+</div>
                   <div className="text-sm text-blue-100">Projects Shipped</div>
                </div>
             </div>
          </motion.div>

       </div>
    </div>
  );
};
