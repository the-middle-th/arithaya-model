import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/PageHero";
import { products } from "@/lib/content";

export const metadata = {
  title: "Products",
  description: "ARITHAYA products for knowledge, performance, AI insights, and enterprise transformation."
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A premium product system for human capability."
        description="Each product is designed to create measurable progress while preserving ARITHAYA's calm, trusted, human-centered experience."
      />
      <section className="bg-navy-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </section>
    </>
  );
}
