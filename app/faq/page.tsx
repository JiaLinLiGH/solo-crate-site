import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FAQS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Common questions about Solo Crate, pricing, privacy, and Schedule C integration.',
};

export default function FaqPage() {
  return (
    <>
      <Navigation />
      <main className="pb-24">
        <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-moss-700 dark:text-moss-300">
            FAQ
          </div>
          <h1 className="mt-3 font-display text-5xl font-medium leading-[1.05] tracking-tightest text-fg md:text-6xl">
            Answers,{' '}
            <span className="italic text-moss-700 dark:text-moss-300">honestly</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-fg-muted">
            The questions that show up in our inbox every week. If yours
            isn&apos;t here,{' '}
            <Link
              href="mailto:lijialin6972@163.com"
              className="underline decoration-moss-300 decoration-2 underline-offset-4 hover:text-fg hover:decoration-moss-600 dark:decoration-moss-500 dark:hover:decoration-moss-300"
            >
              email us
            </Link>
            .
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-12">
          <ul className="divide-y divide-edge border-y border-edge">
            {FAQS.map((f, i) => (
              <li key={f.q} className="py-7">
                <details className="group" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 focus-ring">
                    <span className="font-display text-xl font-medium text-fg">
                      {f.q}
                    </span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-1.5 h-4 w-4 shrink-0 text-fg-subtle transition group-open:rotate-45"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M10 4v12" />
                      <path d="M4 10h12" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-base leading-relaxed text-fg-muted">
                    {f.a}
                  </p>
                  <p className="mt-3 font-mono text-[10px] text-fg-subtle">
                    #{(i + 1).toString().padStart(2, '0')}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-12">
          <div className="rounded-2xl border border-edge bg-surface-muted p-8">
            <h2 className="font-display text-2xl font-medium text-fg">
              Still have questions?
            </h2>
            <p className="mt-2 text-sm text-fg-muted">
              We usually answer within one business day — same team that
              built the app.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="mailto:lijialin6972@163.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-4 py-2.5 text-sm font-medium text-[rgb(var(--bg))] transition hover:bg-ink-700 focus-ring"
              >
                Email support
              </Link>
              <Link
                href="/changelog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-edge bg-surface px-4 py-2.5 text-sm font-medium text-fg transition hover:border-edge-strong hover:bg-surface-muted focus-ring"
              >
                See what&apos;s new
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
