import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f1720] text-white">
      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 text-sm font-bold tracking-wide text-[#f59e0b]">
            TP
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight">TracePoint</div>
            <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
              Operational Accountability
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#product" className="hover:text-white">Product</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 text-center md:pt-24">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-[#f59e0b]">
          Built for Law Enforcement Agencies
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
          Operational Accountability for Law Enforcement
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
          Manage firearms, qualifications, training, inspections, and compliance
          in one secure platform built specifically for law enforcement agencies.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="mailto:contact@tracepointhq.com?subject=TracePoint Demo Request"
            className="rounded-md bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#fbbf24]"
          >
            Request a Demo
          </Link>

          <Link
            href="mailto:contact@tracepointhq.com?subject=TracePoint Early Access"
            className="rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Join Early Access
          </Link>
        </div>

        {/* Product preview */}
        <div className="mx-auto mt-16 max-w-5xl rounded-xl border border-white/10 bg-[#111c2a] p-3 shadow-2xl shadow-black/30">
          <div className="rounded-lg border border-white/10 bg-[#0b111a] p-6 text-left">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-sm font-semibold text-white">
                  Agency Readiness Dashboard
                </div>
                <div className="text-xs text-slate-400">
                  Qualifications · Firearms · Inspections · Compliance
                </div>
              </div>
              <div className="rounded-md bg-[#f59e0b]/15 px-3 py-1 text-xs font-medium text-[#f59e0b]">
                Live Overview
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {[
                ["Qualified", "92%", "Current personnel"],
                ["Overdue", "4", "Require attention"],
                ["Inspections", "11", "Due this month"],
                ["Firearms", "128", "Tracked assets"],
              ].map(([label, value, detail]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs text-slate-400">{label}</div>
                  <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
                  <div className="mt-1 text-xs text-slate-500">{detail}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-3 text-sm font-medium text-white">Items Requiring Action</div>
              <div className="space-y-3">
                {[
                  "Quarterly firearm inspection due",
                  "Officer qualification approaching expiration",
                  "Maintenance record awaiting review",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-md border border-white/10 bg-[#0f1720] px-4 py-3 text-sm"
                  >
                    <span className="text-slate-300">{item}</span>
                    <span className="text-xs text-[#f59e0b]">Review</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform */}
      <section id="product" className="border-t border-white/10 bg-[#111827]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              One Platform. Complete Visibility.
            </h2>
            <p className="mt-4 text-slate-300">
              TracePoint gives agencies a clear operational picture without
              relying on spreadsheets, disconnected files, or manual reminders.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              [
                "Training",
                "Track qualifications, drills, certifications, and officer readiness.",
              ],
              [
                "Armory",
                "Manage firearm assignments, inspections, maintenance, and lifecycle history.",
              ],
              [
                "Compliance",
                "Surface overdue qualifications, inspection requirements, and operational risks before they become liabilities.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="about" className="bg-[#0f1720]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Built for Agencies That Demand Accountability
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                TracePoint is purpose-built for the operational realities of law
                enforcement: readiness, documentation, equipment control, and
                defensible compliance.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Built by Law Enforcement", "Designed by someone who understands agency operations."],
                ["Operational Focus", "Created for firearms, training, readiness, and accountability."],
                ["Modern Platform", "Cloud-based, secure, and built for practical daily use."],
                ["Actionable Insights", "Know what needs attention before it becomes a problem."],
              ].map(([title, body]) => (
                <div key={title} className="border-t border-white/10 pt-5">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-white/10 bg-[#111827]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to See TracePoint?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            See how TracePoint helps agencies replace spreadsheets and disconnected
            records with a modern operational accountability platform.
          </p>

          <div className="mt-8">
            <Link
              href="mailto:contact@tracepointhq.com?subject=TracePoint Demo Request"
              className="inline-flex rounded-md bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#fbbf24]"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0b111a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} TracePoint. All rights reserved.</div>
          <a href="mailto:contact@tracepointhq.com" className="hover:text-white">
            contact@tracepointhq.com
          </a>
        </div>
      </footer>
    </main>
  );
}