import { FAQS } from '@/lib/content';

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <div className="text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-moss-700 dark:text-moss-300">
          FAQ
        </div>
        <h2 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tightest text-fg md:text-5xl">
          Answers, without the marketing layer.
        </h2>
      </div>

      <ul className="mt-14 divide-y divide-edge border-y border-edge">
        {FAQS.map(({ q, a }, i) => (
          <li key={q} className="py-6">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 focus-ring">
                <span className="font-display text-lg font-medium text-fg">
                  {q}
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
                {a}
              </p>
              <p className="mt-2 font-mono text-[10px] text-fg-subtle">
                #{String(i + 1).padStart(2, '0')}
              </p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
