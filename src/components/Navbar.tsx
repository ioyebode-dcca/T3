"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Who We Are", href: "/who-we-are" },
  { name: "Culture & Vision", href: "/culture-and-vision" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "data-[active=true]:text-blue-600",
          "data-[active=true]:font-semibold",
        ],
      }}
    >
      {/* Mobile menu toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Logo */}
      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand>
          <NextLink href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="TheTabTech"
              width={180}
              height={180}
              className="h-auto w-auto"
              priority
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop navigation */}
      <NavbarContent className="hidden gap-6 sm:flex" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href} isActive={pathname === item.href}>
            <Link
              as={NextLink}
              href={item.href}
              color={pathname === item.href ? "primary" : "foreground"}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === item.href ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              as={NextLink}
              href={item.href}
              className={`w-full text-lg ${
                pathname === item.href
                  ? "font-semibold text-blue-600"
                  : "text-zinc-700"
              }`}
              onPress={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}