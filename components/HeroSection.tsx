import Link from "next/link";
import { ArrowRight, Brain, Database, Network } from "lucide-react";
import { partner } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 signal-grid opacity-30" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-400">Human Intelligence Infrastructure for Thailand</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
            ARITHAYA Model
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
            Transform Knowledge into Wisdom. Transform Data into Intelligence. Transform People into Their Best Version.
          </p>
          <div className="mt-7 border-l border-gold-500 pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Founder</p>
            <p className="mt-2 text-2xl font-semibold text-white">{partner.founderThai}</p>
            <p className="mt-1 text-sm text-white/58">{partner.founder}</p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/enterprise" className="focus-ring inline-flex items-center justify-center gap-2 bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950">
              Enterprise partnership <ArrowRight size={18} />
            </Link>
            <Link href="/ecosystem" className="focus-ring inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-semibold text-white">
              Explore ecosystem
            </Link>
          </div>
        </div>
        <div className="relative min-h-[420px]">
          <div className="absolute inset-0 border border-gold-500/30 bg-navy-900/70 shadow-executive" />
          <div className="absolute left-[12%] top-[14%] grid h-24 w-24 place-items-center border border-gold-500/45 bg-navy-950">
            <Brain className="text-gold-400" size={34} />
          </div>
          <div className="absolute right-[10%] top-[28%] grid h-28 w-28 place-items-center border border-white/20 bg-white text-navy-950">
            <Database className="text-gold-500" size={38} />
          </div>
          <div className="absolute bottom-[18%] left-[24%] grid h-32 w-32 place-items-center border border-gold-500 bg-gold-500 text-navy-950">
            <Network size={44} />
          </div>
          <div className="absolute bottom-[12%] right-[14%] max-w-[210px] border border-white/18 bg-navy-950 p-5 text-sm leading-6 text-white/70">
            Knowledge, wellness, AI, data, community, and enterprise capability connected in one operating model.
          </div>
        </div>
      </div>
    </section>
  );
}
