import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { givingTiers } from "@/lib/content";
import { donorboxUrl } from "@/lib/utils";
import { Heart } from "lucide-react";

export function GivingTiers() {
  return (
    <Section id="give" eyebrow="Your gift at work" className="py-20 lg:py-24">
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] tracking-[-0.015em]">
            A gift of any size <em className="text-terracotta-600" style={{fontStyle:"italic"}}>keeps the studio open</em>.
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed max-w-md">
            Silver Springs is funded by a patchwork of program fees, Passport funding, shop sales —
            and you. Donations cover what the rest can&rsquo;t: accessibility, materials for
            artists without means, and the instructor time that makes this a real studio and not
            just a room with supplies.
          </p>
          <Button href="/donate" size="lg" className="mt-7">
            <Heart className="h-4 w-4" fill="currentColor" />
            Give at your level
          </Button>
        </div>

        <ul className="space-y-3">
          {givingTiers.map((tier) => (
            <li
              key={tier.amount}
              className="group relative rounded-[1.25rem] bg-cream-dark/60 hover:bg-cream-dark p-6 lg:p-7 flex items-start gap-6 transition-colors"
            >
              <div className="shrink-0">
                <div className="font-serif text-3xl lg:text-4xl tracking-tight text-terracotta-600">
                  ${tier.amount}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-xl lg:text-2xl leading-tight tracking-tight">
                  {tier.title}
                </h3>
                <p className="mt-1.5 text-ink-soft leading-relaxed">{tier.impact}</p>
              </div>
              <a
                href={donorboxUrl(tier.amount)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 self-center text-sm font-medium text-ink border border-ink/20 rounded-full px-4 py-2 hover:bg-ink hover:text-cream transition-colors"
              >
                Give ${tier.amount}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
