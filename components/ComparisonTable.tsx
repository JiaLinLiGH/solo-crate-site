import { COMPETITORS } from '@/lib/content';

export function ComparisonTable() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-widest text-moss-700 dark:text-moss-300">
          Comparison
        </div>
        <h2 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tightest text-fg md:text-5xl">
          Mac-native vs everywhere-else.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-fg-muted">
          Most receipt apps started as iOS toys — your expense data ends up
          hosted on someone else&apos;s infrastructure, billed monthly.
          Solo Crate is built desktop-first.
        </p>
      </div>

      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[640px] border-separate border-spacing-0 text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-widest text-fg-subtle">
              <th className="border-b border-edge-strong px-4 py-3 text-left font-semibold">App</th>
              <th className="border-b border-edge-strong px-4 py-3 text-left font-semibold">Price</th>
              <th className="border-b border-edge-strong px-4 py-3 text-left font-semibold">Platform</th>
              <th className="border-b border-edge-strong px-4 py-3 text-left font-semibold">Billing</th>
              <th className="border-b border-edge-strong px-4 py-3 text-left font-semibold">Storage</th>
              <th className="border-b border-edge-strong px-4 py-3 text-left font-semibold">OCR</th>
              <th className="border-b border-edge-strong px-4 py-3 text-left font-semibold">Tags</th>
            </tr>
          </thead>
          <tbody>
            {COMPETITORS.map((c, idx) => {
              const isUs = c.name === 'Solo Crate';
              return (
                <tr
                  key={c.name}
                  className={
                    isUs
                      ? 'bg-moss-50/70 dark:bg-moss-900/20'
                      : idx % 2 === 0
                      ? 'bg-surface'
                      : 'bg-surface-subtle'
                  }
                >
                  <td className="border-b border-edge px-4 py-3 font-medium text-fg">
                    <span className="flex items-center gap-2">
                      {isUs && (
                        <span className="rounded-full bg-moss-700 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                          us
                        </span>
                      )}
                      {c.name}
                    </span>
                  </td>
                  <td
                    className={`border-b border-edge px-4 py-3 ${
                      isUs ? 'font-semibold text-moss-700 dark:text-moss-300' : 'text-fg'
                    }`}
                  >
                    {c.price}
                  </td>
                  <td className="border-b border-edge px-4 py-3 text-fg-muted">{c.platform}</td>
                  <td className="border-b border-edge px-4 py-3 text-fg-muted">{c.billing}</td>
                  <td className="border-b border-edge px-4 py-3 text-fg-muted">{c.storage}</td>
                  <td className="border-b border-edge px-4 py-3 text-fg-muted">{c.ocr}</td>
                  <td className="border-b border-edge px-4 py-3 text-fg-muted">{c.tags}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-fg-subtle">
        Pricing data verified from each vendor&apos;s public pricing page on{' '}
        {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.
        Independent comparisons — no affiliate relationships.
      </p>
    </section>
  );
}
