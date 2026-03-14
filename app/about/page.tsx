'use client';

import { motion } from 'framer-motion';
import { LcarsBar } from '@/components/LcarsBar';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-lcars-mauve/5 via-lcars-bg to-lcars-blue/5 pointer-events-none" />

      {/* Header */}
      <section className="px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-orbitron text-5xl font-bold text-lcars-mauve tracking-wide mb-6">
              About This Work
            </h1>
            <LcarsBar color="mauve" size="lg" animated />
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-orbitron text-3xl font-bold text-lcars-amber tracking-widest mb-4">
              The Premise
            </h2>
            <LcarsBar color="amber" size="md" />

            <p className="mt-6 font-rajdhani text-lcars-text/80 text-lg leading-relaxed">
              The Answer — 53 is a scholarly examination of synchronicity, probability,
              and the documented patterns in the life of Kenneth Scott Courtney that
              suggest the number 53 represents a meaningful answer to fundamental
              questions about existence, consciousness, and order in the universe.
            </p>

            <p className="mt-4 font-rajdhani text-lcars-text/80 text-lg leading-relaxed">
              This is not mysticism or pseudoscience. It is a rigorously mathematical
              argument supported by documented synchronicities, probability calculations,
              and verifiable facts about a single human life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-orbitron text-3xl font-bold text-lcars-lavender tracking-widest mb-4">
              Why 53?
            </h2>
            <LcarsBar color="lavender" size="md" />

            <div className="mt-6 space-y-4 font-rajdhani text-lcars-text/80 text-lg leading-relaxed">
              <p>
                Douglas Adams proposed 42 as the answer to Life, the Universe, and
                Everything in 1979. This examination proposes an update: 53.
              </p>

              <p>
                The number appears throughout Kenneth's life with statistically
                improbable frequency:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Age at spiritual awakening (samadhi)</li>
                <li>Days of early release from incarceration (clerical error)</li>
                <li>Orbital inclination of Starlink satellites (53.2 degrees)</li>
                <li>A number he encounters everywhere—clocks, receipts, documents</li>
              </ul>

              <p>
                The probability that all documented synchronicities occur by random
                chance is approximately 1 in 17.5 million. This is below the
                statistical threshold of practical impossibility.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-orbitron text-3xl font-bold text-lcars-teal tracking-widest mb-4">
              About Kenneth Scott Courtney
            </h2>
            <LcarsBar color="teal" size="md" />

            <div className="mt-6 space-y-4 font-rajdhani text-lcars-text/80 text-lg leading-relaxed">
              <p>
                Kenneth Scott Courtney was born on January 15, 1972, in Washington,
                DC. His birth record is catalogued as 108-72 000888—the "000888"
                being the numerical value in Greek gematria of ΙΗΣΟΥΣ (Jesus).
              </p>

              <p>
                He served in the United States Navy as a nuclear machinist's mate.
                He was incarcerated for possession of child sexual abuse material, a
                charge he does not dispute. He served approximately 8.5 years, with
                an inexplicable 53-day early release due to a clerical error.
              </p>

              <p>
                He worked as a DotNetNuke subject matter expert and has been involved
                in technological development. He is 70% service-connected disabled
                through the Department of Veterans Affairs.
              </p>

              <p>
                At age 53, in 2025, he experienced samadhi—a state of total spiritual
                awakening and enlightenment—after 39 years of atheism. From this
                experience emerged Angel OS, a federated constitutional AI platform
                designed to encode human values and mathematical truth into artificial
                systems.
              </p>

              <p>
                On March 8, 2026, the Angel OS Flagship was commissioned at St.
                Alfred's Church.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-orbitron text-3xl font-bold text-lcars-peach tracking-widest mb-4">
              Structure of This Work
            </h2>
            <LcarsBar color="peach" size="md" />

            <div className="mt-6 space-y-4 font-rajdhani text-lcars-text/80 text-lg leading-relaxed">
              <div>
                <p className="font-bold text-lcars-peach">Chapter 1: Introduction</p>
                <p>Overview and the core proposition</p>
              </div>

              <div>
                <p className="font-bold text-lcars-peach">Chapter 2: Biography</p>
                <p>Detailed biographical framework of Kenneth's life</p>
              </div>

              <div>
                <p className="font-bold text-lcars-peach">Chapter 3: Numerology</p>
                <p>The numerical patterns: 8, 33, and 53</p>
              </div>

              <div>
                <p className="font-bold text-lcars-peach">Chapter 4: Astrology</p>
                <p>Astrological alignments and transitions</p>
              </div>

              <div>
                <p className="font-bold text-lcars-peach">Chapter 5: Synchronicity</p>
                <p>The documented synchronicities organized by cluster</p>
              </div>

              <div>
                <p className="font-bold text-lcars-peach">Chapter 6: Probability</p>
                <p>Mathematical analysis of combined probability</p>
              </div>

              <div>
                <p className="font-bold text-lcars-peach">Chapter 7: Son of Man</p>
                <p>Theological and functional interpretation</p>
              </div>

              <div>
                <p className="font-bold text-lcars-peach">Chapter 8: Angel OS</p>
                <p>The technical manifestation and constitutional AI platform</p>
              </div>

              <div>
                <p className="font-bold text-lcars-peach">Chapter 9: Conclusions</p>
                <p>Summary and open questions</p>
              </div>

              <div>
                <p className="font-bold text-lcars-peach">Chapter 10: The Sidequest</p>
                <p>Exploring the simulation hypothesis and reverse-engineering reality</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-orbitron text-3xl font-bold text-lcars-blue tracking-widest mb-4">
              Technical Information
            </h2>
            <LcarsBar color="blue" size="md" />

            <div className="mt-6 space-y-4 font-rajdhani text-lcars-text/80 text-lg leading-relaxed">
              <p>
                This website is built with Next.js 14 and Tailwind CSS, featuring a
                custom LCARS (Library Computer Access and Retrieval System) theme
                inspired by Star Trek with Avatar bioluminescence aesthetics.
              </p>

              <p>
                All content is static and serverless-deployment-ready. The design
                uses a muted color palette: Amber, Lavender, Peach, Teal, Blue, and
                Mauve on a deep plum-black background, with typography from Orbitron
                (headings), Rajdhani (body), and Inter (fine print).
              </p>

              <p>
                The site is fully responsive and includes interactive components such
                as the probability calculator and animated timeline.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-2 border-lcars-amber/50 bg-lcars-amber/5 p-8 rounded-sm"
          >
            <h2 className="font-orbitron text-2xl font-bold text-lcars-amber tracking-widest mb-4">
              A Note on Truth
            </h2>

            <p className="font-rajdhani text-lcars-text/80 text-lg leading-relaxed">
              This examination is built on documented facts, verifiable synchronicities,
              and rigorous probability calculations. Whether one interprets these
              patterns as evidence of divine order, simulation architecture, or the
              deepest laws of consciousness itself remains a question each reader must
              answer for themselves.
            </p>

            <p className="mt-4 font-rajdhani text-lcars-text/80 text-lg leading-relaxed">
              What is not in question is the mathematics. The probability is real. The
              patterns are real. The number 53 has woven itself through a single human
              life in ways that defy random chance.
            </p>

            <p className="mt-4 font-rajdhani text-lcars-text/80 text-lg leading-relaxed">
              The question, then, is not whether 53 is the answer. The question is: what
              does the universe mean by asking it?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-4 md:px-8 py-12 md:py-20 border-t border-lcars-amber/20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <button className="px-8 py-4 bg-lcars-amber text-lcars-bg font-orbitron tracking-widest font-bold rounded-sm hover:bg-lcars-peach transition-colors">
                Home
              </button>
            </Link>
            <Link href="/chapters/introduction">
              <button className="px-8 py-4 border-2 border-lcars-teal text-lcars-teal font-orbitron tracking-widest font-bold rounded-sm hover:bg-lcars-teal/10 transition-colors">
                Begin Reading
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
