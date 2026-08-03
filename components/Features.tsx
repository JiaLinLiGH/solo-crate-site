import { FEATURES } from '@/lib/content';

const ICONS: Record<string, JSX.Element> = {
  import: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v12" />
      <path d="M7 11l5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  ),
  ocr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16v12H4z" />
      <path d="M8 10h2" />
      <path d="M14 10h2" />
      <path d="M8 14h8" />
      <path d="M9 18l-1 2" />
      <path d="M15 18l1 2" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="6" />
      <path d="M16 16l5 5" />
    </svg>
  ),
  tags: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12V4h8l10 10-8 8z" />
      <circle cx="8" cy="8" r="1.4" />
    </svg>
  ),
  rules: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8 7.5l8 9" />
      <path d="M8.5 6H15.5" />
    </svg>
  ),
  trash: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16" />
      <path d="M9 7V4h6v3" />
      <path d="M6 7l1 13h10l1-13" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  ),
  export: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h7l2 2h7v12H4z" />
      <path d="M9 13l3 3 3-3" />
      <path d="M12 9v7" />
    </svg>
  ),
  local: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1z" />
    </svg>
  ),
};

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-widest text-moss-700 dark:text-moss-300">
          Features
        </div>
        <h2 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tightest text-fg md:text-5xl">
          A receipt manager that{' '}
          <span className="italic text-moss-700 dark:text-moss-300">stays out of your way</span>.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-fg-muted">
          Solo Crate starts from the Mac — with keyboard shortcuts, drag-and-drop,
          multi-select, and a data model that respects how freelancers actually
          keep books. No monthly fee, no upload, no account.
        </p>
      </div>

      <ul className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <li
            key={f.title}
            className="group relative flex flex-col gap-3 bg-[rgb(var(--bg))] p-7 transition hover:bg-moss-50/50 dark:hover:bg-moss-900/20"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 text-[rgb(var(--bg))]">
              <div className="h-5 w-5">{ICONS[f.icon]}</div>
            </div>
            <h3 className="font-display text-lg font-medium text-fg">
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed text-fg-muted">
              {f.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
