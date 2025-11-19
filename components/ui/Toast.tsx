import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Info } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  icon?: 'lock' | 'info';
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose, icon = 'lock' }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, x: '-50%' }}
          animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
          exit={{ opacity: 0, y: 20, scale: 0.95, x: '-50%' }}
          className="fixed bottom-10 left-1/2 z-[100] flex items-center gap-3 px-6 py-3.5 bg-slate-900/90 text-white backdrop-blur-md rounded-full shadow-2xl border border-slate-700/50 min-w-[300px] justify-center"
        >
          {icon === 'lock' ? (
            <Lock size={16} className="text-slate-400" />
          ) : (
            <Info size={16} className="text-blue-400" />
          )}
          <span className="text-sm font-medium tracking-wide">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};