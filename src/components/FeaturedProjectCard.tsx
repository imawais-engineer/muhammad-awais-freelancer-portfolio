import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Layers, Activity } from "lucide-react";

import type { Project } from "@/data/projects";
import TechTag from "@/components/TechTag";
import { getProjectImage } from "@/data/projectImages";

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  const image = getProjectImage(project.slug);
  const tags = Array.from(new Set([project.platform, ...project.tools])).slice(0, 4);
  const coreTech = project.coreStack
    ? project.coreStack.slice(0, 2).join(" + ")
    : project.tools.slice(0, 2).join(" + ");
  const pattern = project.architecturalPattern || `${project.platform} Workflow`;

  return (
    <article className="node-card card-interactive group flex h-full flex-col gap-4 p-5 sm:p-6">
      {image ? (
        <div className="-mx-2 -mt-2 overflow-hidden rounded-xl border border-white/[0.08] bg-secondary/80">
          <img
            src={image}
            alt={`${project.platform} workflow canvas for ${project.name}`}
            loading="lazy"
            decoding="async"
            width={960}
            height={440}
            className="aspect-[16/9] w-full object-cover object-left-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="-mx-2 -mt-2 aspect-[16/9] overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-panel-strong via-panel to-panel-strong p-4 flex flex-col justify-between relative group-hover:border-primary/40 transition-colors">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-danger/70" />
              <span className="h-2 w-2 rounded-full bg-warning/70" />
              <span className="h-2 w-2 rounded-full bg-success/70" />
              <span className="ml-2 font-mono text-[0.625rem] text-muted-foreground">
                spec.dag
              </span>
            </div>
            <span className="flex items-center gap-1 font-mono text-[0.625rem] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              PRODUCTION
            </span>
          </div>

          <div className="my-auto py-2 text-center space-y-1">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[0.6875rem] text-primary font-medium">
              <Cpu className="h-3 w-3" />
              <span className="truncate max-w-[200px]">{pattern}</span>
            </div>
            <p className="font-mono text-[0.6875rem] text-muted-foreground">{coreTech}</p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] font-mono text-[0.625rem] text-muted-foreground">
            <span>{project.deployment || project.platform}</span>
            <span className="text-foreground">{project.domainCategory || project.category}</span>
          </div>
        </div>
      )}

      {/* 3-Part Architecture Metadata Badges */}
      <div className="grid grid-cols-1 gap-1.5 pt-1 border-b border-white/[0.06] pb-3 text-xs font-mono">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Layers className="h-3 w-3 text-primary" />
            <span className="font-medium text-foreground">Pattern:</span>
          </span>
          <span className="text-primary truncate max-w-[170px] font-medium" title={pattern}>
            {pattern}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Cpu className="h-3 w-3 text-cyan-400" />
            <span className="font-medium text-foreground">Stack:</span>
          </span>
          <span className="text-muted-foreground truncate max-w-[170px]">{coreTech}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Activity className="h-3 w-3 text-success" />
            <span className="font-medium text-foreground">Metric:</span>
          </span>
          <span className="text-success font-semibold truncate max-w-[170px]">
            {project.headlineResult}
          </span>
        </div>
      </div>

      <div className="min-w-0 space-y-2">
        <span className="tech-tag inline-block border-white/[0.08] font-mono text-[0.6875rem] uppercase tracking-wider text-primary">
          {project.domainCategory || project.category}
        </span>
        <h3 className="line-clamp-2 break-words font-display text-lg font-bold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
          {project.name}
        </h3>
        <p className="line-clamp-2 font-mono text-xs text-muted-foreground">
          {project.clientProfile || project.clientType} · {project.industry}
        </p>
      </div>

      <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tool) => (
          <TechTag key={tool} label={tool} />
        ))}
      </div>

      <div className="mt-auto pt-3">
        <Link
          to={`/projects/${project.slug}`}
          aria-label={`View case study: ${project.name}`}
          className="system-link group/link inline-flex min-h-[44px] items-center text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          Inspect Architecture Specification
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1 text-primary" />
        </Link>
      </div>
    </article>
  );
};

export default FeaturedProjectCard;
