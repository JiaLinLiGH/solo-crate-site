import Link from 'next/link';
import { appStoreLink } from '@/lib/content';

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-10 py-16 text-center shadow-lifted md:px-20 md:py-20 dark:bg-ink-950">
        <div
          className="absolute inset-0 opacity-50"
          aria-hidden
        >
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-moss-500/30 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
        </div>

        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-medium leading-tight tracking-tightest md:text-5xl">
            <span className="text-white">Stop fighting spreadsheets.{' '}</span>
            <span className="italic text-moss-300">Start filing.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-fg-muted">
            14-day free trial, then $49.99 once. Lifetime updates on macOS.
            No account, no upsell mid-export. The receipt pile deserves
            better than another subscription.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={appStoreLink('final-cta')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-ink-900 shadow-soft transition hover:bg-ink-50 focus-ring"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M16.365 1.43c0 1.14-.43 2.27-1.18 3.13-.81.94-2.16 1.69-3.32 1.6-.15-1.13.4-2.32 1.14-3.13.83-.9 2.21-1.58 3.36-1.6zM20.5 17.34c-.55 1.27-1.21 2.49-2.04 3.66-1.1 1.55-2.13 2.94-3.41 2.94-1.27 0-1.6-.78-3.32-.78-1.71 0-2.13.78-3.41.78-1.27 0-2.23-1.32-3.34-2.87-2.43-3.4-4.27-9.6-1.79-13.8 1.24-2.1 3.41-3.42 5.78-3.42 1.42 0 2.75.78 3.6.78.85 0 2.5-.95 4.18-.81.71.03 2.7.29 3.98 2.16-.11.06-2.38 1.39-2.36 4.13.03 3.28 2.88 4.37 2.9 4.39-.03.07-.45 1.55-1.46 3.04z" />
              </svg>
              Download for macOS
            </a>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-700 px-5 py-3 text-sm font-medium text-white transition hover:border-ink-500 hover:bg-ink-900 focus-ring"
            >
              Read the FAQ
            </Link>
          </div>

          <p className="mt-6 font-mono text-xs text-fg-subtle">
            macOS 14 Sonoma+ · Apple Silicon &amp; Intel
          </p>
        </div>
      </div>
    </section>
  );
}
