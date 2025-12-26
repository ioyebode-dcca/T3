import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Heart,
  Rocket,
  Users,
  MapPin,
  Clock,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Careers | TheTabTech",
  description:
    "Join TheTabTech and build your career in cloud, DevSecOps, AI, and health IT. View open positions and apply today.",
};

/* ---------- Job Card Component ---------- */
function JobCard({
  title,
  location,
  type,
  description,
}: {
  title: string;
  location: string;
  type: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
      <div className="mt-2 flex flex-wrap gap-4 text-sm text-zinc-500">
        <span className="flex items-center gap-1">
          <MapPin size={14} />
          {location}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {type}
        </span>
      </div>
      <p className="mt-4 text-sm text-zinc-600">{description}</p>
      <Link
        href="/contact"
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-all duration-300 hover:gap-3"
      >
        Apply Now <ArrowRight size={16} />
      </Link>
    </div>
  );
}

/* ---------- Perk Card Component ---------- */
function PerkCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-zinc-900">{title}</h3>
        <p className="mt-1 text-sm text-zinc-600">{description}</p>
      </div>
    </div>
  );
}

/* ---------- Main Page ---------- */
export default function CareersPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative h-96 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero/careers-bg.jpg')" }}
          aria-hidden="true"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-purple-800/75 to-emerald-700/70"
          aria-hidden="true"
        />
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
          <div className="max-w-3xl text-center">
            <AnimatedSection animation="fade-up">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Join Our Team
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
                Build your career with a team that&apos;s passionate about technology,
                security, and making a real impact.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-32 xl:px-48">
          <AnimatedSection animation="fade-up">
            <h2 className="text-center text-3xl font-bold text-zinc-900">
              Why Join TheTabTech?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-600">
              We&apos;re building a team of talented individuals who want to do
              meaningful work with cutting-edge technology.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <AnimatedSection animation="fade-up" delay={0}>
              <PerkCard
                icon={<Rocket size={24} />}
                title="Cutting-Edge Technology"
                description="Work with the latest in cloud, AI, DevSecOps, and health IT technologies."
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <PerkCard
                icon={<Users size={24} />}
                title="Collaborative Culture"
                description="Join a supportive team that values knowledge sharing and growth."
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <PerkCard
                icon={<Heart size={24} />}
                title="Work-Life Balance"
                description="Flexible work arrangements and respect for your personal time."
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <PerkCard
                icon={<Briefcase size={24} />}
                title="Career Growth"
                description="Opportunities to learn, lead, and advance your career."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-zinc-50 py-20">
        <div className="container mx-auto px-4 lg:px-32 xl:px-48">
          <AnimatedSection animation="fade-up">
            <h2 className="text-center text-3xl font-bold text-zinc-900">
              Open Positions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-600">
              We&apos;re always looking for talented people to join our team.
            </p>
          </AnimatedSection>

          <div className="mt-12 space-y-6">
            <AnimatedSection animation="fade-up" delay={0}>
              <JobCard
                title="DevSecOps Engineer"
                location="Remote / Hybrid"
                type="Full-time"
                description="Design and implement CI/CD pipelines, automate security scanning, and ensure compliance across cloud environments."
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <JobCard
                title="Cloud Solutions Architect"
                location="Remote / Hybrid"
                type="Full-time"
                description="Architect and implement scalable AWS solutions for government and healthcare clients."
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <JobCard
                title="Health IT Specialist"
                location="Remote / Hybrid"
                type="Full-time"
                description="Work on FHIR interoperability, clinical data pipelines, and HIPAA-compliant solutions."
              />
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="mt-12 rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center">
              <h3 className="text-lg font-semibold text-zinc-900">
                Don&apos;t see a role that fits?
              </h3>
              <p className="mt-2 text-zinc-600">
                We&apos;re always interested in hearing from talented people. Send us
                your resume and let us know how you can contribute.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-zinc-800 hover:gap-3"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
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
                Ready to Make an Impact?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/90">
                Join us and help organizations build secure, scalable technology
                solutions.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-zinc-900 shadow transition-all duration-300 hover:bg-zinc-100 hover:gap-3"
              >
                Apply Now
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}