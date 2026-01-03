import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

export const CapabilitiesSection: React.FC = () => {
    const { content } = useLanguage();
    const { config } = useTheme();

    // Select top 3 or specific advantages for this display
    const highlightedAdvantages = content.advantages.slice(0, 3);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Core Capabilities</h2>
                    <p className="text-slate-500 text-lg">
                        Delivering end-to-end intelligence through a unified engineering framework.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {highlightedAdvantages.map((adv, idx) => {
                        const Icon = adv.icon;
                        return (
                            <motion.div
                                key={adv.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="group relative p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <Icon size={28} className={adv.color} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-qy-blue transition-colors">
                                    {adv.title}
                                </h3>

                                <p className="text-slate-500 mb-6 leading-relaxed">
                                    {adv.description}
                                </p>

                                <ul className="space-y-3 pt-6 border-t border-slate-100">
                                    {adv.details.map((detail, i) => (
                                        <li key={i} className="flex items-center justify-between text-sm">
                                            <span className="text-slate-400 font-medium">{detail.label}</span>
                                            <span className="text-slate-700 font-semibold text-right">{detail.value}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className={`absolute inset-0 border-2 border-${config.colors.primary} rounded-3xl opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500`}></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
