import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { ImpactStats } from "@/components/home/impact-stats";
import { site } from "@/lib/content";
import { Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Our mission",
  description:
    "Silver Springs Studio is a working studio and farm where adults with developmental disabilities make art, grow food, and build belonging — every week of the year.",
};

export default function MissionPage() {
  return (
    <>
      <Section eyebrow="Our mission" className="pt-16 lg:pt-24 max-w-5xl">
        <h1 className="font-serif text-5xl lg:text-7xl leading-[1.02] tracking-[-0.02em]">
          We take our artists <em className="text-terracotta-600" style={{fontStyle:"italic"}}>seriously</em>.
        </h1>
        <p className="mt-8 text-xl text-ink-soft leading-relaxed max-w-3xl">
          Silver Springs was founded on a simple idea: that adults with developmental disabilities
          deserve a place that expects them to create, produce, and take pride in what they make.
          Not as a pastime. As a practice.
        </p>
      </Section>

      <ImpactStats />

      <Section className="max-w-4xl">
        <div className="grid gap-12 text-lg text-ink-soft leading-relaxed">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-tight mb-4 tracking-tight">
              Who we serve
            </h2>
            <p>
              Our community is adults 16 and older with developmental disabilities across
              Ottawa-Carleton. We work closely with {site.parentOrg} so that Passport funding,
              transportation, and support plans work <em>with</em> our programs — not around them.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-tight mb-4 tracking-tight">
              How we work
            </h2>
            <p>
              Small groups. Practicing artists as instructors. Real materials. Real kitchens. Real
              gardens. We meet every participant where they are and give them room to grow at
              their own pace — without ever underestimating what they can do.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-tight mb-4 tracking-tight">
              Why donations matter
            </h2>
            <p>
              Passport funding covers part of the cost of a program. Shop sales cover some more.
              Between those two and what it actually costs to keep a studio running — a studio
              with the right materials, a real instructor, an accessible space — there is a gap.
              Donations fill that gap. They&rsquo;re what keeps a participant in the program when
              their family can&rsquo;t cover fees. They&rsquo;re what buys an accessible workbench
              or a new kiln. They&rsquo;re what make sure we can keep saying yes.
            </p>
            <div className="mt-7">
              <Button href="/donate" size="lg">
                <Heart className="h-4 w-4" fill="currentColor" /> Donate now
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
