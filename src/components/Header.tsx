"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Culture & Vision", href: "/culture-and-vision" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-3 md:flex-row lg:px-48">
        {/* Logo and name */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-blue.svg"
            alt="TheTabTech logo"
            width={70}
            height={70}
            priority
            className="h-auto w-auto max-h-14"
            style={{ objectFit: "contain" }}
          />
          <span className="text-lg font-extrabold text-blue-600 tracking-tight">
            THETABTECH
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                pathname === item.href
                  ? "text-blue-600 underline"
                  : "text-zinc-800 hover:text-blue-600"
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
