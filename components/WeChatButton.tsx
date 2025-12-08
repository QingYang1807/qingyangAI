import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface WeChatButtonProps {
  qrCodeImage: string;
  label: string;
}

export const WeChatButton: React.FC<WeChatButtonProps> = ({ qrCodeImage, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsClicked(false);
      }
    };

    const handleBlur = () => {
      setIsClicked(false);
    };

    if (isClicked) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('blur', handleBlur);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('blur', handleBlur);
    };
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const showQRCode = isHovered || isClicked;

  return (
    <div 
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={handleClick}
        className={`flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors font-medium text-sm cursor-pointer whitespace-nowrap ${isClicked ? 'bg-slate-200 ring-2 ring-slate-300' : ''}`}
      >
        <MessageCircle size={16} />
        <span>{label}</span>
      </button>

      <AnimatePresence>
        {showQRCode && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-50 origin-bottom"
          >
            <div className="bg-white rounded-xl shadow-xl p-3 border border-slate-200 w-64">
              <div className="text-sm text-slate-500 text-center mb-2 font-medium whitespace-nowrap">
                {isClicked ? (label === '微信公众号' ? '已固定显示' : 'Pinned') : (label === '微信公众号' ? '扫码关注' : 'Scan to Follow')}
              </div>
              <div className="flex justify-center items-center bg-slate-50 rounded-lg overflow-hidden p-1">
                <img 
                  src={qrCodeImage} 
                  alt="WeChat QR Code" 
                  className="w-full h-auto rounded"
                  style={{ objectFit: 'contain' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback placeholder
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="%23f1f5f9"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-size="14"%3EQR Error%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[6px] w-3 h-3 bg-white border-b border-r border-slate-200 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};