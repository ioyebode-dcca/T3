import Image from "next/image";
import Link from "next/link";
import {
  Cloud,
  Network,
  LifeBuoy,
  ArrowRight,
  FileText,
  CheckCircle,
  type LucideIcon,
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

/* ---------- Small typed card component ---------- */
type TeaserProps = {
  Icon: LucideIcon;
  title: string;
  blurb: string;
  href: string;
  accentColor?: string;
};

function Teaser({
  Icon,
  title,
  blurb,
  href,
  accentColor = "red",
}: TeaserProps) {
  const colorClasses: Record<string, string> = {
    red: "bg-red-50 text-red-500",
    blue: "bg-blue-50 text-blue-500",
    emerald: "bg-emerald-50 text-emerald-500",
  };

  return (
    <article className="group w-full max-w-md rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-3 flex items-center gap-3">
        <span
          className={`rounded-xl p-3 transition-transform duration-300 group-hover:scale-110 ${colorClasses[accentColor]}`}
          aria-hidden="true"
        >
          <Icon size={24} />
        </span>
        <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-zinc-600">{blurb}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition-all duration-200 hover:border-zinc-400 hover:bg-zinc-50 hover:gap-3"
        aria-label={`Learn more about ${title}`}
      >
        Learn more
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}

/* ---------- Trust Metric Component ---------- */
type MetricProps = {
  value: string;
  label: string;
};

function Metric({ value, label }: MetricProps) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle size={16} className="text-emerald-500" aria-hidden="true" />
      <span>
        <span className="font-semibold text-zinc-900">{value}</span>{" "}
        <span className="text-zinc-600">{label}</span>
      </span>
    </div>
  );
}

/* ---------- Page ---------- */
export default function HomePage() {
  return (
    <>
      <SkipLink />
      <main id="main-content">
        {/* HERO */}
        <section className="relative h-[420px] overflow-hidden">
          <Image
            src="/hero/new-background.jpg"
            alt="Human and robotic hand connecting with AI circuitry in background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-emerald-600/75"
            aria-hidden="true"
          />
          {/* Copy */}
          <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Secure Cloud. Automated Delivery.
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                Mission-ready systems for regulated environments—built to ship
                faster, reduce risk, and control costs.
              </p>

              {/* HERO CTAs */}
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                {/* PDF Button */}
                <a
                  href="/TheTabTech-Capability-Statement.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl hover:gap-3"
                >
                  <FileText size={18} aria-hidden />
                  View Capability Statement
                </a>

                <Link
                  href="/what-we-do"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/90 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg transition-all duration-200 hover:bg-white hover:shadow-xl"
                >
                  What we do
                  <ArrowRight size={18} aria-hidden />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white"
                >
                  Contact us
                </Link>
              </div>

              {/* Optional SEO-friendly link to the page */}
              <div className="mt-6">
                <Link
                  href="/capabilities"
                  className="text-sm text-white/80 underline underline-offset-4 transition-colors hover:text-white"
                >
                  View capabilities page
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro & Teasers */}
        <section className="container mx-auto px-4 py-16 lg:px-32 xl:px-48">
          <p className="mx-auto max-w-3xl text-center text-lg text-zinc-700">
            We help regulated teams design, secure, and automate cloud
            platforms—so you can ship faster, reduce risk, and control costs.
          </p>

          {/* Services teaser */}
          <div className="mt-12 grid grid-cols-1 place-items-center gap-8 md:grid-cols-3">
            <Teaser
              Icon={Network}
              title="CIO Advisory"
              blurb="Strategy, governance, and vendor selection translated into measurable business results."
              href="/what-we-do#cio-advisory"
              accentColor="blue"
            />
            <Teaser
              Icon={Cloud}
              title="Cloud & DevOps"
              blurb="Secure landing zones, CI/CD, and infra-as-code to deliver reliably at scale."
              href="/what-we-do#cloud-devops"
              accentColor="emerald"
            />
            <Teaser
              Icon={LifeBuoy}
              title="Health IT"
              blurb="Interoperability and reliability engineering tailored to healthcare and compliance."
              href="/what-we-do#health-it"
              accentColor="red"
            />
          </div>

          {/* Trust strip - improved layout */}
          <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-zinc-200 bg-gradient-to-r from-white/80 to-zinc-50/80 p-6 backdrop-blur">
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Proven Results
            </p>
            <div className="flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-8">
              <Metric value="-30%" label="cloud spend in 90 days" />
              <Metric value="99.95%" label="uptime SLA" />
              <Metric value="STIG/NIST" label="Policy-as-Code pipelines" />
            </div>
          </div>
        </section>

        {/* Big CTA section */}
        <section className="bg-zinc-900 py-20">
          <div className="container mx-auto px-4 text-center lg:px-32 xl:px-48">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              LET&apos;S BUILD WHAT MATTERS
              <span className="text-blue-500">.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-zinc-400">
              Ready to modernize your infrastructure? Let&apos;s talk about your
              goals.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/TheTabTech-Capability-Statement.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl hover:gap-3"
              >
                <FileText size={18} aria-hidden />
                View Capability Statement
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
              >
                Schedule a Call
                <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}