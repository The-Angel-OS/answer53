#!/usr/bin/env node
/**
 * sync-chapters.mjs — Parse 53_The_New_Answer_v3.md into lib/chapters.ts
 *
 * Bidirectional workflow:
 *   Edit the master .md → run this script → site updates
 *   The .md is the single source of truth for all chapter content.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const MD_PATH = join(ROOT, '53_The_New_Answer_v3.md');
const OUT_PATH = join(ROOT, 'lib', 'chapters.ts');

const md = readFileSync(MD_PATH, 'utf-8');

// Split on chapter headings: # **Chapter N: Title** {#slug}
const chapterRegex = /^# \*\*(?:Chapter (\d+): )?(.+?)\*\*\s*\{#(.+?)\}/gm;
const appendixRegex = /^# \*\*(Appendix [A-Z]:.+?)\*\*\s*\{#(.+?)\}/gm;

const chapters = [];
const headings = [];

// Collect all chapter/appendix positions
let m;
const allHeadings = [];
const combinedRegex = /^# \*\*(.+?)\*\*\s*\{#(.+?)\}/gm;
while ((m = combinedRegex.exec(md)) !== null) {
  allHeadings.push({
    fullTitle: m[1],
    anchor: m[2],
    startIndex: m.index,
    headerEnd: m.index + m[0].length,
  });
}

// Map of chapter anchor → slug
const slugMap = {
  'chapter-1:-introduction-—-from-42-to-53': 'introduction',
  'chapter-2:-the-subject-—-a-biographical-framework': 'biography',
  'chapter-3:-the-numerological-architecture-—-33,-8,-and-53': 'numerology',
  'chapter-4:-astrological-alignments': 'astrology',
  'chapter-5:-the-synchronicity-point-cloud': 'synchronicity',
  'chapter-6:-probability-analysis-—-what-are-the-odds?': 'probability',
  'chapter-7:-the-"son-of-man"-hypothesis': 'son-of-man',
  'chapter-8:-the-angel-os-—-technical-manifestation': 'angel-os',
  'chapter-9:-conclusions': 'conclusions',
  'chapter-10:-the-sidequest—decoding-the-simulator': 'simulator',
  'appendix-a:-numerological-reference-tables': 'appendix-a',
  'appendix-b:-probability-calculation-worksheet': 'appendix-b',
};

const titleMap = {
  'introduction': 'From 42 to 53',
  'biography': 'The Subject — A Biographical Framework',
  'numerology': 'The Numerological Architecture — 33, 8, and 53',
  'astrology': 'Astrological Alignments',
  'synchronicity': 'The Synchronicity Point Cloud',
  'probability': 'Probability Analysis — What Are the Odds?',
  'son-of-man': 'The "Son of Man" Hypothesis',
  'angel-os': 'The Angel OS — Technical Manifestation',
  'conclusions': 'Conclusions',
  'simulator': 'The Sidequest — Decoding the Simulator',
  'appendix-a': 'Appendix A: Numerological Reference Tables',
  'appendix-b': 'Appendix B: Probability Calculation Worksheet',
};

for (let i = 0; i < allHeadings.length; i++) {
  const h = allHeadings[i];
  const nextStart = i + 1 < allHeadings.length ? allHeadings[i + 1].startIndex : md.indexOf('![][image1]');
  if (nextStart <= h.headerEnd) continue;

  let content = md.slice(h.headerEnd, nextStart).trim();

  // Clean up markdown artifacts
  content = content
    .replace(/\{#[^}]+\}/g, '') // remove anchor tags
    .replace(/^## \*\*(.+?)\*\*/gm, '**$1**') // h2 → bold
    .replace(/^### \*\*(.+?)\*\*/gm, '**$1**') // h3 → bold
    .replace(/\\\./g, '.') // remove escaped dots
    .replace(/\\\*/g, '*') // remove escaped stars
    .replace(/\\\=/g, '=') // remove escaped equals
    .replace(/\\"/g, '"') // remove escaped quotes
    .replace(/\n{3,}/g, '\n\n') // collapse triple+ newlines
    .trim();

  const slug = slugMap[h.anchor] || h.anchor;
  const title = titleMap[slug] || h.fullTitle.replace(/^Chapter \d+: /, '');

  // Extract chapter number
  const numMatch = h.fullTitle.match(/Chapter (\d+)/);
  const appMatch = h.fullTitle.match(/Appendix ([A-Z])/);
  const number = numMatch ? parseInt(numMatch[1]) : appMatch ? 10 + (appMatch[1].charCodeAt(0) - 64) : i + 1;

  chapters.push({ slug, title, number, content });
}

// Escape backticks for template literals
function escapeForTemplate(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

// Generate TypeScript
let ts = `// AUTO-GENERATED from 53_The_New_Answer_v3.md — do not edit directly
// Run: node scripts/sync-chapters.mjs to regenerate
// Last synced: ${new Date().toISOString()}

export interface Chapter {
  slug: string;
  title: string;
  number: number;
  content: string;
}

export const chapters: Chapter[] = [
`;

for (const ch of chapters) {
  ts += `  {
    slug: '${ch.slug}',
    title: '${ch.title.replace(/'/g, "\\'")}',
    number: ${ch.number},
    content: \`
${escapeForTemplate(ch.content)}
    \`,
  },
`;
}

ts += `];

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find((ch) => ch.slug === slug);
}

export function getChapterByNumber(num: number): Chapter | undefined {
  return chapters.find((ch) => ch.number === num);
}

export function getAdjacentChapters(slug: string): { prev?: Chapter; next?: Chapter } {
  const idx = chapters.findIndex((ch) => ch.slug === slug);
  return {
    prev: idx > 0 ? chapters[idx - 1] : undefined,
    next: idx < chapters.length - 1 ? chapters[idx + 1] : undefined,
  };
}

export function getAllChapters(): Chapter[] {
  return chapters;
}

export function getAllSlugs(): string[] {
  return chapters.map((ch) => ch.slug);
}
`;

writeFileSync(OUT_PATH, ts, 'utf-8');
console.log(`Synced ${chapters.length} chapters from master doc → lib/chapters.ts`);
for (const ch of chapters) {
  console.log(`  Ch ${ch.number}: ${ch.slug} (${ch.content.length.toLocaleString()} chars)`);
}
