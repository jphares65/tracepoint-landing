import type { ReactNode } from "react";

const contactEmail = "contact@tracepointhq.com";

const platformAreas = [
  {
    title: "Firearms Inventory",
    text: "Track agency firearms, assignments, custody history, issue and return activity, out-of-service status, and lifecycle records.",
  },
  {
    title: "Inspections and Maintenance",
    text: "Document inspections, recurring maintenance, reported issues, repairs, parts replacement, and return-to-service decisions.",
  },
  {
    title: "Qualifications",
    text: "Maintain current, historical, expired, failed, and upcoming qualification records across agency-defined standards.",
  },
  {
    title: "Range Day Planning",
    text: "Plan range days, schedule officers, assign drills, prepare rosters, and support efficient range-staff documentation.",
  },
  {
    title: "Officer Performance Analytics",
    text: "Identify concerning qualification trends, recurring deficiencies, remedial training needs, and unresolved performance issues.",
  },
  {
    title: "Compliance and Risk Reduction",
    text: "Surface compliance exposure, supervisory action items, missing records, overdue tasks, and audit-ready documentation.",
  },
];

const workflow = [
  "Plan",
  "Track",
  "Qualify",
  "Analyze",
  "Remediate",
  "Document",
];

const analyticsItems = [
  "Officer performance trends by drill, qualification, weapon system, and time period",
  "Recurring deficiencies that may require remediation or supervisory review",
  "Overdue inspections, maintenance issues, and unresolved firearm status concerns",
  "Compliance exposure tied to expired qualifications, missing records, or incomplete follow-up",
];

