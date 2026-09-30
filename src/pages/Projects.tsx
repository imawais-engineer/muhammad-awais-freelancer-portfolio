import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectCard from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import { getPageJsonLd } from "@/data/structuredData";
import { clientProjects, demoProjects, projectCategories, projects } from "@/data/projects";

const Projects = () => {
  const [active, setActive] = useState<string>("All");

  const filterBy = (list: typeof projects) =>
    active === "All" ? list : list.filter((p) => p.category === active);

  const filteredClient = useMemo(() => filterBy(clientProjects), [active]);
  const filteredDemo = useMemo(() => filterBy(demoProjects), [active]);


  const filters = ["All", ...projectCategories];

  return (
    <div className="min-h-screen">
      <Seo
        title="AI Automation Projects & n8n Case Studies | Muhammad Awais"
        description="Documented n8n, Make.com and AI automation projects — lead qualification, CRM pipelines, AI agents and reporting: the problem, architecture and measured results."
        path="/projects"
        jsonLd={getPageJsonLd("/projects")}
      />
      <SiteHeader />

      <main id="main" className="container pt-20">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
          className="max-w-3xl space-y-4"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Case studies</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            AI automation projects, documented end to end
          </h1>
          <p className="text-lg text-muted-foreground">
            {projects.length} n8n and Make.com automation projects covering AI workflow automation,
            AI agents, CRM and lead automation, reporting and business process automation. Each case
            study covers the business problem, the architecture, the workflow logic and the measured
            results — paid client work first, then demonstration builds.
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

        {filteredClient.length > 0 && (
          <section className="mt-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Real client projects
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              n8n automation projects delivered for paying clients
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredClient.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {filteredDemo.length > 0 && (
          <section className="mt-14">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Demonstration projects
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Systems I've built to prove the patterns
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredDemo.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {filteredClient.length === 0 && filteredDemo.length === 0 && (
          <p className="mt-10 text-muted-foreground">No case studies in this category yet.</p>
        )}

      </main>

      <SiteFooter />
    </div>
  );
};

export default Projects;
