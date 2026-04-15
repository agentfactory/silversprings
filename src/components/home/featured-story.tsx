import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { stories } from "@/lib/content";

export function FeaturedStory() {
  const story = stories[0];
  return (
    <section className="bg-sage-900 text-cream">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        <figure className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-warm -rotate-2">
          <Image
            src={story.image}
            alt={`Portrait of ${story.name}`}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </figure>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase font-medium text-terracotta-400 mb-5">
            A story from the studio
          </p>
          <Quote className="h-10 w-10 text-cream/40 mb-4" aria-hidden />
          <blockquote className="font-serif text-3xl lg:text-4xl leading-[1.15] tracking-tight">
            &ldquo;{story.quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-cream/80 leading-relaxed max-w-lg">{story.body}</p>
          <p className="mt-5 text-sm text-cream/60">
            — <span className="text-cream/90 font-medium">{story.name}</span>, {story.role}
          </p>
          <Link
            href="/stories"
            className="mt-8 inline-flex items-center gap-2 text-cream border-b border-cream/30 pb-1 hover:border-cream transition-colors"
          >
            Read more stories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
