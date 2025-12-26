import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Shield,
  HeartPulse,
  LifeBuoy,
  Brain,
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "What We Do | TheTabTech",
  description:
    "Cloud & DevOps, Security & DevSecOps, AI & Automation, Health IT, and Digital Health Support services from TheTabTech.",
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

/* ---------- Service Card ---------- */
type ServiceCardProps = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  tools?: string[];
  accentColor: "blue" | "emerald" | "purple" | "red" | "amber";
};

function ServiceCard({
  id,
  icon,
  title,
  description,
  features,
  tools,
  accentColor,
}: ServiceCardProps) {
  const colorClasses = {
    blue: {
      iconBg: "bg-blue-100 text-blue-600",
      border: "border-l-blue-500",
      tag: "bg-blue-50 text-blue-700",
    },
    emerald: {
      iconBg: "bg-emerald-100 text-emerald-600",
      border: "border-l-emerald-500",
      tag: "bg-emerald-50 text-emerald-700",
    },
    purple: {
      iconBg: "bg-purple-100 text-purple-600",
      border: "border-l-purple-500",
      tag: "bg-purple-50 text-purple-700",
    },
    red: {
      iconBg: "bg-red-100 text-red-600",
      border: "border-l-red-500",
      tag: "bg-red-50 text-red-700",
    },
    amber: {
      iconBg: "bg-amber-100 text-amber-600",
      border: "border-l-amber-500",
      tag: "bg-amber-50 text-amber-700",
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <article
      id={id}
      className={`rounded-2xl border border-zinc-200 border-l-4 ${colors.border} bg-white/80 p-6 shadow-sm transition-all duration-300 hover:shadow-md scroll-mt-24`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${colors.iconBg}`}
        >
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            {description}
          </p>
        </div>
      </div>

      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-zinc-700">
            <CheckCircle
              size={16}
              className="mt-0.5 shrink-0 text-emerald-500"
            />
            {feature}
          </li>
        ))}
      </ul>

      {tools && tools.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className={`rounded-full px-3 py-1 text-xs font-medium ${colors.tag}`}
            >
              {tool}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

/* ---------- Stat Component ---------- */
function Stat({
  value,
  label,
  color = "emerald",
}: {
  value: string;
  label: string;
  color?: "emerald" | "blue" | "purple";
}) {
  const colorClasses = {
    emerald: "text-emerald-600",
    blue: "text-blue-600",
    purple: "text-purple-600",
  };

  return (
    <div className="text-center">
      <span className={`block text-4xl font-bold ${colorClasses[color]}`}>
        {value}
      </span>
      <span className="mt-1 block text-sm text-zinc-600">{label}</span>
    </div>
  );
}

/* ---------- Main Page ---------- */
export default function WhatWeDoPage() {
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
              <AnimatedSection animation="fade-up">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  What We Do
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={100}>
                <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
                  End-to-end solutions for cloud, security, AI, and healthcare IT.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-zinc-50 py-20">
          <div className="container mx-auto px-4 lg:px-32 xl:px-48">
            <div className="mx-auto max-w-4xl space-y-8">
              {/* Cloud & DevOps */}
              <AnimatedSection animation="fade-up" delay={0}>
                <ServiceCard
                  id="cloud-devops"
                  icon={<Cloud size={28} />}
                  title="Cloud & DevOps"
                  description="Architect, automate, and optimize cloud infrastructure for scale and reliability. We build CI/CD pipelines that accelerate delivery while maintaining security and compliance."
                  features={[
                    "AWS Architecture & Migration",
                    "CI/CD Pipeline Design",
                    "Infrastructure as Code",
                    "Kubernetes & Container Orchestration",
                    "Cost Optimization (FinOps)",
                    "Monitoring & Observability",
                  ]}
                  tools={[
                    "AWS",
                    "Terraform",
                    "OpenShift",
                    "Tekton",
                    "GitHub Actions",
                    "Ansible",
                  ]}
                  accentColor="emerald"
                />
              </AnimatedSection>

              {/* Security & DevSecOps */}
              <AnimatedSection animation="fade-up" delay={100}>
                <ServiceCard
                  id="security-devsecops"
                  icon={<Shield size={28} />}
                  title="Security & DevSecOps"
                  description="Embed security into every stage of your software delivery lifecycle. We help you achieve compliance faster with automated scanning, policy-as-code, and continuous authorization."
                  features={[
                    "STIG & NIST Compliance",
                    "FedRAMP ATO Acceleration",
                    "Automated Security Scanning",
                    "Policy-as-Code (OSCAL)",
                    "Secrets Management",
                    "Vulnerability Remediation",
                  ]}
                  tools={[
                    "Fortify",
                    "BlackDuck",
                    "OSCAL",
                    "Anchore",
                    "HashiCorp Vault",
                    "Prisma Cloud",
                  ]}
                  accentColor="purple"
                />
              </AnimatedSection>

              {/* AI & Automation */}
              <AnimatedSection animation="fade-up" delay={200}>
                <ServiceCard
                  id="ai-automation"
                  icon={<Brain size={28} />}
                  title="AI & Intelligent Automation"
                  description="Leverage artificial intelligence and machine learning to automate workflows, extract insights, and make smarter decisions. From predictive analytics to intelligent document processing."
                  features={[
                    "Machine Learning Pipelines",
                    "Predictive Analytics",
                    "Intelligent Document Processing",
                    "AI-Powered Monitoring & Alerting",
                    "Natural Language Processing",
                    "Process Automation (RPA)",
                  ]}
                  tools={[
                    "AWS SageMaker",
                    "Python",
                    "TensorFlow",
                    "OpenAI",
                    "LangChain",
                    "MLflow",
                  ]}
                  accentColor="blue"
                />
              </AnimatedSection>

              {/* Health IT */}
              <AnimatedSection animation="fade-up" delay={300}>
                <ServiceCard
                  id="health-it"
                  icon={<HeartPulse size={28} />}
                  title="Health IT"
                  description="Modernize healthcare systems with interoperability, data pipelines, and clinical informatics expertise. We build HIPAA-compliant solutions that improve patient outcomes."
                  features={[
                    "HL7 FHIR Interoperability",
                    "HIPAA Compliance",
                    "EHR Integration",
                    "Clinical Data Pipelines",
                    "Healthcare Analytics",
                    "Patient Portal Development",
                  ]}
                  tools={[
                    "HL7 FHIR",
                    "HIPAA",
                    "Epic",
                    "Cerner",
                    "AWS HealthLake",
                    "Apache NiFi",
                  ]}
                  accentColor="red"
                />
              </AnimatedSection>

              {/* Digital Health Support */}
              <AnimatedSection animation="fade-up" delay={400}>
                <ServiceCard
                  id="digital-health-support"
                  icon={<LifeBuoy size={28} />}
                  title="Digital Health Support"
                  description="Ongoing operational support for healthcare technology systems. We provide monitoring, incident response, and continuous improvement for mission-critical health applications."
                  features={[
                    "24/7 System Monitoring",
                    "Incident Response & Triage",
                    "Performance Optimization",
                    "Release Management",
                    "On-Call Support",
                    "Documentation & Runbooks",
                  ]}
                  tools={[
                    "EHR Integration",
                    "REST APIs",
                    "Kubernetes",
                    "Prometheus",
                    "PagerDuty",
                    "ServiceNow",
                  ]}
                  accentColor="amber"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-32 xl:px-48">
            <AnimatedSection animation="fade-up">
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                <div className="grid gap-8 sm:grid-cols-3">
                  <Stat value="-30%" label="Average Cloud Cost Reduction" color="emerald" />
                  <Stat value="99.95%" label="Uptime for Managed Systems" color="blue" />
                  <Stat value="10x" label="Faster Deployments" color="purple" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Case Study Teaser */}
        <section className="bg-zinc-50 py-20">
          <div className="container mx-auto px-4 lg:px-32 xl:px-48">
            <AnimatedSection animation="fade-up">
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                      Case Study
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-zinc-900">
                      Cloud Migration & Cost Optimization
                    </h3>
                    <p className="mt-2 max-w-xl text-zinc-600">
                      How we helped a healthcare organization migrate to AWS,
                      implement DevSecOps practices, and reduce cloud spend by 30%
                      while improving deployment frequency.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["AWS", "Terraform", "GitHub Actions", "HIPAA"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 lg:flex-col">
                    <div className="rounded-lg bg-emerald-50 px-4 py-2 text-center">
                      <span className="block text-lg font-bold text-emerald-700">-30%</span>
                      <span className="text-xs text-emerald-600">Cloud Costs</span>
                    </div>
                    <div className="rounded-lg bg-blue-50 px-4 py-2 text-center">
                      <span className="block text-lg font-bold text-blue-700">5x</span>
                      <span className="text-xs text-blue-600">Deploy Frequency</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-32 xl:px-48">
            <AnimatedSection animation="fade-up">
              <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-emerald-500 p-8 text-center text-white shadow-lg sm:p-12">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-white/90">
                  Let&apos;s discuss how we can help you ship faster, stay secure, and
                  deliver real outcomes.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow transition-all duration-300 hover:bg-zinc-100 hover:gap-3"
                  >
                    Start a Conversation
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                  <Link
                    href="/capabilities"
                    className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/50 hover:bg-white/20"
                  >
                    View Capability Statement
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </>
  );
}