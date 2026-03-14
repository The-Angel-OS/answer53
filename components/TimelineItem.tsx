'use client';

import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string | number;
  title: string;
  description: string;
  color?: 'amber' | 'lavender' | 'teal' | 'blue' | 'peach';
  index: number;
}

const colorMap = {
  amber: 'bg-lcars-amber',
  lavender: 'bg-lcars-lavender',
  teal: 'bg-lcars-teal',
  blue: 'bg-lcars-blue',
  peach: 'bg-lcars-peach',
};

const textColorMap = {
  amber: 'text-lcars-amber',
  lavender: 'text-lcars-lavender',
  teal: 'text-lcars-teal',
  blue: 'text-lcars-blue',
  peach: 'text-lcars-peach',
};

export function TimelineItem({
  year,
  title,
  description,
  color = 'amber',
  index,
}: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-8 mb-12 relative"
    >
      {/* Left side (alternate) */}
      {isEven ? (
        <>
          <div className="flex-1 text-right pr-8">
            <div className="bg-lcars-bg border-2 border-lcars-amber/30 p-6 rounded-sm hover:border-lcars-amber transition-colors">
              <h3 className="font-orbitron text-lcars-amber text-lg tracking-wide mb-2">
                {title}
              </h3>
              <p className="font-rajdhani text-lcars-text/80 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Center dot */}
          <div className="flex flex-col items-center">
            <motion.div
              className={`w-4 h-4 rounded-full ${colorMap[color]} shadow-lg`}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="w-1 h-full bg-gradient-to-b from-lcars-amber/50 to-lcars-amber/10 mt-2 mb-2" />
          </div>

          {/* Right side - year */}
          <div className="flex-1 flex items-start pt-2">
            <div className={`font-orbitron text-4xl font-bold ${textColorMap[color]}`}>
              {year}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Left side - year */}
          <div className="flex-1 flex items-start pt-2 text-right pr-8">
            <div className={`font-orbitron text-4xl font-bold ${textColorMap[color]} w-full`}>
              {year}
            </div>
          </div>

          {/* Center dot */}
          <div className="flex flex-col items-center">
            <motion.div
              className={`w-4 h-4 rounded-full ${colorMap[color]} shadow-lg`}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="w-1 h-full bg-gradient-to-b from-lcars-amber/50 to-lcars-amber/10 mt-2 mb-2" />
          </div>

          {/* Right side */}
          <div className="flex-1 pl-8">
            <div className="bg-lcars-bg border-2 border-lcars-amber/30 p-6 rounded-sm hover:border-lcars-amber transition-colors">
              <h3 className="font-orbitron text-lcars-amber text-lg tracking-wide mb-2">
                {title}
              </h3>
              <p className="font-rajdhani text-lcars-text/80 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
