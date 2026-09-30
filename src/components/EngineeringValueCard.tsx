interface EngineeringValueCardProps {
  title: string;
  benefit: string;
  mechanism: string;
  label: string;
}

export default function EngineeringValueCard({
  title,
  benefit,
  mechanism,
  label,
}: EngineeringValueCardProps) {
  return (
    <article className="node-card-muted flex h-full flex-col gap-3 p-5">
      <h3 className="text-sm font-semibold leading-snug sm:text-base">{title}</h3>
      <p className="text-base leading-relaxed text-foreground">{benefit}</p>
      <p className="text-base leading-relaxed text-muted-foreground">{mechanism}</p>
      <p className="mt-auto pt-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] break-words text-primary">
        {label}
      </p>
    </article>
  );
}
