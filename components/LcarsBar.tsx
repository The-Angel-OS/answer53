'use client';

import { motion } from 'framer-motion';

interface LcarsBarProps {
  color?: 'amber' | 'lavender' | 'teal' | 'blue' | 'peach' | 'mauve';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

const colorMap = {
  amber: 'bg-lcars-amber',
  lavender: 'bg-lcars-lavender',
  teal: 'bg-lcars-teal',
  blue: 'bg-lcars-blue',
  peach: 'bg-lcars-peach',
  mauve: 'bg-lcars-mauve',
};

const sizeMap = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-4',
};

export function LcarsBar({
  color = 'amber',
  size = 'md',
  className = '',
  animated = false,
}: LcarsBarProps) {
  const baseClasses = `${colorMap[color]} ${sizeMap[size]} w-full ${className}`;

  if (animated) {
    return (
      <motion.div
        className={baseClasses}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        style={{ originX: 0 }}
      />
    );
  }

  return <div className={baseClasses} />;
}
