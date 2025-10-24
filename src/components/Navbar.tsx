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
  Button,
} from "@nextui-org/react";

import NextLink from "next/link";
import Image from "next/image";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", link: "https://www.thetabtech.com"},
    { name: "Culture & Vision", link: "/culture-and-vision" },
    { name: "Who we are", link: "/who-we-are" },
    { name: "What we do ", link: "/what-we-do" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">TheTabTech</p>
        </NavbarBrand>
      </NavbarContent> */}
      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">
            <Image src="/logo.svg" alt="TheTabTech" width={180} height={180} objectPosition="left"/>
            {/* <Link href="/" color="foreground">
              TheTabTech
            </Link> */}
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden gap-4 text-foreground sm:flex"
        justify="center"
      >
        {/* <NavbarBrand>
          <p className="font-bold text-inherit">TheTabTech</p>
        </NavbarBrand> */}
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <NextLink href={item.link}>{item.name}</NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.link}
              color="foreground"
              size="lg"
            >
              {/* <NextLink href={item.link} replace={true}>
              {item.name}
            </NextLink> */}
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
