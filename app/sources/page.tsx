'use client';

import { motion } from 'framer-motion';
import { LcarsBar } from '@/components/LcarsBar';

interface SourceDoc {
  title: string;
  description: string;
  type: 'photo' | 'document' | 'record' | 'pending';
  path?: string;
  chapter?: string;
}

const sources: SourceDoc[] = [
  // Primary Records
  {
    title: 'District of Columbia Birth Record',
    description: 'Birth record number 108-72 000888. District of Columbia Department of Public Health. January 15, 1972.',
    type: 'pending',
    chapter: 'Chapter 2',
  },
  {
    title: 'Florida Court Filings',
    description: 'Case documentation referenced in Chapter 2, Section 2.4.',
    type: 'pending',
    chapter: 'Chapter 2',
  },
  {
    title: 'Personal Journals',
    description: 'Contemporaneous journal entries documenting awakening experiences, synchronicity observations, and spiritual development.',
    type: 'pending',
    chapter: 'Chapters 5, 7',
  },

  // Military Records
  {
    title: 'Navy Service Records',
    description: 'Enlistment January 8, 1991. USS Baton Rouge (SSN-689). Submarine qualification. Decommissioning crew.',
    type: 'pending',
    chapter: 'Chapter 2',
  },
  {
    title: 'Disability Rating Interview Documentation',
    description: 'Acting SubRon 8 psychiatrist evaluation — same officer who served aboard SSN-689.',
    type: 'pending',
    chapter: 'Chapter 5',
  },

  // Education
  {
    title: 'Randolph-Macon Academy Records',
    description: 'Enrollment, General Staff assignment (Herald Trumpet), band Flight Commander assignment, academic records.',
    type: 'pending',
    chapter: 'Chapter 2',
  },

  // Photographs
  {
    title: 'Louisiana Purchase Nickel (2004)',
    description: 'Found by coworker Pops Appling and attributed to Kenneth. Photographed March 10, 2026. E PLURIBUS UNUM — the federation handshake.',
    type: 'pending',
    chapter: 'Chapter 5',
  },
  {
    title: 'St. Alfred\'s Commissioning',
    description: 'Flagship commissioning ceremony, St. Alfred\'s Church, Palm Harbor. March 8, 2026.',
    type: 'pending',
    chapter: 'Chapter 8',
  },
  {
    title: 'SpaceX Launch / SR-528 Overpass',
    description: 'Starlink 10-41 launch observed from SR-528, ~8.88 miles from SLC-40. 53.2° orbital inclination.',
    type: 'pending',
    chapter: 'Chapter 5',
  },
  {
    title: 'Harn Bridge Disabled Veteran',
    description: 'Video: 100% service-disabled veteran out of gas under Harn bridge. Assisted returning from sunset soul quest. Filmed and uploaded.',
    type: 'pending',
    chapter: 'Chapter 5',
  },

  // Astrological Records
  {
    title: 'Natal Chart — January 15, 1972, 1:15 PM',
    description: 'Washington Hospital Center, Washington, D.C. Sun in Capricorn, Moon in Pisces. Professional chart analysis.',
    type: 'pending',
    chapter: 'Chapter 4',
  },
  {
    title: 'Natal Chart — March 17, 1984',
    description: 'Tyler Suzanne Working (The Fifth Element). Synastry analysis with Kenneth\'s chart.',
    type: 'pending',
    chapter: 'Chapter 4',
  },
];

export default function SourcesPage() {
  const pendingCount = sources.filter((s) => s.type === 'pending').length;
  const uploadedCount = sources.filter((s) => s.type !== 'pending').length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-baseline gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-orbitron text-3xl font-bold text-lcars-amber tracking-widest"
          >
            ◈
          </motion.div>
          <LcarsBar color="amber" size="lg" className="flex-1" animated />
        </div>
        <h1 className="font-orbitron text-4xl font-bold text-lcars-text tracking-wide mb-4">
          Sources &amp; Documents
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-lcars-amber via-lcars-lavender to-transparent mb-6" />
        <p className="font-rajdhani text-lcars-text/70 text-lg leading-relaxed max-w-2xl">
          Primary source documents, photographs, and records referenced throughout this examination.
          This is a living archive — documents are being digitized and added as they become available.
        </p>
        <div className="flex gap-4 mt-4">
          <span className="font-orbitron text-xs text-lcars-teal">
            {uploadedCount} UPLOADED
          </span>
          <span className="font-orbitron text-xs text-lcars-amber/50">
            {pendingCount} PENDING
          </span>
        </div>
      </div>

      {/* Source List */}
      <div className="space-y-4">
        {sources.map((source, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="border border-lcars-amber/15 rounded p-4 hover:border-lcars-amber/30 transition-colors group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {source.type === 'pending' ? (
                    <span className="inline-block w-2 h-2 rounded-full bg-lcars-amber/40" />
                  ) : (
                    <span className="inline-block w-2 h-2 rounded-full bg-lcars-teal" />
                  )}
                  <h3 className="font-orbitron text-sm text-lcars-text group-hover:text-lcars-amber transition-colors">
                    {source.title}
                  </h3>
                </div>
                <p className="font-rajdhani text-sm text-lcars-text/60 leading-relaxed ml-4">
                  {source.description}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                {source.chapter && (
                  <span className="font-orbitron text-[10px] text-lcars-lavender/50">
                    {source.chapter}
                  </span>
                )}
                {source.type === 'pending' ? (
                  <span className="font-orbitron text-[10px] text-lcars-amber/30 tracking-widest">
                    PENDING
                  </span>
                ) : source.path ? (
                  <a
                    href={source.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-orbitron text-[10px] text-lcars-teal hover:text-lcars-amber tracking-widest transition-colors"
                  >
                    VIEW ↗
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Submission Note */}
      <div className="mt-12 p-6 border border-lcars-amber/10 rounded bg-lcars-amber/5">
        <h3 className="font-orbitron text-sm text-lcars-amber mb-2 tracking-wide">
          DOCUMENT SUBMISSION
        </h3>
        <p className="font-rajdhani text-sm text-lcars-text/60 leading-relaxed">
          Source documents are being digitized from court records, military files, personal journals,
          and photographic evidence. Sensitive information (SSN, addresses) is redacted before publication.
          This archive will grow as materials are processed and verified.
        </p>
        <p className="font-rajdhani text-sm text-lcars-text/40 mt-2">
          Accepted formats: PDF, JPG, PNG, DOCX, ODT
        </p>
      </div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-16 pt-8 border-t border-lcars-amber/20"
      >
        <div className="flex gap-2">
          <div className="w-1 h-8 bg-lcars-teal rounded-sm" />
          <div className="w-1 h-8 bg-lcars-lavender rounded-sm" />
          <div className="w-1 h-8 bg-lcars-amber rounded-sm" />
        </div>
      </motion.div>
    </motion.div>
  );
}
