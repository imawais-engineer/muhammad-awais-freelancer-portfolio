import { Link } from "react-router-dom";
import { ArrowUpRight, Cpu, Layers, Activity } from "lucide-react";

import type { Project } from "@/data/projects";
import TechTag from "@/components/TechTag";
import { getProjectImage } from "@/data/projectImages";

const ProjectCard = ({ project }: { project: Project }) => {
  const image = getProjectImage(project.slug);
  const coreTech = project.coreStack
    ? project.coreStack.slice(0, 2).join(" + ")
    : project.tools.slice(0, 2).join(" + ");
  const pattern = project.architecturalPattern || `${project.platform} Workflow`;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="node-card card-interactive group flex h-full flex-col gap-4 p-6"
    >
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
                agentic-spec.dag
              </span>
            </div>
            <span className="flex items-center gap-1 font-mono text-[0.625rem] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              ACTIVE
            </span>
          </div>

          <div className="my-auto py-2 text-center space-y-1.5">
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
      <div className="grid grid-cols-1 gap-2 pt-1 border-b border-white/[0.06] pb-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <Layers className="h-3 w-3 text-primary" />
            <span className="font-medium text-foreground">Pattern:</span>
          </span>
          <span className="text-primary truncate max-w-[180px] font-medium" title={pattern}>
            {pattern}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <Cpu className="h-3 w-3 text-cyan-400" />
            <span className="font-medium text-foreground">Stack:</span>
          </span>
          <span className="text-muted-foreground truncate max-w-[180px]">{coreTech}</span>
        </div>
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <Activity className="h-3 w-3 text-success" />
            <span className="font-medium text-foreground">Metric:</span>
          </span>
          <span className="text-success font-semibold truncate max-w-[180px]">
            {project.headlineResult}
          </span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <span className="tech-tag border-white/[0.08] font-mono text-[0.6875rem] uppercase tracking-wider text-primary">
          {project.domainCategory || project.category}
        </span>
        <div className="rounded-full border border-white/[0.06] bg-white/[0.03] p-1 text-muted-foreground transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary">
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
          {project.name}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tools.slice(0, 4).map((tool) => (
          <TechTag key={tool} label={tool} />
        ))}
        {project.tools.length > 4 && (
          <span className="tech-tag font-mono text-[0.6875rem]">+{project.tools.length - 4}</span>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
