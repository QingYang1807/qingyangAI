import React from 'react';
import { motion } from 'framer-motion';

// Individual Firework Burst
const Firework: React.FC<{
    sx: string;
    sy: string;
    delay: number;
    color: string;
    scale?: number;
}> = ({ sx, sy, delay, color, scale = 1 }) => {
    // Generate 24-36 particles for a realistic burst
    const particles = React.useMemo(() => {
        const count = 24 + Math.floor(Math.random() * 12);
        return Array.from({ length: count }).map((_, i) => {
            // Uniform distribution on sphere (circle for 2D) roughly
            const angle = (i * 360) / count + (Math.random() * 10 - 5);
            return {
                angle,
                // Varied distance for "explosion" feel
                distance: (60 + Math.random() * 80) * scale,
                // Gravity factor: some particles fall faster
                gravity: 20 + Math.random() * 40
            };
        });
    }, [scale]);

    const repeatDelay = React.useMemo(() => 4 + Math.random() * 3, []); // Longer pause between re-firing
    const duration = 2.5;

    return (
        <motion.div
            className="absolute"
            style={{ left: sx, top: sy }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }} // Fade in fast, stay, fade out
            transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                repeatDelay: repeatDelay,
                times: [0, 0.1, 0.6, 1]
            }}
        >
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full shadow-sm"
                    style={{
                        backgroundColor: color,
                        boxShadow: `0 0 ${4 * scale}px ${color}`,
                        width: 2 * scale,
                        height: 2 * scale
                    }}
                    animate={{
                        x: [0, Math.cos(p.angle * Math.PI / 180) * p.distance],
                        y: [0, Math.sin(p.angle * Math.PI / 180) * p.distance + p.gravity], // Add gravity to Y
                        scale: [1, 0.5, 0], // Shrink as they fade
                    }}
                    transition={{
                        duration: duration * 0.8, // Particles fade/move slightly faster than container opacity
                        delay: delay,
                        ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for explosive start, slow end
                        repeat: Infinity,
                        repeatDelay: repeatDelay + (duration * 0.2) // Sync
                    }}
                />
            ))}
        </motion.div>
    );
};

export const Fireworks: React.FC = () => {
    // Dense layout of fireworks
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Top Cluster */}
            <Firework sx="15%" sy="20%" delay={0} color="#fbbf24" scale={1.2} />
            <Firework sx="25%" sy="15%" delay={2.1} color="#ef4444" scale={1} />
            <Firework sx="80%" sy="18%" delay={1.2} color="#f59e0b" scale={1.3} />
            <Firework sx="88%" sy="25%" delay={3.5} color="#dc2626" scale={0.9} />

            {/* Middle / Sides */}
            <Firework sx="5%" sy="45%" delay={0.8} color="#f97316" scale={0.8} />
            <Firework sx="92%" sy="40%" delay={2.5} color="#fbbf24" scale={0.9} />
            <Firework sx="12%" sy="60%" delay={4.2} color="#ef4444" scale={0.7} />
            <Firework sx="85%" sy="65%" delay={1.8} color="#f59e0b" scale={0.8} />

            {/* Center/Background Fillers */}
            <Firework sx="35%" sy="30%" delay={5.0} color="#fbbf24" scale={0.6} />
            <Firework sx="65%" sy="35%" delay={2.8} color="#dc2626" scale={0.7} />
            <Firework sx="45%" sy="25%" delay={1.5} color="#fcd34d" scale={1.1} />
            <Firework sx="55%" sy="50%" delay={4.0} color="#ef4444" scale={0.8} />

            {/* Low ones */}
            <Firework sx="20%" sy="75%" delay={3.0} color="#f97316" scale={0.6} />
            <Firework sx="70%" sy="70%" delay={0.5} color="#fbbf24" scale={0.7} />
        </div>
    );
};
