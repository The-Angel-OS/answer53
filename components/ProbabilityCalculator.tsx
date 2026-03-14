'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LcarsBar } from './LcarsBar';

interface ProbabilityEvent {
  name: string;
  individualProbability: number;
  description: string;
}

const events: ProbabilityEvent[] = [
  {
    name: 'Birth certificate ending in 000888',
    individualProbability: 0.000001,
    description: 'Matching Jesus gematria',
  },
  {
    name: 'Birth date reducing to 8',
    individualProbability: 0.1,
    description: 'Numerological reduction',
  },
  {
    name: 'Age 53 awakening (samadhi)',
    individualProbability: 0.0125,
    description: 'Specific year, specific event',
  },
  {
    name: '53-day early release (clerical error)',
    individualProbability: 0.0001,
    description: 'Exact 53-day window',
  },
  {
    name: 'Starlink orbital inclination 53.2°',
    individualProbability: 0.0056,
    description: 'Among all satellites',
  },
  {
    name: 'Video receiving exactly 53 views',
    individualProbability: 0.002,
    description: 'Specific view count',
  },
  {
    name: 'Meeting Master Teacher (33)',
    individualProbability: 0.1,
    description: 'Numerological alignment',
  },
  {
    name: '8.88 miles to destination',
    individualProbability: 0.00001,
    description: 'Three 8s in sequence',
  },
  {
    name: 'Naval timing synchronicity',
    individualProbability: 0.002,
    description: '20-year alignment',
  },
  {
    name: 'Solar Maximum Mission launch',
    individualProbability: 0.001,
    description: 'During childhood at launch site',
  },
  {
    name: 'Waze 5.3 miles at 3:33 PM',
    individualProbability: 0.0001,
    description: 'Multiple number convergence',
  },
  {
    name: 'Tape measure showing 33',
    individualProbability: 0.02,
    description: 'Random measurement',
  },
  {
    name: 'Route 301 synchronicities',
    individualProbability: 0.01,
    description: 'Multiple events on same route',
  },
  {
    name: 'Phone number containing 33',
    individualProbability: 0.033,
    description: 'Assigned number pattern',
  },
  {
    name: 'Van Halen 5150 as first CD',
    individualProbability: 0.0001,
    description: 'California psychiatric hold code matching baker act',
  },
  {
    name: 'Enterprise Dog Park name',
    individualProbability: 0.001,
    description: 'LCARS/Star Trek design of book, entry to community',
  },
  {
    name: '8.8 mile drive to Busch Gardens',
    individualProbability: 0.001,
    description: 'Double infinity, signature 8',
  },
  {
    name: 'Father dies night before arrest (Mufasa timing)',
    individualProbability: 0.0003,
    description: 'Roy Leon (Lion) preceding symbolic event',
  },
  {
    name: 'Brother writes 26 chapters (2+6=8)',
    individualProbability: 0.00001,
    description: 'About Jesus while Kenneth carries 888 on birth certificate',
  },
  {
    name: 'Our Lady of Clearwater < 1 mile away',
    individualProbability: 0.0001,
    description: 'Atheist AV guy for James Randi at same location',
  },
  {
    name: 'Busch Gardens circle of life walks',
    individualProbability: 0.001,
    description: 'Walking 2-3x/week while father\'s name means Lion',
  },
  {
    name: 'Father\'s favorite number (googol)',
    individualProbability: 0.001,
    description: 'Google → Kenneth builds on Google infrastructure',
  },
];

