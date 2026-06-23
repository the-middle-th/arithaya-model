import { CTASection } from "@/components/CTASection";
import { EcosystemLayerCard } from "@/components/EcosystemLayerCard";
import { HeroSection } from "@/components/HeroSection";
import { MetricCard } from "@/components/MetricCard";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ecosystemLayers, metrics, products } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="bg-mist px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </section>
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Platform architecture"
            title="A connected intelligence layer for people, organizations, and national capability."
            description="ARITHAYA links trusted knowledge, measurable human performance, AI-enabled data, and community programs into one premium operating model."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ecosystemLayers.slice(0, 6).map((layer) => (
              <EcosystemLayerCard key={layer.title} {...layer} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Products"
            title="Built for learning, performance, and enterprise transformation."
            description="The platform is designed as a portfolio of connected products, not a single-purpose wellness app."
            inverse
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
