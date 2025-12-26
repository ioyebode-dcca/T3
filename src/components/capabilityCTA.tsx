import Link from "next/link";

export default function CapabilityCTA() {
  return (
    <section className="bg-zinc-900 py-16">
      <div className="container mx-auto px-4 text-center lg:px-48">
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white">
          LET&apos;S BUILD WHAT MATTERS<span className="text-blue-500">.</span>
        </h2>

        <Link
          href="/TheTabTech-Capability-Statement.pdf"
          target="_blank"
          className="inline-flex items-center rounded-2xl bg-blue-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-blue-600"
        >
          View Capability Statement
        </Link>
      </div>
    </section>
  );
}
