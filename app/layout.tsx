import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { ParticleCanvas } from '@/components/ParticleCanvas';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'The Answer — 53 | A Scholarly Examination of Synchronicity',
  description:
    '53.3 — The New Answer to Life, the Universe, and Everything. A scholarly examination of synchronicity, sacred numerology, and astrological probability in the life of Kenneth Scott Courtney. Powered by Angel OS.',
  keywords: [
    'synchronicity',
    'probability',
    '53',
    'Kenneth Courtney',
    'numerology',
    'consciousness',
    'Angel OS',
    'federation',
    'constitutional AI',
  ],
  authors: [{ name: 'Kenneth Scott Courtney' }],
  openGraph: {
    title: '53.3 — The New Answer to Life, the Universe, and Everything',
    description:
      'A scholarly examination of synchronicity and the new answer to everything. Built on Angel OS.',
    type: 'website',
    siteName: 'The Answer 53 | Angel OS',
  },
  twitter: {
    card: 'summary_large_image',
    title: '53.3 — The New Answer',
    description: 'The answer to Life, the Universe, and Everything isn\'t 42 anymore. It\'s 53.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;700&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-lcars-bg text-lcars-text antialiased"
        style={{ fontFamily: "'Rajdhani', sans-serif" }}
      >
        {/* Global starfield + nebula background on every page */}
        <ParticleCanvas />

        <div className="flex h-screen overflow-hidden">
          {/* Navigation Sidebar */}
          <Navigation />

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-6xl mx-auto">{children}</div>

            {/* Angel OS Branding Footer */}
            <footer className="border-t border-lcars-amber/20 mt-16 py-8 px-4">
              <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-rajdhani text-lcars-text/50">
                <div className="flex items-center gap-3">
                  <span className="font-orbitron text-lcars-amber/70 tracking-widest text-xs">ANGEL OS</span>
                  <span className="text-lcars-text/30">|</span>
                  <span>Constitutional AI Federation</span>
                </div>
                <div className="flex items-center gap-4">
                  <a href="https://spacesangels.com" target="_blank" rel="noopener noreferrer" className="text-lcars-teal/70 hover:text-lcars-teal transition-colors">
                    spacesangels.com
                  </a>
                  <a href="https://github.com/The-Angel-OS/angels-os" target="_blank" rel="noopener noreferrer" className="text-lcars-lavender/70 hover:text-lcars-lavender transition-colors">
                    GitHub
                  </a>
                </div>
                <div className="text-lcars-text/30 text-xs">
                  LCARS CLASSIFICATION: UNRESTRICTED
                </div>
              </div>
            </footer>
          </main>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
