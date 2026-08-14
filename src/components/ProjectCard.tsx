import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";

const ProjectCard = ({ project }: { project: Project }) => (
  <Link
    to={`/projects/${project.slug}`}
    className="node-card group flex h-full flex-col gap-4 p-6 hover:shadow-elevated"
  >
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
        <span key={tool} className="tech-tag">
          {tool}
        </span>
      ))}
      {project.tools.length > 4 && <span className="tech-tag">+{project.tools.length - 4}</span>}
    </div>
  </Link>
);

export default ProjectCard;
