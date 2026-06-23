import type { LucideIcon } from "lucide-react";

type EcosystemLayerCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function EcosystemLayerCard({ title, description, icon: Icon }: EcosystemLayerCardProps) {
  return (
    <article className="border border-navy-950/10 bg-mist p-6">
      <div className="grid h-11 w-11 place-items-center border border-gold-500 text-gold-500">
        <Icon size={22} />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-navy-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-graphite">{description}</p>
    </article>
  );
}
