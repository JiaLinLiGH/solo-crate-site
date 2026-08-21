import Link from 'next/link';
import { PRO_PRICE, TRIAL_DAYS, appStoreLink } from '@/lib/content';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grain absolute inset-0 opacity-70" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-moss-50/70 via-transparent to-transparent dark:from-moss-900/20"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-edge bg-surface/80 px-3 py-1 text-xs font-medium text-fg-muted shadow-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-moss-500 dark:bg-moss-400" />
            Shipping on macOS 14+
          </span>

          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tightest text-fg md:text-7xl">
            Receipts,{' '}
            <span className="italic text-moss-700 dark:text-moss-300">organized</span>{' '}
            <br className="hidden sm:block" />
            on your Mac.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            Solo Crate is a Mac-native receipt manager. Drop a receipt in,
            Apple Vision reads it locally, tags auto-apply, and a clean bundle
            goes to your CPA at tax time. No subscription, no upload, no account.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={appStoreLink('hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-5 py-3 text-sm font-medium text-white shadow-lifted transition hover:bg-ink-700 focus-ring"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M16.365 1.43c0 1.14-.43 2.27-1.18 3.13-.81.94-2.16 1.69-3.32 1.6-.15-1.13.4-2.32 1.14-3.13.83-.9 2.21-1.58 3.36-1.6zM20.5 17.34c-.55 1.27-1.21 2.49-2.04 3.66-1.1 1.55-2.13 2.94-3.41 2.94-1.27 0-1.6-.78-3.32-.78-1.71 0-2.13.78-3.41.78-1.27 0-2.23-1.32-3.34-2.87-2.43-3.4-4.27-9.6-1.79-13.8 1.24-2.1 3.41-3.42 5.78-3.42 1.42 0 2.75.78 3.6.78.85 0 2.5-.95 4.18-.81.71.03 2.7.29 3.98 2.16-.11.06-2.38 1.39-2.36 4.13.03 3.28 2.88 4.37 2.9 4.39-.03.07-.45 1.55-1.46 3.04z" />
              </svg>
              Download for Mac
              <span className="text-white/60">·</span>
              <span className="text-white/60">{PRO_PRICE} one-time</span>
            </a>
            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-edge bg-surface px-5 py-3 text-sm font-medium text-fg transition hover:border-edge-strong hover:bg-surface-muted focus-ring"
            >
              See how it works
            </Link>
          </div>

          <p className="mt-5 text-xs text-fg-subtle">
            {TRIAL_DAYS}-day free trial · No account required · macOS 14 Sonoma and later
          </p>
        </div>

        {/* App window mock */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute inset-x-0 -top-10 -z-10 h-64 bg-gradient-to-b from-moss-100/60 to-transparent blur-3xl dark:from-moss-900/30" />
          <HeroMock />
        </div>
      </div>
    </section>
  );
}

function HeroMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-edge bg-surface shadow-lifted">
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-edge bg-surface-subtle px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="font-mono text-xs text-fg-subtle">
          Solo Crate
        </div>
        <div className="w-12" />
      </div>

      {/* three-pane layout */}
      <div className="grid grid-cols-12 gap-0 text-left text-sm">
        {/* sidebar — matches actual SidebarView (5 items, 2 sections) */}
        <aside className="col-span-3 border-r border-edge bg-surface-subtle py-4">
          <div className="px-4 text-[10px] font-semibold uppercase tracking-widest text-fg-subtle">
            Workspace
          </div>
          <ul className="mt-2 space-y-0.5 px-2">
            <li className="flex items-center gap-2 rounded-md bg-ink-900 px-2 py-1.5 text-[rgb(var(--bg))]">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              <span>Invoices</span>
              <span className="ml-auto font-mono text-[10px] opacity-70">247</span>
            </li>
            <li className="flex items-center gap-2 rounded-md px-2 py-1.5 text-fg-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              <span>Upload</span>
            </li>
            <li className="flex items-center gap-2 rounded-md px-2 py-1.5 text-fg-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              <span>Schedule C</span>
            </li>
          </ul>
          <div className="mt-4 px-4 text-[10px] font-semibold uppercase tracking-widest text-fg-subtle">
            Library
          </div>
          <ul className="mt-2 space-y-0.5 px-2">
            <li className="flex items-center gap-2 rounded-md px-2 py-1.5 text-fg-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              <span>Tags</span>
              <span className="ml-auto font-mono text-[10px] opacity-70">14</span>
            </li>
            <li className="flex items-center gap-2 rounded-md px-2 py-1.5 text-fg-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              <span>Trash</span>
            </li>
          </ul>
        </aside>

        {/* list */}
        <div className="col-span-5 border-r border-edge bg-[rgb(var(--bg))]">
          <div className="flex items-center gap-2 border-b border-edge px-4 py-2 text-fg-muted">
            <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="9" cy="9" r="6" />
              <path d="M14 14l4 4" />
            </svg>
            <span className="font-mono text-[11px]">Search receipts…</span>
          </div>
          {[
            { vendor: 'Figma Pro — 6mo', date: 'Jun 22, 2026', amount: '$180.00', tag: 'software', lowConf: false },
            { vendor: 'Chipotle SF · #2241', date: 'Jun 18, 2026', amount: '$14.85', tag: 'meals', lowConf: true },
            { vendor: 'United · SFO→JFK', date: 'Jun 12, 2026', amount: '$612.40', tag: 'travel', lowConf: false },
            { vendor: 'Best Buy · #9921', date: 'Jun 04, 2026', amount: '$489.99', tag: 'office', lowConf: false },
            { vendor: 'Adobe CC', date: 'May 22, 2026', amount: '$59.99', tag: 'software', lowConf: false },
            { vendor: 'Hertz · #A7714', date: 'May 09, 2026', amount: '$231.05', tag: 'travel', lowConf: false },
          ].map((row, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 border-b border-edge/60 px-4 py-3 ${
                i === 1 ? 'bg-moss-50/60 dark:bg-moss-900/20' : ''
              } ${row.lowConf ? 'bg-amber-50/60 dark:bg-amber-900/15' : ''}`}
            >
              <div className="mt-1 h-8 w-8 shrink-0 rounded-md bg-gradient-to-br from-ink-200 to-ink-300 dark:from-ink-700 dark:to-ink-800" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <div className="truncate text-sm font-medium text-fg">{row.vendor}</div>
                  {row.lowConf && (
                    <span className="rounded-full bg-amber-200 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-amber-800 dark:bg-amber-800/60 dark:text-amber-100">
                      low conf.
                    </span>
                  )}
                </div>
                <div className="mt-0.5 flex items-center gap-2 text-[11px] text-fg-subtle">
                  <span>{row.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-sm bg-moss-500 dark:bg-moss-400" />
                    {row.tag}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm font-medium text-fg">{row.amount}</div>
              </div>
            </div>
          ))}
        </div>

        {/* detail — matches actual ReceiptInspector */}
        <div className="col-span-4 bg-surface-subtle px-5 py-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle">
                INV-2026-06-0042
              </div>
              <div className="mt-1 font-display text-xl font-medium text-fg">
                Figma Pro — 6mo
              </div>
              <div className="mt-1 text-xs text-fg-muted">
                Carter Nguyen Studio · paid
              </div>
            </div>
            <span className="rounded-full bg-moss-100 px-2 py-0.5 text-[10px] font-semibold text-moss-700 dark:bg-moss-900/40 dark:text-moss-200">
              software
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
            {[
              ['Date', 'Jun 22, 2026'],
              ['Amount', '$180.00'],
              ['Currency', 'USD'],
              ['Tax', '$14.40'],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-[10px] uppercase tracking-widest text-fg-subtle">
                  {k}
                </div>
                <div className="mt-0.5 font-medium text-fg">{v}</div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-fg-subtle">
              Tags
            </div>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {['software', 'design-tools'].map((t) => (
                <span key={t} className="rounded-full bg-moss-100 px-2 py-0.5 font-mono text-[10px] text-moss-700 dark:bg-moss-900/40 dark:text-moss-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-moss-200 bg-moss-50/60 px-3 py-2 text-[11px] text-moss-800 dark:border-moss-800 dark:bg-moss-900/30 dark:text-moss-100">
            <span className="font-semibold">OCR confidence:</span> 98% · all fields high
          </div>

          {/* embedded PDF preview stand-in */}
          <div className="mt-5 aspect-[3/4] overflow-hidden rounded-lg border border-edge bg-gradient-to-br from-surface-muted to-surface p-3">
            <div className="h-3 w-1/3 rounded bg-edge-strong/70" />
            <div className="mt-2 h-2 w-1/2 rounded bg-edge" />
            <div className="mt-4 space-y-1">
              <div className="h-2 w-full rounded bg-edge" />
              <div className="h-2 w-5/6 rounded bg-edge" />
              <div className="h-2 w-4/6 rounded bg-edge" />
            </div>
            <div className="mt-6 space-y-1.5">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex justify-between">
                  <div className="h-2 w-1/3 rounded bg-edge" />
                  <div className="h-2 w-10 rounded bg-edge" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
