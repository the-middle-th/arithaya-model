import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-mist px-6 py-20">
      <div className="mx-auto max-w-7xl border border-navy-950/10 bg-white p-8 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">Partner with ARITHAYA</p>
        <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-navy-950 md:text-5xl">
            Build the intelligence layer for people, teams, and Thailand's future capability.
          </h2>
          <Link href="/contact" className="focus-ring inline-flex items-center justify-center gap-2 bg-navy-950 px-5 py-3 text-sm font-semibold text-white">
            Contact team <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
