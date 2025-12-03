import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';
import { Award, Book, Briefcase } from 'lucide-react';

export const Universe: React.FC = () => {
  const { content } = useLanguage();
  // Group certificates by category
  const aiCerts = content.certificates.filter(c => c.category === 'ai');
  const profCerts = content.certificates.filter(c => c.category === 'professional');

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{content.universe.title}</h1>
        <p className="text-lg text-slate-500 max-w-2xl">
          {content.universe.description}
        </p>
      </motion.div>

      {/* AI Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Award size={20} /></div>
          <h2 className="text-2xl font-bold text-slate-900">{content.universe.aiTitle}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {aiCerts.map((cert, idx) => (
            <Card key={cert.id} delay={idx * 0.1} className="border-l-4 border-l-qy-blue">
              <div className="text-sm font-mono text-qy-blue mb-2">{cert.year}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{cert.title}</h3>
              <p className="text-sm text-slate-500">{cert.description}</p>
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
    </div>
  );
};