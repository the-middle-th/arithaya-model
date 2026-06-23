import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "Enterprise",
  description: "Enterprise programs for human intelligence, leadership, and workforce performance."
};

export default function EnterprisePage() {
  return (
    <>
      <PageHero
        eyebrow="Enterprise"
        title="Human intelligence infrastructure for organizations."
        description="ARITHAYA helps leadership teams translate data, learning, and human performance into durable enterprise capability."
      />
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Enterprise solutions"
              title="Programs for leadership, workforce performance, and intelligence culture."
              description="Designed for partners who need measurable capability, responsible AI adoption, and people systems that can scale."
            />
            <div className="mt-8 space-y-4 text-graphite">
              <p>Leadership intelligence labs</p>
              <p>AI readiness and human performance dashboards</p>
              <p>Workforce learning journeys and community activation</p>
            </div>
          </div>
          <LeadForm formType="enterprise" />
        </div>
      </section>
    </>
  );
}
