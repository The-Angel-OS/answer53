'use client';

import { getChapter, getAllChapters } from '@/lib/chapters';
import { ChapterContent } from '@/components/ChapterContent';
import { LcarsBar } from '@/components/LcarsBar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function ChapterPage() {
  const { slug } = useParams<{ slug: string }>();
  const chapter = getChapter(slug);

  if (!chapter) {
    notFound();
  }

  const allChapters = getAllChapters();
  const currentIndex = allChapters.findIndex((c) => c.slug === slug);
  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < allChapters.length - 1
      ? allChapters[currentIndex + 1]
      : null;

  return (
    <main className="relative min-h-screen">
      {/* Deep space background */}
      <div className="fixed inset-0 -z-10 deep-space-bg pointer-events-none" />

      {/* Content */}
      <section className="px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <ChapterContent
            title={chapter.title}
            content={chapter.content}
            number={chapter.number}
          />
        </div>
      </section>

      {/* Navigation between chapters */}
      <section className="px-4 md:px-8 py-12 md:py-20 border-t border-lcars-amber/20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-between items-center"
          >
            {prevChapter ? (
              <Link href={`/chapters/${prevChapter.slug}`}>
                <button className="flex-1 sm:flex-none px-6 py-4 border-2 border-lcars-lavender text-lcars-lavender font-rajdhani rounded-sm hover:bg-lcars-lavender/10 transition-colors text-left">
                  <p className="text-xs font-orbitron tracking-widest text-lcars-lavender/60">
                    PREVIOUS
                  </p>
                  <p className="font-bold mt-1">← {prevChapter.title}</p>
                </button>
              </Link>
            ) : (
              <div />
            )}

            <Link href="/">
              <button className="px-6 py-4 border-2 border-lcars-amber text-lcars-amber font-orbitron rounded-sm hover:bg-lcars-amber/10 transition-colors tracking-widest text-sm">
                HOME
              </button>
            </Link>

            {nextChapter ? (
              <Link href={`/chapters/${nextChapter.slug}`}>
                <button className="flex-1 sm:flex-none px-6 py-4 border-2 border-lcars-teal text-lcars-teal font-rajdhani rounded-sm hover:bg-lcars-teal/10 transition-colors text-right">
                  <p className="text-xs font-orbitron tracking-widest text-lcars-teal/60">
                    NEXT
                  </p>
                  <p className="font-bold mt-1">{nextChapter.title} →</p>
                </button>
              </Link>
            ) : (
              <div />
            )}
          </motion.div>
        </div>
      </section>

      {/* All chapters index */}
      <section className="px-4 md:px-8 py-12 md:py-20 bg-gradient-subtle border-t border-lcars-amber/20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-orbitron text-2xl font-bold text-lcars-amber tracking-widest mb-4">
              All Chapters
            </h2>
            <LcarsBar color="amber" size="md" animated />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {allChapters.map((ch) => (
                <Link key={ch.slug} href={`/chapters/${ch.slug}`}>
                  <button
                    className={`w-full p-4 text-left rounded-sm transition-colors ${
                      chapter.slug === ch.slug
                        ? 'bg-lcars-amber/20 border-2 border-lcars-amber'
                        : 'bg-lcars-bg/50 border-2 border-lcars-amber/20 hover:border-lcars-amber'
                    }`}
                  >
                    <p className="font-orbitron text-lcars-amber text-sm tracking-widest">
                      {ch.number}
                    </p>
                    <p className="font-rajdhani text-lcars-text font-semibold">
                      {ch.title}
                    </p>
                  </button>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
