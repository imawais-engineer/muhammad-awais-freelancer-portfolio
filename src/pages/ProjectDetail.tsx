import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Quote } from "lucide-react";

import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TechTag from "@/components/TechTag";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/data/projects";
import { getProjectSeo } from "@/data/projectSeo";
import { getProjectImage } from "@/data/projectImages";
import { site } from "@/data/site";
import { SITE_URL, absoluteUrl, faqPageJsonLd } from "@/lib/seo";
import { getRouteMeta } from "@/data/routeMeta";
import { projectFaqs } from "@/data/faqs";
import FaqSection from "@/components/FaqSection";

/** Case studies whose primary subject is lead capture, qualification, CRM or follow-up. */
const LEAD_SLUGS = new Set([
  "ai-lead-qualification-real-estate",
  "lead-reply-sync-gohighlevel-clickup",
  "client-intake-onboarding-automation",
  "real-estate-lead-generation-browseract-make",
]);


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

  const image = getProjectImage(project.slug);
  const seo = getProjectSeo(project.slug);
  const topic = seo?.topic ?? project.category.toLowerCase();
  const related = (seo?.related ?? [])
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p) && p!.slug !== project.slug);

  const servicePage = LEAD_SLUGS.has(project.slug)
    ? {
        href: "/services/lead-qualification-crm-automation",
        label: "AI Lead Qualification & CRM Automation",
        note: "How lead capture, scoring, routing and follow-up systems are built",
      }
    : project.platform.includes("n8n")
      ? {
          href: "/services/n8n-workflow-automation",
          label: "n8n Workflow Automation",
          note: "How production n8n workflows are designed, built and handed over",
        }
      : null;


  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const route = getRouteMeta(`/projects/${project.slug}`);
  const faqs = projectFaqs(project);
  const url = `${SITE_URL}/projects/${project.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#case-study`,
        url,
        headline: project.name,
        name: project.name,
        description: seo?.description ?? project.summary,
        abstract: project.summary,
        about: topic,
        articleSection: project.category,
        inLanguage: "en",
        datePublished: route?.article?.publishedTime,
        dateModified: route?.article?.modifiedTime,
        isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: site.name, url: `${SITE_URL}/` },
        publisher: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: site.name },
        keywords: [topic, ...project.tools].join(", "),
        image: absoluteUrl(route?.ogImage ?? image ?? "/og/projects.jpg"),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
          { "@type": "ListItem", position: 3, name: project.name, item: url },
        ],
      },
      faqPageJsonLd(faqs),
    ],
  };

  const meta = [
    project.clientWork
      ? { label: "Client", value: project.clientType }
      : { label: "Build type", value: "Self-initiated demonstration build" },
    { label: "Industry", value: project.industry },
    { label: "Timeframe", value: project.timeframe },
    { label: "Role", value: project.role },
    { label: "Platform", value: project.platform },
    project.clientWork
      ? { label: "Rating", value: project.rating }
      : {
          label: "Automation depth",
          value: `${project.workflow.length} workflow steps · ${project.tools.length} integrations`,
        },
  ];


  return (
    <div className="min-h-screen">
      <Seo
        title={`${seo?.title ?? `${project.name} — Case Study`} | Muhammad Awais`}
        description={seo?.description ?? project.summary.slice(0, 158)}
        path={`/projects/${project.slug}`}
        image={image}
        jsonLd={jsonLd}
      />
      <SiteHeader />

      <main id="main" className="container pt-12">
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

        {image && (
          <figure className="mt-10">
            <img
              src={image}
              alt={`${project.platform} workflow canvas for the ${project.name.toLowerCase()} build`}
              loading="eager"
              decoding="async"
              width={960}
              height={440}
              className="w-full rounded-xl border border-border bg-secondary object-cover"
            />
            <figcaption className="mt-3 font-mono text-xs text-muted-foreground">
              {project.clientWork
                ? "Actual workflow canvas from the delivered client build."
                : "Actual workflow canvas from this demonstration build."}
            </figcaption>
          </figure>
        )}


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

        <section className="mt-10 space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            Tools &amp; integrations
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <TechTag key={tool} label={tool} />
            ))}
          </div>
        </section>


        <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="space-y-14">
            <Block title="The business problem">
              <BulletList items={project.problem} />
            </Block>

            <Block title="Requirements">
              <BulletList items={project.requirements} />
            </Block>

            <Block title="Solution architecture">
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

            <Block title="Business logic & decision rules">
              <BulletList items={project.logic} />
            </Block>

            <Block title="Output">
              <BulletList items={project.output} />
            </Block>

            <Block title="Outcome">
              <BulletList items={project.results} />
            </Block>

            {project.feedback && (
              <figure className="node-card p-6">
                <Quote className="h-5 w-5 text-primary" aria-hidden="true" />
                <blockquote className="mt-4 text-lg leading-relaxed">“{project.feedback}”</blockquote>
                <figcaption className="mt-4 font-mono text-xs text-muted-foreground">
                  {project.clientWork ? `Client rating: ${project.rating}` : "Feedback from the build review"}
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

        <FaqSection faqs={faqs} title={`${project.shortName}: common questions`} className="mt-20 max-w-4xl" />

        <section className="mt-20 border-t border-panel-border pt-10">
          <h2 className="text-2xl font-semibold tracking-tight">{seo?.ctaHeading ?? "Running a similar process by hand?"}</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            I design, build and maintain systems like this one end to end. Tell me how your process
            works today and I&apos;ll map what an automated version would look like.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">{seo?.ctaLabel ?? "Build a similar system"} →</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">View all AI automation projects</Link>
            </Button>
          </div>
        </section>

        {related.length > 0 && (
          <section className="mt-14 space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Related case studies
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/projects/${r.slug}`}
                    className="node-card group flex items-center justify-between gap-4 p-5"
                  >
                    <span>
                      <span className="block text-sm font-medium text-foreground">{r.name}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {getProjectSeo(r.slug)?.topic ?? r.category}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {servicePage && (
          <section className="mt-14 space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Related service
            </h2>
            <Link
              to={servicePage.href}
              className="node-card group flex items-center justify-between gap-4 p-5"
            >
              <span>
                <span className="block text-sm font-medium text-foreground">
                  {servicePage.label}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {servicePage.note}
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          </section>
        )}


        <div className="mt-14 border-t border-panel-border pt-8">
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
          <p className="mt-6 text-sm text-muted-foreground">
            More about{" "}
            <Link to="/about" className="system-link">
              how I work as an AI automation engineer
            </Link>{" "}
            or{" "}
            <Link to="/contact" className="system-link">
              start an AI automation project
            </Link>
            .
          </p>
        </div>

      </main>

      <SiteFooter />
    </div>
  );
};

export default ProjectDetail;
