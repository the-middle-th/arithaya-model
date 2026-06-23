type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
};

export function SectionHeader({ eyebrow, title, description, inverse = false }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-semibold leading-tight md:text-5xl ${inverse ? "text-white" : "text-navy-950"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-7 md:text-lg ${inverse ? "text-white/65" : "text-graphite"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
