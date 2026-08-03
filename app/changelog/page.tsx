import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    'Solo Crate release notes. New versions, fixes, and small improvements worth knowing about.',
};

const RELEASES = [
  {
    version: '1.7.5',
    date: 'July 29, 2026',
    tag: 'Current',
    highlights: [
      'CPA-ready ZIP export: every PDF + manifest.csv + audit notes',
      'Three-layer duplicate detection (SHA256 → pHash → OCR fuzzy)',
      'New tags management page with usage frequency and merge UI',
      'Full-text search across vendor, notes, and OCR text',
    ],
  },
  {
    version: '1.6',
    date: 'April 28, 2026',
    tag: 'Shipped',
    highlights: [
      'Year-of-rules with full Boolean tree editor (AND / OR / NOT)',
      'Calendar-year switching from the sidebar without restart',
      'Low-confidence OCR flags with inline editable fields',
      'Multi-select bulk operations: tag, rule, trash, archive',
    ],
  },
  {
    version: '1.5',
    date: 'February 12, 2026',
    tag: 'Shipped',
    highlights: [
      'First public release on the Mac App Store',
      'Local-first Core Data store with App Sandbox',
      'PDF + JPEG / PNG / HEIC drag-and-drop import',
      'Smart Folders with on-device Spotlight-like search',
    ],
  },
  {
    version: '1.0',
    date: 'October 03, 2025',
    tag: 'Beta',
    highlights: [
      'Closed beta with 120 freelancers across Schedule C filers',
      'Core three-pane layout tuned on Sonoma and Sequoia',
      'Baseline trash with 30-day restore window',
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Navigation />
      <main className="pb-24">
        <section className="mx-auto max-w-3xl px-6 pt-20 pb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-moss-700 dark:text-moss-300">
            Changelog
          </div>
          <h1 className="mt-3 font-display text-5xl font-medium leading-[1.05] tracking-tightest text-fg md:text-6xl">
            Every release,{' '}
            <span className="italic text-moss-700 dark:text-moss-300">in plain words</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-fg-muted">
            Solo Crate ships frequently. Small fixes appear here too — they
            matter when the app runs your taxes.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6">
          <ol className="relative space-y-12 border-l border-edge-strong pl-8">
            {RELEASES.map((r) => (
              <li key={r.version} className="relative">
                <span className="absolute -left-[37px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[rgb(var(--bg))] bg-moss-600 text-[10px] font-bold text-white shadow-soft dark:bg-moss-500">
                  v
                </span>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h2 className="font-display text-3xl font-medium tracking-tightest text-fg">
                    v{r.version}
                  </h2>
                  <span className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
                    {r.date}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest ${
                      r.tag === 'Current'
                        ? 'bg-moss-100 text-moss-800 dark:bg-moss-900/40 dark:text-moss-200'
                        : 'bg-surface-muted text-fg-muted'
                    }`}
                  >
                    {r.tag}
                  </span>
                </div>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-fg-muted">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-moss-600 dark:text-moss-400"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 10l4 4 8-9" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}
