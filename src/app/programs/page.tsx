import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/site/section";
import { programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Silver Springs runs four programs year-round: visual arts, gardening, cooking, and our artists' shop.",
};

export default function ProgramsIndex() {
  return (
    <>
      <Section eyebrow="Programs" className="pt-16 lg:pt-24 max-w-5xl">
        <h1 className="font-serif text-5xl lg:text-7xl leading-[1.02] tracking-[-0.02em]">
          Four programs. One community.
        </h1>
        <p className="mt-8 text-xl text-ink-soft leading-relaxed max-w-3xl">
          Everything we do is designed to run year-round, at the pace our participants need, with
          the support to make real work they&rsquo;re proud of.
        </p>
      </Section>

      <Section className="pt-4">
        <ul className="divide-y divide-line/70 border-y border-line/70">
          {programs.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/programs/${p.slug}`}
                className="group grid lg:grid-cols-[auto_1fr_1fr_auto] gap-6 lg:gap-10 py-8 lg:py-10 items-center"
              >
                <span className="font-serif text-3xl lg:text-5xl text-ink-muted tabular-nums w-20">
                  0{i + 1}
                </span>
                <h2 className="font-serif text-3xl lg:text-5xl tracking-tight leading-[1.05] group-hover:text-terracotta-600 transition-colors">
                  {p.title}
                </h2>
                <p className="text-ink-soft max-w-md">{p.tagline}</p>
                <ArrowUpRight className="h-6 w-6 text-ink-muted group-hover:text-ink group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
