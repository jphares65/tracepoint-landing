const demoHref =
  "mailto:contact@tracepointhq.com?subject=TracePoint%20Demo%20Request";

const earlyAccessHref =
  "mailto:contact@tracepointhq.com?subject=TracePoint%20Early%20Access";

const platformAreas = [
  {
    title: "Training",
    body: "Track qualifications, drills, certifications, and officer readiness without relying on disconnected records.",
  },
  {
    title: "Armory",
    body: "Manage firearm assignments, inspections, maintenance, custody history, and lifecycle documentation.",
  },
  {
    title: "Compliance",
    body: "Identify overdue items, pending inspections, and documentation gaps before they become liability issues.",
  },
];

const trustPoints = [
  {
    title: "Built around agency workflows",
    body: "Designed for the operational realities of law enforcement, not adapted from generic business software.",
  },
  {
    title: "One source of truth",
    body: "Bring firearms, training, inspections, and readiness records into a single operational system.",
  },
  {
    title: "Action before exposure",
    body: "Surface what needs attention so supervisors can address issues before they become problems.",
  },
  {
    title: "Audit-ready records",
    body: "Maintain clear documentation for qualifications, equipment, inspections, and compliance review.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f1720] text-white">
      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-3" aria-label="TracePoint home">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] text-sm font-bold tracking-wide text-[#f59e0b]">
            TP
          </div>

          <div>
            <div className="text-lg font-semibold tracking-tight">TracePoint</div>
            <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
              Operational Accountability
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#product">
            Product
          </a>
          <a className="transition hover:text-white" href="#why">
            Why TracePoint
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-14 text-center md:pb-24 md:pt-20">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f59e0b]">
          Currently accepting pilot agencies
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white md:text-7xl">
          Operational accountability for law enforcement.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
          TracePoint helps agencies manage firearms, qualifications, training,
          inspections, and compliance from one secure operational platform.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={demoHref}
            className="inline-flex rounded-md bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#fbbf24]"
          >
            Request a Demo
          </a>

          <a
            href={earlyAccessHref}
            className="inline-flex rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.04]"
          >
            Join Early Access
          </a>
        </div>

        {/* Product Preview */}
        <div className="mx-auto mt-16 max-w-5xl rounded-xl border border-white/10 bg-[#111827] p-3 shadow-2xl shadow-black/25">
          <div className="rounded-lg border border-white/10 bg-[#0b111a] text-left">
            <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-white">
                  Agency Readiness Overview
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  Qualifications · Firearms · Inspections · Action Items
                </div>
              </div>

              <div className="w-fit rounded-md border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-3 py-1 text-xs font-medium text-[#f59e0b]">
                Command View
              </div>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              <div className="bg-[#0b111a] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Current Qualifications
                </div>
                <div className="mt-3 text-4xl font-semibold tracking-tight text-white">
                  92%
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  Personnel currently qualified
                </div>
              </div>

              <div className="bg-[#0b111a] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Open Action Items
                </div>
                <div className="mt-3 text-4xl font-semibold tracking-tight text-white">
                  4
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  Require supervisor review
                </div>
              </div>

              <div className="bg-[#0b111a] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Firearms Tracked
                </div>
                <div className="mt-3 text-4xl font-semibold tracking-tight text-white">
                  128
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  Inventory and assignment records
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="mb-3 text-sm font-medium text-white">
                Items Requiring Attention
              </div>

              <div className="divide-y divide-white/10 rounded-lg border border-white/10">
                {[
                  "Quarterly firearm inspection due",
                  "Qualification approaching expiration",
                  "Maintenance record awaiting review",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-4 px-4 py-3 text-sm"
                  >
                    <span className="text-slate-300">{item}</span>
                    <span className="shrink-0 text-xs font-medium text-[#f59e0b]">
                      Review
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="border-t border-white/10 bg-[#111827]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              One platform. Complete visibility.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              TracePoint gives agencies a clearer operational picture by
              connecting the records, equipment, training, and compliance items
              supervisors already manage every day.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {platformAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="bg-[#0f1720]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                Built for agencies that demand accountability.
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                TracePoint is designed to reduce uncertainty around readiness,
                documentation, equipment control, and compliance-sensitive
                workflows.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point.title} className="border-t border-white/10 pt-5">
                  <h3 className="font-semibold text-white">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-white/10 bg-[#111827]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            See TracePoint in action.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Replace scattered spreadsheets and disconnected records with a
            focused operational accountability platform built for law
            enforcement agencies.
          </p>

          <div className="mt-8">
            <a
              href={demoHref}
              className="inline-flex rounded-md bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#fbbf24]"
            >
              Request a Demo
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Or email{" "}
            <a
              href="mailto:contact@tracepointhq.com"
              className="text-slate-300 transition hover:text-white"
            >
              contact@tracepointhq.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0b111a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} TracePoint. All rights reserved.</div>

          <div className="text-slate-400">Operational Accountability</div>
        </div>
      </footer>
    </main>
  );
}