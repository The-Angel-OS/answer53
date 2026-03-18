'use client';

import { motion } from 'framer-motion';
import { ScrollToExplore } from '@/components/ScrollToExplore';
import { LcarsFrame } from '@/components/LcarsFrame';
import { LcarsBar } from '@/components/LcarsBar';
import Link from 'next/link';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <main className="relative">
      {/* LCARS Frame Decorations */}
      <LcarsFrame />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center z-10 max-w-4xl"
        >
          {/* Decorative top bars */}
          <motion.div
            variants={itemVariants}
            className="flex gap-2 justify-center mb-12"
          >
            <div className="w-1 h-12 bg-lcars-amber rounded-sm" />
            <div className="w-1 h-12 bg-lcars-lavender rounded-sm" />
            <div className="w-1 h-12 bg-lcars-teal rounded-sm" />
          </motion.div>

          {/* Main number */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="font-orbitron text-9xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lcars-amber via-lcars-lavender to-lcars-teal tracking-wider drop-shadow-2xl">
              53
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.h1
            variants={itemVariants}
            className="font-orbitron text-3xl md:text-5xl font-bold text-lcars-text tracking-widest mb-6"
          >
            The New Answer
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <LcarsBar color="amber" size="lg" animated />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-rajdhani text-xl md:text-2xl text-lcars-text/80 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            To Life, the Universe, and Everything
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-rajdhani text-lg text-lcars-text/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            A scholarly examination of synchronicity, probability, and the
            documented patterns in the life of Kenneth Scott Courtney that
            suggest the answer is not 42, but 53.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/chapters/introduction">
              <button className="px-8 py-4 bg-lcars-amber text-lcars-bg font-orbitron tracking-widest font-bold rounded-sm hover:bg-lcars-peach transition-colors shadow-lcars-amber">
                BEGIN READING
              </button>
            </Link>
            <Link href="/probability">
              <button className="px-8 py-4 border-2 border-lcars-lavender text-lcars-lavender font-orbitron tracking-widest font-bold rounded-sm hover:bg-lcars-lavender/10 transition-colors">
                PROBABILITY
              </button>
            </Link>
          </motion.div>

          {/* Decorative bottom bars */}
          <motion.div
            variants={itemVariants}
            className="flex gap-2 justify-center"
          >
            <div className="w-1 h-12 bg-lcars-teal rounded-sm" />
            <div className="w-1 h-12 bg-lcars-lavender rounded-sm" />
            <div className="w-1 h-12 bg-lcars-amber rounded-sm" />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <ScrollToExplore />
      </section>

      {/* Introduction Section */}
      <section className="relative px-4 md:px-8 py-20 bg-gradient-lcars">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-orbitron text-4xl font-bold text-lcars-amber tracking-widest mb-6">
              Why 53?
            </h2>
            <LcarsBar color="lavender" size="md" animated />

            <div className="mt-8 space-y-6 font-rajdhani text-lcars-text/80 text-lg leading-relaxed">
              <p>
                Douglas Adams published The Hitchhiker's Guide to the Galaxy in
                1979, proposing that 42 is the answer to the Ultimate Question
                of Life, the Universe, and Everything.
              </p>

              <p>
                Nearly 50 years later, a detailed examination of one man's life
                reveals a pattern so mathematically improbable, so deeply
                interwoven through every aspect of his existence, that it
                suggests a different answer entirely: 53.
              </p>

              <p>
                This is not mysticism. This is mathematics. The probability that
                all documented synchronicities occur by random chance is
                approximately 1 in 600 quintillion.
              </p>

              <p>
                This is the story of Kenneth Scott Courtney, born January 15,
                1972 in Washington, DC. A Navy veteran. A man who spent years in
                incarceration. A technologist who, at age 53, experienced a
                complete spiritual awakening after 39 years of atheism.
              </p>

              <p>
                And a man whose life contains so many improbable patterns that
                the universe itself seems to be speaking through him—encoded in
                numbers, births, deaths, and events so perfectly synchronized
                that randomness becomes statistically impossible.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 md:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-orbitron text-3xl font-bold text-lcars-lavender tracking-widest mb-12 text-center">
              What You Will Discover: All 12 Chapters
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Documented Synchronicities',
                  color: 'amber',
                  description:
                    'Birth certificate 888, 53-day release, Enterprise Dog Park, Van Halen 5150, Our Lady of Clearwater—the impossible intersections that define a life.',
                },
                {
                  title: 'Probability Mathematics',
                  color: 'lavender',
                  description:
                    '1 in 600 quintillion after bias correction. 22+ independent events aligned across decades. Calculate the odds of pure chance.',
                },
                {
                  title: 'The Lion King Framework',
                  color: 'teal',
                  description:
                    'Roy Leon (Leon=lion), Mufasa parallel, Busch Gardens circle of life, Enterprise Dog Park as portal to Carl Sagan\'s universe.',
                },
                {
                  title: 'The Brother\'s Testimony',
                  color: 'peach',
                  description:
                    'Brother independently writes 26 chapters (2+6=8=888) about Jesus while Kenneth carries 888 on his birth certificate. "Judgement Kisses Mercy" = Kenneth\'s arc.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-4 border-lcars-amber bg-lcars-bg/50 p-6 rounded-sm hover:border-lcars-lavender transition-colors"
                >
                  <h3 className="font-orbitron text-lcars-amber text-lg tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="font-rajdhani text-lcars-text/80">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative px-4 md:px-8 py-20 bg-gradient-subtle border-t-2 border-lcars-amber/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-orbitron text-3xl font-bold text-lcars-text tracking-widest mb-6">
              Begin the Journey
            </h2>
            <p className="font-rajdhani text-lcars-text/80 text-lg mb-8">
              Start with Chapter 1: From 42 to 53, or jump directly to the
              probability calculator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chapters/introduction">
                <button className="px-8 py-4 bg-lcars-amber text-lcars-bg font-orbitron tracking-widest font-bold rounded-sm hover:bg-lcars-peach transition-colors">
                  Chapter 1
                </button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-4 border-2 border-lcars-teal text-lcars-teal font-orbitron tracking-widest font-bold rounded-sm hover:bg-lcars-teal/10 transition-colors">
                  About This Work
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