const riskItems = [
  "Current qualification status",
  "Firearms issued or out of service",
  "Inspections and maintenance due",
  "Range-day readiness",
  "Open remediation tasks",
  "Unresolved compliance alerts",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_top_left,rgba(245,158,11,0.10),transparent_28%)]" />

      <div className="relative z-10">
        <Header />
        <Hero />
        <RiskReduction />
        <PlatformAreas />
        <AnalyticsSection />
        <ProductPreview />
        <Workflow />
        <PilotAccess />
        <Footer />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <a href="#platform" aria-label="TracePoint home" className="flex items-center">
        <img
          src="/tracepoint-logo.png"
          alt="TracePoint logo"
          className="h-24 w-auto max-w-[460px] object-contain"
        />
      </a>

      <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
        <a href="#platform" className="hover:text-white">
          Platform
        </a>
        <a href="#modules" className="hover:text-white">
          Workflows
        </a>
        <a href="#analytics" className="hover:text-white">
          Analytics
        </a>
        <a href="#risk" className="hover:text-white">
          Risk Reduction
        </a>
        <a
          href={`mailto:${contactEmail}?subject=TracePoint Inquiry`}
          className="rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 font-medium text-blue-100 shadow-lg shadow-blue-950/30 hover:bg-blue-500/20"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="platform"
      className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-28 lg:pt-16"
    >
      <div>
        <div className="mb-5 inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
          Coming Soon for Law Enforcement Agencies
        </div>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Firearms Program Compliance, Accountability, and Risk Reduction.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          TracePoint is a firearms program management platform for law
          enforcement agencies. It helps agencies track firearms inventory,
          inspections and maintenance, qualifications, range-day planning, and
          officer performance analytics in one operational system.
        </p>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          The goal is simple: reduce fragmented recordkeeping, identify
          concerning trends earlier, support timely remediation, and create
          audit-ready documentation for command staff, range personnel, armorers,
          and supervisors.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${contactEmail}?subject=TracePoint Inquiry`}
            className="rounded-full bg-blue-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-xl shadow-blue-950/40 hover:bg-blue-400"
          >
            Contact TracePoint
          </a>
          <a
            href="#analytics"
            className="rounded-full border border-slate-600 px-6 py-3 text-center text-sm font-semibold text-slate-100 hover:border-slate-400 hover:bg-white/5"
          >
            Explore Analytics
          </a>
        </div>

        <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 text-sm text-slate-400">
          <Metric label="Built for" value="Law Enforcement" />
          <Metric label="Purpose" value="Compliance" />
          <Metric label="Outcome" value="Lower Risk" />
        </div>
      </div>

      <DashboardMockup />
    </section>
  );
}

function RiskReduction() {
  return (
    <section id="risk" className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Built Around the Real Firearms Program
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            One System for Inventory, Training, Maintenance, and Oversight
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Firearms compliance does not live in one record. It depends on
            accurate inventory, documented inspections, completed maintenance,
            current qualifications, well-planned range days, and supervisory
            follow-up when performance issues appear.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            TracePoint brings those workflows together so agencies can move from
            scattered tracking to structured accountability.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b1728] p-6 shadow-2xl shadow-black/30">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-100">
                Command Visibility
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Key firearms program indicators in one place
              </div>
            </div>

            <div className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200 ring-1 ring-amber-400/30">
              Risk View
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {riskItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
              >
                <div className="mb-3 h-2 w-16 rounded-full bg-blue-400/40" />
                <div className="text-sm leading-6 text-slate-300">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformAreas() {
  return (
    <section id="modules" className="border-b border-white/10 bg-[#07111f]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Platform Workflows
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Purpose-Built for Law Enforcement Firearms Programs
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            TracePoint is designed to replace fragmented spreadsheets, paper
            files, shared drives, email chains, and disconnected tracking
            systems with one organized operational record.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platformAreas.map((area) => (
            <div
              key={area.title}
              className={
                area.title === "Officer Performance Analytics"
                  ? "rounded-3xl border border-blue-400/30 bg-blue-500/10 p-6 shadow-xl shadow-blue-950/20"
                  : "rounded-3xl border border-white/10 bg-[#0b1728] p-6 shadow-xl shadow-black/20"
              }
            >
              <div
                className={
                  area.title === "Officer Performance Analytics"
                    ? "mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200 ring-1 ring-blue-400/40"
                    : "mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-200 ring-1 ring-blue-400/30"
                }
              >
                <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
              </div>
              <h3 className="text-lg font-semibold">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {area.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnalyticsSection() {
  return (
    <section id="analytics" className="border-b border-white/10 bg-white/[0.025]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Officer Performance Analytics
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Identify Concerning Trends Before They Become Bigger Problems
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            TracePoint is being designed to help agencies move beyond static
            recordkeeping. The platform can surface qualification patterns,
            recurring drill deficiencies, overdue remediation, unresolved
            inspection issues, and other indicators that require supervisory
            attention.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            The purpose is not just to store data. The purpose is to help
            agencies act on it.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b1728] p-6 shadow-2xl shadow-black/30">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-100">
                Performance Analytics Snapshot
              </div>
              <div className="mt-1 text-xs text-slate-500">
                Training, qualification, remediation, and risk indicators
              </div>
            </div>

            <div className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200 ring-1 ring-blue-400/30">
              Actionable
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {analyticsItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
              >
                <div className="mb-3 h-2 w-16 rounded-full bg-blue-400/40" />
                <div className="text-sm leading-6 text-slate-300">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
          Product Preview
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Firearms Program Data, Connected to the Workflows That Matter
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-300">
          Product visuals show how command staff, range personnel, armorers,
          and supervisors can review firearms inventory, qualification status,
          inspection exposure, range-day readiness, remediation activity, and
          unresolved operational alerts.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <ScreenshotCard title="Command Dashboard">
          <MiniCommandDashboard />
        </ScreenshotCard>

        <ScreenshotCard title="Range and Qualification Trends">
          <MiniQualificationHistory />
        </ScreenshotCard>

        <ScreenshotCard title="Compliance and Risk Alerts">
          <MiniComplianceAlerts />
        </ScreenshotCard>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Operational Workflow
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            From Firearms Records to Risk-Reducing Action
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            TracePoint connects the administrative work of firearms programs to
            the supervisory actions that reduce compliance gaps and operational
            risk.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {workflow.map((step, index) => (
            <div key={step} className="relative">
              <div className="rounded-2xl border border-white/10 bg-[#0b1728] p-5 text-center shadow-xl shadow-black/20">
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-sm font-semibold text-blue-200 ring-1 ring-blue-400/30">
                  {index + 1}
                </div>
                <div className="font-semibold">{step}</div>
              </div>

              {index < workflow.length - 1 && (
                <div className="absolute right-[-18px] top-1/2 hidden h-px w-8 bg-slate-600 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PilotAccess() {
  return (
    <section id="pilot" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-black/30 sm:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Interested in TracePoint?
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              TracePoint is currently in active development, with pilot agency
              access planned as the platform continues toward field deployment.
              Agencies interested in future demonstrations or product feedback
              opportunities may request to be contacted.
            </p>
          </div>

          <a
            href={`mailto:${contactEmail}?subject=TracePoint Inquiry`}
            className="rounded-full bg-blue-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-xl shadow-blue-950/40 hover:bg-blue-400"
          >
            Contact TracePoint
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
      TracePoint — Firearms Compliance, Accountability, and Risk Reduction for
      Law Enforcement
    </footer>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
        {label}
      </div>
      <div className="mt-2 font-semibold text-slate-100">{value}</div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-3 shadow-2xl shadow-black/40 ring-1 ring-blue-400/10">
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#091525]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="text-xs uppercase tracking-[0.22em] text-slate-500">
            TracePoint Command View
          </div>
        </div>

        <div className="grid gap-4 p-5">
          <div className="grid gap-4 sm:grid-cols-4">
            <DashboardStat label="Qualified Officers" value="92%" />
            <DashboardStat label="Firearms Issued" value="41" />
            <DashboardStat label="Inspections Due" value="12" warning />
            <DashboardStat label="Risk Alerts" value="7" danger />
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="font-semibold">
                  Qualification and Performance Trends
                </div>
                <div className="text-xs text-slate-500">Last 90 days</div>
              </div>

              <div className="space-y-3">
                <DashboardRow
                  name="Handgun Qualification"
                  value="94%"
                  status="Current"
                />
                <DashboardRow
                  name="Patrol Rifle"
                  value="86%"
                  status="Current"
                />
                <DashboardRow
                  name="Low-Light Drill"
                  value="72%"
                  status="Review"
                />
                <DashboardRow
                  name="Remediation Open"
                  value="4"
                  status="Alert"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="font-semibold">Actionable Alerts</div>
                <div className="rounded-full bg-amber-400/10 px-2 py-1 text-xs text-amber-200">
                  Action Needed
                </div>
              </div>

              <div className="space-y-3">
                <AlertRow
                  title="Recurring low-light deficiency"
                  area="Officer Performance Analytics"
                  severity="High"
                />
                <AlertRow
                  title="Qualification expiring"
                  area="Training Compliance"
                  severity="Medium"
                />
                <AlertRow
                  title="Inspection overdue"
                  area="Firearms Inventory"
                  severity="High"
                />
                <AlertRow
                  title="Maintenance follow-up open"
                  area="Armory"
                  severity="Medium"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="font-semibold">Range Day Readiness</div>
              <div className="text-xs text-slate-500">Upcoming session</div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <ProgressCard title="Roster Scheduled" value="28 / 31" />
              <ProgressCard title="Drills Assigned" value="6" />
              <ProgressCard title="Open Deficiencies" value="3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardStat({
  label,
  value,
  danger,
  warning,
}: {
  label: string;
  value: string;
  danger?: boolean;
  warning?: boolean;
}) {
  let valueClass = "mt-2 text-2xl font-semibold text-white";

  if (danger) {
    valueClass = "mt-2 text-2xl font-semibold text-red-200";
  }

  if (warning) {
    valueClass = "mt-2 text-2xl font-semibold text-amber-200";
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-xs leading-5 text-slate-500">{label}</div>
      <div className={valueClass}>{value}</div>
    </div>
  );
}

function DashboardRow({
  name,
  value,
  status,
}: {
  name: string;
  value: string;
  status: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-xl bg-slate-900/70 px-3 py-2 text-sm">
      <span className="text-slate-300">{name}</span>
      <span className="font-semibold">{value}</span>
      <StatusChip status={status} />
    </div>
  );
}

function AlertRow({
  title,
  area,
  severity,
}: {
  title: string;
  area: string;
  severity: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-medium">{title}</div>
          <div className="mt-1 text-xs text-slate-500">{area}</div>
        </div>
        <SeverityChip severity={severity} />
      </div>
    </div>
  );
}

function ScreenshotCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1728] shadow-2xl shadow-black/30">
      <div className="border-b border-white/10 px-5 py-4">
        <div className="text-sm font-semibold text-slate-100">{title}</div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function MiniCommandDashboard() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        <MiniStat label="Issued" value="41" />
        <MiniStat label="Due" value="12" />
        <MiniStat label="Alerts" value="7" />
      </div>

      <div className="h-32 rounded-2xl border border-white/10 bg-slate-950/50 p-3">
        <div className="mb-3 h-2 w-32 rounded-full bg-slate-700" />
        <div className="flex h-20 items-end gap-2">
          {[58, 72, 49, 81, 64, 76, 90].map((height, index) => (
            <div
              key={index}
              className="w-full rounded-t-md bg-blue-400/40"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniQualificationHistory() {
  const rows = [
    { officer: "Officer A.", type: "Handgun", status: "Current" },
    { officer: "Officer B.", type: "Rifle", status: "Review" },
    { officer: "Officer C.", type: "Low Light", status: "Current" },
    { officer: "Officer D.", type: "Pattern Flag", status: "Alert" },
  ];

  return (
    <div className="space-y-2">
      {rows.map((row) => (
        <div
          key={`${row.officer}-${row.type}`}
          className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl bg-slate-950/50 px-3 py-2 text-xs"
        >
          <div>
            <div className="font-medium text-slate-200">{row.officer}</div>
            <div className="mt-1 text-slate-500">{row.type}</div>
          </div>
          <StatusChip status={row.status} />
        </div>
      ))}
    </div>
  );
}

function MiniComplianceAlerts() {
  const alerts = [
    { alert: "Recurring drill deficiency", severity: "High" },
    { alert: "Expired qualification", severity: "High" },
    { alert: "Inspection overdue", severity: "High" },
    { alert: "Maintenance follow-up", severity: "Medium" },
  ];

  return (
    <div className="space-y-2">
      {alerts.map((item) => (
        <div
          key={item.alert}
          className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-950/50 px-3 py-3 text-xs"
        >
          <span className="text-slate-300">{item.alert}</span>
          <SeverityChip severity={item.severity} />
        </div>
      ))}
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-950/50 p-3">
      <div className="text-[10px] text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function ProgressCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-900/70 p-3">
      <div className="text-xs text-slate-500">{title}</div>
      <div className="mt-2 text-lg font-semibold">{value}</div>
    </div>
  );
}

function StatusChip({ status }: { status: string }) {
  let styles = "bg-red-400/10 text-red-200";

  if (status === "Current") {
    styles = "bg-emerald-400/10 text-emerald-200";
  }

  if (status === "Review") {
    styles = "bg-amber-400/10 text-amber-200";
  }

  return (
    <span
      className={`rounded-full px-2 py-1 text-[10px] font-semibold ${styles}`}
    >
      {status}
    </span>
  );
}

function SeverityChip({ severity }: { severity: string }) {
  const styles =
    severity === "High"
      ? "bg-red-400/10 text-red-200"
      : "bg-amber-400/10 text-amber-200";

  return (
    <span
      className={`rounded-full px-2 py-1 text-[10px] font-semibold ${styles}`}
    >
      {severity}
    </span>
  );
}
