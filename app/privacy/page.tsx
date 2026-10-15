import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { canonicalUrl } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description:
    'Solo Crate privacy policy. Local-first storage, no bank linking, no telemetry, no upload — ever.',
  alternates: { canonical: canonicalUrl('privacy/') },
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-xs font-semibold uppercase tracking-widest text-moss-700 dark:text-moss-300">
          Legal
        </div>
        <h1 className="mt-3 font-display text-4xl font-medium leading-[1.1] tracking-tightest text-fg md:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-fg-subtle">
          Effective August 3, 2026
        </p>

        <div className="mt-10 max-w-none space-y-7 text-base leading-relaxed text-fg-muted">
          <section>
            <h2 className="font-display text-2xl font-medium text-fg">
              1. What data Solo Crate handles
            </h2>
            <p className="mt-3">
              Solo Crate stores the contents of the receipts, invoices, and tax
              documents you add to the app (PDFs, JPEGs, OCR&apos;d text, tags,
              tag-to-Schedule-C-line assignments, and amount fields) inside
              your local user library. The data never leaves your Mac. There
              is no cloud sync and no remote backup.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-fg">
              2. Local-first by design
            </h2>
            <p className="mt-3">
              The on-disk store lives at{' '}
              <code className="rounded bg-surface-muted px-1.5 py-0.5 font-mono text-sm text-fg">
                ~/Library/Application Support/com.solocrate.app/
              </code>{' '}
              and is sandboxed per-macOS-user. We do not operate any servers
              that store or process your receipts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-fg">
              3. We do not collect
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Bank credentials, Plaid tokens, or card numbers</li>
              <li>OCR text or schedule assignments</li>
              <li>Identifiers tied to specific invoices</li>
              <li>Advertising identifiers</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-fg">
              4. Contact
            </h2>
            <p className="mt-3">
              Questions about this policy:{' '}
              <a
                href="mailto:lijialin6972@163.com"
                className="text-moss-700 underline decoration-moss-300 underline-offset-4 hover:decoration-moss-600 dark:text-moss-300 dark:decoration-moss-500 dark:hover:decoration-moss-300"
              >
                lijialin6972@163.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
