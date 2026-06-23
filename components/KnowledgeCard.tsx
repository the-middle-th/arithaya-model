type KnowledgeCardProps = {
  title: string;
  slug: string;
  category: string;
  summary: string;
  isPremium: boolean;
};

export function KnowledgeCard({ title, category, summary, isPremium }: KnowledgeCardProps) {
  return (
    <article className="border border-navy-950/10 bg-mist p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">{category}</p>
        {isPremium && <span className="border border-gold-500 px-2 py-1 text-xs text-gold-500">Premium</span>}
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-navy-950">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-graphite">{summary}</p>
    </article>
  );
}
