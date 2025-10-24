import React from "react";

// ---------- Optional page metadata (App Router) ----------
export const metadata = {
  title: "Careers | TheTabTech",
  description:
    "Join TheTabTech — a non-hierarchical, growth-minded team building secure, high-impact cloud and health IT solutions.",
};

// ---------- Types ----------
type Job = {
  title: string;
  location: string;
  type: "Full-time" | "Contract" | "Part-time";
  summary: string;
  responsibilities: string[];
  requirements: string[];
  applyEmail?: string;
};

// ---------- Edit your open roles here ----------
const jobs: Job[] = [
  {
    title: "AWS Cloud Architect",
    location: "Remote (US)",
    type: "Full-time",
    summary:
      "Design secure landing zones, lead migrations, and optimize cloud cost, reliability, and compliance.",
    responsibilities: [
      "Own cloud architecture and reference patterns (networking, IAM, data).",
      "Guide modernization roadmaps and well-architected reviews.",
      "Collaborate with DevOps to automate guardrails and deployments.",
    ],
    requirements: [
      "5+ years on AWS; deep VPC/IAM experience.",
      "IaC (Terraform/CloudFormation), security baselines, cost optimization.",
      "Clear written/spoken communication with exec and engineering audiences.",
    ],
    applyEmail: "careers@thetabtech.com",
  },
  {
    title: "DevOps Engineer",
    location: "Remote (US)",
    type: "Full-time",
    summary:
      "Build CI/CD pipelines and platform automation for reliable, compliant software delivery.",
    responsibilities: [
      "Create/maintain CI/CD (Tekton, GitHub Actions, or similar).",
      "Automate build/test/release, observability, and incident response.",
      "Harden base images and enforce policy-as-code in pipelines.",
    ],
    requirements: [
      "3+ years with containers/Kubernetes and CI/CD.",
      "Scripting (Bash/Python), IaC (Terraform), and artifact management.",
      "Hands-on troubleshooting across Linux, networking, and cloud services.",
    ],
    applyEmail: "careers@thetabtech.com",
  },
  {
    title: "Clinical Informatics SME",
    location: "Remote (US)",
    type: "Contract",
    summary:
      "Bridge health IT workflows and technical teams to improve data quality, safety, and outcomes.",
    responsibilities: [
      "Partner with engineers to design reliable clinical data flows.",
      "Advise on standards and interoperability (FHIR/HL7, HIPAA).",
      "Support requirements, validation, and stakeholder training.",
    ],
    requirements: [
      "Clinical informatics background; experience with EHR integrations.",
      "Understanding of quality/safety programs and healthcare data.",
      "Clear communication and stakeholder facilitation skills.",
    ],
    applyEmail: "careers@thetabtech.com",
  },
];

// ---------- Components ----------
function JobCard({ job }: { job: Job }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-zinc-900">{job.title}</h3>
        <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
          {job.type}
        </span>
      </div>
      <p className="mt-1 text-sm text-zinc-600">
        {job.location} • {job.type}
      </p>

      <p className="mt-3 text-zinc-700">{job.summary}</p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-2 text-sm font-semibold text-zinc-900">Responsibilities</h4>
          <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700">
            {job.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold text-zinc-900">Requirements</h4>
          <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700">
            {job.requirements.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <a
          className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
          href={`mailto:${job.applyEmail ?? "careers@thetabtech.com"}?subject=Application: ${encodeURIComponent(
            job.title
          )}`}
        >
          Apply via email
        </a>
        <p className="mt-2 text-xs text-zinc-500">
          Please attach your resume and a short note about relevant experience.
        </p>
      </div>
    </article>
  );
}

// ---------- Page ----------
const CareersPage: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-80 overflow-hidden">
        {/* <img src="/background.png" alt="" className="absolute inset-0 h-full w-full object-cover" /> */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-400 opacity-80"
          aria-hidden="true"
        />
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">Careers</h1>
            <p className="mx-auto mt-3 max-w-2xl text-white/90">
              Join a non-hierarchical, growth-minded team delivering secure, high-impact solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 lg:px-48">
        {/* Culture blurb */}
        <div className="mx-auto max-w-3xl text-zinc-800">
          <p>
            At <strong>TheTabTech</strong>, we assemble top-tier professionals and keep our structure
            intentionally flat. You’ll find accessible leadership, embedded mentorship, clear growth
            paths, and a bias for shipping value safely and quickly.
          </p>
          <p className="mt-4">
            If you’re a problem-solver who enjoys intellectual challenge and real ownership,
            we’d love to hear from you.
          </p>
          <p className="mt-4 text-sm text-zinc-600">
            Prefer to reach out directly?{" "}
            <a className="underline" href="mailto:careers@thetabtech.com">
              careers@thetabtech.com
            </a>
          </p>
        </div>

        {/* Open roles */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>

        {/* Don’t see your role? */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-zinc-200 bg-white/70 p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold text-zinc-900">Don’t see your role?</h3>
          <p className="mt-2 text-zinc-700">
            We’re always happy to meet exceptional people. Email your resume and interests to{" "}
            <a className="underline" href="mailto:careers@thetabtech.com">
              careers@thetabtech.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* Optional: Basic JobPosting schema for SEO (App Router only) */}
      {/* Remove this block if you don't want JSON-LD */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jobs.map((j) => ({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              title: j.title,
              employmentType: j.type.replace("-", ""),
              jobLocationType: "TELECOMMUTE",
              applicantLocationRequirements: {
                "@type": "Country",
                name: "US",
              },
              hiringOrganization: {
                "@type": "Organization",
                name: "TheTabTech, LLC",
                sameAs: "https://www.thetabtech.com",
              },
              description: j.summary,
              datePosted: new Date().toISOString(),
              validThrough: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60).toISOString(), // ~60 days
              industry: ["Cloud", "DevOps", "Health IT"],
              identifier: {
                "@type": "PropertyValue",
                name: "TheTabTech",
                value: j.title,
              },
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "US",
                },
              },
              directApply: true,
              hiringOrganizationLogo: "https://www.thetabtech.com/icon.png",
            })),
          ),
        }}
      />
    </main>
  );
};

export default CareersPage;
