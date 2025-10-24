import React from "react";

const WhoWeArePage: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-80 overflow-hidden">
        {/* Optional background image */}
        {/* <img src="/background-image.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" /> */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-400 opacity-80"
          aria-hidden="true"
        />
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">Our Culture</h1>
            <p className="mx-auto mt-3 max-w-2xl text-white/90">
              Non-hierarchical, growth-minded, and relentlessly customer-focused.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 lg:px-48">
        {/* Intro */}
        <div className="mx-auto max-w-3xl space-y-6 text-zinc-800">
          <p>
            At <strong>TheTabTech</strong>, we are dedicated to assembling top-tier professionals,
            ensuring we remain the foremost experts for both our clients and our team members.
            Our culture is intentionally non-hierarchical, fostering accessible leadership,
            abundant professional development, ingrained mentoring, and clear pathways for
            personal growth and leadership.
          </p>

          <p>
            We prioritize an exceptional work environment because our clients’ success is
            inseparable from the success of our people. Our approach to evaluation is
            straightforward; when determining compensation and advancement, we follow two
            equally essential principles:
          </p>

          {/* Valid ordered list (not nested inside a <p>) */}
          <ol className="list-decimal space-y-2 pl-6">
            <li>Creating significant value and impact for clients.</li>
            <li>Achieving success through collaboration and camaraderie.</li>
          </ol>
        </div>

        {/* Founder / Team */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm">
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">Israel Oyebode</h2>
            <p className="text-sm uppercase tracking-wide text-zinc-500">Founder & CEO</p>

            {/* Optional headshot */}
            {/* <img
              src="/team/israel-oyebode.jpg"
              alt="Portrait of Israel Oyebode"
              className="mt-4 h-40 w-40 rounded-xl object-cover"
            /> */}

            <p className="mt-4 leading-relaxed text-zinc-700">
              Israel is the Founder and CEO of TheTabTech and a recognized thought leader
              with extensive experience delivering high-performance, cost-effective solutions.
              He holds a B.Sc. in Cybersecurity and an M.S. in Cloud Computing from the
              University of Maryland Global Campus. He helps clients actualize their missions
              through subject-matter expertise, leadership, and consistent, high-quality
              deliverables.
            </p>
          </article>

          {/* Add more leaders or culture highlights here if you want */}
          <article className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-zinc-900">How we work</h3>
            <ul className="list-disc space-y-2 pl-6 text-zinc-700">
              <li>Clear ownership with supportive leadership.</li>
              <li>Mentorship embedded into projects and career paths.</li>
              <li>Bias for shipping value safely and iterating quickly.</li>
              <li>Continuous learning: certifications, brown-bags, and peer reviews.</li>
            </ul>

            <div className="mt-6 rounded-xl bg-zinc-50 p-4 text-sm text-zinc-600">
              Interested in joining us?{" "}
              <a className="font-medium text-zinc-900 underline" href="/careers">
                See careers
              </a>{" "}
              or{" "}
              <a className="font-medium text-zinc-900 underline" href="/contact">
                get in touch
              </a>
              .
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default WhoWeArePage;
