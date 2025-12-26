import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Cloud,
  HeartPulse,
  Zap,
  Lock,
  TrendingDown,
  Brain,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "TheTabTech | Cloud, AI & DevSecOps Solutions",
  description:
    "Built for Impact. Cloud, AI, and DevSecOps solutions for organizations that can't afford to fail.",
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

/* ---------- Metric Component ---------- */
function Metric({
  value,
  label,
  color = "emerald",
}: {
  value: string;
  label: string;
  color?: "emerald" | "blue" | "purple";
}) {
  const colorClasses = {
    emerald: "text-emerald-400",
    blue: "text-blue-400",
    purple: "text-purple-400",
  };

  return (
    <div className="text-center">
      <span className={`block text-3xl font-bold ${colorClasses[color]}`}>
        {value}
      </span>
      <span className="text-sm text-zinc-300">{label}</span>
    </div>
  );
}

/* ---------- Service Teaser ---------- */
type TeaserProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  accentColor?: "blue" | "emerald" | "purple" | "red";
};

function Teaser({
  icon,
  title,
  description,
  href,
  accentColor = "blue",
}: TeaserProps) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    emerald:
      "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    purple:
      "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    red: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
  };

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <span
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${colorClasses[accentColor]}`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <h3 className="mb-2 text-lg font-semibold text-zinc-900">{title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-600">
        {description}
      </p>
      <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-all duration-300 group-hover:gap-3">
        Learn more <ArrowRight size={16} aria-hidden />
      </span>
    </Link>
  );
}

/* ---------- Main Page ---------- */
export default function HomePage() {
  return (
    <>
      <SkipLink />
      <main id="main-content">
        {/* ============ HERO ============ */}
        <section className="relative min-h-[600px] overflow-hidden lg:min-h-[700px]">
          {/* Background Image - add your image to /public/images/hero-bg.jpg */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero-bg.jpg')",
            }}
            aria-hidden="true"
          />
          
          {/* Gradient Overlay - similar to the screenshot */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-purple-800/75 to-emerald-700/70"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 flex min-h-[600px] items-center justify-center px-4 lg:min-h-[700px]">
            <div className="max-w-4xl text-center">
              <AnimatedSection animation="fade-up">
                <h1 className="text-5xl font-light italic tracking-tight text-white sm:text-6xl lg:text-7xl">
                  BUILT FOR IMPACT.
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={150}>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl lg:text-2xl">
                  Cloud, AI, and DevSecOps solutions for organizations that
                  can&apos;t afford to fail.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/what-we-do"
                    className="inline-flex items-center gap-2 rounded-none bg-zinc-900 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-zinc-800 hover:gap-3"
                  >
                    Learn More
                    <ArrowRight size={18} aria-hidden />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ============ TRUST STRIP ============ */}
        <section className="border-b border-zinc-200 bg-zinc-900 py-8">
          <div className="container mx-auto px-4 lg:px-32 xl:px-48">
            <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between">
              <Metric value="-30%" label="Cloud Cost Reduction" color="emerald" />
              <Metric value="99.95%" label="Uptime SLA" color="blue" />
              <Metric value="STIG/NIST" label="Compliance Ready" color="purple" />
              <Metric value="24/7" label="Mission Support" color="emerald" />
            </div>
          </div>
        </section>

        {/* ============ VALUE PROPS ============ */}
        <section className="bg-zinc-50 py-20">
          <div className="container mx-auto px-4 lg:px-32 xl:px-48">
            <AnimatedSection animation="fade-up">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
                  Why Organizations Choose Us
                </h2>
                <p className="mt-4 text-lg text-zinc-600">
                  We deliver secure, automated solutions that reduce risk and
                  accelerate mission outcomes.
                </p>
              </div>
            </AnimatedSection>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatedSection animation="fade-up" delay={0}>
                <div className="flex gap-4 rounded-xl bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Ship Faster</h3>
                    <p className="mt-1 text-sm text-zinc-600">
                      Automated pipelines that deliver features in hours, not weeks.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <div className="flex gap-4 rounded-xl bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    <Lock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Reduce Risk</h3>
                    <p className="mt-1 text-sm text-zinc-600">
                      Shift-left security and compliance built into every deployment.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <div className="flex gap-4 rounded-xl bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <TrendingDown size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Control Costs</h3>
                    <p className="mt-1 text-sm text-zinc-600">
                      FinOps practices that cut cloud spend by 30% on average.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ============ SERVICES PREVIEW ============ */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-32 xl:px-48">
            <AnimatedSection animation="fade-up">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
                  What We Do
                </h2>
                <p className="mt-4 text-lg text-zinc-600">
                  End-to-end solutions for cloud, security, AI, and healthcare IT.
                </p>
              </div>
            </AnimatedSection>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <AnimatedSection animation="fade-up" delay={0}>
                <Teaser
                  icon={<Cloud size={24} />}
                  title="Cloud & DevOps"
                  description="AWS architecture, CI/CD pipelines, and infrastructure automation."
                  href="/what-we-do#cloud-devops"
                  accentColor="emerald"
                />
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <Teaser
                  icon={<Shield size={24} />}
                  title="Security & DevSecOps"
                  description="STIG compliance, automated scanning, and ATO acceleration."
                  href="/what-we-do#security-devsecops"
                  accentColor="purple"
                />
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <Teaser
                  icon={<Brain size={24} />}
                  title="AI & Automation"
                  description="Machine learning pipelines, intelligent automation, and predictive analytics."
                  href="/what-we-do#ai-automation"
                  accentColor="blue"
                />
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <Teaser
                  icon={<HeartPulse size={24} />}
                  title="Health IT"
                  description="FHIR interoperability, clinical informatics, and HIPAA-compliant solutions."
                  href="/what-we-do#health-it"
                  accentColor="red"
                />
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="mt-12 text-center">
                <Link
                  href="/what-we-do"
                  className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-zinc-800 hover:gap-3"
                >
                  View All Services
                  <ArrowRight size={18} aria-hidden />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="relative overflow-hidden py-20">
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-500"
            aria-hidden="true"
          />
          <div className="relative z-10 container mx-auto px-4 lg:px-32 xl:px-48">
            <AnimatedSection animation="fade-up">
              <div className="mx-auto max-w-3xl text-center text-white">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Ready to Build Something That Matters?
                </h2>
                <p className="mt-4 text-lg text-white/90">
                  Let&apos;s discuss how we can help you ship faster, stay secure,
                  and deliver real outcomes.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-zinc-900 shadow-lg transition-all duration-300 hover:bg-zinc-100 hover:gap-3"
                  >
                    Start a Conversation
                    <ArrowRight size={18} aria-hidden />
                  </Link>
                  <Link
                    href="/capabilities"
                    className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20"
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