import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { Sparkles, Leaf } from "lucide-react";

export function JoinCta() {
  return (
    <Section eyebrow="For participants & families">
      <div className="grid lg:grid-cols-2 gap-5">
        <article className="rounded-[1.75rem] bg-sage-900 text-cream p-10 lg:p-12 flex flex-col">
          <Sparkles className="h-8 w-8 text-sage-300 mb-6" aria-hidden />
          <h3 className="font-serif text-3xl lg:text-4xl leading-[1.05] tracking-tight">
            Try a free trial class.
          </h3>
          <p className="mt-4 text-cream/80 leading-relaxed">
            We know committing to a program is a big ask. Come spend a class with us — no cost, no
            pressure. Meet the instructors, see the space, try the work.
          </p>
          <div className="mt-auto pt-8">
            <Button href="/get-involved#trial" size="lg" variant="secondary" className="bg-cream text-ink hover:bg-cream-dark">
              Book a free trial
            </Button>
          </div>
        </article>

        <article className="rounded-[1.75rem] bg-sage-100 p-10 lg:p-12 flex flex-col">
          <Leaf className="h-8 w-8 text-sage-700 mb-6" aria-hidden />
          <h3 className="font-serif text-3xl lg:text-4xl leading-[1.05] tracking-tight">
            Start the intake process.
          </h3>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Ready to join? Our intake form helps us understand who you are, what you&rsquo;re
            excited about, and what support you&rsquo;ll need in the studio. We read every one.
          </p>
          <div className="mt-auto pt-8">
            <Button href="/get-involved#intake" size="lg" variant="primary">
              Begin intake
            </Button>
          </div>
        </article>
      </div>
    </Section>
  );
}
