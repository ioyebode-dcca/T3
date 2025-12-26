import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Capability Statement",
  description:
    "TheTabTech capability statement outlining cloud computing, DevOps automation, and digital health IT expertise.",
};

export default function CapabilitiesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-64">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-500 opacity-90" />
        <div className="relative z-10 flex h-full items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Capability Statement
            </h1>
            <p className="mt-3 max-w-2xl text-white/90">
              Secure cloud, DevOps automation, and digital health solutions for
              regulated environments.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 py-14 lg:px-48">
        <div className="mx-auto max-w-4xl space-y-12 text-zinc-800">

          {/* Overview */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">Company Overview</h2>
            <p>
              <strong>TheTabTech, LLC</strong> is a technology consulting firm
              specializing in secure cloud computing, DevOps automation, and
              digital health IT solutions. We partner with organizations operating
              in regulated environments to modernize infrastructure, improve
              reliability, and deliver mission-critical systems with confidence.
            </p>
          </section>

          {/* Core Competencies */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">Core Competencies</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cloud Architecture & Engineering (AWS)</li>
              <li>DevOps, CI/CD Pipelines & Automation</li>
              <li>Infrastructure as Code (Terraform)</li>
              <li>Security & Compliance (STIG, NIST, HIPAA)</li>
              <li>Monitoring, Logging & Reliability Engineering</li>
              <li>Digital Health & Clinical Informatics</li>
            </ul>
          </section>

          {/* Differentiators */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Why Choose TheTabTech
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Automation-first delivery to reduce risk and cost</li>
              <li>Senior-led, non-hierarchical execution teams</li>
              <li>Deep experience in regulated environments</li>
              <li>Outcome-driven engagements (not staff augmentation)</li>
              <li>Clear documentation and maintainable solutions</li>
            </ul>
          </section>

          {/* Past Performance */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">Past Performance</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reduced cloud spend by 30% within 90 days</li>
              <li>Designed secure cloud landing zones for healthcare workloads</li>
              <li>Built CI/CD pipelines with automated compliance checks</li>
              <li>Improved system observability and uptime for production systems</li>
            </ul>
          </section>

          {/* Company Data */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold">Company Data</h2>
            <ul className="space-y-1">
              <li><strong>Company Name:</strong> TheTabTech, LLC</li>
              <li><strong>Location:</strong> Laurel, MD</li>
              <li><strong>Email:</strong> info@thetabtech.com</li>
              <li><strong>Website:</strong> https://www.thetabtech.com</li>
              <li><strong>NAICS:</strong> 541512, 541511, 541519</li>
              <li><strong>UEI / DUNS / CAGE:</strong> Available upon request</li>
            </ul>
          </section>

          {/* Download CTA */}
          <section className="pt-4">
            <Link
              href="/TheTabTech-Capability-Statement.pdf"
              target="_blank"
              className="inline-flex items-center rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Download Capability Statement (PDF)
            </Link>
          </section>

        </div>
      </section>
    </main>
  );
}
