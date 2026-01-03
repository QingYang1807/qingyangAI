import React from 'react';
import { motion } from 'framer-motion';

const Lantern: React.FC<{
    delay: number;
    x: string;
    size: number;
    duration: number;
}> = ({ delay, x, size, duration }) => {
    return (
        <motion.div
            className="absolute top-0 z-0 pointer-events-none"
            style={{ left: x }}
            initial={{ y: -100, opacity: 0, rotate: -5 }}
            animate={{
                y: [-50, 20, -10], // Small gentle float or hang
                rotate: [-5, 5, -5],
                opacity: [0, 1, 0.8],
            }}
            transition={{
                y: {
                    duration: 4,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: 'reverse'
                },
                rotate: {
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                },
                opacity: { duration: 1, delay: delay }
            }}
        >
            {/* SVG Lantern */}
            <svg
                width={size}
                height={size * 1.4}
                viewBox="0 0 100 140"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg"
            >
                {/* Rope */}
                <line x1="50" y1="0" x2="50" y2="10" stroke="#fca5a5" strokeWidth="2" />

                {/* Main Body */}
                <ellipse cx="50" cy="50" rx="40" ry="35" fill="#dc2626" />
                {/* Top/Bottom Caps */}
                <rect x="30" y="15" width="40" height="8" rx="2" fill="#b91c1c" />
                <rect x="30" y="80" width="40" height="8" rx="2" fill="#b91c1c" />

                {/* Vertical Ribs */}
                <path d="M50 15 Q 15 50 50 88" stroke="#991b1b" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M50 15 Q 85 50 50 88" stroke="#991b1b" strokeWidth="2" fill="none" opacity="0.6" />

                {/* Gold Character (Fu - Blessing) rough shape */}
                <rect x="40" y="35" width="20" height="20" rx="2" fill="#fbbf24" opacity="0.8" transform="rotate(45 50 45)" />

                {/* Fringe/Tassel */}
                <line x1="50" y1="88" x2="50" y2="120" stroke="#ef4444" strokeWidth="3" />
                <line x1="50" y1="88" x2="40" y2="115" stroke="#ef4444" strokeWidth="2" />
                <line x1="50" y1="88" x2="60" y2="115" stroke="#ef4444" strokeWidth="2" />
            </svg>
        </motion.div>
    );
};

export const Lanterns: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
            {/* Left Group */}
            <Lantern delay={0} x="5%" size={80} duration={4} />
            <Lantern delay={0.5} x="15%" size={60} duration={5} />

            {/* Right Group */}
            <Lantern delay={0.2} x="85%" size={80} duration={4.5} />
            <Lantern delay={0.7} x="92%" size={50} duration={5.5} />
        </div>
    );
};
