import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectCard from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import { getPageJsonLd } from "@/data/structuredData";
import { clientProjects, demoProjects, projectCategories, projects } from "@/data/projects";
import { routeMeta } from "@/data/routeMeta";

const Projects = () => {
  const [active, setActive] = useState<string>("All");

  const filterBy = (list: typeof projects) =>
    active === "All" ? list : list.filter((p) => p.category === active);

  const agenticProjects = useMemo(() => projects.filter((p) => p.category === "Agentic AI"), []);
  const filteredClient = useMemo(() => filterBy(clientProjects), [active]);
  const filteredDemo = useMemo(
    () => (active === "All" ? demoProjects.filter((p) => p.category !== "Agentic AI") : filterBy(demoProjects)),
    [active],
  );

  const filters = ["All", ...projectCategories];

  return (
    <div className="min-h-screen">
      <Seo
        title={routeMeta["/projects"].title}
        description={routeMeta["/projects"].description}
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
          <div className="flex items-center gap-2">
            <span className="tech-tag border-primary/30 text-primary font-mono text-xs">
              Systems Architecture
            </span>
            <span className="font-mono text-xs text-muted-foreground">{projects.length} Total Systems</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="gradient-text">n8n Workflow Examples</span>{" "}
            <span className="text-foreground">&amp; AI Automation Case Studies</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Real n8n case studies and workflow examples: lead qualification, CRM pipelines, AI agents, and
            reporting systems built with n8n, Make.com, and Python. Every build documents the architecture,
            the tools, and the measured results — so you can see exactly how each automation works before
            we build yours.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Popular builds:{" "}
            <Link to="/projects/multi-query-rag-supabase-openai" className="system-link">
              Supabase pgvector RAG agent with n8n
            </Link>
            ,{" "}
            <Link to="/projects/slack-reporting-pipeline-apify-n8n" className="system-link">
              n8n Slack reporting automation
            </Link>
            ,{" "}
            <Link to="/projects/instagram-reels-outlier-telegram-n8n" className="system-link">
              Instagram Reels outlier detection
            </Link>{" "}
            and{" "}
            <Link to="/projects/ai-lead-qualification-real-estate" className="system-link">
              AI lead qualification for real estate
            </Link>
            . Need one built?{" "}
            <Link to="/services" className="system-link">
              See the services
            </Link>
            .
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

        {/* Flagship Agentic Architectures (Visible on "All" or "Agentic AI") */}
        {(active === "All" || active === "Agentic AI") && agenticProjects.length > 0 && (
          <section className="mt-14">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                Agentic Systems &amp; State Graphs
              </p>
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Autonomous architectures with deterministic governance
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {agenticProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Client Engagements */}
        {active !== "Agentic AI" && filteredClient.length > 0 && (
          <section className="mt-16">
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

        {/* Other Demonstrations */}
        {active !== "Agentic AI" && filteredDemo.length > 0 && (
          <section className="mt-16">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Demonstration systems
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Working n8n use cases proving automation patterns
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredDemo.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {filteredClient.length === 0 && filteredDemo.length === 0 && (active !== "Agentic AI" && active !== "All") && (
          <p className="mt-10 font-mono text-muted-foreground">No case studies in this category yet.</p>
        )}
      </main>

      <SiteFooter />
    </div>
  );
};

export default Projects;
