import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Section } from '../../types';

interface HeroSectionProps {
    onNavigate: (section: Section) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
    const { content } = useLanguage();
    const { config } = useTheme();

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
            {/* Background Elements - Moved to App.tsx for global consistency, but we can add local decorative ones */}

            <div className="max-w-7xl mx-auto w-full z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Typography & CTA */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className={`h-px w-12 bg-${config.colors.primary}`}></span>
                        <span className={`text-sm font-semibold tracking-widest uppercase text-${config.colors.primary}`}>
                            {content.hero.tag}
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-slate-900 mb-8">
                        Engineering <br />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${config.gradients.icon}`}>
                            Intelligence
                        </span>
                    </h1>

                    <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed font-light">
                        {content.hero.description} <br />
                        <span className="text-slate-900 font-medium">Data</span> →
                        <span className="text-slate-900 font-medium"> RAG</span> →
                        <span className="text-slate-900 font-medium"> Agent</span>
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button onClick={() => onNavigate('works')} className="h-14 px-8 text-lg">
                            {content.hero.ctaPrimary}
                        </Button>
                        <Button variant="outline" onClick={() => onNavigate('about')} className="h-14 px-8 text-lg">
                            {content.hero.ctaSecondary}
                        </Button>
                    </div>
                </motion.div>

                {/* Right: Abstract Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden md:flex items-center justify-center h-[600px]"
                >
                    {/* Abstract Rings/Orbits */}
                    <div className={`absolute w-[500px] h-[500px] border border-${config.colors.primary}/10 rounded-full animate-[spin_60s_linear_infinite]`}></div>
                    <div className={`absolute w-[350px] h-[350px] border border-${config.colors.accent}/20 rounded-full animate-[spin_40s_linear_infinite_reverse]`}></div>
                    <div className={`absolute w-[200px] h-[200px] border border-${config.colors.secondary}/30 rounded-full animate-[spin_20s_linear_infinite]`}></div>

                    {/* Central Core */}
                    <div className="relative z-10 w-32 h-32 backdrop-blur-3xl bg-white/30 rounded-full flex items-center justify-center shadow-2xl border border-white/50">
                        <div className={`w-20 h-20 bg-gradient-to-tr ${config.gradients.icon} rounded-full animate-pulse`} style={{ animationDuration: '3s' }}></div>
                    </div>

                    {/* Floating Cards / Nodes */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 right-10 bg-white/80 backdrop-blur p-4 rounded-2xl shadow-lg border border-slate-100 max-w-[150px]"
                    >
                        <div className="h-2 w-12 bg-slate-200 rounded mb-2"></div>
                        <div className="h-2 w-20 bg-slate-100 rounded"></div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-32 left-0 bg-white/80 backdrop-blur p-4 rounded-2xl shadow-lg border border-slate-100 max-w-[150px]"
                    >
                        <div className={`h-8 w-8 rounded-lg bg-${config.colors.primary}/10 flex items-center justify-center mb-2`}>
                            <div className={`h-4 w-4 rounded-md bg-${config.colors.primary}`}></div>
                        </div>
                        <div className="h-2 w-16 bg-slate-200 rounded"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
