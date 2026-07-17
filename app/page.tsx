import { CTASection } from "@/components/CTASection";
import { ControlLayer } from "@/components/ControlLayer";
import { EcosystemLayerCard } from "@/components/EcosystemLayerCard";
import { HeroSection } from "@/components/HeroSection";
import { MetricCard } from "@/components/MetricCard";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { creativeXInsights, ecosystemLayers, metrics, products } from "@/lib/content";

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
      <ControlLayer />
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader
              eyebrow="CreativeX 2026"
              title="Branding Thailand in a disrupting world."
              description="CreativeX is now part of the ARITHAYA knowledge layer: a field case for city branding, creative economy strategy, and culture-led intelligence."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {creativeXInsights.slice(0, 4).map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="border border-navy-950/10 bg-mist p-5">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-gold-500" aria-hidden="true" />
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                        {item.label}
                      </p>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-navy-950">{item.title}</h3>
                  </article>
                );
              })}
            </div>
          </div>
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
