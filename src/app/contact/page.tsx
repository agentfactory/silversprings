import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SimpleForm } from "@/components/forms/simple-form";
import { site } from "@/lib/content";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Silver Springs Studio.",
};

export default function ContactPage() {
  return (
    <>
      <Section eyebrow="Contact" className="pt-16 lg:pt-24 max-w-5xl">
        <h1 className="font-serif text-5xl lg:text-7xl leading-[1.02] tracking-[-0.02em]">
          Say hello.
        </h1>
        <p className="mt-8 text-xl text-ink-soft max-w-2xl leading-relaxed">
          Whether you&rsquo;re a prospective participant, a family, a volunteer, or just curious —
          we&rsquo;d love to hear from you.
        </p>
      </Section>

      <Section className="pt-4">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
          <aside className="space-y-5 text-ink-soft">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5 text-sage-700" />
              <div>
                <div className="text-ink font-medium">Silver Springs Farm</div>
                <div>{site.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 mt-0.5 text-sage-700" />
              <a href={`mailto:${site.email}`} className="text-ink hover:underline">
                {site.email}
              </a>
            </div>
          </aside>

          <SimpleForm
            endpoint="/api/contact"
            fields={[
              { name: "name", label: "Your name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "topic", label: "What's this about?" },
              { name: "message", label: "Message", type: "textarea", required: true },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
