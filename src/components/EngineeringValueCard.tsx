import { ShieldCheck } from "lucide-react";

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
    <article className="node-card flex h-full flex-col gap-3 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <ShieldCheck
          className="mt-0.5 h-5 w-5 shrink-0 text-primary"
          aria-hidden="true"
        />
        <h3 className="text-base font-semibold leading-snug">{title}</h3>
      </div>
      <p className="text-sm text-foreground">{benefit}</p>
      <p className="text-xs leading-relaxed text-muted-foreground">{mechanism}</p>
      <p className="mt-auto pt-2 font-mono text-[11px] uppercase tracking-[0.12em] break-words text-primary">
        {label}
      </p>
    </article>
  );
}
