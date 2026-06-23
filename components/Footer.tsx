import Link from "next/link";
import { footerLinks, partner } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy-950 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 border-t border-white/10 pt-8 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-gold-400">ARITHAYA MODEL</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
            Transform Knowledge into Wisdom. Transform Data into Intelligence. Transform People into Their Best Version.
          </p>
          <p className="mt-5 text-xs text-white/45">
            Founder: {partner.founder}. Technology partner: {partner.technologyPartner}.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-4 md:justify-end">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring text-sm text-white/65 hover:text-gold-400">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
