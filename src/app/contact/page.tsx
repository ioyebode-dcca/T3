"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

// Replace with your Formspree form ID after signing up at formspree.io
const FORMSPREE_ID = "mzdbzaly";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-500"
          aria-hidden="true"
        />
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 md:text-lg">
              Let&apos;s talk about how we can help secure and automate your mission-critical systems.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-16 lg:px-32 xl:px-48">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-zinc-900">
                Get in Touch
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-600">
                Have a question or want to discuss a potential project? We&apos;d love
                to hear from you. Reach out and our team will respond within 24
                hours.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Email</h3>
                    <a
                      href="mailto:info@thetabtech.com"
                      className="text-blue-600 hover:underline"
                    >
                      info@thetabtech.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Location</h3>
                    <p className="text-zinc-600">Laurel, MD</p>
                    <p className="text-sm text-zinc-500">
                      Serving clients nationwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick response note */}
              <div className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-sm text-zinc-600">
                  <strong className="text-zinc-900">Quick response guaranteed.</strong>{" "}
                  We typically respond to all inquiries within one business day.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-2 text-xl font-bold text-zinc-900">
                Send a Message
              </h3>
              <p className="mb-6 text-sm text-zinc-600">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="mb-2 text-xl font-semibold text-zinc-900">
                    Message Sent!
                  </h4>
                  <p className="text-zinc-600">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-medium text-blue-600 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Name *
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="mt-1.5 w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Email *
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className="mt-1.5 w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      Organization
                      <input
                        type="text"
                        name="organization"
                        placeholder="Your company or agency"
                        className="mt-1.5 w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700">
                      How can we help? *
                      <textarea
                        name="message"
                        rows={5}
                        required
                        placeholder="Tell us about your project or question..."
                        className="mt-1.5 w-full resize-none rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </label>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                      <AlertCircle size={18} />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}