import { Section } from "@/components/site/section";

export function WhyWeExist() {
  return (
    <Section eyebrow="Why we exist" className="max-w-4xl">
      <p className="font-serif text-3xl lg:text-5xl leading-[1.1] tracking-[-0.015em] text-ink">
        When school ends, for many adults with developmental disabilities in Ottawa-Carleton,
        so do the places that take them seriously as <em className="text-terracotta-600" style={{fontStyle:"italic"}}>people making things</em>.
      </p>
      <p className="mt-8 text-lg text-ink-soft max-w-3xl leading-relaxed">
        Silver Springs is a working studio, a working garden, and a working kitchen — where our
        community is expected to create, produce, and take pride in what they make. Not as
        therapy. As practice. Every week, for as long as they want to keep coming.
      </p>
    </Section>
  );
}
