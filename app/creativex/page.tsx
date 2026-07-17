import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { creativeXBrief, creativeXInsights, creativeXProgramFlow } from "@/lib/content";

export const metadata = {
  title: "CreativeX",
  description: "CreativEX 2026 knowledge synthesis for the ARITHAYA Human Intelligence Platform."
};

export default function CreativeXPage() {
  return (
    <>
      <PageHero
        eyebrow={creativeXBrief.event}
        title={creativeXBrief.theme}
        description={creativeXBrief.description}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">
              {creativeXBrief.title}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy-950 md:text-5xl">
              Cultural capital, made operational.
            </h2>
            <p className="mt-5 text-base leading-7 text-graphite md:text-lg">
              CreativeX gives ARITHAYA a practical field case for turning Thai culture, place identity,
              technology, and institutional collaboration into a working intelligence system.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border border-navy-950/10 bg-mist p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">Date</p>
                <p className="mt-3 text-lg font-semibold text-navy-950">{creativeXBrief.date}</p>
              </div>
              <div className="border border-navy-950/10 bg-mist p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">Use Case</p>
                <p className="mt-3 text-lg font-semibold text-navy-950">Creative economy intelligence</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {creativeXBrief.sources.map((source) => (
              <div key={source} className="border border-navy-950/10 bg-mist p-5">
                <p className="text-sm leading-6 text-graphite">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Synthesis"
            title="What CreativeX adds to ARITHAYA."
            description="The event materials become a compact knowledge layer for city branding, creative organization design, and cultural data strategy."
            inverse
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {creativeXInsights.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="border border-white/14 bg-white/[0.04] p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center bg-gold-500 text-navy-950">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                      {item.label}
                    </p>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/65">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Workshop flow"
            title="From Thailand today to a brand people can act on."
            description="The CreativeX design concept moves participants from observation, through disruption analysis, into one future brand idea and implementation pathways."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {creativeXProgramFlow.map((step) => (
              <article key={step.phase} className="border border-navy-950/10 bg-white p-6">
                <p className="text-sm font-semibold text-gold-500">{step.phase}</p>
                <h3 className="mt-4 text-xl font-semibold text-navy-950">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-graphite">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
