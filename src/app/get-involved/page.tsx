import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SimpleForm } from "@/components/forms/simple-form";
import { Users, Handshake, Sparkles, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Volunteer, partner, book a free trial class, or start the intake process for Silver Springs Studio programs.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <Section eyebrow="Get involved" className="pt-16 lg:pt-24 max-w-5xl">
        <h1 className="font-serif text-5xl lg:text-7xl leading-[1.02] tracking-[-0.02em]">
          There are four ways to show up.
        </h1>
      </Section>

      <Section id="trial" className="pt-4">
        <div className="grid lg:grid-cols-[0.9fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Sparkles className="h-8 w-8 text-terracotta-600 mb-4" />
            <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              Book a free trial class.
            </h2>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">
              No cost, no pressure. Spend a class with us — meet the instructors, see the studio,
              try the work. We&rsquo;ll be in touch within a few days to schedule.
            </p>
          </div>
          <SimpleForm
            endpoint="/api/contact"
            submitLabel="Request a trial class"
            fields={[
              { name: "name", label: "Your name", required: true },
              { name: "participant", label: "Participant's name (if different)" },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone (optional)", type: "tel" },
              {
                name: "message",
                label: "Tell us a little about who'd be joining",
                type: "textarea" as const,
                placeholder: "What are they excited about? What support do they need?",
              },
            ]}
          />
        </div>
      </Section>

      <Section id="intake" className="pt-4">
        <div className="rounded-[1.75rem] bg-sage-100 p-10 lg:p-14 grid lg:grid-cols-[0.9fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Leaf className="h-8 w-8 text-sage-700 mb-4" />
            <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              Begin intake.
            </h2>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">
              Ready to join a program? This form helps us understand who you are, what
              you&rsquo;re excited about, and what support will make the studio work for you. We
              read every one.
            </p>
          </div>
          <SimpleForm
            endpoint="/api/intake"
            submitLabel="Submit intake"
            successMessage="Thank you. Our team reads every intake carefully — we'll be in touch within a week."
            fields={[
              { name: "participant", label: "Participant's full name", required: true },
              { name: "age", label: "Age" },
              { name: "guardian", label: "Guardian / support contact (if applicable)" },
              { name: "email", label: "Contact email", type: "email", required: true },
              { name: "phone", label: "Contact phone", type: "tel" },
              {
                name: "programs",
                label: "Which programs are you interested in?",
                placeholder: "e.g. Visual arts, cooking, gardening",
              },
              {
                name: "supports",
                label: "What supports will help you thrive in the studio?",
                type: "textarea",
                placeholder: "Accessibility, communication, sensory, anything we should know",
              },
              {
                name: "funding",
                label: "Are you using Passport or other funding?",
              },
            ]}
          />
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid lg:grid-cols-2 gap-5">
          <article className="rounded-[1.5rem] bg-cream-dark p-10 flex flex-col">
            <Users className="h-8 w-8 text-sage-700 mb-5" />
            <h2 className="font-serif text-3xl leading-tight tracking-tight">Volunteer</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Help in the studio, in the gardens, in the kitchen, or behind the scenes. Weekly,
              monthly, or one-off — whatever you&rsquo;ve got.
            </p>
            <a
              href="/contact?topic=volunteer"
              className="mt-6 inline-flex items-center gap-2 text-ink font-medium border-b border-ink/40 hover:border-ink pb-0.5 w-fit"
            >
              Tell us how you&rsquo;d like to help
            </a>
          </article>

          <article id="partner" className="rounded-[1.5rem] bg-cream-dark p-10 flex flex-col">
            <Handshake className="h-8 w-8 text-terracotta-600 mb-5" />
            <h2 className="font-serif text-3xl leading-tight tracking-tight">Partner</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Corporate sponsorships, in-kind supply donations, exhibition partners, and community
              collaborations — we&rsquo;re open to conversations.
            </p>
            <a
              href="/contact?topic=partner"
              className="mt-6 inline-flex items-center gap-2 text-ink font-medium border-b border-ink/40 hover:border-ink pb-0.5 w-fit"
            >
              Start a conversation
            </a>
          </article>
        </div>
      </Section>
    </>
  );
}
