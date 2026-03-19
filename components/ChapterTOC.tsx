'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface ChapterTOCProps {
  content: string;
}

export function ChapterTOC({ content }: ChapterTOCProps) {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Extract headings from markdown content
  useEffect(() => {
    const headingRegex = /^(#{2,4})\s+(.+?)(?:\s*\{#(.+?)\})?$/gm;
    const extracted: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].replace(/\*\*/g, '').replace(/\*/g, '').trim();
      const id = match[3] || text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      extracted.push({ id, text, level });
    }

    // If no markdown headings found, try to extract section markers like **2.1 Title**
    if (extracted.length === 0) {
      const sectionRegex = /\*\*(\d+\.\d+)\s+(.+?)\*\*/g;
      while ((match = sectionRegex.exec(content)) !== null) {
        const id = `section-${match[1].replace('.', '-')}`;
        extracted.push({ id, text: `${match[1]} ${match[2]}`, level: 3 });
      }
    }

    setItems(extracted);
  }, [content]);

  // Track scroll position to highlight active section
  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    // Observe all heading elements
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  // Read aloud using SpeechSynthesis API
  const toggleRead = useCallback(() => {
    if (!('speechSynthesis' in window)) return;

    if (isReading && !isPaused) {
      speechSynthesis.pause();
      setIsPaused(true);
      return;
    }

    if (isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
      return;
    }

    // Clean content for reading
    const cleanText = content
      .replace(/#{1,6}\s*/g, '')
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\*(.+?)\*/g, '$1')
      .replace(/\[(.+?)\]\(.+?\)/g, '$1')
      .replace(/!\[.+?\]\(.+?\)/g, '')
      .replace(/`{1,3}[^`]*`{1,3}/g, '')
      .replace(/\{#.+?\}/g, '')
      .replace(/[|─┌┐└┘├┤┬┴┼═╔╗╚╝║]/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    // Split into chunks (SpeechSynthesis has limits)
    const chunks = cleanText.match(/[^.!?]+[.!?]+/g) || [cleanText];
    let chunkIndex = 0;

    const speakNext = () => {
      if (chunkIndex >= chunks.length) {
        setIsReading(false);
        setIsPaused(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(chunks[chunkIndex]);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      // Try to use a good voice
      const voices = speechSynthesis.getVoices();
      const preferred = voices.find(
        (v) => v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Enhanced')
      );
      if (preferred) utterance.voice = preferred;

      utterance.onend = () => {
        chunkIndex++;
        speakNext();
      };

      speechSynthesis.speak(utterance);
    };

    setIsReading(true);
    setIsPaused(false);
    speakNext();
  }, [content, isReading, isPaused]);

  const stopRead = useCallback(() => {
    speechSynthesis.cancel();
    setIsReading(false);
    setIsPaused(false);
  }, []);

  if (items.length === 0) {
    // Still show read button even without TOC items
    return (
      <div className="hidden xl:block fixed right-8 top-32 w-48">
        <ReadButton
          isReading={isReading}
          isPaused={isPaused}
          onToggle={toggleRead}
          onStop={stopRead}
        />
      </div>
    );
  }

  return (
    <div className="hidden xl:block fixed right-8 top-32 w-48">
      {/* Read Aloud Button */}
      <ReadButton
        isReading={isReading}
        isPaused={isPaused}
        onToggle={toggleRead}
        onStop={stopRead}
      />

      {/* TOC */}
      <nav className="mt-4">
        <p className="font-orbitron text-[10px] text-lcars-amber/40 tracking-widest mb-3">
          IN THIS CHAPTER
        </p>
        <ul className="space-y-1 border-l border-lcars-amber/10">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`
                  block text-[11px] font-rajdhani leading-tight py-1 transition-all duration-200
                  ${item.level === 2 ? 'pl-3' : item.level === 3 ? 'pl-5' : 'pl-7'}
                  ${
                    activeId === item.id
                      ? 'text-lcars-amber border-l-2 border-lcars-amber -ml-[1px]'
                      : 'text-lcars-text/30 hover:text-lcars-text/60 border-l border-transparent -ml-[1px]'
                  }
                `}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function ReadButton({
  isReading,
  isPaused,
  onToggle,
  onStop,
}: {
  isReading: boolean;
  isPaused: boolean;
  onToggle: () => void;
  onStop: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onToggle}
        className={`
          flex items-center gap-2 px-3 py-1.5 rounded text-xs font-orbitron tracking-wide transition-all
          ${
            isReading && !isPaused
              ? 'bg-lcars-amber/20 text-lcars-amber border border-lcars-amber/40'
              : 'bg-transparent text-lcars-text/40 border border-lcars-amber/15 hover:text-lcars-text/70 hover:border-lcars-amber/30'
          }
        `}
        title={isReading ? (isPaused ? 'Resume reading' : 'Pause reading') : 'Read aloud'}
      >
        {isReading && !isPaused ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
            PAUSE
          </>
        ) : isPaused ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
            RESUME
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
            READ
          </>
        )}
      </button>
      <AnimatePresence>
        {isReading && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onStop}
            className="p-1.5 rounded text-lcars-text/30 hover:text-red-400 border border-lcars-amber/10 hover:border-red-400/30 transition-all"
            title="Stop reading"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
