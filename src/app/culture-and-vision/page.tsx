import React from "react";

export const metadata = {
  title: "Culture & Vision | TheTabTech",
  description:
    "Non-hierarchical, growth-minded, and relentlessly customer-focused. Explore TheTabTech’s culture, vision, and core values.",
};

const CultureAndVisionPage: React.FC = () => {
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
            <h1 className="text-4xl font-bold tracking-tight">Culture &amp; Vision</h1>
            <p className="mx-auto mt-3 max-w-2xl text-white/90">
              Collaborative, outcomes-driven, and always learning—how we work and why it matters.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 lg:px-48">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
          {/* Vision */}
          <article>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">Our Vision</h2>
            <p className="leading-relaxed text-zinc-700">
              At the core of our mission, we aspire to be the premier provider of trusted technology
              services within our network—driven by collaboration and forward-thinking innovation.
              Our aim goes beyond meeting expectations: we strive to exceed them, fostering a culture
              of excellence that fuels client and team success.
            </p>
          </article>

          {/* Core Values */}
          <article>
            <h2 className="mb-3 text-2xl font-semibold text-zinc-900">Our Core Values</h2>
            <ul className="list-disc space-y-2 pl-6 text-zinc-700">
              <li>
                Delivering tangible value and transformative outcomes for our clients.
              </li>
              <li>
                Pursuing meaningful innovation—crafting solutions that raise industry standards.
              </li>
              <li>
                Cultivating success through collaborative teamwork and mutual support.
              </li>
              <li>
                Embracing continuous learning: every challenge is an opportunity to grow.
              </li>
            </ul>
          </article>
        </div>

        {/* Optional culture strip */}
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-zinc-900">How we show up</h3>
          <p className="mt-2 text-zinc-700">
            We maintain a non-hierarchical environment with accessible leadership, mentorship
            embedded into project work, and clear paths for professional growth. Our belief is
            simple: client success and team success are inseparable.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="/careers"
            className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Explore careers
          </a>
          <p className="mt-3 text-xs text-zinc-500">
            Want to partner with us?{" "}
            <a className="underline" href="/contact">
              Get in touch
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
};

export default CultureAndVisionPage;
