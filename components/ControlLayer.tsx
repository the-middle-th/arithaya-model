import { controlSignals, operatingCadence } from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";

export function ControlLayer() {
  return (
    <section className="bg-navy-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Control layer"
          title="One operating rhythm for Codex, Manus, GitHub, and Asian Coding Systems."
          description="The project is controlled through a single source, one visible screen, fixed reporting channels, and short time-boxed execution cycles."
          inverse
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {controlSignals.map((signal) => (
            <article key={signal.title} className="border border-white/14 bg-white/[0.04] p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">{signal.label}</p>
                <signal.icon className="text-gold-400" size={22} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{signal.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{signal.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 border border-gold-500/35 bg-navy-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-400">Operating cadence</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {operatingCadence.map((item, index) => (
              <div key={item} className="flex gap-4 border border-white/10 bg-navy-950/70 p-4">
                <span className="text-sm font-semibold text-gold-400">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-white/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
