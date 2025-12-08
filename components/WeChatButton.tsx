
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ImageOff } from 'lucide-react';

interface WeChatButtonProps {
  qrCodeImage: string;
  label: string;
}

export const WeChatButton: React.FC<WeChatButtonProps> = ({ qrCodeImage, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [imgError, setImgError] = useState(false);
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
              <div className="flex justify-center items-center bg-slate-50 rounded-lg overflow-hidden p-1 min-h-[200px]">
                {!imgError ? (
                  <img 
                    src={qrCodeImage} 
                    alt="WeChat QR Code" 
                    className="w-full h-auto rounded"
                    style={{ objectFit: 'contain' }}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 text-slate-400 gap-2">
                     <ImageOff size={32} />
                     <span className="text-xs text-center">Image not found</span>
                  </div>
                )}
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
