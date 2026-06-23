import { PageHero } from "@/components/PageHero";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";

export const metadata = {
  title: "Roadmap",
  description: "ARITHAYA roadmap from platform foundation to national human intelligence infrastructure."
};

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="Roadmap"
        title="From model to platform to national capability."
        description="The roadmap keeps ARITHAYA focused on evidence, trust, partner readiness, and production-quality platform operations."
      />
      <RoadmapTimeline />
    </>
  );
}
