import { impactStats } from "@/lib/content";

export function ImpactStats() {
  return (
    <section aria-label="Our impact" className="border-y border-line/80 bg-cream-dark/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {impactStats.map((s) => (
          <div key={s.label}>
            <div className="font-serif text-4xl lg:text-5xl tracking-tight text-ink">
              {s.value}
            </div>
            <div className="mt-2 text-[0.95rem] text-ink-soft leading-snug">{s.label}</div>
            <div className="mt-0.5 text-xs text-ink-muted">{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
