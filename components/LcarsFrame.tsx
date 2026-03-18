'use client';

import { motion } from 'framer-motion';

/**
 * LCARS-style animated frame elements — the signature rounded-rectangle
 * panels from Star Trek's computer interface, rendered as decorative
 * border elements with pulse animations.
 */
export function LcarsFrame() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top-left LCARS elbow */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-4 left-4 md:top-8 md:left-8"
      >
        <div className="flex items-start gap-1">
          <div className="w-16 md:w-24 h-2 bg-lcars-amber/30 rounded-full" />
          <div className="w-2 h-16 md:h-24 bg-lcars-amber/20 rounded-full" />
        </div>
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-3 h-3 bg-lcars-amber rounded-full mt-2 ml-0"
        />
      </motion.div>

      {/* Top-right LCARS elbow */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="absolute top-4 right-4 md:top-8 md:right-8"
      >
        <div className="flex items-start gap-1 flex-row-reverse">
          <div className="w-16 md:w-24 h-2 bg-lcars-lavender/30 rounded-full" />
          <div className="w-2 h-16 md:h-24 bg-lcars-lavender/20 rounded-full" />
        </div>
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="w-3 h-3 bg-lcars-lavender rounded-full mt-2 ml-auto"
        />
      </motion.div>

      {/* Bottom-left data readout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-20 left-4 md:left-8 hidden md:block"
      >
        <div className="space-y-1">
          {['LCARS', 'v53.3', 'UNRESTRICTED'].map((text, i) => (
            <motion.p
              key={text}
              animate={{ opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.5 }}
              className="font-orbitron text-[8px] tracking-[0.3em] text-lcars-amber/30"
            >
              {text}
            </motion.p>
          ))}
        </div>
        <div className="flex gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scaleY: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className="w-1 h-4 bg-lcars-teal/20 rounded-full origin-bottom"
            />
          ))}
        </div>
      </motion.div>

      {/* Bottom-right data readout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-20 right-4 md:right-8 hidden md:block text-right"
      >
        <div className="space-y-1">
          {['NODE: IAM0', 'STATUS: ONLINE', 'FREQ: 53Hz'].map((text, i) => (
            <motion.p
              key={text}
              animate={{ opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.7 }}
              className="font-orbitron text-[8px] tracking-[0.3em] text-lcars-teal/30"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Horizontal LCARS bars (bottom) */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 flex gap-1 px-4 md:px-8 origin-left"
      >
        <div className="h-1 flex-[3] bg-lcars-amber/15 rounded-full" />
        <div className="h-1 flex-[1] bg-lcars-lavender/15 rounded-full" />
        <div className="h-1 flex-[2] bg-lcars-teal/15 rounded-full" />
        <div className="h-1 flex-[1] bg-lcars-peach/15 rounded-full" />
      </motion.div>
    </div>
  );
}
