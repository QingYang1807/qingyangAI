import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  icon = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium transition-all duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-qy-blue";
  
  const variants = {
    primary: "bg-qy-dark text-white hover:bg-slate-800 shadow-lg hover:shadow-xl border border-transparent",
    secondary: "bg-white text-qy-text border border-slate-200 hover:border-qy-blue/30 hover:shadow-soft hover:text-qy-blue",
    ghost: "text-slate-500 hover:text-qy-blue hover:bg-slate-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};
