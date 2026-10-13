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

      <main id="main" tabIndex={-1} className="container pt-20">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
          className="max-w-3xl space-y-4"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Case studies</p>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="gradient-text">AI Automation Case Studies</span>{" "}
            <span className="text-foreground">documented end to end</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {projects.length} production n8n and Make.com automation projects covering AI workflow
            automation, LLM agents, CRM pipelines, and intelligent reporting systems. Every case study
            details the business bottlenecks, technical architecture, and verified business outcomes.
          </p>
        </motion.header>

        <div className="mt-10 flex flex-wrap gap-2.5" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={cn(
                "rounded-lg px-4 py-2 font-mono text-xs font-medium transition-all duration-300",
                active === filter
                  ? "bg-gradient-cta text-white shadow-glow-sm"
                  : "border border-white/[0.08] bg-panel/70 text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredClient.length > 0 && (
          <section className="mt-14">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Real client engagements
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Production automations shipped for paying clients
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredClient.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {filteredDemo.length > 0 && (
          <section className="mt-16">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Demonstration systems
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Architectural builds proving advanced AI patterns
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredDemo.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {filteredClient.length === 0 && filteredDemo.length === 0 && (
          <p className="mt-10 font-mono text-muted-foreground">No case studies in this category yet.</p>
        )}
      </main>

      <SiteFooter />
    </div>
  );
};

export default Projects;
