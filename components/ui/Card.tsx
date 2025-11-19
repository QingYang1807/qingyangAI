import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  delay = 0,
  onClick
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      onClick={onClick}
      className={`
        bg-white border border-slate-100 rounded-2xl p-6 
        ${hoverEffect ? 'hover:shadow-soft hover:-translate-y-1 hover:border-blue-100 transition-all duration-300' : ''}
        ${onClick ? 'cursor-pointer active:scale-[0.99]' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};