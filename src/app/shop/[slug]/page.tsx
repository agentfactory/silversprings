import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.description };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <Section className="pt-16 lg:pt-24">
      <Link
        href="/shop"
        className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> All artwork
      </Link>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-warm bg-cream-dark">
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <p className="text-sm text-ink-muted">By {p.artist}</p>
          <h1 className="mt-2 font-serif text-4xl lg:text-6xl leading-[1.02] tracking-[-0.02em]">
            {p.title}
          </h1>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed">{p.description}</p>
          <dl className="mt-8 grid grid-cols-2 gap-6 max-w-md">
            <div>
              <dt className="text-xs tracking-[0.2em] uppercase text-ink-muted">Medium</dt>
              <dd className="mt-1 text-ink">{p.medium}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.2em] uppercase text-ink-muted">Price</dt>
              <dd className="mt-1 text-ink font-serif text-2xl">{p.price}</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Inquire to purchase
            </Button>
            <Button href="/donate" variant="outline" size="lg">
              Support the studio
            </Button>
          </div>
          <p className="mt-5 text-sm text-ink-muted max-w-md">
            Proceeds are split with {p.artist}. A portion supports the studio, materials, and
            instructor time that made this work possible.
          </p>
        </div>
      </div>
    </Section>
  );
}
