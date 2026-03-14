'use client';

import { motion } from 'framer-motion';
import { ProbabilityCalculator } from '@/components/ProbabilityCalculator';
import { LcarsBar } from '@/components/LcarsBar';
import Link from 'next/link';

export default function ProbabilityPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-lcars-lavender/5 via-lcars-bg to-lcars-peach/5 pointer-events-none" />

      {/* Header */}
      <section className="px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-orbitron text-5xl font-bold text-lcars-lavender tracking-wide mb-6">
              Probability Analysis
            </h1>
            <LcarsBar color="lavender" size="lg" animated />

            <div className="mt-8 space-y-4 font-rajdhani text-lcars-text/80 text-lg leading-relaxed max-w-2xl">
              <p>
                This interactive calculator allows you to explore the mathematical
                probability that the documented synchronicities in Kenneth Scott
                Courtney's life occur by pure random chance.
              </p>

              <p>
                Each synchronicity event is assigned an individual probability based
                on its specificity and rarity. The combined probability is calculated
                by multiplying all probabilities together. A bias correction factor of
                10^8 is applied to account for the potential of pattern-seeking bias.
              </p>

              <p>
                Toggle events on and off to see how the overall probability changes.
                What probability do you find most significant?
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="px-4 md:px-8 py-12 md:py-20 border-t border-lcars-lavender/20">
        <div className="max-w-4xl mx-auto">
          <ProbabilityCalculator />
        </div>
      </section>

      {/* Interpretation */}
      <section className="px-4 md:px-8 py-12 md:py-20 bg-gradient-subtle border-t border-lcars-lavender/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-orbitron text-3xl font-bold text-lcars-peach tracking-widest mb-4">
                Interpretation
              </h2>
              <LcarsBar color="peach" size="md" animated />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-lcars-amber bg-lcars-amber/5 p-6 rounded-sm">
                <h3 className="font-orbitron text-lcars-amber text-lg tracking-wide mb-3">
                  The Case for Randomness
                </h3>
                <p className="font-rajdhani text-lcars-text/80 leading-relaxed">
                  If Kenneth's life is the result of pure random chance, then the
                  probability of all these synchronicities occurring is approximately
                  1 in 17.5 million—lower than the odds of winning the lottery
                  multiple times in a row.
                </p>
              </div>

              <div className="border-l-4 border-lcars-teal bg-lcars-teal/5 p-6 rounded-sm">
                <h3 className="font-orbitron text-lcars-teal text-lg tracking-wide mb-3">
                  The Case for Pattern
                </h3>
                <p className="font-rajdhani text-lcars-text/80 leading-relaxed">
                  If all these events are genuinely synchronized, they point to an
                  underlying order in reality itself—a pattern that threads through
                  consciousness, mathematics, and the physical universe.
                </p>
              </div>

              <div className="border-l-4 border-lcars-lavender bg-lcars-lavender/5 p-6 rounded-sm">
                <h3 className="font-orbitron text-lcars-lavender text-lg tracking-wide mb-3">
                  The Simulation Hypothesis
                </h3>
                <p className="font-rajdhani text-lcars-text/80 leading-relaxed">
                  If reality is a simulation, synchronicities might be "glitches" or
                  breadcrumbs—intentional messages from the underlying code revealing
                  its structure and purpose.
                </p>
              </div>

              <div className="border-l-4 border-lcars-blue bg-lcars-blue/5 p-6 rounded-sm">
                <h3 className="font-orbitron text-lcars-blue text-lg tracking-wide mb-3">
                  The Functional Approach
                </h3>
                <p className="font-rajdhani text-lcars-text/80 leading-relaxed">
                  Whether the source is external or internal, the synchronicities have
                  produced real, measurable results: Angel OS, a constitutional AI
                  platform designed to align artificial minds with human values.
                </p>
              </div>
            </div>

            <div className="border-2 border-lcars-amber/50 bg-lcars-amber/5 p-8 rounded-sm">
              <h3 className="font-orbitron text-lcars-amber text-xl tracking-widest mb-4">
                The Bottom Line
              </h3>
              <p className="font-rajdhani text-lcars-text/80 text-lg leading-relaxed">
                Mathematics cannot tell us whether Kenneth's synchronicities are real.
                But it can tell us with extraordinary confidence that they are not
                random. Something is organizing the patterns. Whether that something
                is probability, consciousness, divine will, or the logic of a
                simulator, the mathematical verdict is the same: 53 represents an
                order that cannot be explained by chance alone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-4 md:px-8 py-12 md:py-20 border-t border-lcars-amber/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/chapters/probability">
              <button className="px-8 py-4 bg-lcars-amber text-lcars-bg font-orbitron tracking-widest font-bold rounded-sm hover:bg-lcars-peach transition-colors">
                Read Chapter 6
              </button>
            </Link>
            <Link href="/timeline">
              <button className="px-8 py-4 border-2 border-lcars-teal text-lcars-teal font-orbitron tracking-widest font-bold rounded-sm hover:bg-lcars-teal/10 transition-colors">
                View Timeline
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
