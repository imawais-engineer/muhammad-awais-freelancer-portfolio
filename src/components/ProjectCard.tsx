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
      className="node-card group flex h-full flex-col gap-4 p-6 hover:shadow-elevated"
    >
      {image && (
        <div className="-mx-2 -mt-2 overflow-hidden rounded-lg border border-border bg-secondary">
          <img
            src={image}
            alt={`${project.platform} workflow canvas for ${project.name}`}
            loading="lazy"
            decoding="async"
            width={960}
            height={440}
            className="aspect-[16/9] w-full object-cover object-left-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <span className="tech-tag">{project.category}</span>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold leading-snug">{project.name}</h3>
        <p className="text-sm text-muted-foreground">{project.summary}</p>
      </div>

      <p className="font-mono text-sm text-primary">{project.headlineResult}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tools.slice(0, 4).map((tool) => (
          <TechTag key={tool} label={tool} />
        ))}
        {project.tools.length > 4 && <span className="tech-tag">+{project.tools.length - 4}</span>}

      </div>
    </Link>
  );
};

export default ProjectCard;
