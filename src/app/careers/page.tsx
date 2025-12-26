import React from "react";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

// ---------- Optional page metadata (App Router) ----------
export const metadata = {
  title: "Careers | TheTabTech",
  description:
    "Join TheTabTech — a non-hierarchical, growth-minded team building secure, high-impact cloud and health IT solutions.",
};

// ---------- Skip Link for Accessibility ----------
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

// ---------- Types ----------
type Job = {
  title: string;
  location: string;
  type: "Full-time" | "Contract" | "Part-time";
  summary: string;
  skills: string[];
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
    skills: ["AWS", "Terraform", "IAM", "VPC", "Cost Optimization"],
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
    skills: ["Kubernetes", "Tekton", "GitHub Actions", "Terraform", "Linux"],
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
    skills: ["HL7 FHIR", "EHR Integration", "HIPAA", "Clinical Workflows"],
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
  const typeColors: Record<string, string> = {
    "Full-time": "bg-emerald-600",
    Contract: "bg-blue-600",
    "Part-time": "bg-purple-600",
  };

  return (
    <article className="group flex flex-col rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-zinc-900">{job.title}</h3>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold text-white ${typeColors[job.type]}`}
        >
          {job.type}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
        <span className="inline-flex items-center gap-1">
          <MapPin size={14} aria-hidden="true" />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-1">
          <Briefcase size={14} aria-hidden="true" />
          {job.type}
        </span>
      </div>

      <p className="mt-4 text-zinc-700">{job.summary}</p>

      {/* Skill badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-2 text-sm font-semibold text-zinc-900">
            Responsibilities
          </h4>
          <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700">
            {job.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold text-zinc-900">
            Requirements
          </h4>
          <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700">
            {job.requirements.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto pt-5">
        <a
          className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-zinc-800 hover:gap-3"
          href={`mailto:${job.applyEmail ?? "careers@thetabtech.com"}?subject=Application: ${encodeURIComponent(job.title)}`}
        >
          Apply via email
          <ArrowRight size={16} aria-hidden="true" />
        </a>
        <p className="mt-2 text-xs text-zinc-500">
          Attach your resume and a short note about relevant experience.
        </p>
      </div>
    </article>
  );
}

// ---------- Page ----------
const CareersPage: React.FC = () => {
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
          <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
            <div className="max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Careers
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
                Join a non-hierarchical, growth-minded team delivering secure,
                high-impact solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-16 lg:px-32 xl:px-48">
          {/* Culture blurb */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-zinc-700">
              At <strong className="text-zinc-900">TheTabTech</strong>, we
              assemble top-tier professionals and keep our structure
              intentionally flat. You&apos;ll find accessible leadership,
              embedded mentorship, clear growth paths, and a bias for shipping
              value safely and quickly.
            </p>
            <p className="mt-4 text-zinc-700">
              If you&apos;re a problem-solver who enjoys intellectual challenge
              and real ownership, we&apos;d love to hear from you.
            </p>
          </div>

          {/* Open roles */}
          <div className="mx-auto mt-12 max-w-5xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-zinc-900">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {jobs.map((job) => (
                <JobCard key={job.title} job={job} />
              ))}
            </div>
          </div>

          {/* Don't see your role? */}
          <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-zinc-900 p-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-white">
              Don&apos;t see your role?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-zinc-400">
              We&apos;re always happy to meet exceptional people. Send us your
              resume and tell us what you&apos;re passionate about.
            </p>
            <div className="mt-6">
              <a
                href="mailto:careers@thetabtech.com"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl hover:gap-3"
              >
                Email careers@thetabtech.com
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Basic JobPosting schema for SEO */}
        <script
          type="application/ld+json"
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
                validThrough: new Date(
                  Date.now() + 1000 * 60 * 60 * 24 * 60
                ).toISOString(),
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
              }))
            ),
          }}
        />
      </main>
    </>
  );
};

export default CareersPage;