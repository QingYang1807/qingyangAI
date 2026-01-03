import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const FeaturedWork: React.FC = () => {
    const { content } = useLanguage();
    const { config } = useTheme();

    // Select featured projects
    const featuredWorks = content.projects.filter(p => p.featured).slice(0, 3);

    const handleProjectClick = (link?: string) => {
        if (link) window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-20">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{content.hero.featuredTitle}</h2>
                        <p className="text-slate-500 text-lg leading-relaxed">{content.hero.featuredDesc}</p>
                    </div>
                </div>

                <div className="space-y-32">
                    {featuredWorks.map((work, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div
                                key={work.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center`}
                            >
                                {/* Image Side */}
                                <div
                                    className="flex-1 w-full group cursor-pointer"
                                    onClick={() => handleProjectClick(work.link)}
                                >
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-slate-100 aspect-[4/3] md:aspect-[16/10]">
                                        <div className={`absolute inset-0 bg-${config.colors.primary}/0 group-hover:bg-${config.colors.primary}/5 transition-colors duration-500 z-10`}></div>
                                        {work.image ? (
                                            <img
                                                src={work.image}
                                                alt={work.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-slate-300">No Image</div>
                                        )}

                                        {/* Status Tag */}
                                        <div className="absolute top-6 left-6 z-20">
                                            <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                                                {work.category}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="flex-1 w-full">
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 group-hover:text-qy-blue transition-colors">
                                        {work.title}
                                    </h3>
                                    <p className="text-lg text-slate-500 leading-relaxed mb-8">
                                        {work.longDescription}
                                    </p>

                                    <div className="mb-8 flex flex-wrap gap-2">
                                        {work.technologies.map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-col gap-4 mb-8 pl-4 border-l-2 border-slate-200">
                                        {work.results?.map((res, i) => (
                                            <span key={i} className="text-slate-700 font-medium text-sm">
                                                — {res}
                                            </span>
                                        ))}
                                    </div>

                                    <Button onClick={() => handleProjectClick(work.link)} icon>
                                        View Case Study
                                    </Button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
