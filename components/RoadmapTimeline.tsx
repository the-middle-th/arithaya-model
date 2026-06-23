import { roadmap } from "@/lib/content";

export function RoadmapTimeline() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6">
          {roadmap.map((item) => (
            <article key={item.phase} className="grid gap-5 border border-navy-950/10 bg-mist p-6 md:grid-cols-[160px_1fr]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">{item.phase}</p>
              <div>
                <h2 className="text-2xl font-semibold text-navy-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-graphite">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
