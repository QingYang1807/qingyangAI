import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { SOCIAL_LINKS, WECHAT_QR_CODE } from '../constants';
import { Github, Globe, Code2, Cpu, Zap, Star, Award } from 'lucide-react';
import { WeChatButton } from '../components/WeChatButton';
import { SkillCategory } from '../types';
import { RadarChart } from '../components/ui/RadarChart';


export const About: React.FC = () => {
  const { content, language } = useLanguage();

  // Prepare data for charts
  const coreSkillsData = content.skills.slice(0, 4).map(s => ({
    label: s.id === 'agent' ? 'Agent' : s.id === 'rag' ? 'RAG' : s.id === 'ontology' ? 'Ontology' : 'Java',
    value: s.level,
    fullMark: 100
  }));

  const systemSkillsData = content.skills.slice(4, 8).map(s => ({
    label: s.id === 'system-design' ? 'System' : s.id === 'data-pipeline' ? 'DataOps' : s.id === 'productization' ? 'Product' : 'Lead',
    value: s.level,
    fullMark: 100
  }));

  return (
    <div className="pt-32 pb-20 max-w-6xl mx-auto px-6">

      {/* Bio Section */}
      <div className="grid md:grid-cols-3 gap-12 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-2"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{content.about.name}</h1>
          <h2 className="text-2xl text-qy-blue font-medium mb-6">{content.about.role}</h2>

          {/* Role Description Quote */}
          <div className="mb-8 p-4 border-l-4 border-qy-blue bg-slate-50/50 rounded-r-lg">
            <p className="text-lg text-slate-700 italic font-medium">
              "{content.about.roleDesc}"
            </p>
          </div>

          <div className="prose prose-slate text-slate-600 leading-relaxed text-lg">
            <p className="mb-4">
              {content.about.intro1} <strong className="text-slate-900"> {content.hero.chain.join(' → ')}</strong>.
            </p>
            <p className="mb-4">
              {content.about.intro2.split('**').map((part, index) =>
                index % 2 === 1 ? <strong key={index} className="text-qy-blue">{part}</strong> : part
              )}
            </p>
            <p>
              {content.about.intro3}
            </p>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors font-medium hover:text-qy-blue group"
              >
                {link.name === 'GitHub' ? <Github size={18} /> :
                  link.name === 'CSDN' ? <Code2 size={18} /> : <Globe size={18} />}
                <span>{link.name}</span>
              </a>
            ))}

            <WeChatButton
              qrCodeImage={WECHAT_QR_CODE}
              label={language === 'en' ? "WeChat Official" : "微信公众号"}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-1 shadow-inner h-full">
            <div className="bg-white rounded-xl p-8 h-full flex flex-col justify-center">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-8 pb-4 border-b border-slate-100">{content.about.impactTitle}</h3>
              <div className="space-y-10">
                {content.about.stats.map((stat, idx) => (
                  <div key={idx} className="group">
                    <div className={`text-4xl font-black mb-1 ${idx === 0 ? 'text-slate-900' : idx === 1 ? 'text-qy-blue' : 'text-emerald-500'}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide group-hover:text-slate-800 transition-colors">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Differentiators Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
            <Star size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">{content.about.differentiatorTitle}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {content.differentiators.map((diff) => (
            <div key={diff.id} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Award size={80} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 pr-4">{diff.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{diff.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills Matrix (Charts + Cards) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
            <Cpu size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">{content.about.skillsTitle || "Skill Matrix"}</h2>
        </div>

        {/* Radar Charts Row */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">{content.about.coreEng}</h3>
            <div className="bg-slate-50 rounded-full p-4 border border-slate-100">
              <RadarChart data={coreSkillsData} color="#3b82f6" size={320} />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">{content.about.capabilities}</h3>
            <div className="bg-slate-50 rounded-full p-4 border border-slate-100">
              <RadarChart data={systemSkillsData} color="#10b981" size={320} />
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {/* Core Engineering Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8 border-l-4 border-qy-blue pl-4">
              {content.about.coreEng} - Details
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {content.skills.slice(0, 4).map(skill => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>

          {/* System Level Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8 border-l-4 border-emerald-500 pl-4">
              {content.about.capabilities} - Details
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {content.skills.slice(4, 8).map(skill => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
            <Zap size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">{content.about.expTitle}</h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-slate-200 before:via-slate-300 before:to-slate-100">
          {content.experiences.map((exp) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-50 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2.5 h-2.5 bg-slate-400 group-hover:bg-qy-blue transition-colors rounded-full"></div>
              </div>

              {/* Card */}
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 hover:border-qy-blue/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-lg">{exp.role}</h3>
                  <span className="text-sm font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">{exp.period}</span>
                </div>
                <div className="text-sm font-bold text-qy-blue mb-4 flex items-center gap-2">
                  {exp.company}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

// Enhanced Skill Card Component
const SkillCard = ({ skill }: { skill: SkillCategory }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-bold text-slate-900 text-lg">{skill.title}</h4>
        <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg">
          <span className="font-bold text-slate-700 text-sm">{skill.level}%</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 rounded-full h-1.5 mb-4 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${skill.level >= 90 ? 'bg-qy-blue' : skill.level >= 80 ? 'bg-emerald-500' : 'bg-purple-500'}`}
        />
      </div>

      <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
        {skill.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {skill.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 bg-slate-50 text-slate-500 rounded border border-slate-100">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
