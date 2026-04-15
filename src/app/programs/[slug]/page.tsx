import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { programs } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.summary };
}

export default async function ProgramPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) notFound();
  const idx = programs.findIndex((x) => x.slug === slug);
  const next = programs[(idx + 1) % programs.length];

  return (
    <>
      <Section eyebrow={`Program · 0${idx + 1}`} className="pt-16 lg:pt-24 max-w-5xl">
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> All programs
        </Link>
        <h1 className="font-serif text-5xl lg:text-7xl leading-[1.02] tracking-[-0.02em]">
          {p.title}
        </h1>
        <p className="mt-6 text-2xl text-terracotta-600 font-serif">{p.tagline}</p>
        <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-3xl">{p.summary}</p>
      </Section>

      <Section className="pt-4">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <ul className="space-y-4 max-w-xl">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-lg text-ink-soft">
                <Check className="h-5 w-5 mt-1 shrink-0 text-sage-700" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <aside className="rounded-[1.5rem] bg-sage-100 p-8">
            <h2 className="font-serif text-2xl leading-tight mb-3">Ready to join?</h2>
            <p className="text-ink-soft leading-relaxed mb-6">
              Start with a free trial class, or begin the intake process.
            </p>
            <div className="flex flex-col gap-2">
              <Button href="/get-involved#trial" size="md">
                Book a trial class
              </Button>
              <Button href="/get-involved#intake" size="md" variant="outline">
                Begin intake
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="pt-0">
        <Link
          href={`/programs/${next.slug}`}
          className="group flex items-center justify-between border-t border-line/70 pt-8"
        >
          <span className="text-sm text-ink-muted">Up next</span>
          <span className="font-serif text-2xl lg:text-3xl group-hover:text-terracotta-600 transition-colors inline-flex items-center gap-3">
            {next.title} <ArrowRight className="h-5 w-5" />
          </span>
        </Link>
      </Section>
    </>
  );
}
