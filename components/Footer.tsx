import Link from 'next/link';
import { SITE } from '@/lib/content';

const linkGroups = [
  {
    title: 'Product',
    links: [
      { href: '/#features', label: 'Features' },
      { href: '/#schedule-c', label: 'Schedule C' },
      { href: '/#privacy', label: 'Privacy' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/changelog', label: 'Changelog' },
      { href: '/faq', label: 'FAQ' },
      { href: SITE.supportUrl, label: 'Support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/terms', label: 'Terms of service' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-edge bg-[rgb(var(--bg))]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink-900 text-[rgb(var(--bg))]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M4 4h12l4 4v12H4z" />
                  <path d="M8 9h8" />
                  <path d="M8 13h8" />
                  <path d="M8 17h5" />
                </svg>
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-fg">
                {SITE.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
              A Mac-native receipt manager. Drag in a receipt, Apple Vision
              reads it locally, tags auto-apply, export a clean bundle. $49.99
              once, 14-day free trial.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-fg-muted transition hover:text-fg"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-edge pt-8 text-sm text-fg-subtle md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Made on a Mac.
          </p>
          <p className="font-mono text-xs">
            v1.7.5 · build 2026.07
          </p>
        </div>
      </div>
    </footer>
  );
}
