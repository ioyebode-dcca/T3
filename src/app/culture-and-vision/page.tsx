import React from "react";
import {
  ArrowRight,
  Sparkles,
  Users,
  Lightbulb,
  TrendingUp,
  Eye,
  Heart,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Culture & Vision | TheTabTech",
  description:
    "Non-hierarchical, growth-minded, and relentlessly customer-focused. Explore TheTabTech's culture, vision, and core values.",
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

/* ---------- Value Item Component ---------- */
type ValueItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
};

function ValueItem({ icon, title, description, accentColor }: ValueItemProps) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
    amber: "bg-amber-50 text-amber-600 border-amber-200",
  };

  return (
    <div className="group flex items-start gap-4 rounded-xl border border-zinc-200 bg-white/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <span
        className={`rounded-lg border p-2.5 transition-transform duration-300 group-hover:scale-110 ${colorClasses[accentColor]}`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <div>
        <h3 className="font-semibold text-zinc-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-zinc-600">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
const CultureAndVisionPage: React.FC = () => {
  return (
    <>
      <SkipLink />
      <main id="main-content">
        {/* Hero */}
        <section className="relative h-80 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero/culture-vision-bg.jpg')" }}
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
                  Culture &amp; Vision
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={100}>
                <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
                  Collaborative, outcomes-driven, and always learning—how we work
                  and why it matters.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-16 lg:px-32 xl:px-48">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
            {/* Vision */}
            <AnimatedSection animation="fade-up" delay={0}>
              <article className="h-full rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="rounded-xl bg-blue-50 p-3 text-blue-600"
                    aria-hidden="true"
                  >
                    <Eye size={24} />
                  </span>
                  <h2 className="text-2xl font-semibold text-zinc-900">
                    Our Vision
                  </h2>
                </div>
                <p className="leading-relaxed text-zinc-700">
                  At the core of our mission, we aspire to be the premier provider
                  of trusted technology services within our network—driven by
                  collaboration and forward-thinking innovation. Our aim goes
                  beyond meeting expectations: we strive to exceed them, fostering
                  a culture of excellence that fuels client and team success.
                </p>
                <div className="mt-6 rounded-xl bg-blue-50/50 p-4">
                  <p className="text-sm font-medium italic text-blue-800">
                    &ldquo;Client success and team success are
                    inseparable.&rdquo;
                  </p>
                </div>
              </article>
            </AnimatedSection>

            {/* Mission */}
            <AnimatedSection animation="fade-up" delay={100}>
              <article className="h-full rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="rounded-xl bg-emerald-50 p-3 text-emerald-600"
                    aria-hidden="true"
                  >
                    <Heart size={24} />
                  </span>
                  <h2 className="text-2xl font-semibold text-zinc-900">
                    Our Mission
                  </h2>
                </div>
                <p className="leading-relaxed text-zinc-700">
                  To deliver secure, scalable, and mission-ready technology
                  solutions that empower regulated organizations to ship faster,
                  reduce risk, and achieve measurable outcomes—while cultivating
                  an environment where our team thrives.
                </p>
                <div className="mt-6 rounded-xl bg-emerald-50/50 p-4">
                  <p className="text-sm font-medium italic text-emerald-800">
                    &ldquo;We build what matters.&rdquo;
                  </p>
                </div>
              </article>
            </AnimatedSection>
          </div>

          {/* Core Values */}
          <div className="mx-auto mt-16 max-w-5xl">
            <AnimatedSection animation="fade-up">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-zinc-900">
                  Our Core Values
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
                  The principles that guide every decision, project, and
                  interaction.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <AnimatedSection animation="fade-up" delay={0}>
                <ValueItem
                  icon={<Sparkles size={20} />}
                  title="Deliver Tangible Value"
                  description="We focus on transformative outcomes for our clients, not just deliverables."
                  accentColor="blue"
                />
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={100}>
                <ValueItem
                  icon={<Lightbulb size={20} />}
                  title="Meaningful Innovation"
                  description="We craft solutions that raise industry standards, not just meet them."
                  accentColor="emerald"
                />
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <ValueItem
                  icon={<Users size={20} />}
                  title="Collaborative Success"
                  description="We cultivate success through teamwork, mutual support, and shared wins."
                  accentColor="purple"
                />
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={300}>
                <ValueItem
                  icon={<TrendingUp size={20} />}
                  title="Continuous Learning"
                  description="Every challenge is an opportunity to grow—we embrace it."
                  accentColor="amber"
                />
              </AnimatedSection>
            </div>
          </div>

          {/* Culture strip */}
          <AnimatedSection animation="fade-up">
            <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-white/80 to-zinc-50/80 shadow-sm">
              <div className="border-b border-zinc-200 bg-zinc-900 px-6 py-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                  How We Show Up
                </span>
              </div>
              <div className="p-6">
                <p className="text-lg leading-relaxed text-zinc-700">
                  We maintain a{" "}
                  <strong className="text-zinc-900">
                    non-hierarchical environment
                  </strong>{" "}
                  with accessible leadership, mentorship embedded into project
                  work, and clear paths for professional growth. When determining
                  compensation and advancement, we follow two principles:
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                      1
                    </span>
                    <p className="text-sm font-medium text-zinc-800">
                      Creating significant value and impact for clients.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50/50 p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      2
                    </span>
                    <p className="text-sm font-medium text-zinc-800">
                      Achieving success through collaboration and camaraderie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection animation="fade-up">
            <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-zinc-900 p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white">
                Ready to join a team that values you?
              </h3>
              <p className="mx-auto mt-2 max-w-md text-zinc-400">
                We&apos;re building something meaningful. Come be a part of it.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="/careers"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl hover:gap-3"
                >
                  Explore careers
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
                >
                  Partner with us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
    </>
  );
};

export default CultureAndVisionPage;