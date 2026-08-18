import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import type { Project } from "@/data/projects";
import TechTag from "@/components/TechTag";
import { getProjectImage } from "@/data/projectImages";

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  const image = getProjectImage(project.slug);
  const tags = Array.from(new Set([project.platform, ...project.tools])).slice(0, 3);

  return (
    <article className="node-card flex h-full flex-col gap-4 p-5 sm:p-6">
      {image && (
        <div className="-mx-2 -mt-2 overflow-hidden rounded-lg border border-border bg-secondary">
          <img
            src={image}
            alt={`${project.platform} workflow canvas for ${project.name}`}
            loading="lazy"
            decoding="async"
            width={960}
            height={440}
            className="aspect-[16/9] w-full object-cover object-left-top"
          />
        </div>
      )}

      <div className="min-w-0 space-y-2">
        <span className="tech-tag inline-block">{project.category}</span>
        <h3 className="line-clamp-2 break-words text-base font-semibold leading-snug">{project.name}</h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {project.clientType} · {project.industry}
        </p>
      </div>

      <p className="text-lg font-semibold leading-snug text-primary sm:text-xl">{project.headlineResult}</p>

      <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tool) => (
          <TechTag key={tool} label={tool} />
        ))}
      </div>

      <div className="mt-auto pt-2">
        <Link
          to={`/projects/${project.slug}`}
          aria-label={`View case study: ${project.name}`}
          className="system-link inline-flex min-h-[44px] items-center hover:text-primary"
        >
          View Case Study
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default FeaturedProjectCard;
