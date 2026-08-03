import { SCHEDULE_C_LINES } from '@/lib/content';

export function ScheduleCSection() {
  const total = SCHEDULE_C_LINES.reduce((s, l) => s + l.amount, 0);

  return (
    <section
      id="schedule-c"
      className="relative bg-ink-900 py-24 text-[rgb(var(--bg))] md:py-32 dark:bg-ink-950"
    >
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute -left-32 top-12 h-72 w-72 rounded-full bg-moss-500/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-moss-300">
              Tax-time exports
            </div>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tightest md:text-5xl">
              A clean bundle,{' '}
              <span className="italic text-moss-300">ready for your CPA</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">
              Click "Export tax year 2026" and Solo Crate builds a
              self-contained ZIP: every original PDF plus a manifest.csv that
              your CPA can open in Excel or any spreadsheet. If you file
              Schedule C, the workbook lines up with the IRS line items.
            </p>

            <div className="mt-10 space-y-4 text-sm text-fg-muted">
              <Point>
                <strong>Four formats.</strong> Workbook ZIP, single .xlsx,
                Receipt Bundle ZIP with every original PDF, or a PDF summary.
                Each one opens in something your CPA already has.
              </Point>
              <Point>
                <strong>Confidence scores inline.</strong> Your CPA sees which
                OCR reads you reviewed and which were auto-accepted.
              </Point>
              <Point>
                <strong>Any tax year.</strong> 2022 through today — useful
                when you amend a return or compare years.
              </Point>
            </div>
          </div>

          {/* IRS form mock */}
          <div className="rounded-2xl border border-ink-700 bg-[#131311] shadow-lifted dark:bg-ink-900">
            <div className="flex items-center justify-between border-b border-ink-700 px-5 py-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-300">
                Solo Crate · Tax Year 2026
              </div>
              <span className="rounded-full bg-moss-800 px-2 py-0.5 font-mono text-[10px] text-moss-200">
                ready
              </span>
            </div>

            <table className="w-full font-mono text-xs">
              <thead>
                <tr className="border-b border-ink-700/60 text-left text-[10px] uppercase tracking-widest text-ink-300">
                  <th className="w-12 px-5 py-3 text-right">Line</th>
                  <th className="px-3 py-3">Expense</th>
                  <th className="px-5 py-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE_C_LINES.map((row) => (
                  <tr
                    key={row.line}
                    className="border-b border-ink-700/40 text-fg-muted last:border-b-0"
                  >
                    <td className="px-5 py-2.5 text-right text-ink-300">
                      {row.line}
                    </td>
                    <td className="px-3 py-2.5">{row.label}</td>
                    <td className="px-5 py-2.5 text-right">
                      {row.amount === 0 ? (
                        <span className="text-fg-subtle">—</span>
                      ) : (
                        row.amount.toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="bg-moss-900/40 font-medium text-moss-100">
                  <td className="px-5 py-3 text-right">·</td>
                  <td className="px-3 py-3 uppercase tracking-wide">
                    Total
                  </td>
                  <td className="px-5 py-3 text-right">
                    {total.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="border-t border-ink-700/60 px-5 py-3 text-[10px] text-ink-300">
              Source: 41 receipts tagged across 2026 · generated 14 seconds ago
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Point({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <svg
        viewBox="0 0 20 20"
        className="mt-1 h-4 w-4 shrink-0 text-moss-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 10l4 4 8-9" />
      </svg>
      <p>{children}</p>
    </div>
  );
}
