type MetricCardProps = {
  value: string;
  label: string;
  detail: string;
};

export function MetricCard({ value, label, detail }: MetricCardProps) {
  return (
    <article className="border border-navy-950/10 bg-white p-6">
      <p className="text-5xl font-semibold text-gold-500">{value}</p>
      <h3 className="mt-4 text-lg font-semibold text-navy-950">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-graphite">{detail}</p>
    </article>
  );
}
