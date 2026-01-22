import React from 'react';
import { motion } from 'framer-motion';

interface RadarChartProps {
    data: {
        label: string;
        value: number; // 0-100
        fullMark: number;
    }[];
    color?: string; // hex or tailwind class prefix like 'bg-blue-500' logic need to be handled, simplify to color string usually
    outerColor?: string;
    size?: number;
}

export const RadarChart: React.FC<RadarChartProps> = ({
    data,
    color = '#3b82f6', // default blue-500
    outerColor = '#e2e8f0', // default slate-200
    size = 300
}) => {
    const radius = size / 2;
    const center = size / 2;
    const total = data.length;
    const angleSlice = (Math.PI * 2) / total;
    const labelOffset = 30; // Distance of label from outer circle

    // Helper to get coordinates
    const getCoordinates = (index: number, value: number, max: number) => {
        const angle = index * angleSlice - Math.PI / 2; // Start from top (-90deg)
        const r = (value / max) * (radius - 40); // Leave padding for labels
        return {
            x: center + r * Math.cos(angle),
            y: center + r * Math.sin(angle)
        };
    };

    // Calculate generic polygon points for grid
    const getPolygonPoints = (scale: number) => {
        return data.map((_, i) => {
            const { x, y } = getCoordinates(i, scale * 100, 100);
            return `${x},${y}`;
        }).join(' ');
    };

    // Calculate data polygon points
    const dataPoints = data.map((d, i) => {
        const { x, y } = getCoordinates(i, d.value, d.fullMark);
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Grid Levels (20%, 40%, 60%, 80%, 100%) */}
                {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
                    <polygon
                        key={i}
                        points={getPolygonPoints(scale)}
                        fill="none"
                        stroke={outerColor}
                        strokeWidth="1"
                        className="opacity-50"
                    />
                ))}

                {/* Axis Lines */}
                {data.map((_, i) => {
                    const { x, y } = getCoordinates(i, 100, 100);
                    return (
                        <line
                            key={i}
                            x1={center}
                            y1={center}
                            x2={x}
                            y2={y}
                            stroke={outerColor}
                            strokeWidth="1"
                            className="opacity-50"
                        />
                    );
                })}

                {/* Data Polygon with Animation */}
                <motion.polygon
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    points={dataPoints}
                    fill={color}
                    fillOpacity="0.2"
                    stroke={color}
                    strokeWidth="2"
                />

                {/* Data Points (Dots) */}
                {data.map((d, i) => {
                    const { x, y } = getCoordinates(i, d.value, d.fullMark);
                    return (
                        <motion.circle
                            key={i}
                            initial={{ r: 0 }}
                            animate={{ r: 4 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            cx={x}
                            cy={y}
                            fill={color}
                            stroke="white"
                            strokeWidth="2"
                        />
                    );
                })}

                {/* Labels */}
                {data.map((d, i) => {
                    const angle = i * angleSlice - Math.PI / 2;
                    // Push labels out a bit further than the max radius
                    const r = radius - 15;
                    const x = center + r * Math.cos(angle);
                    const y = center + r * Math.sin(angle);

                    // Simple logic to adjust text anchor based on position
                    const isLeft = x < center - 10;
                    const isRight = x > center + 10;
                    const textAnchor = isLeft ? 'end' : isRight ? 'start' : 'middle';
                    const dominantBaseline = y < center ? 'auto' : 'hanging'; // 'auto' usually aligns bottom, for top items. 

                    // For top item (i=0), we want it centered above.
                    // Since we used -PI/2, index 0 is TOP.

                    return (
                        <text
                            key={i}
                            x={x}
                            y={y}
                            textAnchor={textAnchor}
                            fontSize="11"
                            className="fill-slate-500 font-medium"
                            dominantBaseline="middle" // Simplify baseline
                        >
                            {d.label}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
};
