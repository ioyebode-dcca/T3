"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Who We Are", href: "/who-we-are" },
  { name: "Culture & Vision", href: "/culture-and-vision" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-3 md:flex-row lg:px-32 xl:px-48">
        {/* Logo and name */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo.svg"
            alt="TheTabTech logo"
            width={70}
            height={70}
            priority
            className="h-auto w-auto max-h-14"
            style={{ objectFit: "contain" }}
          />
          <span className="text-lg font-extrabold tracking-tight text-blue-600">
            THETABTECH
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                pathname === item.href
                  ? "bg-blue-50 text-blue-600"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}