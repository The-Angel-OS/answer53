'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllChapters } from '@/lib/chapters';
import Link from 'next/link';

interface SearchResult {
  slug: string;
  title: string;
  number: number;
  excerpt: string;
  matchCount: number;
}

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Ctrl+K or Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [open]);

  const search = useCallback((q: string) => {
    setQuery(q);
    if (q.length < 2) {
      setResults([]);
      return;
    }

    const chapters = getAllChapters();
    const lower = q.toLowerCase();
    const words = lower.split(/\s+/).filter(Boolean);

    const matched: SearchResult[] = chapters
      .map((ch) => {
        const contentLower = ch.content.toLowerCase();
        const titleLower = ch.title.toLowerCase();

        // Count word matches
        let matchCount = 0;
        for (const word of words) {
          const regex = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
          const contentMatches = ch.content.match(regex);
          const titleMatches = ch.title.match(regex);
          matchCount += (contentMatches?.length || 0) + ((titleMatches?.length || 0) * 3); // Title matches weighted 3x
        }

        if (matchCount === 0) return null;

        // Find best excerpt
        const idx = contentLower.indexOf(words[0]);
        const start = Math.max(0, idx - 80);
        const end = Math.min(ch.content.length, idx + 200);
        let excerpt = ch.content.slice(start, end).replace(/\n/g, ' ').trim();
        if (start > 0) excerpt = '...' + excerpt;
        if (end < ch.content.length) excerpt += '...';

        return {
          slug: ch.slug,
          title: ch.title,
          number: ch.number,
          excerpt,
          matchCount,
        };
      })
      .filter(Boolean)
      .sort((a, b) => (b?.matchCount || 0) - (a?.matchCount || 0)) as SearchResult[];

    setResults(matched);
  }, []);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded border border-lcars-amber/20 text-lcars-text/50 hover:text-lcars-text hover:border-lcars-amber/40 transition-colors text-sm font-rajdhani"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        Search
        <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 bg-black/30 rounded text-xs text-lcars-text/30">
          ⌘K
        </kbd>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[15%] left-1/2 -translate-x-1/2 w-[90vw] max-w-2xl z-50"
            >
              <div className="bg-lcars-bg border border-lcars-amber/30 rounded-lg shadow-2xl overflow-hidden">
                {/* Search input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-lcars-amber/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lcars-amber">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search chapters, names, events, numbers..."
                    value={query}
                    onChange={(e) => search(e.target.value)}
                    className="flex-1 bg-transparent text-lcars-text font-rajdhani text-lg outline-none placeholder:text-lcars-text/30"
                  />
                  <kbd className="px-2 py-1 bg-black/30 rounded text-xs text-lcars-text/30 font-mono">
                    ESC
                  </kbd>
                </div>

                {/* Results */}
                <div className="max-h-[50vh] overflow-y-auto">
                  {results.length > 0 ? (
                    <ul className="py-2">
                      {results.map((r) => (
                        <li key={r.slug}>
                          <Link
                            href={`/chapters/${r.slug}`}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-3 hover:bg-lcars-amber/5 transition-colors"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-orbitron text-xs text-lcars-amber">
                                CH {r.number}
                              </span>
                              <span className="font-orbitron text-sm text-lcars-text">
                                {r.title}
                              </span>
                              <span className="ml-auto text-xs text-lcars-text/30">
                                {r.matchCount} match{r.matchCount !== 1 ? 'es' : ''}
                              </span>
                            </div>
                            <p className="text-sm text-lcars-text/50 font-rajdhani line-clamp-2">
                              {r.excerpt}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : query.length >= 2 ? (
                    <div className="py-8 text-center text-lcars-text/30 font-rajdhani">
                      No results for &quot;{query}&quot;
                    </div>
                  ) : (
                    <div className="py-8 text-center text-lcars-text/30 font-rajdhani text-sm">
                      Type at least 2 characters to search across all chapters
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
