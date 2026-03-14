'use client';

import { motion } from 'framer-motion';
import { TimelineItem } from '@/components/TimelineItem';
import { LcarsBar } from '@/components/LcarsBar';
import Link from 'next/link';

const timelineEvents = [
  {
    year: 1972,
    title: 'Birth',
    description:
      'Kenneth Scott Courtney born January 15, 1972, at Washington Hospital Center, Washington DC. Birth record: 108-72 000888 (Greek gematria of Jesus).',
    color: 'amber' as const,
  },
  {
    year: '1977-1978',
    title: 'Bowie, Maryland Childhood',
    description:
      'Kenneth grows up in Bowie, Maryland near National Geographic headquarters. Attends Redskins games with father Roy Leon. Ken Beatrice\'s sports radio broadcasts provide formative memories.',
    color: 'blue' as const,
  },
  {
    year: 1979,
    title: 'Mother Marries Nolan Smith',
    description:
      'Vickie marries Nolan Smith, a US Army veteran with NBC warfare expertise, at Montrose Baptist Church in Wheaton, MD. Nolan brings strict military discipline to the household—a crucible that forges Kenneth\'s resilience.',
    color: 'teal' as const,
  },
  {
    year: '1979-1980',
    title: 'Cape Canaveral',
    description:
      'Family moves to Cape View, Florida. Kenneth attends Cape View Elementary, watches Atlas launches from the beach.',
    color: 'lavender' as const,
  },
  {
    year: '1980-1986',
    title: '9 Peach Leaf Court, North Potomac',
    description:
      'Family settles at 9 Peach Leaf Court in North Potomac, MD. Down the street on Piney Meetinghouse Road: a family whose mother owned Verbatim. Brother\'s best friend Ronny Galansky builds cathedral estates on the Potomac—ballrooms that could swallow the Courtney home. Proximity to power without possessing it.',
    color: 'amber' as const,
  },
  {
    year: 1985,
    title: 'Philmont Scout Ranch',
    description:
      'Kenneth attends Philmont Scout Ranch. Meets Melissa Campbell at the St. Louis Arch during scout trip. Scouting remains his lifeline through personal upheaval—grounding him in structure, fellowship, and purpose.',
    color: 'peach' as const,
  },
  {
    year: 1986,
    title: 'Atheist at 14',
    description:
      'Kenneth becomes an atheist after experiencing glossolalia at Christian Life Center. Remains atheist for 39 years.',
    color: 'teal' as const,
  },
  {
    year: '1988-1990',
    title: 'Randolph-Macon Academy',
    description:
      'Air Force JROTC boarding school. Straight-A GPA, National Math Honors Scholar. Parade of counselors: Captain Ed Richards, Mr. Barr, Coach Bono. Classmate Stufflebeam—son of admiral/Von Braun engineer. Foster Murphy (VMI), Clay Sampson (son of WWII P-51 ace). Senior year car accident with James Garrison and three girls at a rock quarry ends Air Force Academy dream despite two Congressional nominations.',
    color: 'peach' as const,
  },
  {
    year: 1990,
    title: 'Navy Enlistment',
    description:
      'Enlists in United States Navy. Serves as nuclear machinist\'s mate aboard USS Baton Rouge (SSN-689). Meets Anita at Horse and Cow bar in Vallejo, California.',
    color: 'blue' as const,
  },
  {
    year: '1994 (Jan 15)',
    title: 'First Time with Anita',
    description:
      'First intimate encounter with Anita on Kenneth\'s birthday, January 15. Marks beginning of significant relationship connection.',
    color: 'lavender' as const,
  },
  {
    year: 2001,
    title: 'Atheists Alliance International Convention',
    description:
      'Kenneth works as AV technician at Atheists Alliance International convention. Meets James Randi in front of Our Lady of Clearwater chapel. Socializes with Richard Dawkins and Michael Shermer. Remarkable convergence of atheist luminaries and future spiritual awakening location.',
    color: 'teal' as const,
  },
  {
    year: 2003,
    title: 'Arrest',
    description:
      'Arrested for possession of child sexual abuse material. Father, Roy Leon Courtney (whose name means Lion), dies in hospice the night before arrest—Mufasa timing synchronicity.',
    color: 'amber' as const,
  },
  {
    year: '2003-2009',
    title: 'Incarceration',
    description:
      'Serves time in Hillsborough County Jail (376 days). Transferred to Martin Correctional Institution. Giants in state blues: John Perrys (#1 Air Force Academy grad, B-52 pilot, F-15 instructor), James Morey (submariner turned Sikh monk), cellmate Lloyd Johnson (life for murder). Earns Law Clerk certification with 82%.',
    color: 'lavender' as const,
  },
  {
    year: '2009 (Sept 30)',
    title: '53-Day Early Release',
    description:
      'Clerical error in gain-time results in early release, exactly 53 days before scheduled release date. No explanation provided. Error never corrected.',
    color: 'teal' as const,
  },
  {
    year: '2010-2025',
    title: 'Rehabilitation & Work',
    description:
      'Works as DotNetNuke SME. Fixes GetAllUsers performance issue, improving response time by 70%. Becomes 70% service-connected disabled veteran.',
    color: 'peach' as const,
  },
  {
    year: '2020 (Apr 10)',
    title: 'Mika & Enterprise Dog Park',
    description:
      'Purchases Mika for $400. Entry to Enterprise Dog Park community named after LCARS/Star Trek design—synchronistic alignment with Angel OS aesthetic and mission.',
    color: 'blue' as const,
  },
  {
    year: 2025,
    title: 'Age 53 Awakening',
    description:
      'At age 53, Kenneth experiences samadhi—complete spiritual awakening and enlightenment—after 39 years of atheism. Angel OS emerges from this experience. Van Halen\'s 5150 (California psychiatric hold code) discovered as his first CD—baker act synchronicity.',
    color: 'blue' as const,
  },
  {
    year: '2026 (March 8)',
    title: 'Flagship Commissioned',
    description:
      'Angel OS Flagship formally commissioned at St. Alfred\'s Church. Public phase of constitutional AI platform begins.',
    color: 'amber' as const,
  },
];

