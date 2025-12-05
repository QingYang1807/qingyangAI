import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Briefcase, ChevronRight } from 'lucide-react';
import { CourseDetail } from '../components/CourseDetail';

export const Universe: React.FC = () => {
  const { content } = useLanguage();
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  // Group certificates by category
  const aiCerts = content.certificates.filter(c => c.category === 'ai');
  const profCerts = content.certificates.filter(c => c.category === 'professional');

  const handleCertificateClick = (courseId?: string) => {
    if (courseId && content.courses && content.courses[courseId]) {
      setSelectedCourseId(courseId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 min-h-screen">
      <AnimatePresence mode="wait">
        {selectedCourseId ? (
          <CourseDetail 
            key="detail"
            course={content.courses![selectedCourseId]} 
            onBack={() => setSelectedCourseId(null)} 
          />
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="mb-16">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{content.universe.title}</h1>
              <p className="text-lg text-slate-500 max-w-2xl">
                {content.universe.description}
              </p>
            </div>

            {/* AI Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Award size={20} /></div>
                <h2 className="text-2xl font-bold text-slate-900">{content.universe.aiTitle}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {aiCerts.map((cert, idx) => (
                  <Card 
                    key={cert.id} 
                    delay={idx * 0.1} 
                    className={`border-l-4 border-l-qy-blue relative group ${cert.courseId ? 'cursor-pointer hover:bg-blue-50/30' : ''}`}
                    onClick={() => handleCertificateClick(cert.courseId)}
                  >
                    <div className="text-sm font-mono text-qy-blue mb-2">{cert.year}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-qy-blue transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">{cert.description}</p>
                    
                    {cert.courseId && (
                      <div className="flex items-center text-xs font-semibold text-qy-blue opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 right-4">
                        View Roadmap <ChevronRight size={14} />
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            {/* Professional Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><Briefcase size={20} /></div>
                <h2 className="text-2xl font-bold text-slate-900">{content.universe.profTitle}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {profCerts.map((cert, idx) => (
                  <Card key={cert.id} delay={0.2 + idx * 0.1} className="border-l-4 border-l-purple-500">
                    <div className="text-sm font-mono text-purple-600 mb-2">{cert.year}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{cert.title}</h3>
                    <p className="text-sm text-slate-500">{cert.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};