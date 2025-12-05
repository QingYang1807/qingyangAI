import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { Course } from '../types';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto px-6"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-qy-blue transition-colors mb-8 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Universe
      </button>

      {/* Hero Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-qy-blue rounded-full text-sm font-medium mb-4">
          <Calendar size={14} />
          {course.period}
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6">{course.title}</h1>
        <p className="text-xl text-slate-500 leading-relaxed font-light border-l-4 border-slate-200 pl-6">
          {course.description}
        </p>
      </div>

      {/* Learning Path Visualization */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block" />
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 md:hidden" />

        <div className="space-y-12">
          {course.modules.map((module, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-qy-blue rounded-full z-10 -translate-x-1/2 flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 bg-qy-blue rounded-full" />
                </div>

                {/* Content Card */}
                <div className="md:w-1/2 pl-12 md:pl-0">
                  <div className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-soft hover:shadow-lg transition-shadow duration-300 relative group
                    ${isEven ? 'md:mr-12' : 'md:ml-12'}
                  `}>
                    <div className="absolute top-6 right-6 text-slate-200 group-hover:text-blue-100 transition-colors">
                      <BookOpen size={24} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center font-mono">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {module.title}
                    </h3>
                    
                    <ul className="space-y-2">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle size={14} className="mt-1 text-emerald-500 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty Space for Grid alignment */}
                <div className="md:w-1/2 hidden md:block" />
              </motion.div>
            );
          })}
          
          {/* Graduation Node */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center pt-8"
          >
             <div className="relative z-10 flex flex-col items-center gap-2">
               <div className="w-16 h-16 bg-gradient-to-br from-qy-blue to-emerald-400 rounded-full flex items-center justify-center shadow-glow text-white">
                 <CheckCircle size={32} />
               </div>
               <span className="font-bold text-slate-900 tracking-wide uppercase text-sm">Graduation</span>
             </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};