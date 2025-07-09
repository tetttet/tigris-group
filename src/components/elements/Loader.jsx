import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // быстрее (было 1500)
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-white z-[9999] flex flex-col items-center justify-center"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ opacity: 0, y: '-50%' }} // мягкий уход
          transition={{ duration: 0.6, ease: 'easeInOut' }} // плавнее
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }} // быстрее и плавнее
          >
            <img src="/logo-mini.jpg" alt="Logo" className="w-auto h-32 mb-4" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
