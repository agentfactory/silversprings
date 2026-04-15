import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/site/section";
import { programs } from "@/lib/content";
import { cn } from "@/lib/utils";

const bgs: Record<string, string> = {
  sage: "bg-sage-100 hover:bg-sage-300/60",
  terracotta: "bg-terracotta-100 hover:bg-terracotta-100/80",
  cream: "bg-cream-dark hover:bg-cream-dark/80",
};

export function ProgramsGrid() {
  return (
    <Section eyebrow="What we do">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
        <h2 className="font-serif text-4xl lg:text-5xl tracking-[-0.01em] max-w-2xl leading-[1.05]">
          Four programs. One community. Every week of the year.
        </h2>
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 text-ink-soft hover:text-ink"
        >
          See all programs <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {programs.map((p, i) => (
          <Link
            key={p.slug}
            href={`/programs/${p.slug}`}
            className={cn(
              "group relative flex flex-col justify-between rounded-[1.5rem] p-6 min-h-[280px] transition-all duration-300 hover:-translate-y-1",
              bgs[p.color],
              i % 2 === 0 ? "lg:mt-6" : "",
            )}
          >
            <div>
              <div className="relative aspect-[4/3] -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-[1.5rem]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="text-xs tracking-[0.18em] uppercase font-medium text-ink-muted">
                0{i + 1}
              </div>
              <h3 className="mt-4 font-serif text-2xl lg:text-[1.65rem] leading-tight tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-[0.95rem] text-ink-soft leading-snug">{p.tagline}</p>
            </div>
            <div className="mt-8 flex items-center justify-between text-sm text-ink">
              <span className="border-b border-ink/30 group-hover:border-ink pb-0.5">
                Learn more
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
