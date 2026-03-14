'use client';

import { motion } from 'framer-motion';

export function ScrollToExplore() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <p className="font-rajdhani text-lcars-text/60 text-xs tracking-widest mb-2">
        SCROLL TO EXPLORE
      </p>
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-8 h-12 border-2 border-lcars-amber rounded-full mx-auto flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-2 bg-lcars-amber rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