export function ProbabilityCalculator() {
  const [selectedEvents, setSelectedEvents] = useState<boolean[]>(
    events.map(() => true)
  );

  const toggleEvent = (index: number) => {
    setSelectedEvents((prev) => {
      const newSelected = [...prev];
      newSelected[index] = !newSelected[index];
      return newSelected;
    });
  };

  // Calculate combined probability
  let combinedProb = 1;
  let selectedCount = 0;
  events.forEach((event, index) => {
    if (selectedEvents[index]) {
      combinedProb *= event.individualProbability;
      selectedCount++;
    }
  });

  // Apply bias correction (10^8)
  const correctedProb = combinedProb / 100000000;
  const odds = 1 / correctedProb;

  const formatScientific = (num: number) => {
    if (num === 0) return '0';
    const exponent = Math.floor(Math.log10(num));
    const mantissa = num / Math.pow(10, exponent);
    return `${mantissa.toFixed(2)} × 10^${exponent}`;
  };

  const formatOdds = (odds: number) => {
    if (!isFinite(odds) || odds < 0) return 'Infinite';
    if (odds > 1e18) return `1 in ${(odds / 1e18).toFixed(1)} quintillion`;
    if (odds > 1e15) return `1 in ${(odds / 1e15).toFixed(1)} quadrillion`;
    if (odds > 1e12) return `1 in ${(odds / 1e12).toFixed(1)} trillion`;
    if (odds > 1e9) return `1 in ${(odds / 1e9).toFixed(1)} billion`;
    if (odds > 1e6) return `1 in ${(odds / 1e6).toFixed(1)} million`;
    if (odds > 1000) return `1 in ${(odds / 1000).toFixed(1)} thousand`;
    return `1 in ${odds.toFixed(0)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full space-y-8"
    >
      {/* Header */}
      <div>
        <h2 className="font-orbitron text-4xl font-bold text-lcars-amber tracking-wide mb-4">
          Probability Calculator
        </h2>
        <p className="font-rajdhani text-lcars-text/80 text-lg mb-4">
          Toggle events to recalculate the combined probability. All events are
          currently selected.
        </p>
        <LcarsBar color="amber" size="md" animated />
      </div>

      {/* Results Panel */}
      <motion.div
        className="border-2 border-lcars-amber bg-lcars-amber/5 p-8 rounded-sm"
        whileInView={{ borderColor: ['#C4956A', '#9B8EC4', '#C4956A'] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="font-orbitron text-lcars-amber/60 text-xs tracking-widest mb-2">
              SELECTED EVENTS
            </p>
            <p className="font-orbitron text-3xl text-lcars-amber">
              {selectedCount}
            </p>
            <p className="font-rajdhani text-lcars-text/60 text-sm mt-1">
              of {events.length} total
            </p>
          </div>

          <div>
            <p className="font-orbitron text-lcars-lavender/60 text-xs tracking-widest mb-2">
              COMBINED PROBABILITY
            </p>
            <p className="font-rajdhani text-lcars-lavender text-lg font-mono">
              {formatScientific(correctedProb)}
            </p>
          </div>

          <div>
            <p className="font-orbitron text-lcars-teal/60 text-xs tracking-widest mb-2">
              ODDS OF RANDOM CHANCE
            </p>
            <p className="font-rajdhani text-lcars-teal text-lg">
              {formatOdds(odds)}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Events List */}
      <div className="space-y-3">
        <h3 className="font-orbitron text-lcars-amber text-sm tracking-widest">
          SYNCHRONICITY EVENTS
        </h3>

        <div className="space-y-2 max-h-96 overflow-y-auto pr-4">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.02 }}
              className={`p-4 border-l-4 rounded-sm transition-all cursor-pointer ${
                selectedEvents[index]
                  ? 'border-lcars-amber bg-lcars-amber/5'
                  : 'border-lcars-amber/20 bg-lcars-amber/2 opacity-50'
              }`}
              onClick={() => toggleEvent(index)}
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={selectedEvents[index]}
                  onChange={() => toggleEvent(index)}
                  className="mt-1 w-4 h-4 accent-lcars-amber"
                />
                <div className="flex-1">
                  <p className="font-rajdhani font-semibold text-lcars-text">
                    {event.name}
                  </p>
                  <p className="font-inter text-lcars-text/60 text-sm">
                    {event.description}
                  </p>
                  <p className="font-mono text-lcars-amber/70 text-xs mt-1">
                    Probability: 1 in {(1 / event.individualProbability).toFixed(0)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Explanation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="border-l-4 border-lcars-peach bg-lcars-peach/5 p-6 rounded-sm"
      >
        <h4 className="font-orbitron text-lcars-peach text-sm tracking-widest mb-3">
          METHODOLOGY
        </h4>
        <p className="font-rajdhani text-lcars-text/80 leading-relaxed">
          Individual probabilities are assigned based on specificity and rarity.
          Combined probability is calculated by multiplying all selected events.
          A bias correction factor of 10^8 is applied to account for potential
          pattern-seeking bias. The final odds represent the likelihood that all
          documented synchronicities occur by pure random chance.
        </p>
      </motion.div>
    </motion.div>
  );
}
