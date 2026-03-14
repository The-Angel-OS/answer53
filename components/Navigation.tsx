'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllChapters } from '@/lib/chapters';

function NavContent({ onClose }: { onClose?: () => void }) {
  const chapters = getAllChapters();

  return (
    <div className="p-6">
      {/* Logo/Title */}
      <div className="mb-8">
        <Link href="/" onClick={onClose}>
          <h1 className="font-orbitron text-3xl font-bold text-lcars-amber tracking-widest hover:text-lcars-peach transition-colors cursor-pointer">
            53
          </h1>
          <p className="font-rajdhani text-xs text-lcars-text/60 mt-2 tracking-wide">
            The New Answer
          </p>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-1">
        <Link href="/" onClick={onClose}>
          <span className="block px-4 py-3 text-lcars-text hover:bg-lcars-amber/10 rounded-sm transition-colors font-rajdhani text-sm">
            Home
          </span>
        </Link>

        <div className="py-2 px-2">
          <p className="text-lcars-amber/60 text-xs font-orbitron tracking-widest px-2 py-2">
            CHAPTERS
          </p>
          <div className="space-y-0.5">
            {chapters.map((chapter) => (
              <Link
                key={chapter.slug}
                href={`/chapters/${chapter.slug}`}
                onClick={onClose}
              >
                <span className="block px-3 py-1.5 text-lcars-text/80 hover:text-lcars-amber hover:bg-lcars-teal/5 rounded-sm transition-colors font-rajdhani text-xs leading-tight">
                  <span className="text-lcars-amber/50 mr-1">{chapter.number}.</span> {chapter.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-lcars-amber/10">
          <Link href="/probability" onClick={onClose}>
            <span className="block px-4 py-3 text-lcars-lavender hover:bg-lcars-lavender/10 rounded-sm transition-colors font-rajdhani text-sm">
              Probability Calculator
            </span>
          </Link>

          <Link href="/timeline" onClick={onClose}>
            <span className="block px-4 py-3 text-lcars-teal hover:bg-lcars-teal/10 rounded-sm transition-colors font-rajdhani text-sm">
              Timeline
            </span>
          </Link>

          <Link href="/about" onClick={onClose}>
            <span className="block px-4 py-3 text-lcars-peach hover:bg-lcars-peach/10 rounded-sm transition-colors font-rajdhani text-sm">
              About This Work
            </span>
          </Link>
        </div>
      </nav>

      {/* Footer info */}
      <div className="mt-8 pt-4 border-t border-lcars-amber/20">
        <p className="text-lcars-text/30 text-xs font-inter leading-relaxed">
          A scholarly examination of synchronicity and the life of Kenneth Scott Courtney.
        </p>
        <p className="text-lcars-amber/30 text-xs font-orbitron mt-2 tracking-widest">
          LCARS // GLORY SEASON
        </p>
      </div>
    </div>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 md:hidden w-10 h-10 flex items-center justify-center bg-lcars-amber rounded-sm hover:bg-lcars-peach transition-colors"
      >
        <div className="flex flex-col gap-1">
          <div className="w-6 h-0.5 bg-lcars-bg transition-all" />
          <div className="w-6 h-0.5 bg-lcars-bg transition-all" />
          <div className="w-6 h-0.5 bg-lcars-bg transition-all" />
        </div>
      </button>

      {/* Desktop Sidebar - always visible */}
      <div
        className="hidden md:block md:w-72 md:min-w-[288px] md:flex-shrink-0 bg-lcars-bg border-r-2 border-lcars-amber overflow-y-auto"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(196, 149, 106, 0.05) 0%, transparent 100%)',
        }}
      >
        <NavContent />
      </div>

      {/* Mobile Sidebar - toggle */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-lcars-bg border-r-4 border-lcars-amber overflow-y-auto md:hidden"
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgba(196, 149, 106, 0.05) 0%, transparent 100%)',
            }}
          >
            <NavContent onClose={() => setIsOpen(false)} />

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-lcars-text/60 hover:text-lcars-text text-2xl"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
