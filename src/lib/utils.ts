export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function donorboxUrl(amount?: number) {
  const base = process.env.NEXT_PUBLIC_DONORBOX_URL || "https://donorbox.org/silver-springs-studio";
  return amount ? `${base}?default_interval=o&amount=${amount}` : base;
}
