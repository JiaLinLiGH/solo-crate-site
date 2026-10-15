import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { canonicalUrl } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Terms of service',
  description:
    'Solo Crate terms of service: a perpetual $49.99 license for the v1.x major version, with optional upgrade discount on future major versions. 30-day refund window. No tax advice.',
  alternates: { canonical: canonicalUrl('terms/') },
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-xs font-semibold uppercase tracking-widest text-moss-700 dark:text-moss-300">
          Legal
        </div>
        <h1 className="mt-3 font-display text-4xl font-medium leading-[1.1] tracking-tightest text-fg md:text-5xl">
          Terms of service
        </h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-fg-subtle">
          Effective July 1, 2026
        </p>

        <div className="mt-10 space-y-7 text-base leading-relaxed text-fg-muted">
          <section>
            <h2 className="font-display text-2xl font-medium text-fg">
              License
            </h2>
            <p className="mt-3">
              Each Solo Crate license grants you a perpetual right to use the
              version you purchased, on macOS devices controlled by you, until
              we retire that major version. Major-version upgrades are offered
              at a discount to existing customers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-fg">
              No tax advice
            </h2>
            <p className="mt-3">
              Solo Crate is a recordkeeping tool. The Schedule C mapping is a
              convenience based on IRS Form 1040 line labels; it is not tax
              advice. Always verify line assignments with your CPA before
              filing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-fg">
              Refunds
            </h2>
            <p className="mt-3">
              Within 30 days of purchase, you may request a full refund via{' '}
              <a
                href="mailto:lijialin6972@163.com"
                className="text-moss-700 underline decoration-moss-300 underline-offset-4 hover:decoration-moss-600 dark:text-moss-300 dark:decoration-moss-500 dark:hover:decoration-moss-300"
              >
                lijialin6972@163.com
              </a>
              . After 30 days, refunds are handled case-by-case at our
              discretion.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-fg">
              Warranty
            </h2>
            <p className="mt-3">
              Solo Crate is provided &quot;as is.&quot; We will use commercially
              reasonable efforts to fix bugs in the current major version.
              Because the app stores data locally, customers are responsible
              for keeping their own Time Machine backups.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
