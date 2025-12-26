import React from "react";
import {
  Cloud,
  Network,
  LifeBuoy,
  UserCheck,
  ArrowRight,
  TrendingDown,
  CheckCircle2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/* ---------- Skip Link for Accessibility ---------- */
function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-zinc-900 focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
}

/* ---------- Service Card Component ---------- */
type ServiceCardProps = {
  Icon: LucideIcon;
  title: string;
  blurb: string;
  href?: string;
  accentColor?: string;
  id?: string;
};

function ServiceCard({
  Icon,
  title,
  blurb,
  href = "/contact",
  accentColor = "red",
  id,
}: ServiceCardProps) {
  const colorClasses: Record<string, string> = {
    red: "bg-red-50 text-red-500",
    blue: "bg-blue-50 text-blue-500",
    emerald: "bg-emerald-50 text-emerald-500",
    purple: "bg-purple-50 text-purple-500",
  };

  return (
    <article
      id={id}
      className="group w-full max-w-md rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg scroll-mt-24"
    >
      <div className="mb-4 flex items-center gap-3">
        <span
          className={`rounded-xl p-3 transition-transform duration-300 group-hover:scale-110 ${colorClasses[accentColor]}`}
          aria-hidden="true"
        >
          <Icon size={28} />
        </span>
        <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
      </div>
      <p className="text-sm leading-relaxed text-zinc-600">{blurb}</p>
      <a
        href={href}
        className="mt-5 inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition-all duration-200 hover:border-zinc-400 hover:bg-zinc-50 hover:gap-3"
        aria-label={`Learn more about ${title}`}
      >
        Talk to an expert
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </article>
  );
}

/* ---------- Stat Component ---------- */
type StatProps = {
  Icon: LucideIcon;
  kpi: string;
  caption: string;
};

function Stat({ Icon, kpi, caption }: StatProps) {
  return (
    <div className="group flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white/70 p-5 shadow-sm transition-all duration-300 hover:shadow-md">
      <span
        className="rounded-xl bg-emerald-50 p-2 text-emerald-600 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        <Icon size={22} />
      </span>
      <div>
        <div className="text-xl font-semibold text-zinc-900">{kpi}</div>
        <div className="text-sm text-zinc-600">{caption}</div>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
const WhatWeDoPage = () => {
  return (
    <>
      <SkipLink />
      <main id="main-content">
        {/* Hero */}
        <section className="relative h-80 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-500"
            aria-hidden="true"
          />
          <div className="relative z-10 flex h-full items-center justify-center px-4">
            <div className="max-w-3xl text-center text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                What We Do
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
                We design, secure, and automate cloud platforms so regulated
                teams can ship faster, reduce risk, and control costs.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="container mx-auto px-4 py-16 lg:px-32 xl:px-48">
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-zinc-700">
            TheTabTech partners with leading technology providers to deliver
            pragmatic solutions across strategy, cloud infrastructure, and
            health IT. Whether you need a modernization roadmap, a secure
            landing zone, or day-2 automation, our experts meet you where you
            are and accelerate outcomes.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2">
            <ServiceCard
              id="cio-advisory"
              Icon={Network}
              title="CIO Advisory Services"
              blurb="Executive-level guidance on strategy, governance, cost control, and vendor selection—turning technology plans into measurable business results."
              accentColor="blue"
            />
            <ServiceCard
              id="cloud-devops"
              Icon={Cloud}
              title="Cloud Computing, DevOps & Automation"
              blurb="Secure landing zones, CI/CD (Tekton/GitHub Actions), infrastructure as code, and compliance automation to ship reliably at scale."
              accentColor="emerald"
            />
            <ServiceCard
              id="health-it"
              Icon={LifeBuoy}
              title="Health IT: Quality & Safety"
              blurb="Interoperability, data pipelines, and reliability engineering tailored to healthcare—improving outcomes while meeting regulatory requirements."
              accentColor="red"
            />
            <ServiceCard
              id="digital-health-support"
              Icon={UserCheck}
              title="Digital Health SME & Technical Support"
              blurb="Hands-on experts for troubleshooting, performance tuning, and on-call support across EHR integrations, APIs, and secure cloud workloads."
              accentColor="purple"
            />
          </div>

          {/* Case Studies / Results */}
          <section className="mt-20">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zinc-900">
                Selected Results
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
                Practical wins we&apos;ve delivered for regulated teams across
                cloud, DevOps, and health IT.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Stat
                Icon={TrendingDown}
                kpi="-30% cloud spend"
                caption="in 90 days via tagging, rightsizing, and S3 lifecycle policies"
              />
              <Stat
                Icon={CheckCircle2}
                kpi="99.95% uptime"
                caption="through observability, runbooks, and proactive SLO reviews"
              />
              <Stat
                Icon={ShieldCheck}
                kpi="STIG/Policy as Code"
                caption="pipeline checks + automated hardening for ATO readiness"
              />
            </div>

            {/* Case Study Card */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-white/80 to-zinc-50/80 shadow-sm">
              <div className="border-b border-zinc-200 bg-zinc-900 px-6 py-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                  Case Study
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900">
                  Healthcare Data Platform
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-600">
                  Built a secure landing zone and CI/CD for PHI workloads
                  (HIPAA). Automated backups, IAM least-privilege, and cost
                  guardrails.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    Faster releases
                  </span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                    Audit-ready
                  </span>
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                    Cost reduction
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-zinc-900 px-6 py-12 text-center">
            <h3 className="text-2xl font-bold text-white">
              Ready to accelerate your outcomes?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-zinc-400">
              Let&apos;s discuss how we can help your team ship faster and reduce
              risk.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl hover:gap-3"
              >
                Schedule a free consultation
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Prefer email?{" "}
              <a
                className="text-zinc-400 underline underline-offset-4 transition-colors hover:text-white"
                href="mailto:info@thetabtech.com"
              >
                info@thetabtech.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default WhatWeDoPage;