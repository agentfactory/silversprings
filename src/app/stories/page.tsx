import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Section } from "@/components/site/section";
import { stories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stories",
  description: "Voices from the Silver Springs studio.",
};

export default function StoriesPage() {
  return (
    <>
      <Section eyebrow="Stories from the studio" className="pt-16 lg:pt-24 max-w-5xl">
        <h1 className="font-serif text-5xl lg:text-7xl leading-[1.02] tracking-[-0.02em]">
          The work speaks. So do the artists.
        </h1>
      </Section>

      <Section className="pt-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stories.map((s, i) => (
            <article
              key={s.slug}
              className={`rounded-[1.5rem] p-8 lg:p-10 flex flex-col ${
                i % 3 === 0
                  ? "bg-sage-100"
                  : i % 3 === 1
                    ? "bg-terracotta-100"
                    : "bg-cream-dark"
              }`}
            >
              <div className="relative aspect-[4/3] -mx-8 -mt-8 lg:-mx-10 lg:-mt-10 mb-6 overflow-hidden">
                <Image
                  src={s.image}
                  alt={`Portrait of ${s.name}`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <Quote className="h-7 w-7 text-ink-muted mb-5" aria-hidden />
              <blockquote className="font-serif text-xl lg:text-2xl leading-tight tracking-tight">
                &ldquo;{s.quote}&rdquo;
              </blockquote>
              <p className="mt-5 text-ink-soft leading-relaxed text-[0.95rem]">{s.body}</p>
              <p className="mt-6 text-sm text-ink-muted">
                — <span className="text-ink font-medium">{s.name}</span>, {s.role}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
