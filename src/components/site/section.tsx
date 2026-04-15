import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  className,
  children,
}: {
  id?: string;
  eyebrow?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28", className)}>
      {eyebrow && (
        <p className="text-xs tracking-[0.2em] uppercase font-medium text-terracotta-600 mb-5">
          {eyebrow}
        </p>
      )}
      {children}
    </section>
  );
}
