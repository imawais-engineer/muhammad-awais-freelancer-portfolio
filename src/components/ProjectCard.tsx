import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";
import TechTag from "@/components/TechTag";
import { getProjectImage } from "@/data/projectImages";

const ProjectCard = ({ project }: { project: Project }) => {
  const image = getProjectImage(project.slug);

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="node-card card-interactive group flex h-full flex-col gap-4 p-6"
    >
      {image && (
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
      )}

      <div className="flex items-start justify-between gap-4">
        <span className="tech-tag border-white/[0.08] font-mono text-[0.6875rem] uppercase tracking-wider text-primary">
          {project.category}
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

      <div className="pt-1">
        <span className="metric-pill-cyan inline-flex items-center gap-1.5 text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          {project.headlineResult}
        </span>
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
