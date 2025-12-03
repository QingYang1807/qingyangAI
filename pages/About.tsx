import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { EXPERIENCES, SOCIAL_LINKS, WECHAT_QR_CODE } from '../constants';
import { Github, Globe } from 'lucide-react';
import { WeChatButton } from '../components/WeChatButton';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-5xl mx-auto px-6">
       
       {/* Bio Section */}
       <div className="grid md:grid-cols-3 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2"
          >
             <h1 className="text-4xl font-bold text-slate-900 mb-6">Qingyang</h1>
             <p className="text-xl text-slate-500 mb-6 leading-relaxed font-light">
               AI Infrastructure & RAG Engineering Specialist.
             </p>
             <div className="prose prose-slate text-slate-600 leading-relaxed">
                <p className="mb-4">
                  My expertise lies in building the complete AI application lifecycle: 
                  <strong className="text-slate-800"> Data → Retrieval → Reasoning → Orchestration → Application</strong>.
                </p>
                <p className="mb-4">
                  I possess a unique fusion of capabilities: <strong>Data Platform x RAG x Agent Workflow</strong>. 
                  I have architected enterprise-level data platforms supporting 300+ AI scenes and millions of data points, 
                  and engineered sophisticated Agent orchestration engines using LangGraph and Ontology modeling.
                </p>
                <p>
                   I focus on turning complex algorithms into scalable, stable, and explainable engineering solutions.
                </p>
             </div>
             
             <div className="flex gap-4 mt-8">
               {SOCIAL_LINKS.map(link => (
                 <a 
                   key={link.name} 
                   href={link.href} 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors font-medium text-sm"
                 >
                   {link.name === 'GitHub' ? <Github size={16}/> : <Globe size={16}/>}
                   {link.name}
                 </a>
               ))}
               <WeChatButton qrCodeImage={WECHAT_QR_CODE} />
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
             <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-1 shadow-inner">
                <div className="bg-white rounded-xl p-6 h-full">
                   <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Impact</h3>
                   <div className="space-y-6">
                      <div>
                         <div className="text-3xl font-bold text-slate-900">300+</div>
                         <div className="text-sm text-slate-500">AI Scenes Supported</div>
                      </div>
                      <div>
                         <div className="text-3xl font-bold text-qy-blue">19+</div>
                         <div className="text-sm text-slate-500">RAG/Agent Apps</div>
                      </div>
                      <div>
                         <div className="text-3xl font-bold text-emerald-500">500k+</div>
                         <div className="text-sm text-slate-500">CoT Data Samples</div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
       </div>

       {/* Experience Timeline */}
       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="mb-20"
       >
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Professional Experience</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  
                  {/* Icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-3 h-3 bg-qy-blue rounded-full"></div>
                  </div>
                  
                  {/* Card */}
                  <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
                     <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h3 className="font-bold text-slate-900 text-lg">{exp.role}</h3>
                        <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                     </div>
                     <div className="text-sm font-medium text-qy-blue mb-3">{exp.company}</div>
                     <p className="text-slate-600 text-sm leading-relaxed mb-4">{exp.description}</p>
                     <div className="flex flex-wrap gap-2">
                       {exp.tags.map(tag => (
                         <span key={tag} className="px-2 py-1 bg-slate-50 text-slate-500 rounded text-xs border border-slate-100">{tag}</span>
                       ))}
                     </div>
                  </Card>
              </div>
            ))}
          </div>
       </motion.div>

       {/* Skills Matrix */}
       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
       >
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Skill Matrix</h2>
          <div className="grid md:grid-cols-2 gap-8">
             <div className="space-y-6">
                <h3 className="font-bold text-slate-700">Core Engineering</h3>
                <div className="space-y-4">
                   <SkillBar name="LangGraph / Agent Orchestration" level={95} />
                   <SkillBar name="RAG / Retrieval Optimization" level={92} />
                   <SkillBar name="Ontology / Knowledge Graph" level={88} />
                   <SkillBar name="Java / Distributed Systems" level={90} />
                </div>
             </div>
             <div className="space-y-6">
                <h3 className="font-bold text-slate-700">Capabilities</h3>
                <div className="space-y-4">
                   <SkillBar name="System Design" level={90} />
                   <SkillBar name="Data Pipeline (DAG)" level={92} />
                   <SkillBar name="Team Leadership" level={85} />
                   <SkillBar name="Productization" level={88} />
                </div>
             </div>
          </div>
       </motion.div>
    </div>
  );
};

const SkillBar = ({ name, level }: { name: string, level: number }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span className="text-slate-600">{name}</span>
      <span className="text-slate-400">{level}%</span>
    </div>
    <div className="w-full bg-slate-100 rounded-full h-1.5">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-qy-blue h-1.5 rounded-full" 
      />
    </div>
  </div>
);