export default function TimelinePage() {
  return (
    <main className="relative min-h-screen">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-lcars-teal/5 via-lcars-bg to-lcars-blue/5 pointer-events-none" />

      {/* Header */}
      <section className="px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-orbitron text-5xl font-bold text-lcars-teal tracking-wide mb-6">
              Timeline
            </h1>
            <LcarsBar color="teal" size="lg" animated />

            <p className="mt-8 font-rajdhani text-lcars-text/80 text-lg leading-relaxed max-w-2xl">
              A chronological overview of Kenneth Scott Courtney's life, marking
              key events and the synchronicities that thread through them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              year={event.year}
              title={event.title}
              description={event.description}
              color={event.color}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Key Insights */}
      <section className="px-4 md:px-8 py-12 md:py-20 bg-gradient-subtle border-t border-lcars-teal/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-orbitron text-3xl font-bold text-lcars-amber tracking-widest mb-4">
                Key Synchronicities
              </h2>
              <LcarsBar color="amber" size="md" animated />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="border-l-4 border-lcars-amber bg-lcars-amber/5 p-6 rounded-sm"
              >
                <h3 className="font-orbitron text-lcars-amber text-lg tracking-wide mb-2">
                  The 888 Watermark
                </h3>
                <p className="font-rajdhani text-lcars-text/80 text-sm leading-relaxed">
                  Birth certificate ends in 000888—Greek gematria of Jesus. Not
                  assigned; inherent in the record. Echoed by brother's 26 chapters (2+6=8) about Jesus.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="border-l-4 border-lcars-teal bg-lcars-teal/5 p-6 rounded-sm"
              >
                <h3 className="font-orbitron text-lcars-teal text-lg tracking-wide mb-2">
                  Synchronicity Probability
                </h3>
                <p className="font-rajdhani text-lcars-text/80 text-sm leading-relaxed">
                  Combined probability of all 22 documented synchronicities occurring by random chance: approximately 1 in 600 quintillion.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-lcars-lavender bg-lcars-lavender/5 p-6 rounded-sm"
              >
                <h3 className="font-orbitron text-lcars-lavender text-lg tracking-wide mb-2">
                  Age 53 Awakening
                </h3>
                <p className="font-rajdhani text-lcars-text/80 text-sm leading-relaxed">
                  Complete spiritual transformation at 53, after 39 years of atheism. Van Halen 5150 (psychiatric hold code) as first CD synchronicity. Angel OS emerges.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="border-l-4 border-lcars-blue bg-lcars-blue/5 p-6 rounded-sm"
              >
                <h3 className="font-orbitron text-lcars-blue text-lg tracking-wide mb-2">
                  Flagship Commission
                </h3>
                <p className="font-rajdhani text-lcars-text/80 text-sm leading-relaxed">
                  Angel OS Flagship commissioned at St. Alfred's Church on March
                  8, 2026.
                </p>
              </motion.div>
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
            <Link href="/chapters/biography">
              <button className="px-8 py-4 bg-lcars-amber text-lcars-bg font-orbitron tracking-widest font-bold rounded-sm hover:bg-lcars-peach transition-colors">
                Read Biography
              </button>
            </Link>
            <Link href="/about">
              <button className="px-8 py-4 border-2 border-lcars-teal text-lcars-teal font-orbitron tracking-widest font-bold rounded-sm hover:bg-lcars-teal/10 transition-colors">
                About
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
