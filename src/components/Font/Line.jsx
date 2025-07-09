import React from 'react';
import { motion } from 'framer-motion';

const Line = ({ children }) => {
  return (
    <motion.div
      className="w-full h-full bg-gradient-to-r from-[#f0f4f8] to-[#e0e6ed] 
        bg-[repeating-linear-gradient(0deg,_rgba(255,255,255,0.2)_1px,_transparent_1px,_transparent_10px), 
        repeating-linear-gradient(90deg,_rgba(255,255,255,0.2)_1px,_transparent_1px,_transparent_10px)]"
      animate={{ backgroundPosition: '200% 200%' }}
      transition={{ repeat: Infinity, repeatType: 'loop', duration: 6, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default Line;
