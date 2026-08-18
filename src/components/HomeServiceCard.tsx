const HomeServiceCard = ({
  title,
  problem,
  solution,
  outcome,
  tools,
}: {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  tools: string;
}) => (
  <article className="node-card flex h-full flex-col gap-3 p-6">
    <h3 className="text-lg font-semibold leading-snug">{title}</h3>

    <div className="space-y-2 text-sm leading-relaxed">
      <p>
        <span className="text-muted-foreground">Problem:</span>{" "}
        <span className="text-foreground">{problem}</span>
      </p>
      <p>
        <span className="text-muted-foreground">Solution:</span>{" "}
        <span className="text-foreground">{solution}</span>
      </p>
      <p>
        <span className="text-primary">Outcome:</span>{" "}
        <span className="text-foreground">{outcome}</span>
      </p>
    </div>

    <p className="mt-auto pt-2 text-xs text-muted-foreground">{tools}</p>
  </article>
);

export default HomeServiceCard;
