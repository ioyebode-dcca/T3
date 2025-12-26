import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Target, Award, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Who We Are | TheTabTech",
  description:
    "Learn about TheTabTech - a team of cloud, DevSecOps, and health IT experts dedicated to delivering mission-critical solutions.",
};

export default function WhoWeArePage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative h-96 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero/who-we-are-bg.jpg')" }}
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
                Who We Are
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
                A team of engineers, architects, and consultants passionate about
                building secure, scalable solutions.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-32 xl:px-48">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-zinc-900">Our Story</h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                TheTabTech was founded with a simple mission: help organizations
                harness technology to create real impact. We specialize in cloud
                infrastructure, DevSecOps, AI, and health IT — delivering solutions
                that are secure, scalable, and built for the long term.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                Our team brings decades of combined experience across government,
                healthcare, and enterprise environments. We understand the unique
                challenges of regulated industries and build systems that meet the
                highest standards of security and compliance.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-zinc-50 py-20">
        <div className="container mx-auto px-4 lg:px-32 xl:px-48">
          <AnimatedSection animation="fade-up">
            <h2 className="text-center text-3xl font-bold text-zinc-900">
              Our Values
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="rounded-2xl bg-white p-6 shadow-sm text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Target size={28} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  Mission-Focused
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Every decision we make is guided by our clients&apos; mission and
                  objectives.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="rounded-2xl bg-white p-6 shadow-sm text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <Award size={28} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  Excellence
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  We hold ourselves to the highest standards in everything we
                  deliver.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="rounded-2xl bg-white p-6 shadow-sm text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <Users size={28} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  Collaboration
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  We work as an extension of your team, not just a vendor.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="rounded-2xl bg-white p-6 shadow-sm text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <Heart size={28} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  Integrity
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  We do the right thing, even when no one is watching.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Data */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-32 xl:px-48">
          <AnimatedSection animation="fade-up">
            <h2 className="text-center text-3xl font-bold text-zinc-900">
              Company Information
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="mt-12 mx-auto max-w-2xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <span className="text-sm font-medium text-zinc-500">
                    Company Name
                  </span>
                  <p className="mt-1 font-semibold text-zinc-900">
                    TheTabTech, LLC
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-zinc-500">
                    Location
                  </span>
                  <p className="mt-1 font-semibold text-zinc-900">
                    Laurel, Maryland
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-zinc-500">
                    Business Type
                  </span>
                  <p className="mt-1 font-semibold text-zinc-900">
                    Small Business
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-zinc-500">
                    NAICS Codes
                  </span>
                  <p className="mt-1 font-semibold text-zinc-900">
                    541512, 541519, 518210
                  </p>
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
                Want to Work With Us?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/90">
                Let&apos;s discuss how we can help your organization achieve its
                technology goals.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow transition-all duration-300 hover:bg-zinc-100 hover:gap-3"
                >
                  Get in Touch
                  <ArrowRight size={16} aria-hidden />
                </Link>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/50 hover:bg-white/20"
                >
                  View Careers
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}