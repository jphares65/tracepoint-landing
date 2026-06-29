import Image from "next/image";

const LOGO_SRC = "/tracepoint-logo.png";

const DEMO_EMAIL =
  "mailto:contact@tracepointhq.com?subject=TracePoint%20Demo%20Request";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b1117] text-[#f8fafc]">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center" aria-label="TracePoint home">
          <Image
            src={LOGO_SRC}
            alt="TracePoint"
            width={300}
            height={90}
            priority
            className="h-14 w-auto md:h-16"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a href="#platform" className="transition hover:text-white">
            Platform
          </a>
          <a href="#purpose" className="transition hover:text-white">
            Purpose
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-[#d89b2b]">
            Firearms · Training · Compliance
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-7xl">
            Know what is current, overdue, and at risk.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            TracePoint is an operational accountability platform for law
            enforcement agencies managing firearms, qualifications, inspections,
            training records, and compliance-sensitive workflows.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={DEMO_EMAIL}
              className="inline-flex w-fit items-center justify-center rounded-md bg-[#d89b2b] px-5 py-3 text-sm font-semibold text-[#0b1117] transition hover:bg-[#e8ad43]"
            >
              Request a Demo
            </a>

            <a
              href="mailto:contact@tracepointhq.com"
              className="inline-flex w-fit items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30"
            >
              contact@tracepointhq.com
            </a>
          </div>
        </div>
      </section>

      {/* Platform */}
      <section id="platform" className="border-y border-white/10 bg-[#0f1720]">
        <div className="mx-auto grid max-w-6xl gap-0 px-6 md:grid-cols-3">
          <div className="border-b border-white/10 py-10 md:border-b-0 md:border-r md:pr-10">
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Qualifications
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Track officer qualification status, upcoming expirations, failures,
              remedial needs, and historical records.
            </p>
          </div>

          <div className="border-b border-white/10 py-10 md:border-b-0 md:border-r md:px-10">
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Firearms
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Maintain inventory, assignments, inspections, maintenance history,
              custody changes, and lifecycle documentation.
            </p>
          </div>

          <div className="py-10 md:pl-10">
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Analytics & Accountability
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Surface overdue items, documentation gaps, qualification trends,
              and operational risks before they become compliance problems.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section id="purpose" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[#d89b2b]">
              Purpose-built
            </p>

            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              Designed around the records agencies already need to defend.
            </h2>
          </div>

          <div className="space-y-8 text-slate-300">
            <p className="text-lg leading-8">
              Agencies should not have to rely on spreadsheets, shared folders,
              paper packets, and memory to manage operational readiness.
            </p>

            <p className="text-lg leading-8">
              TracePoint brings firearms, qualifications, training activity,
              inspections, analytics, and compliance follow-up into one system
              so command, training, and armory personnel can see what needs
              attention.
            </p>

            <div className="border-t border-white/10 pt-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                Currently accepting pilot agencies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 bg-[#0f1720]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white md:text-5xl">
              See if TracePoint fits your agency.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              TracePoint is being developed with direct law enforcement workflow
              input and is currently preparing for pilot agency use.
            </p>

            <div className="mt-8">
              <a
                href={DEMO_EMAIL}
                className="inline-flex rounded-md bg-[#d89b2b] px-5 py-3 text-sm font-semibold text-[#0b1117] transition hover:bg-[#e8ad43]"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} TracePoint</div>

          <a
            href="mailto:contact@tracepointhq.com"
            className="transition hover:text-slate-300"
          >
            contact@tracepointhq.com
          </a>
        </div>
      </footer>
    </main>
  );
}