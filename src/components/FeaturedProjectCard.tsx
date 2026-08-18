import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import type { Project } from "@/data/projects";
import TechTag from "@/components/TechTag";
import { getProjectImage } from "@/data/projectImages";

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  const image = getProjectImage(project.slug);

  return (
    <article className="node-card flex h-full flex-col gap-4 p-6">
      {image && (
        <div className="-mx-2 -mt-2 overflow-hidden rounded-lg border border-border bg-secondary">
          <img
            src={image}
            alt={`n8n workflow canvas for ${project.name}`}
            loading="lazy"
            decoding="async"
            width={1280}
            height={720}
            className="aspect-[16/9] w-full object-cover object-left-top"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <span className="tech-tag mb-2 inline-block">{project.category}</span>
          <h3 className="text-base font-semibold leading-snug">{project.name}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {project.clientType} · {project.industry}
          </p>
        </div>
      </div>

      <p className="text-xl font-semibold text-primary md:text-2xl">{project.headlineResult}</p>

      <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

      <div className="flex flex-wrap gap-2">
        <TechTag label={project.platform} />
        {project.tools.slice(0, 2).map((tool) => (
          <TechTag key={tool} label={tool} />
        ))}
      </div>

      <div className="mt-auto pt-2">
        <Link
          to={`/projects/${project.slug}`}
          className="system-link hover:text-primary"
        >
          View Case Study
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default FeaturedProjectCard;
