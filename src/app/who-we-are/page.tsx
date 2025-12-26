import React from "react";
import { 
  ArrowRight, 
  Users, 
  Lightbulb, 
  Target, 
  GraduationCap,
  Code,
  Package,
  TestTube,
  Shield,
  Rocket,
  Activity,
} from "lucide-react";

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

/* ---------- Value Card Component ---------- */
type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="group flex items-start gap-4 rounded-xl border border-zinc-200 bg-white/70 p-5 shadow-sm transition-all duration-300 hover:shadow-md">
      <span
        className="rounded-lg bg-blue-50 p-2 text-blue-600 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        {icon}
      </span>
      <div>
        <h3 className="font-semibold text-zinc-900">{title}</h3>
        <p className="mt-1 text-sm text-zinc-600">{description}</p>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
const WhoWeArePage: React.FC = () => {
  return (
    <>
      <SkipLink />
      <main id="main-content">
        {/* Hero with Pipeline Background */}
        <section className="relative h-96 overflow-hidden">
          {/* Gradient base */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-500"
            aria-hidden="true"
          />
          
          {/* Pipeline background illustration */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15" aria-hidden="true">
            <div className="flex items-center gap-4 scale-150">
              {/* Code */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-white/40 bg-white/10">
                <Code size={28} className="text-white" />
              </div>
              <div className="h-0.5 w-12 bg-white/40" />
              
              {/* Build */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-white/40 bg-white/10">
                <Package size={28} className="text-white" />
              </div>
              <div className="h-0.5 w-12 bg-white/40" />
              
              {/* Test */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-white/40 bg-white/10">
                <TestTube size={28} className="text-white" />
              </div>
              <div className="h-0.5 w-12 bg-white/40" />
              
              {/* Secure */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-white/40 bg-white/10">
                <Shield size={28} className="text-white" />
              </div>
              <div className="h-0.5 w-12 bg-white/40" />
              
              {/* Deploy */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-white/40 bg-white/10">
                <Rocket size={28} className="text-white" />
              </div>
              <div className="h-0.5 w-12 bg-white/40" />
              
              {/* Monitor */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-white/40 bg-white/10">
                <Activity size={28} className="text-white" />
              </div>
            </div>
          </div>

          {/* Hero text */}
          <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
            <div className="max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Who We Are
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
                Meet the team delivering secure, mission-ready solutions.
              </p>
              
              {/* Pipeline labels - visible hint */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-medium uppercase tracking-wider text-white/70">
                <span>Code</span>
                <span className="text-white/40">→</span>
                <span>Build</span>
                <span className="text-white/40">→</span>
                <span>Test</span>
                <span className="text-white/40">→</span>
                <span>Secure</span>
                <span className="text-white/40">→</span>
                <span>Deploy</span>
                <span className="text-white/40">→</span>
                <span>Monitor</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-16 lg:px-32 xl:px-48">
          {/* Intro */}
          <div className="mx-auto max-w-3xl space-y-6 text-zinc-700">
            <p className="text-lg leading-relaxed">
              At <strong className="text-zinc-900">TheTabTech</strong>, we are
              dedicated to assembling top-tier professionals, ensuring we remain
              the foremost experts for both our clients and our team members.
              Our culture is intentionally non-hierarchical, fostering
              accessible leadership, abundant professional development,
              ingrained mentoring, and clear pathways for personal growth and
              leadership.
            </p>

            <p className="leading-relaxed">
              We prioritize an exceptional work environment because our
              clients&apos; success is inseparable from the success of our
              people. Our approach to evaluation is straightforward; when
              determining compensation and advancement, we follow two equally
              essential principles:
            </p>

            {/* Principles */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                  1
                </span>
                <p className="text-sm font-medium text-zinc-800">
                  Creating significant value and impact for clients.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50/50 p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  2
                </span>
                <p className="text-sm font-medium text-zinc-800">
                  Achieving success through collaboration and camaraderie.
                </p>
              </div>
            </div>
          </div>

          {/* Founder / Team */}
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {/* Founder Card */}
            <article className="group rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-4">
                {/* Placeholder avatar - replace with actual image */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 text-xl font-bold text-white">
                  IO
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-zinc-900">
                    Israel Oyebode
                  </h2>
                  <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
                    Founder & CEO
                  </p>
                </div>
              </div>

              <p className="leading-relaxed text-zinc-700">
                Israel is the Founder and CEO of TheTabTech and a recognized
                thought leader with extensive experience delivering
                high-performance, cost-effective solutions. He holds a B.Sc. in
                Cybersecurity and an M.S. in Cloud Computing from the University
                of Maryland Global Campus. He helps clients actualize their
                missions through subject-matter expertise, leadership, and
                consistent, high-quality deliverables.
              </p>

              {/* Credentials */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                  B.Sc. Cybersecurity
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                  M.S. Cloud Computing
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                  UMGC
                </span>
              </div>
            </article>

            {/* How We Work Card */}
            <article className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
              <h3 className="mb-4 text-xl font-semibold text-zinc-900">
                How We Work
              </h3>

              <div className="space-y-3">
                <ValueCard
                  icon={<Users size={18} />}
                  title="Clear Ownership"
                  description="Supportive leadership that empowers decision-making."
                />
                <ValueCard
                  icon={<Lightbulb size={18} />}
                  title="Embedded Mentorship"
                  description="Growth integrated into projects and career paths."
                />
                <ValueCard
                  icon={<Target size={18} />}
                  title="Bias for Shipping"
                  description="Deliver value safely and iterate quickly."
                />
                <ValueCard
                  icon={<GraduationCap size={18} />}
                  title="Continuous Learning"
                  description="Certifications, brown-bags, and peer reviews."
                />
              </div>
            </article>
          </div>

          {/* Join Us CTA */}
          <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-gradient-to-r from-blue-700 to-emerald-500 p-8 text-center text-white shadow-lg">
            <h3 className="text-2xl font-bold">Interested in joining us?</h3>
            <p className="mx-auto mt-2 max-w-md text-white/90">
              We&apos;re always looking for talented people who share our values
              and passion for delivering results.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/careers"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow transition-all duration-200 hover:bg-zinc-100 hover:gap-3"
              >
                See careers
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WhoWeArePage;