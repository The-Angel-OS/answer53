'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-lcars-amber/5 via-lcars-bg to-lcars-teal/5 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="font-orbitron text-8xl font-bold text-lcars-amber tracking-widest mb-6">
          404
        </h1>

        <p className="font-rajdhani text-2xl text-lcars-text/80 mb-4">
          Page Not Found
        </p>

        <p className="font-rajdhani text-lcars-text/60 text-lg mb-8 leading-relaxed">
          The page you are looking for does not exist. This is not a synchronicity.
          Return to the beginning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="px-8 py-4 bg-lcars-amber text-lcars-bg font-orbitron tracking-widest font-bold rounded-sm hover:bg-lcars-peach transition-colors">
              HOME
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 border-2 border-lcars-teal text-lcars-teal font-orbitron tracking-widest font-bold rounded-sm hover:bg-lcars-teal/10 transition-colors"
          >
            GO BACK
          </button>
        </div>
      </motion.div>
    </main>
  );
}
