import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Quote } from "lucide-react";

import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-4">
    <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{title}</h2>
    {children}
  </section>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 text-muted-foreground">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <Navigate to="/projects" replace />;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    author: { "@type": "Person", name: site.name },
    keywords: project.tools.join(", "),
    dateCreated: project.timeframe,
  };

  const meta = [
    { label: "Client", value: project.clientType },
    { label: "Industry", value: project.industry },
    { label: "Timeframe", value: project.timeframe },
    { label: "Role", value: project.role },
    { label: "Platform", value: project.platform },
    { label: "Rating", value: project.rating },
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title={`${project.shortName} — Automation Case Study | Muhammad Awais`}
        description={project.summary}
        path={`/projects/${project.slug}`}
        jsonLd={jsonLd}
      />
      <SiteHeader />

      <main className="container pt-12">
        <Link to="/projects" className="system-link">
          <ArrowLeft className="h-4 w-4" />
          All case studies
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-8 max-w-4xl space-y-5"
        >
          <div className="flex flex-wrap gap-2">
            <span className="tech-tag">{project.category}</span>
            {project.clientWork && <span className="tech-tag">Real client engagement</span>}
          </div>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            {project.name}
          </h1>
          <p className="text-lg text-muted-foreground">{project.summary}</p>
          <p className="font-mono text-lg text-primary">{project.headlineResult}</p>
        </motion.header>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {meta.map((item) => (
            <div key={item.label} className="node-card p-5">
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm text-foreground">{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="tech-tag">
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="space-y-14">
            <Block title="The business problem">
              <BulletList items={project.problem} />
            </Block>

            <Block title="Requirements">
              <BulletList items={project.requirements} />
            </Block>

            <Block title="Architecture">
              <p className="node-card p-5 font-mono text-sm leading-relaxed text-foreground">
                {project.architecture}
              </p>
            </Block>

            <Block title="How the workflow runs">
              <ol className="space-y-4">
                {project.workflow.map((step, i) => (
                  <li key={step} className="node-card flex gap-4 p-5">
                    <span className="font-mono text-sm text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </Block>

            <Block title="Qualification & business logic">
              <BulletList items={project.logic} />
            </Block>

            <Block title="Output">
              <BulletList items={project.output} />
            </Block>

            <Block title="Results">
              <BulletList items={project.results} />
            </Block>

            {project.feedback && (
              <figure className="node-card p-6">
                <Quote className="h-5 w-5 text-primary" aria-hidden="true" />
                <blockquote className="mt-4 text-lg leading-relaxed">“{project.feedback}”</blockquote>
                <figcaption className="mt-4 font-mono text-xs text-muted-foreground">
                  Client rating: {project.rating}
                </figcaption>
              </figure>
            )}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24">
            <div className="node-card p-6">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Scale
              </h2>
              <dl className="mt-4 space-y-4">
                {project.scale.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs text-muted-foreground">{item.label}</dt>
                    <dd className="text-sm font-medium text-foreground">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="node-card p-6">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Proof
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {project.proof.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="node-card space-y-4 p-6">
              <p className="text-sm text-muted-foreground">
                Running a similar process by hand? I can tell you what it would take to automate it.
              </p>
              <Button asChild className="w-full">
                <Link to="/contact">Discuss your workflow</Link>
              </Button>
            </div>
          </aside>
        </div>

        <div className="mt-20 border-t border-panel-border pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Next case study
          </p>
          <Link
            to={`/projects/${next.slug}`}
            className="group mt-3 flex items-center justify-between gap-4"
          >
            <span className="text-xl font-semibold md:text-2xl">{next.name}</span>
            <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default ProjectDetail;
