import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-sage-50" />
        <div className="absolute -top-40 -right-20 h-[520px] w-[520px] rounded-full bg-terracotta-100/60 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 -left-10 h-[420px] w-[420px] rounded-full bg-sage-100 blur-3xl" aria-hidden />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-20 lg:pt-28 lg:pb-32 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium text-sage-700 bg-sage-100 px-3 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-500 animate-pulse" aria-hidden />
            An Ottawa-Carleton artist community
          </p>
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-[4.5rem] leading-[0.98] tracking-[-0.02em] text-ink">
            Creativity doesn&rsquo;t have an <em className="text-terracotta-600 font-serif not-italic" style={{ fontStyle: "italic" }}>age limit</em>.
            <br />Or a <em className="text-sage-700 font-serif" style={{ fontStyle: "italic" }}>diagnosis</em>.
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-ink-soft max-w-xl leading-relaxed">
            {site.name} is a working studio and farm where adults with developmental
            disabilities make art, grow food, and build belonging — every single week.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/donate" size="lg">
              <Heart className="h-4 w-4" fill="currentColor" />
              Support our artists
            </Button>
            <Button href="/programs" size="lg" variant="outline">
              Explore our programs
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Every donation over $20 receives a Canadian tax receipt.
          </p>
        </div>

        <figure className="relative aspect-[4/5] lg:aspect-[5/6] rounded-[2rem] overflow-hidden shadow-warm rotate-[1.5deg]">
          <Image
            src="/images/imported/hero.jpg"
            alt="Silver Springs studio participants at work"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
            priority
          />
        </figure>
      </div>
    </section>
  );
}
