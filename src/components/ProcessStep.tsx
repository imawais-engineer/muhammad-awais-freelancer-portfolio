const ProcessStep = ({
  step,
  title,
  outcome,
  detail,
}: {
  step: string;
  title: string;
  outcome: string;
  detail: string;
}) => (
  <li className="node-card flex h-full flex-col gap-3 p-5 sm:p-6">
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-sm text-primary">
        {step}
      </span>
      <h3 className="text-base font-semibold leading-snug">{title}</h3>
    </div>
    <p className="text-sm font-medium text-foreground">{outcome}</p>
    <p className="text-sm leading-relaxed text-muted-foreground">{detail}</p>
  </li>
);

export default ProcessStep;
