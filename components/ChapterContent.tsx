'use client';

import { motion } from 'framer-motion';
import { LcarsBar } from './LcarsBar';

interface ChapterContentProps {
  title: string;
  content: string;
  number: number;
}

export function ChapterContent({
  title,
  content,
  number,
}: ChapterContentProps) {
  const paragraphs = content
    .trim()
    .split('\n')
    .filter((p) => p.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* Chapter header */}
      <div className="mb-12">
        <div className="flex items-baseline gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-orbitron text-5xl font-bold text-lcars-amber tracking-widest"
          >
            {number}
          </motion.div>
          <LcarsBar color="amber" size="lg" className="flex-1" animated />
        </div>
        <h1 className="font-orbitron text-4xl font-bold text-lcars-text tracking-wide mb-4">
          {title}
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-lcars-amber via-lcars-lavender to-transparent" />
      </div>

      {/* Content */}
      <div className="space-y-6 max-w-3xl">
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="font-rajdhani text-lcars-text/90 leading-relaxed text-lg"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-16 pt-8 border-t border-lcars-amber/20"
      >
        <div className="flex gap-2">
          <div className="w-1 h-8 bg-lcars-teal rounded-sm" />
          <div className="w-1 h-8 bg-lcars-lavender rounded-sm" />
          <div className="w-1 h-8 bg-lcars-amber rounded-sm" />
        </div>
      </motion.div>
    </motion.div>
  );
}
