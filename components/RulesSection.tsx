import { RULES_EXAMPLES } from '@/lib/content';

export function RulesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-moss-700 dark:text-moss-300">
            Rules
          </div>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tightest text-fg md:text-5xl">
            One rule per year. Reuse it{' '}
            <span className="italic text-moss-700 dark:text-moss-300">forever</span>.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-fg-muted">
            Categories drift. Contractors switch software. The IRS quietly
            edits a deduction rule. With year-bound rules you write the rule
            once for 2026, and in 2027 you fork it instead of starting over.
            Every invoice gets re-evaluated the moment you save — no batch
            jobs, no waiting.
          </p>

          <ul className="mt-10 space-y-3 text-sm">
            {RULES_EXAMPLES.map((r) => (
              <li
                key={r.title}
                className="flex items-start gap-4 rounded-xl border border-edge bg-[rgb(var(--bg))] p-4 shadow-soft"
              >
                <span
                  className={`mt-0.5 inline-flex h-5 items-center rounded-full px-2 text-[10px] font-semibold uppercase tracking-wide ${
                    r.color === 'moss'
                      ? 'bg-moss-100 text-moss-800 dark:bg-moss-900/40 dark:text-moss-200'
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'
                  }`}
                >
                  {r.result}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-fg">{r.title}</div>
                  <div className="mt-1 truncate font-mono text-xs text-fg-muted">
                    {r.expression}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Boolean tree visual */}
        <div className="rounded-2xl border border-edge bg-surface p-8 shadow-lifted">
          <div className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle">
            Rule · "Software & services"
          </div>

          <div className="mt-6 space-y-3 font-mono text-sm">
            <Node label="ALL of" tone="and">
              <Node label="ANY of" tone="or">
                <Leaf tone="moss">tag = "software"</Leaf>
                <Leaf tone="moss">tag = "domain"</Leaf>
                <Leaf tone="moss">tag = "hosting"</Leaf>
                <Leaf tone="moss">tag = "saas"</Leaf>
              </Node>
            </Node>
            <Node label="NONE of" tone="not">
              <Leaf tone="amber">tag = "personal"</Leaf>
              <Leaf tone="amber">tag = "reimbursable"</Leaf>
            </Node>
          </div>

          <div className="mt-7 border-t border-edge pt-5">
            <div className="text-xs text-fg-muted">
              <span className="font-semibold text-fg">→ Action:</span>{' '}
              apply tags{' '}
              <span className="rounded bg-moss-100 px-1.5 py-0.5 font-mono text-[11px] text-moss-700 dark:bg-moss-900/40 dark:text-moss-200">
                software
              </span>
              {' '}+{' '}
              <span className="rounded bg-moss-100 px-1.5 py-0.5 font-mono text-[11px] text-moss-700 dark:bg-moss-900/40 dark:text-moss-200">
                design-tools
              </span>
            </div>
            <div className="mt-2 text-xs text-fg-muted">
              <span className="font-semibold text-fg">→ Matches:</span>{' '}
              22 receipts · $3,184.00 across 2026
            </div>
          </div>

          <button className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-edge-strong px-3 py-2 text-xs text-fg-muted transition hover:border-fg-subtle hover:text-fg">
            <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M10 4v12" />
              <path d="M4 10h12" />
            </svg>
            Add condition
          </button>
        </div>
      </div>
    </section>
  );
}

function Node({
  label,
  tone,
  children,
}: {
  label: string;
  tone: 'and' | 'or' | 'not';
  children: React.ReactNode;
}) {
  const toneClass =
    tone === 'and'
      ? 'bg-ink-900 text-[rgb(var(--bg))]'
      : tone === 'or'
      ? 'bg-moss-700 text-moss-50'
      : 'bg-amber-600 text-amber-50';
  return (
    <div className="rounded-lg border border-edge bg-surface-muted px-3 py-3">
      <div className="mb-3 flex items-center gap-2">
        <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${toneClass}`}>
          {label}
        </span>
      </div>
      <div className="space-y-1.5 pl-3">{children}</div>
    </div>
  );
}

function Leaf({ children, tone }: { children: React.ReactNode; tone: 'moss' | 'amber' }) {
  return (
    <div
      className={`flex items-center gap-2 rounded border px-2 py-1 text-[12px] ${
        tone === 'moss'
          ? 'border-moss-200 bg-moss-50 text-moss-800 dark:border-moss-700 dark:bg-moss-900/30 dark:text-moss-100'
          : 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-100'
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${tone === 'moss' ? 'bg-moss-600 dark:bg-moss-300' : 'bg-amber-600 dark:bg-amber-300'}`}
      />
      {children}
    </div>
  );
}
