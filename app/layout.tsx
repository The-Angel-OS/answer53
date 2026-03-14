import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'The Answer — 53 | Synchronicity and the New Answer to Everything',
  description:
    'A scholarly examination of synchronicity arguing that 53 is the new answer to Life, the Universe, and Everything, based on the life of Kenneth Scott Courtney.',
  keywords: [
    'synchronicity',
    'probability',
    '53',
    'Kenneth Courtney',
    'numerology',
    'consciousness',
  ],
  authors: [{ name: 'Kenneth Scott Courtney' }],
  openGraph: {
    title: 'The Answer — 53',
    description:
      'A scholarly examination of synchronicity and the new answer to everything.',
    type: 'website',
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
        <div className="flex h-screen overflow-hidden">
          {/* Navigation Sidebar */}
          <Navigation />

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-6xl mx-auto">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
