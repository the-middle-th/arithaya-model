import { KnowledgeCard } from "@/components/KnowledgeCard";
import { PageHero } from "@/components/PageHero";
import { knowledgeAssets } from "@/lib/content";

export const metadata = {
  title: "Knowledge",
  description: "Knowledge assets from the ARITHAYA Human Intelligence Platform."
};

export default function KnowledgePage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge"
        title="Transform knowledge into wisdom."
        description="ARITHAYA knowledge assets translate research, lived practice, and enterprise insight into usable intelligence."
      />
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {knowledgeAssets.map((asset) => (
            <KnowledgeCard key={asset.slug} {...asset} />
          ))}
        </div>
      </section>
    </>
  );
}
