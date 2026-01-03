import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

export const StatsSection: React.FC = () => {
    const { content } = useLanguage();
    const { config } = useTheme();

    return (
        <section className="py-12 border-y border-slate-100 bg-slate-50/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {content.about.stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                            <span className={`text-4xl md:text-5xl font-bold tracking-tight text-${config.colors.primary} mb-2`}>
                                {stat.value}
                            </span>
                            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                    {/* Added an extra stat for balance if needed, or stick to existing 3 */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <span className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
                            100%
                        </span>
                        <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                            Engineering
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
