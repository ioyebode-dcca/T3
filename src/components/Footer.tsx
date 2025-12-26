import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-12 lg:px-32 xl:px-48">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              {/* T3 Stack Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 44 50"
                className="h-8 w-auto"
              >
                <defs>
                  <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#1d4ed8", stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: "#7c3aed", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#10b981", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="24" height="5" rx="1" fill="#1d4ed8" />
                <rect x="0" y="14" width="24" height="5" rx="1" fill="#7c3aed" />
                <rect x="0" y="28" width="24" height="5" rx="1" fill="#10b981" />
                <rect x="9" y="0" width="5" height="40" rx="1" fill="url(#footerGrad)" />
              </svg>
              <span className="text-lg font-bold">TheTabTech</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-zinc-400">
              Cloud, AI, and DevSecOps solutions for organizations that can&apos;t
              afford to fail. Built for impact.
            </p>
            <div className="mt-4 space-y-2 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Laurel, Maryland</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:info@thetabtech.com"
                  className="transition-colors hover:text-white"
                >
                  info@thetabtech.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/what-we-do"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="/who-we-are"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/culture-and-vision"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  Culture & Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  Capabilities
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold text-white">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/careers"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/thetabtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          <p>© {currentYear} TheTabTech, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}