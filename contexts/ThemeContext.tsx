import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 'default' | 'newYear2026';

interface ThemeConfig {
    name: string;
    colors: {
        primary: string; // Main accident
        secondary: string; // Secondary accident
        accent: string; // Highlights
        background: string;
        text: string;
        selectionBg: string; // selection:bg-...
        selectionText: string;
    };
    gradients: {
        hero: string;
        pill: string; // For nav pills
        icon: string; // For logo icon
    };
}

export const THEMES: Record<ThemeType, ThemeConfig> = {
    default: {
        name: 'Default',
        colors: {
            primary: 'qy-blue', // blue-500
            secondary: 'cyan-400',
            accent: 'emerald-400',
            background: 'white',
            text: 'slate-900',
            selectionBg: 'bg-qy-blue/20',
            selectionText: 'text-qy-dark',
        },
        gradients: {
            hero: 'from-blue-100/40 to-emerald-100/30',
            pill: 'bg-white',
            icon: 'from-qy-blue to-cyan-400',
        }
    },
    newYear2026: {
        name: '2026 New Year',
        colors: {
            primary: 'red-600',
            secondary: 'yellow-500',
            accent: 'orange-400',
            background: 'slate-50', // Slightly warmer off-white if possible, but stick to standard for text contrast
            text: 'slate-900',
            selectionBg: 'bg-red-500/20',
            selectionText: 'text-red-900',
        },
        gradients: {
            hero: 'from-red-100/40 to-yellow-100/30', // Warm festive gradient
            pill: 'bg-red-50',
            icon: 'from-red-500 to-yellow-500',
        }
    }
};

interface ThemeContextType {
    theme: ThemeType;
    config: ThemeConfig;
    toggleTheme: () => void;
    setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>('default');

    useEffect(() => {
        // Check date for auto-switch
        const checkDate = () => {
            const now = new Date();
            const cutoff = new Date('2026-01-31T23:59:59');

            // If before Feb 1st 2026, default to New Year 2026
            // We perform this check only on mount to set initial state. 
            // User manual override can persist in local state if we wanted, 
            // but simpler request just said "default to... then switch".
            if (now <= cutoff) {
                setTheme('newYear2026');
            } else {
                setTheme('default');
            }
        };

        checkDate();
    }, []);

    const toggleTheme = () => {
        setTheme(prev => prev === 'default' ? 'newYear2026' : 'default');
    };

    const value = {
        theme,
        config: THEMES[theme],
        toggleTheme,
        setTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
