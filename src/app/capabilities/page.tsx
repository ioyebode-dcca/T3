import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Cloud,
  Shield,
  Network,
  LifeBuoy,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Capability Statement | TheTabTech",
  description:
    "TheTabTech capability statement outlining cloud computing, DevOps automation, security & DevSecOps, and digital health IT expertise.",
};

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

/* ---------- Competency Card ---------- */
type CompetencyCardProps = {
  icon: React.ReactNode;
  title: string;
  items: string[];
  accentColor: string;
};

function CompetencyCard({ icon, title, items, accentColor }: CompetencyCardProps) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    emerald: "bg-emerald-50 text-emerald-600",
    purple: "bg-purple-50 text-purple-600",
    red: "bg-red-50 text-red-600",
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-5 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="mb-3 flex items-center gap-3">
        <span className={`rounded-lg p-2 ${colorClasses[accentColor]}`} aria-hidden="true">
          {icon}
        </span>
        <h3 className="font-semibold text-zinc-900">{title}</h3>
      </div>
      <ul className="space-y-1 text-sm text-zinc-600">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CapabilitiesPage() {
  return (
    <>
      <SkipLink />
      <main id="main-content">
        {/* HERO */}
        <section className="relative h-80 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-500"
            aria-hidden="true"
          />
          <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
            <div className="max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Capability Statement
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
                Secure cloud, DevOps automation, and digital health solutions
                for regulated environments.
              </p>
              <div className="mt-6">
                <a
                  href="/TheTabTech-Capability-Statement.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg transition-all duration-200 hover:bg-zinc-100 hover:gap-3"
                >
                  <FileText size={18} aria-hidden />
                  Download PDF
                  <ArrowRight size={16} aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="container mx-auto px-4 py-16 lg:px-32 xl:px-48">
          <div className="mx-auto max-w-5xl space-y-16">
            {/* Overview */}
            <section className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-zinc-900">
                Company Overview
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-700">
                <strong className="text-zinc-900">TheTabTech, LLC</strong> is a
                technology consulting firm specializing in secure cloud
                computing, DevOps automation, security & compliance, and digital
                health IT solutions. We partner with organizations operating in
                regulated environments to modernize infrastructure, improve
                reliability, and deliver mission-critical systems with
                confidence.
              </p>
            </section>

            {/* Core Competencies */}
            <section>
              <h2 className="mb-8 text-center text-3xl font-bold text-zinc-900">
                Core Competencies
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <CompetencyCard
                  icon={<Cloud size={20} />}
                  title="Cloud & DevOps"
                  items={[
                    "Cloud Architecture & Engineering (AWS)",
                    "DevOps, CI/CD Pipelines & Automation",
                    "Infrastructure as Code (Terraform, Ansible)",
                    "Monitoring, Logging & Reliability Engineering",
                  ]}
                  accentColor="emerald"
                />
                <CompetencyCard
                  icon={<Shield size={20} />}
                  title="Security & DevSecOps"
                  items={[
                    "STIG, NIST, FedRAMP Compliance",
                    "Automated Security Scanning (Fortify, BlackDuck)",
                    "Policy-as-Code & OSCAL",
                    "ATO Readiness & Continuous Authorization",
                  ]}
                  accentColor="purple"
                />
                <CompetencyCard
                  icon={<LifeBuoy size={20} />}
                  title="Health IT"
                  items={[
                    "Digital Health & Clinical Informatics",
                    "HL7 FHIR & Interoperability",
                    "HIPAA Compliance",
                    "EHR Integration & Data Pipelines",
                  ]}
                  accentColor="red"
                />
                <CompetencyCard
                  icon={<Network size={20} />}
                  title="Advisory Services"
                  items={[
                    "IT Strategy & Governance",
                    "Cloud Cost Optimization (FinOps)",
                    "Vendor Selection & Roadmapping",
                    "Technical Leadership & Mentoring",
                  ]}
                  accentColor="blue"
                />
              </div>
            </section>

            {/* Differentiators */}
            <section className="rounded-2xl bg-zinc-900 p-8 text-white">
              <h2 className="mb-6 text-center text-2xl font-bold">
                Why Choose TheTabTech
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Automation-first delivery to reduce risk and cost",
                  "Senior-led, non-hierarchical execution teams",
                  "Deep experience in regulated environments",
                  "Outcome-driven engagements (not staff augmentation)",
                  "Clear documentation and maintainable solutions",
                  "Shift-left security embedded in every pipeline",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle
                      size={16}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Past Performance */}
            <section>
              <h2 className="mb-8 text-center text-3xl font-bold text-zinc-900">
                Past Performance
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    metric: "-30%",
                    label: "Cloud spend reduction within 90 days",
                  },
                  {
                    metric: "99.95%",
                    label: "Uptime through observability & SLO reviews",
                  },
                  {
                    metric: "STIG/NIST",
                    label: "Policy-as-Code pipelines for ATO readiness",
                  },
                  {
                    metric: "HIPAA",
                    label: "Secure landing zones for healthcare workloads",
                  },
                ].map((item) => (
                  <div
                    key={item.metric}
                    className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white/70 p-4 shadow-sm"
                  >
                    <span className="text-2xl font-bold text-blue-600">
                      {item.metric}
                    </span>
                    <span className="text-sm text-zinc-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Company Data */}
            <section className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-8">
              <h2 className="mb-6 text-center text-2xl font-bold text-zinc-900">
                Company Data
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { label: "Company Name", value: "TheTabTech, LLC" },
                  { label: "Location", value: "Laurel, MD" },
                  { label: "Email", value: "info@thetabtech.com" },
                  { label: "Website", value: "thetabtech.com" },
                  { label: "NAICS", value: "541512, 541511, 541519" },
                  { label: "UEI/DUNS/CAGE", value: "Available upon request" },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      {item.label}
                    </span>
                    <p className="mt-1 font-medium text-zinc-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Download CTA */}
            <section className="text-center">
              <a
                href="/TheTabTech-Capability-Statement.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl hover:gap-3"
              >
                <FileText size={18} aria-hidden />
                Download Capability Statement (PDF)
                <ArrowRight size={18} aria-hidden />
              </a>
              <p className="mt-4 text-sm text-zinc-500">
                Questions?{" "}
                <Link
                  href="/contact"
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-700"
                >
                  Get in touch
                </Link>
              </p>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}