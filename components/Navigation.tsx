import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/lib/content';
import { ThemeToggle } from '@/components/ThemeProvider';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-[rgb(var(--bg))]/80 backdrop-blur supports-[backdrop-filter]:bg-[rgb(var(--bg))]/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 focus-ring">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink-900 text-[rgb(var(--bg))] shadow-soft">
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
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-fg-muted transition hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
