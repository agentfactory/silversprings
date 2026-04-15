import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { givingTiers, site } from "@/lib/content";
import { donorboxUrl } from "@/lib/utils";
import { Heart, ShieldCheck, Receipt } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Silver Springs Studio. Every donation over $20 receives a Canadian tax receipt and keeps our studio, gardens, and kitchen open.",
};

export default function DonatePage() {
  return (
    <>
      <Section eyebrow="Support Silver Springs" className="pt-16 lg:pt-24 max-w-5xl">
        <h1 className="font-serif text-5xl lg:text-7xl leading-[1.02] tracking-[-0.02em]">
          Your gift keeps the <em className="text-terracotta-600" style={{fontStyle:"italic"}}>studio open</em>.
        </h1>
        <p className="mt-8 text-xl text-ink-soft leading-relaxed max-w-2xl">
          Silver Springs is a registered Canadian charity. Every donation over $20 receives a CRA
          tax receipt, and 100% of what you give supports our artists, their materials, and the
          instructors who make this studio a real one.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm text-ink-soft">
          <span className="inline-flex items-center gap-2 bg-cream-dark px-3.5 py-2 rounded-full">
            <ShieldCheck className="h-4 w-4 text-sage-700" /> Secure through Donorbox
          </span>
          <span className="inline-flex items-center gap-2 bg-cream-dark px-3.5 py-2 rounded-full">
            <Receipt className="h-4 w-4 text-sage-700" /> Automatic tax receipt
          </span>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 items-start">
          <div className="rounded-[1.75rem] bg-cream-dark p-4 shadow-soft min-h-[600px]">
            {/* Donorbox embed slot. TODO(denis): set NEXT_PUBLIC_DONORBOX_URL env var. */}
            <iframe
              title="Donate to Silver Springs Studio via Donorbox"
              src={`https://donorbox.org/embed/${site.donorboxCampaign}`}
              name="donorbox"
              seamless
              allow="payment"
              height="600"
              width="100%"
              style={{ maxWidth: 500, minWidth: 250, borderRadius: 16, border: "none" }}
            />
            <noscript>
              Please{" "}
              <a href={donorboxUrl()} target="_blank" rel="noopener noreferrer" className="underline">
                donate at Donorbox
              </a>
              .
            </noscript>
          </div>

          <div>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight tracking-tight">
              Give at your level.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Every tier is a real line-item in our studio budget. Click any amount to pre-fill it
              in the donation form.
            </p>
            <ul className="mt-8 space-y-3">
              {givingTiers.map((tier) => (
                <li
                  key={tier.amount}
                  className="rounded-[1.25rem] bg-cream-dark/70 p-6 flex items-start gap-5"
                >
                  <div className="font-serif text-3xl text-terracotta-600 shrink-0 w-20">
                    ${tier.amount}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-ink">{tier.title}</div>
                    <p className="text-sm text-ink-soft mt-0.5">{tier.impact}</p>
                  </div>
                  <Button href={donorboxUrl(tier.amount)} variant="outline" size="sm" className="self-center">
                    Give
                  </Button>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-[1.25rem] bg-sage-900 text-cream p-8">
              <Heart className="h-6 w-6 text-terracotta-400 mb-3" fill="currentColor" />
              <p className="font-serif text-xl leading-tight">
                Prefer to give monthly?
              </p>
              <p className="mt-2 text-cream/80 leading-relaxed text-sm">
                Monthly donors are the backbone of our studio. Choose &ldquo;monthly&rdquo; in the
                Donorbox form to set up a recurring gift in under a minute.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
