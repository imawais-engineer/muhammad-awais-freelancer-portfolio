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
  <article className="node-card flex h-full flex-col gap-3 p-5 sm:p-6">
    <h3 className="text-base font-semibold sm:text-lg leading-snug">{title}</h3>

    <dl className="space-y-3 text-sm leading-relaxed">
      {[
        { label: "Problem", value: problem, muted: true },
        { label: "Solution", value: solution, muted: false },
        { label: "Outcome", value: outcome, muted: false, accent: true },
      ].map((row) => (
        <div key={row.label}>
          <dt
            className={
              "font-mono text-[0.625rem] uppercase tracking-[0.16em] " +
              (row.accent ? "text-primary" : "text-muted-foreground")
            }
          >
            {row.label}
          </dt>
          <dd className={"mt-1 " + (row.muted ? "text-muted-foreground" : "text-foreground")}>
            {row.value}
          </dd>
        </div>
      ))}
    </dl>

    <p className="mt-auto pt-2 text-xs text-muted-foreground">{tools}</p>
  </article>
);

export default HomeServiceCard;
