import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

function IgIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
function FbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-24 bg-sage-900 text-cream">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
        <div className="max-w-sm">
          <p className="font-serif text-2xl leading-tight">
            An inclusive creative community in {site.location}.
          </p>
          <p className="mt-4 text-cream/70 text-sm leading-relaxed">
            {site.name} is supported by {site.parentOrg}. Charity registration #{" "}
            <span className="font-mono text-cream/90">{site.charityRegNumber}</span>. All donations
            over $20 receive a Canadian tax receipt.
          </p>
        </div>

        <nav aria-label="Explore">
          <h3 className="text-sm font-medium tracking-wide uppercase text-cream/50 mb-4">
            Explore
          </h3>
          <ul className="space-y-2.5 text-[0.95rem]">
            {[
              { href: "/our-mission", label: "Our mission" },
              { href: "/programs", label: "Programs" },
              { href: "/stories", label: "Stories" },
              { href: "/shop", label: "Shop" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream/80 hover:text-cream">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Support">
          <h3 className="text-sm font-medium tracking-wide uppercase text-cream/50 mb-4">
            Support
          </h3>
          <ul className="space-y-2.5 text-[0.95rem]">
            {[
              { href: "/donate", label: "Donate" },
              { href: "/get-involved", label: "Volunteer" },
              { href: "/get-involved#intake", label: "Join a program" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream/80 hover:text-cream">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-medium tracking-wide uppercase text-cream/50 mb-4">
            Stay close
          </h3>
          <ul className="space-y-2.5 text-[0.95rem]">
            <li className="flex items-start gap-2 text-cream/80">
              <MapPin className="h-4 w-4 mt-1 shrink-0" aria-hidden />
              <span>{site.address}</span>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-cream/80 hover:text-cream"
              >
                <Mail className="h-4 w-4" aria-hidden /> {site.email}
              </a>
            </li>
            <li className="pt-2 flex gap-2">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 grid place-items-center rounded-full bg-cream/10 hover:bg-cream/20"
                aria-label="Instagram"
              >
                <IgIcon className="h-4 w-4" />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 grid place-items-center rounded-full bg-cream/10 hover:bg-cream/20"
                aria-label="Facebook"
              >
                <FbIcon className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} {site.name}. Built with care.</p>
          <p className="max-w-md md:text-right">
            This site meets WCAG 2.1 AA. If you experience an access barrier,
            <a href={`mailto:${site.email}`} className="underline hover:text-cream ml-1">
              let us know
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
