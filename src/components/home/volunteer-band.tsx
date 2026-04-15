import { Button } from "@/components/ui/button";
import { Users, Handshake } from "lucide-react";

export function VolunteerBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-terracotta-600 text-cream p-10 lg:p-16 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-terracotta-400/40 blur-3xl" aria-hidden />
        <div className="relative">
          <p className="text-xs tracking-[0.2em] uppercase font-medium text-cream/70 mb-5">
            Ways to show up
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] tracking-[-0.015em]">
            Share an afternoon. Share a skill. Share a garden bed.
          </h2>
          <p className="mt-5 text-cream/85 max-w-xl leading-relaxed">
            Volunteers keep Silver Springs running. If you bake, throw pots, know your perennials,
            can drive a van, or just want to be near a room full of people making things —
            we&rsquo;d love to hear from you.
          </p>
        </div>
        <div className="relative grid gap-3">
          <Button href="/get-involved" size="lg" variant="secondary" className="justify-start">
            <Users className="h-4 w-4" /> Volunteer with us
          </Button>
          <Button
            href="/get-involved#partner"
            size="lg"
            className="bg-cream text-ink hover:bg-cream-dark justify-start"
          >
            <Handshake className="h-4 w-4" /> Partner with us
          </Button>
        </div>
      </div>
    </section>
  );
}
