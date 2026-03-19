'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { LcarsBar } from './LcarsBar';
import Image from 'next/image';

interface ChapterContentProps {
  title: string;
  content: string;
  number: number;
}

export function ChapterContent({
  title,
  content,
  number,
}: ChapterContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* Chapter header */}
      <div className="mb-12">
        <div className="flex items-baseline gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-orbitron text-5xl font-bold text-lcars-amber tracking-widest"
          >
            {number}
          </motion.div>
          <LcarsBar color="amber" size="lg" className="flex-1" animated />
        </div>
        <h1 className="font-orbitron text-4xl font-bold text-lcars-text tracking-wide mb-4">
          {title}
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-lcars-amber via-lcars-lavender to-transparent" />
      </div>

      {/* Content — full markdown rendering */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="max-w-3xl prose-answer53"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 className="font-orbitron text-2xl font-bold text-lcars-amber mt-12 mb-4 tracking-wide">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="font-orbitron text-xl font-bold text-lcars-lavender mt-8 mb-3 tracking-wide">
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="font-orbitron text-lg font-bold text-lcars-teal mt-6 mb-2">
                {children}
              </h4>
            ),
            p: ({ children }) => (
              <p className="font-rajdhani text-lcars-text/90 leading-relaxed text-lg mb-6">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="text-lcars-amber font-bold">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="text-lcars-lavender italic">{children}</em>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lcars-teal underline underline-offset-2 hover:text-lcars-amber transition-colors"
              >
                {children}
              </a>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-2 mb-6 font-rajdhani text-lcars-text/90 text-lg">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside space-y-2 mb-6 font-rajdhani text-lcars-text/90 text-lg">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed">{children}</li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-lcars-amber/50 pl-4 my-6 italic text-lcars-text/70">
                {children}
              </blockquote>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse font-rajdhani text-lcars-text/90">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="border-b-2 border-lcars-amber/30">
                {children}
              </thead>
            ),
            th: ({ children }) => (
              <th className="text-left px-3 py-2 font-orbitron text-lcars-amber text-sm tracking-wide">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-3 py-2 border-b border-lcars-amber/10">
                {children}
              </td>
            ),
            code: ({ children, className }) => {
              const isBlock = className?.includes('language-');
              if (isBlock) {
                return (
                  <pre className="bg-black/40 border border-lcars-amber/20 rounded p-4 overflow-x-auto mb-6">
                    <code className="font-mono text-sm text-lcars-teal">
                      {children}
                    </code>
                  </pre>
                );
              }
              return (
                <code className="bg-black/30 px-1.5 py-0.5 rounded font-mono text-sm text-lcars-teal">
                  {children}
                </code>
              );
            },
            pre: ({ children }) => <>{children}</>,
            img: ({ src, alt }) => {
              if (!src) return null;
              // Handle relative paths for images in /images/ or /photos/
              const imgSrc = src.startsWith('/') || src.startsWith('http')
                ? src
                : `/${src}`;
              return (
                <figure className="my-8">
                  <div className="border border-lcars-amber/20 rounded overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgSrc}
                      alt={alt || ''}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  {alt && (
                    <figcaption className="mt-2 text-sm text-lcars-text/50 italic text-center">
                      {alt}
                    </figcaption>
                  )}
                </figure>
              );
            },
            hr: () => (
              <hr className="my-8 border-t border-lcars-amber/20" />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </motion.div>

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
