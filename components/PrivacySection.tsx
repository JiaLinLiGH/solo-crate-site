export function PrivacySection() {
  return (
    <section
      id="privacy"
      className="relative overflow-hidden bg-moss-50 py-24 md:py-32 dark:bg-ink-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-moss-700 dark:text-moss-300">
              Privacy by default
            </div>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tightest text-fg md:text-5xl">
              Your receipts{' '}
              <span className="italic text-moss-700 dark:text-moss-300">never leave your Mac</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">
              No bank linking, no card credentials, no third-party processor
              reading your invoices. We are not in the data business — we are
              in the local-first business.
            </p>

            <div className="mt-10 space-y-4">
              {[
                ['Local-first by default', 'Receipts live in a sandboxed location inside your macOS user library. No server, no account.'],
                ['Sandboxed at the OS level', 'The App Sandbox is enforced and network access is disabled at the entitlement level. No upload, ever.'],
                ['Zero receipts of intent', 'Solo Crate never asks for bank credentials or transaction history.'],
                ['Audit-ready export', 'Hand your CPA a ZIP they can verify without proprietary software.'],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-4 rounded-xl border border-moss-100 bg-surface p-4 dark:border-ink-800 dark:bg-ink-900">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-moss-600 text-white">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                      <path d="M4 10l4 4 8-9" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-fg">{t}</div>
                    <div className="mt-0.5 text-sm text-fg-muted">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture diagram */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-moss-200 bg-surface p-8 shadow-lifted dark:border-ink-800 dark:bg-ink-900">
              <div className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle">
                data flow · Solo Crate v1.7.5
              </div>

              <div className="mt-6 space-y-4">
                <Layer color="moss" title="Your Mac">
                  <Row>SwiftData store (~/Library/Application Support/com.solocrate.app/)</Row>
                  <Row>OCR cache (Apple VisionKit, runs on-device)</Row>
                  <Row>Originals (PDF / JPEG, kept verbatim for audit)</Row>
                </Layer>

                <div className="flex justify-center">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-edge bg-surface text-fg-subtle">
                    <span className="font-mono text-[11px]">×</span>
                  </div>
                </div>

                <div className="rounded-xl border-2 border-dashed border-edge bg-surface-subtle p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-fg-subtle" />
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-fg">
                      The network
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-fg-muted">
                    Disabled at the entitlement level. Solo Crate opens no
                    sockets. The only outbound traffic is the App Store
                    receipt check, which Apple handles — Solo Crate
                    developers never see the bytes.
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-edge bg-surface px-3 py-1 text-[11px] text-fg-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-fg-subtle" />
                    Things Solo Crate will never do
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[11px]">
                  {['ask for bank credentials', 'sell anonymized data', 'require an account'].map((x) => (
                    <div key={x} className="rounded-md border border-edge bg-surface-subtle px-2 py-1.5 text-center text-fg-subtle line-through">
                      {x}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Layer({
  title,
  color,
  children,
}: {
  title: string;
  color: 'moss' | 'amber';
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-xl border-2 border-dashed p-4 ${
        color === 'moss'
          ? 'border-moss-200 bg-moss-50/50 dark:border-moss-800 dark:bg-moss-900/10'
          : 'border-amber-200 bg-amber-50/40 dark:border-amber-800 dark:bg-amber-900/10'
      }`}
    >
      <div className="mb-2 flex items-center gap-2">
        <span
          className={`h-2 w-2 rounded-full ${
            color === 'moss' ? 'bg-moss-600 dark:bg-moss-400' : 'bg-amber-500 dark:bg-amber-400'
          }`}
        />
        <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-fg">
          {title}
        </span>
      </div>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-surface px-2.5 py-1.5 text-xs text-fg dark:bg-ink-950/40">
      <span className="font-mono text-fg-subtle">›</span>
      {children}
    </div>
  );
}
