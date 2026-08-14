import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectCard from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import { projectCategories, projects } from "@/data/projects";

const Projects = () => {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  const filters = ["All", ...projectCategories];

  return (
    <div className="min-h-screen">
      <Seo
        title="Automation Case Studies | Muhammad Awais"
        description="Twelve documented n8n, Make and AI automation systems — the problem, the architecture, the logic and the measured results for each build."
        path="/projects"
      />
      <SiteHeader />

      <main className="container pt-20">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl space-y-4"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Case studies</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {projects.length} automation systems, documented end to end
          </h1>
          <p className="text-lg text-muted-foreground">
            Every build below is in production. Each case study covers the business problem, the
            architecture, the qualification logic, and the results the client measured.
          </p>
        </motion.header>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={cn(
                "rounded-md border border-panel-border px-3 py-1.5 font-mono text-xs transition-colors duration-200",
                active === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-panel text-muted-foreground hover:text-foreground",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Projects;
