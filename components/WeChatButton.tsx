import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface WeChatButtonProps {
  qrCodeImage: string;
}

export const WeChatButton: React.FC<WeChatButtonProps> = ({ qrCodeImage }) => {
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
        className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors font-medium text-sm cursor-pointer whitespace-nowrap"
      >
        <MessageCircle size={20} />
        <span>微信公众号</span>
      </button>

      <AnimatePresence>
        {showQRCode && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1 transform -translate-x-1/2 mb-2 z-50"
          >
            <div className="bg-white rounded-lg shadow-xl p-2 border border-slate-200">
              <div className="text-sm text-slate-600 text-center mb-2 font-medium whitespace-nowrap flex items-center justify-center">扫码关注</div>
              <div className="flex justify-center items-center">
                <img 
                  src={qrCodeImage} 
                  alt="微信公众号二维码" 
                  className="w-[1080px] h-auto rounded"
                  style={{ objectFit: 'contain' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080"%3E%3Crect width="1080" height="1080" fill="%23f1f5f9"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-size="14"%3E二维码%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

