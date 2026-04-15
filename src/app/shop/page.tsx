import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/site/section";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Artists' Shop",
  description:
    "Original works made by Silver Springs artists. Proceeds are split with the artist who made it.",
};

export default function ShopIndex() {
  return (
    <>
      <Section eyebrow="The artists' shop" className="pt-16 lg:pt-24 max-w-5xl">
        <h1 className="font-serif text-5xl lg:text-7xl leading-[1.02] tracking-[-0.02em]">
          Every piece is made by <em className="text-terracotta-600" style={{fontStyle:"italic"}}>one of our artists</em>.
        </h1>
        <p className="mt-8 text-xl text-ink-soft leading-relaxed max-w-3xl">
          When you buy, you support the artist directly — and help sustain the studio that made it
          possible.
        </p>
      </Section>

      <Section className="pt-4">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p) => (
            <li key={p.slug}>
              <Link href={`/shop/${p.slug}`} className="group block">
                <div
                  className="aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-4 relative"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-sage-300), var(--color-terracotta-400))",
                  }}
                >
                  <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full opacity-80" aria-hidden>
                    <circle cx="200" cy="200" r="110" fill="#faf6ee" opacity="0.55" />
                    <rect x="80" y="320" width="240" height="140" rx="16" fill="#2b3a21" opacity="0.4" />
                  </svg>
                  <div className="absolute inset-0 ring-1 ring-inset ring-ink/5 rounded-[1.5rem] group-hover:ring-ink/15 transition" />
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl leading-tight tracking-tight group-hover:text-terracotta-600 transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-ink-soft text-sm shrink-0">{p.price}</span>
                </div>
                <p className="mt-1 text-sm text-ink-muted">
                  by {p.artist} · {p.medium}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
