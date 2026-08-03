export function ExportSection() {
  const files = [
    { name: 'manifest.csv', kind: 'csv', note: 'one row per receipt with parsed fields' },
    { name: 'summary.csv', kind: 'csv', note: 'tag totals + receipt counts' },
    { name: 'receipts/', kind: 'dir', note: '41 original PDFs and JPEGs' },
    { name: 'audit_notes.md', kind: 'md', note: 'human-readable summary for your CPA' },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid items-start gap-16 lg:grid-cols-2">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-300">
            CPA-ready export
          </div>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tightest text-fg md:text-5xl">
            Hand your accountant{' '}
            <span className="italic text-amber-700 dark:text-amber-300">one ZIP</span>, not 47 emails.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-fg-muted">
            Click "Export tax year 2026" and Solo Crate builds a self-contained
            ZIP: every original PDF + a manifest.csv with Schedule C line
            assignments + an audit_notes.md that explains the reasoning. Your
            CPA opens it in Excel or any editor. No proprietary viewer.
          </p>

          <ul className="mt-10 space-y-3 text-sm">
            {[
              ['PDF + JPEG originals', 'Verbatim copies, sorted by month. Verifiable in any reader.'],
              ['manifest.csv', 'One row per receipt with vendor, date, amount, tags, confidence score.'],
              ['Confidence scores inline', 'Your CPA sees which OCR reads were reviewed vs auto-accepted.'],
              ['Any tax year', '2022 through today — useful when you amend or compare years.'],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500 dark:bg-amber-400" />
                <div>
                  <div className="font-medium text-fg">{t}</div>
                  <div className="text-fg-muted">{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-edge bg-surface-subtle shadow-lifted">
          <div className="flex items-center justify-between border-b border-edge bg-surface-muted px-5 py-3">
            <div className="flex items-center gap-2 font-mono text-xs text-fg-muted">
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 text-amber-600 dark:text-amber-400">
                <path d="M2 3h12v10H2z" opacity=".2" />
                <path d="M8 5v6m-3-3l3-3 3 3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              solo-crate-export-2026.zip
            </div>
            <span className="font-mono text-[10px] text-fg-subtle">2.3 MB · 47 files</span>
          </div>

          <ul className="divide-y divide-edge font-mono text-xs">
            {files.map((f) => (
              <li
                key={f.name}
                className="flex items-center gap-3 px-5 py-2.5 transition hover:bg-surface"
              >
                <span className="text-base">
                  {f.kind === 'dir' ? '📁' : f.kind === 'csv' ? '📄' : '📝'}
                </span>
                <span className="min-w-0 flex-1 truncate text-fg">{f.name}</span>
                <span className="truncate text-[10px] text-fg-subtle">{f.note}</span>
              </li>
            ))}
            {['receipts/01_jan', 'receipts/02_feb', '…', 'receipts/12_dec'].map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 px-5 py-2 pl-10 transition hover:bg-surface"
              >
                <span className="text-base">📁</span>
                <span className="min-w-0 flex-1 truncate text-fg-muted">{p}</span>
                <span className="font-mono text-[10px] text-fg-subtle">
                  {p.includes('…') ? '—' : `${Math.floor(Math.random() * 9 + 2)} files`}
                </span>
              </li>
            ))}
          </ul>

          <div className="border-t border-edge bg-surface px-5 py-3 text-[11px] text-fg-muted">
            Exported 14 seconds ago from a Core Data store containing{' '}
            <span className="font-mono text-fg">247 receipts</span>{' '}
            across 2026.
          </div>
        </div>
      </div>
    </section>
  );
}
