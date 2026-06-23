type ProductCardProps = {
  title: string;
  category: string;
  description: string;
};

export function ProductCard({ title, category, description }: ProductCardProps) {
  return (
    <article className="border border-white/14 bg-white/[0.04] p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">{category}</p>
      <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-white/65">{description}</p>
    </article>
  );
}
