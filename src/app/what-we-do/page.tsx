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
  type LucideIcon, // ✅ use Lucide's icon type
} from "lucide-react";

type ServiceCardProps = {
  Icon: LucideIcon;
  title: string;
  blurb: string;
  href?: string;
};

function ServiceCard({ Icon, title, blurb, href = "/contact" }: ServiceCardProps) {
  return (
    <article className="group w-full max-w-md rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-xl bg-red-50 p-3 text-red-500" aria-hidden="true">
          <Icon size={28} />
        </span>
        <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
      </div>
      <p className="text-sm leading-relaxed text-zinc-600">{blurb}</p>
      <a
        href={href}
        className="mt-5 inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
        aria-label={`Learn more about ${title}`}
      >
        Talk to an expert
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </article>
  );
}

type StatProps = {
  Icon: LucideIcon;
  kpi: string;
  caption: string;
};

function Stat({ Icon, kpi, caption }: StatProps) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white/70 p-5 shadow-sm">
      <span className="rounded-xl bg-emerald-50 p-2 text-emerald-600" aria-hidden="true">
        <Icon size={22} />
      </span>
      <div>
        <div className="text-xl font-semibold text-zinc-900">{kpi}</div>
        <div className="text-sm text-zinc-600">{caption}</div>
      </div>
    </div>
  );
}

const WhatWeDoPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-500" aria-hidden="true" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight">What we do</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90 md:text-base">
              We design, secure, and automate cloud platforms so regulated teams can ship faster,
              reduce risk, and control costs.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-4 py-12 lg:px-48">
        <p className="mx-auto mb-10 max-w-3xl text-zinc-700">
          theTabTech partners with leading technology providers to deliver pragmatic solutions across
          strategy, cloud infrastructure, and health IT. Whether you need a modernization roadmap, a
          secure landing zone, or day-2 automation, our experts meet you where you are and accelerate
          outcomes.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2">
          <ServiceCard
            Icon={Network}
            title="CIO Advisory Services"
            blurb="Executive-level guidance on strategy, governance, cost control, and vendor selection—turning technology plans into measurable business results."
          />
          <ServiceCard
            Icon={Cloud}
            title="Cloud Computing, DevOps & Automation"
            blurb="Secure landing zones, CI/CD (Tekton/GitHub Actions), infrastructure as code, and compliance automation to ship reliably at scale."
          />
          <ServiceCard
            Icon={LifeBuoy}
            title="Health IT: Quality & Safety"
            blurb="Interoperability, data pipelines, and reliability engineering tailored to healthcare—improving outcomes while meeting regulatory requirements."
          />
          <ServiceCard
            Icon={UserCheck}
            title="Digital Health SME & Technical Support"
            blurb="Hands-on experts for troubleshooting, performance tuning, and on-call support across EHR integrations, APIs, and secure cloud workloads."
          />
        </div>

        {/* Case Studies / Results */}
        <section className="mt-16">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-zinc-900">Selected results</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-zinc-600">
              Practical wins we’ve delivered for regulated teams across cloud, DevOps, and health IT.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            <Stat
              Icon={TrendingDown}
              kpi="–30% cloud spend"
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

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">Case: Healthcare data platform</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Built a secure landing zone and CI/CD for PHI workloads (HIPAA). Automated backups,
              IAM least-privilege, and cost guardrails. Outcome: faster releases, improved audit
              readiness, and measurable cost reduction.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Schedule a free consultation
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <p className="mt-3 text-xs text-zinc-500">
            Prefer email?{" "}
            <a className="underline" href="mailto:info@thetabtech.com">
              info@thetabtech.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default WhatWeDoPage;
