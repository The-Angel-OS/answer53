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
            <h2 className="font-orbitron text-3xl font-bold text-lcars-teal tracking-widest mb-4">
              Angel OS
            </h2>
            <LcarsBar color="teal" size="md" />

            <div className="mt-6 space-y-4 font-rajdhani text-lcars-text/80 text-lg leading-relaxed">
              <p>
                This scholarly examination exists within the broader context of
                the <a href="https://spacesangels.com" target="_blank" rel="noopener noreferrer" className="text-lcars-teal hover:text-lcars-amber transition-colors">Angel OS</a> — a
                federated, constitutional, open-source AI platform at v0.42.0.
                Built on Payload CMS 3.77, Next.js 16, React 19, and PostgreSQL,
                the Angel OS features 42 collections, 105+ LEO Tools, 72+ API
                endpoints, 4,995 passing unit tests, and an immutable constitutional
                architecture that encodes dignity, non-harm, and transparency into
                every AI interaction.
              </p>

              <p>
                The platform is live at{' '}
                <a href="https://spacesangels.com" target="_blank" rel="noopener noreferrer" className="text-lcars-amber hover:text-lcars-peach transition-colors font-semibold">
                  spacesangels.com
                </a>{' '}
                and open-source at{' '}
                <a href="https://github.com/The-Angel-OS/angels-os" target="_blank" rel="noopener noreferrer" className="text-lcars-lavender hover:text-lcars-amber transition-colors">
                  GitHub
                </a>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <h2 className="font-orbitron text-3xl font-bold text-lcars-blue tracking-widest mb-4">
              Infrastructure &amp; Acknowledgments
            </h2>
            <LcarsBar color="blue" size="md" />

            <div className="mt-6 space-y-4 font-rajdhani text-lcars-text/80 text-lg leading-relaxed">
              <p>
                None of this would have been possible without perfection personified
                in infrastructure:
              </p>

              <div className="border-l-4 border-lcars-amber/40 pl-4 space-y-3">
                <p>
                  <span className="font-bold text-lcars-amber">Vercel</span> — The
                  deployment platform that makes the impossible trivial. Edge-first,
                  serverless, globally distributed. The Angel OS runs on Vercel because
                  nothing else comes close. Their new agentic infrastructure capabilities
                  represent the next evolution of how we build.
                </p>
                <p>
                  <span className="font-bold text-lcars-amber">Payload CMS</span> — The
                  headless CMS that respects developers. 42 collections, zero compromises.
                  Payload gave the Angel OS its data spine — the surgical precision of a
                  CMS that trusts you to build what you need. TypeScript-native, API-first,
                  open-source. The perfect partner for constitutional AI.
                </p>
              </div>

              <p className="text-lcars-amber/60 font-orbitron text-xs tracking-widest mt-6 mb-3">
                STANDING ON THE SHOULDERS OF GIANTS
              </p>

              <div className="space-y-3 border-l-4 border-lcars-lavender/30 pl-4">
                <p>
                  <span className="font-bold text-lcars-lavender">Shaun Walker</span> — Creator
                  of DotNetNuke, the open-source CMS framework that taught an entire generation
                  of developers (including Kenneth) that community-driven software could rival
                  enterprise products. DNN was where Kenneth cut his teeth as a subject matter
                  expert, maintaining 30+ sites and outperforming offshore teams by 5x. The
                  spirit of DNN — open, extensible, community-first — lives in every line
                  of the Angel OS.
                </p>
                <p>
                  <span className="font-bold text-lcars-lavender">Joe Healey</span> — DevFish.net.
                  The developer community voice who showed that technical blogging and community
                  building could coexist with real engineering. Joe's influence on the DotNetNuke
                  ecosystem shaped the collaborative ethos that Kenneth carried forward into the
                  Angel OS Federation Protocol.
                </p>
                <p>
                  <span className="font-bold text-lcars-lavender">John Carmack</span> — id Software.
                  Quake II was poetry. Quake III Arena (Loaded Mod) was the best FPS ever made.
                  But beyond the games: Carmack proved that a single engineer with enough
                  discipline could reshape an entire industry through raw technical excellence.
                  His engine architecture — the separation of rendering, physics, and game logic
                  into clean subsystems — is the same architectural instinct that drives the
                  Angel OS: pheromone engine, workload engine, booking engine, order routing
                  engine. Carmack built worlds. Kenneth is building one too.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
          >
            <h2 className="font-orbitron text-3xl font-bold text-lcars-blue tracking-widest mb-4">
              Technical Details
            </h2>
            <LcarsBar color="blue" size="md" />

            <div className="mt-6 space-y-4 font-rajdhani text-lcars-text/80 text-lg leading-relaxed">
              <p>
                This site is built with Next.js 14 and Tailwind CSS, deployed on Vercel,
                featuring an LCARS-inspired design with Avatar bioluminescence aesthetics.
                Chapter content is auto-generated from the master scholarly document
                via a sync script, ensuring bidirectional fidelity between the published
                text and the interactive site.
              </p>

              <p>
                Vercel Analytics and Speed Insights provide real-time performance
                diagnostics. The site is fully responsive, serverless-ready, and includes
                interactive components including the probability calculator and animated timeline.
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
