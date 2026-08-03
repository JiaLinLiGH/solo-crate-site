import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-moss-700 dark:text-moss-300">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-6xl font-medium tracking-tightest text-fg">
          That page is in the trash.
        </h1>
        <p className="mt-5 text-lg text-fg-muted">
          (We restore things after 30 days. In the meantime, here&apos;s home.)
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-5 py-3 text-sm font-medium text-[rgb(var(--bg))] shadow-soft transition hover:bg-ink-700 focus-ring"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
