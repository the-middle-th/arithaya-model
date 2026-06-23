import { EcosystemLayerCard } from "@/components/EcosystemLayerCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ecosystemLayers } from "@/lib/content";

export const metadata = {
  title: "Ecosystem",
  description: "Explore the ARITHAYA Human Intelligence Platform ecosystem."
};

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem"
        title="Seven layers working as one Human Intelligence Platform."
        description="ARITHAYA creates a shared infrastructure where knowledge, wellness, performance, AI, community, data, and enterprise solutions reinforce each other."
      />
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Layer model"
            title="Each layer is valuable alone. Together, they create compounding intelligence."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ecosystemLayers.map((layer) => (
              <EcosystemLayerCard key={layer.title} {...layer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
