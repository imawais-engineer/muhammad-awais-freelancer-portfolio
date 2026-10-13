import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import type { Project } from "@/data/projects";
import TechTag from "@/components/TechTag";
import { getProjectImage } from "@/data/projectImages";

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  const image = getProjectImage(project.slug);
  const tags = Array.from(new Set([project.platform, ...project.tools])).slice(0, 3);

  return (
    <article className="node-card card-interactive group flex h-full flex-col gap-4 p-5 sm:p-6">
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

      <div className="min-w-0 space-y-2">
        <span className="tech-tag inline-block border-white/[0.08] font-mono text-[0.6875rem] uppercase tracking-wider text-primary">
          {project.category}
        </span>
        <h3 className="line-clamp-2 break-words font-display text-lg font-bold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
          {project.name}
        </h3>
        <p className="line-clamp-2 font-mono text-xs text-muted-foreground">
          {project.clientType} · {project.industry}
        </p>
      </div>

      <div className="pt-1">
        <span className="metric-pill-cyan inline-flex items-center gap-1.5 text-xs font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          {project.headlineResult}
        </span>
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
          View Case Study
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1 text-primary" />
        </Link>
      </div>
    </article>
  );
};

export default FeaturedProjectCard;
