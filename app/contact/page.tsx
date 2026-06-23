import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Contact",
  description: "Contact ARITHAYA for partnerships, enterprise programs, and platform collaboration."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Build the Human Intelligence Platform with us."
        description="For partners, investors, enterprise leaders, and builders preparing the next layer of Thailand's human intelligence infrastructure."
      />
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <LeadForm formType="contact" />
        </div>
      </section>
    </>
  );
}
