import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ComparisonTable } from '@/components/ComparisonTable';
import { PRO_PRICE, TRIAL_DAYS, appStoreLink, canonicalUrl } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Solo Crate offers a 14-day free trial and a $49.99 one-time unlock. No subscription, no per-seat fees, no hidden tiers.',
  alternates: { canonical: canonicalUrl('pricing/') },
};

const FAQ = [
  {
    q: 'Is there a monthly fee?',
    a: 'No. Solo Crate is sold as a perpetual license. After the 14-day trial you pay once and own the app forever — including lifetime updates on macOS within the v1.x major version.',
  },
  {
    q: 'Do I get free updates?',
    a: 'Yes — for the duration of the v1.x major version you bought. Major versions (when they ship) include an upgrade discount for existing customers.',
  },
  {
    q: 'Can I get a refund?',
    a: 'Yes, within 30 days of purchase, no questions asked. The app keeps working with the locked-tier limits if you refund.',
  },
  {
    q: 'How does the trial work?',
    a: 'Open the Mac App Store, click your name in the bottom-left, then choose Subscriptions. You will see Solo Crate listed with Manage or Cancel Trial. The trial anchors to your Apple ID purchase date and Family Shares with your household if Family Sharing is on. After 14 days the app stays usable for read, edit, Schedule C view, and Trash; you can import or export again as soon as you buy the unlock.',
  },
  {
    q: 'Is Family Sharing included?',
    a: 'Yes — both the trial and the unlock are non-consumable, so Family Sharing is enabled by default.',
  },
];

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="pb-24">
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-moss-700 dark:text-moss-300">
            Pricing
          </div>
          <h1 className="mt-3 font-display text-5xl font-medium leading-[1.05] tracking-tightest text-fg md:text-6xl">
            {TRIAL_DAYS} days free. <span className="italic text-moss-700 dark:text-moss-300">Then {PRO_PRICE}, once.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-fg-muted">
            Solo Crate is sold as two non-consumable in-app purchases on the Mac
            App Store: a free 14-day trial, and a one-time unlock. No subscription
            creep, no per-seat fees, no hidden tier.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="relative flex flex-col rounded-2xl border border-edge bg-surface p-8 shadow-soft transition hover:border-edge-strong">
              <span className="absolute -top-3 left-8 rounded-full bg-moss-500 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-white">
                Start here
              </span>
              <h2 className="font-display text-2xl font-medium text-fg">
                {TRIAL_DAYS}-day Trial
              </h2>
              <p className="mt-1 text-sm text-fg-muted">
                Full app access, no feature limits, no credit card up front.
              </p>

              <div className="mt-7 flex items-baseline gap-2">
                <span className="font-display text-5xl font-medium tracking-tightest text-fg">
                  Free
                </span>
                <span className="text-sm text-fg-subtle">· for {TRIAL_DAYS} days</span>
              </div>

              <ul className="mt-8 flex-1 space-y-3 text-sm text-fg-muted">
                {[
                  'Full import + Apple Vision OCR',
                  'All tag and rule features',
                  'All four export formats (ZIP, xlsx, Bundle, PDF)',
                  'Schedule C view + Trash',
                  'Family Sharing included',
                ].map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-0.5 h-4 w-4 shrink-0 text-moss-600 dark:text-moss-400"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 10l4 4 8-9" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={appStoreLink('pricing-trial')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-xl border border-edge bg-surface px-4 py-3 text-sm font-medium text-fg transition hover:border-edge-strong hover:bg-surface-muted focus-ring"
              >
                Start {TRIAL_DAYS}-day trial
              </a>
            </article>

            <article className="relative flex flex-col rounded-2xl border border-ink-900 bg-ink-900 p-8 text-[rgb(var(--bg))] shadow-lifted dark:border-ink-700 dark:bg-ink-950">
              <span className="absolute -top-3 left-8 rounded-full bg-moss-500 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-white">
                Keep it forever
              </span>
              <h2 className="font-display text-2xl font-medium text-white">
                Solo Crate
              </h2>
              <p className="mt-1 text-sm text-fg-muted">
                Full app access after the trial ends, with lifetime updates on macOS.
              </p>

              <div className="mt-7 flex items-baseline gap-2">
                <span className="font-display text-5xl font-medium tracking-tightest text-white">
                  {PRO_PRICE}
                </span>
                <span className="text-sm text-fg-muted">· one-time</span>
              </div>

              <ul className="mt-8 flex-1 space-y-3 text-sm text-fg-muted">
                {[
                  'Everything in the trial, forever',
                  'Lifetime updates within macOS v1.x',
                  'Family Sharing included',
                  'Re-install proof: tied to your Apple ID',
                  'No subscription, no renewal',
                ].map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-0.5 h-4 w-4 shrink-0 text-moss-300"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 10l4 4 8-9" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={appStoreLink('pricing-buy')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-ink-900 transition hover:bg-ink-50 focus-ring"
              >
                Buy for {PRO_PRICE}
              </a>
            </article>
          </div>

          <p className="mt-8 text-center text-xs text-fg-subtle">
            All prices in USD. Apple handles payment on macOS via the App Store.
            Sales tax / VAT may apply at checkout.
          </p>
        </section>

        <ComparisonTable />

        <section className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-center font-display text-3xl font-medium tracking-tightest text-fg md:text-4xl">
            Pricing questions
          </h2>
          <ul className="mt-12 divide-y divide-edge border-y border-edge">
            {FAQ.map((f) => (
              <li key={f.q} className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 focus-ring">
                    <span className="font-display text-lg font-medium text-fg">
                      {f.q}
                    </span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-1 h-4 w-4 shrink-0 text-fg-subtle transition group-open:rotate-45"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M10 4v12" />
                      <path d="M4 10h12" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {f.a}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
