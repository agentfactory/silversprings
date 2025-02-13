"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import Image from "next/image";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
  { href: "/intake", label: "Intake Form" }
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-200",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-12 h-12 transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/images/logo.svg"
              alt="Silver Spring Studio Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-semibold text-lg tracking-tight">
            Silver Spring Studio
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-teal-600",
                pathname === route.href
                  ? "text-teal-600"
                  : "text-gray-600"
              )}
            >
              {route.label}
            </Link>
          ))}
          <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
            <Link href="/donate">Donate</Link>
          </Button>
          <Button asChild variant="default" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/contact">Join Us</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}