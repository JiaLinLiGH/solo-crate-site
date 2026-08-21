const STEPS = [
  {
    n: '01',
    title: 'Drop receipts in',
    description:
      'Drag PDFs from Finder, snap photos of paper receipts, or forward email attachments. Apple Vision OCR runs on-device; no uploads.',
    chip: '30 seconds per receipt',
  },
  {
    n: '02',
    title: 'Tag once',
    description:
      'Add tags like software, travel, meals, vehicle. Multi-select invoices and apply tags in batch — no more clicking through 40 records.',
    chip: '5 keyboard shortcuts',
  },
  {
    n: '03',
    title: 'Let rules do the tagging',
    description:
      'Write a Boolean rule once and Solo Crate re-applies it across the entire library the moment you save. No batch jobs, no waiting.',
    chip: '1 rule · full library',
  },
  {
    n: '04',
    title: 'Hand over a clean ZIP',
    description:
      'Click "Export tax year 2026." You get one ZIP with every original PDF plus a manifest.csv anyone can open in Excel.',
    chip: '1 click · 1 ZIP',
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="border-y border-edge bg-surface-muted py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-moss-700 dark:text-moss-300">
            How it works
          </div>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tightest text-fg md:text-5xl">
            Four steps.{' '}
            <span className="italic text-moss-700 dark:text-moss-300">Most of them feel like nothing</span>.
          </h2>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="relative flex flex-col rounded-2xl border border-edge bg-surface p-7 shadow-soft"
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                Step {s.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-medium text-fg">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                {s.description}
              </p>
              <span className="mt-5 inline-flex w-fit rounded-full bg-moss-50 px-2.5 py-1 font-mono text-[11px] text-moss-700 dark:bg-moss-900/30 dark:text-moss-200">
                {s.chip}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
