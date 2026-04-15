"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/our-mission", label: "Our mission" },
  { href: "/programs", label: "Programs" },
  { href: "/stories", label: "Stories" },
  { href: "/shop", label: "Shop" },
  { href: "/get-involved", label: "Get involved" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/80 border-b border-line/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="h-9 w-9 rounded-full bg-sage-700 grid place-items-center text-cream font-serif text-lg transition-transform group-hover:rotate-6">
            <span className="sr-only">Silver Springs Studio home</span>
            <span aria-hidden>S</span>
          </span>
          <span className="font-serif text-[1.15rem] leading-none tracking-tight">
            Silver Springs<span className="text-terracotta-600">.</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-[0.95rem] text-ink-soft hover:text-ink rounded-full hover:bg-ink/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button href="/donate" size="sm" className="gap-1.5">
            <Heart className="h-4 w-4" strokeWidth={2.25} fill="currentColor" />
            Donate
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 rounded-full hover:bg-ink/5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden overflow-hidden border-t border-line/60 transition-[max-height] duration-300",
          open ? "max-h-[420px]" : "max-h-0",
        )}
      >
        <nav aria-label="Mobile" className="px-5 py-4 flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-ink-soft hover:text-ink rounded-xl hover:bg-ink/5"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/donate" size="md" className="mt-3 w-full">
            <Heart className="h-4 w-4" fill="currentColor" />
            Donate
          </Button>
        </nav>
      </div>
    </header>
  );
}
