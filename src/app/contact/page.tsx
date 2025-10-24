import React from "react";

export const metadata = {
  title: "Contact | TheTabTech",
  description:
    "Get in touch with TheTabTech. Reach out for project inquiries, partnerships, or general questions.",
};

const ContactPage: React.FC = () => {
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
            <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
            <p className="mx-auto mt-3 max-w-2xl text-white/90">
              Let’s talk about how we can collaborate and help you reach your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 font-light lg:px-48">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
            Get in Touch
          </h2>
          <p className="mb-8 text-lg text-zinc-700">
            Have a question or want to discuss a potential project? We’d love to
            hear from you. Reach out via email, and our team will respond promptly.
          </p>

          <p className="mb-4 text-2xl font-bold">
            <a
              href="mailto:info@thetabtech.com"
              className="text-blue-600 underline hover:text-blue-800"
            >
              info@thetabtech.com
            </a>
          </p>
          <p className="text-lg text-zinc-700">
            We’ll do our best to respond to your inquiry as soon as possible.
          </p>
        </div>

        {/* Optional: simple contact form */}
        <form
          action="mailto:info@thetabtech.com"
          method="post"
          encType="text/plain"
          className="mx-auto mt-10 max-w-lg space-y-4 rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm"
        >
          <h3 className="text-xl font-semibold text-zinc-900">Send a Message</h3>
          <p className="text-sm text-zinc-600">
            You can also send us a quick message here.
          </p>
          <div>
            <label className="block text-sm text-zinc-700">
              Name
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm text-zinc-700">
              Email
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm text-zinc-700">
              Message
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded-2xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
