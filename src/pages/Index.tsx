import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { featuredProjects, projects } from "@/data/projects";
import { methodologies, process, proofStats, services, site, techStack, testimonials } from "@/data/site";

const standardEase: [number, number, number, number] = [0.2, 0, 0, 1];

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: standardEase } },
};

const Section = ({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    variants={reveal}
    className="container scroll-mt-24 space-y-8 pt-24"
  >
    <header className="max-w-3xl space-y-3">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
      {intro && <p className="text-muted-foreground">{intro}</p>}
    </header>
    {children}
  </motion.section>
);

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "AI Automation Engineer",
    description: site.positioning,
    email: `mailto:${site.email}`,
    url: site.website,
    knowsAbout: ["n8n", "Make.com", "Zapier", "AI Agents", "Workflow Automation", "RAG"],
    sameAs: [site.links.upwork, site.links.fiverr, site.links.linkedin],
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="Muhammad Awais | AI Automation Engineer & n8n Expert"
        description="I build n8n, Make and AI automation systems that cut 20+ hours of manual work a week for agencies, SaaS teams and small businesses."
        path="/"
        jsonLd={jsonLd}
      />
      <SiteHeader />

      <main className="pb-8">
        {/* Hero */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={reveal}
          className="container pt-20 md:pt-28"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            AI Automation Engineer · n8n &amp; Make Expert
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            I build systems that cut{" "}
            <span className="text-primary">20+ hours of manual work</span> a week.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{site.positioning}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">
                Book an automation audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/projects">See the systems I've shipped</Link>
            </Button>
          </div>

          <dl className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {proofStats.map((stat) => (
              <div key={stat.label} className="node-card p-5">
                <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Services"
          title="What I build"
          intro="Six areas where automation pays for itself fastest — delivered as tested, documented systems, not one-off scripts."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="node-card flex h-full flex-col p-6">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* Featured work */}
        <Section
          id="work"
          eyebrow="Selected work"
          title="Production systems, with the numbers"
          intro={`${projects.length} documented automation builds — every one running in production with measured results.`}
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <Button asChild variant="secondary">
            <Link to="/projects">
              View all {projects.length} case studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Section>

        {/* Stack */}
        <Section
          id="stack"
          eyebrow="Technology"
          title="The stack I work in"
          intro="Platform-agnostic by design — I pick the tool that makes your system cheapest to run and easiest to maintain."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {techStack.map((group) => (
              <article key={group.category} className="node-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span key={tool} className="tech-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="node-card p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Engineering methodologies
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {methodologies.map((m) => (
                <span key={m} className="tech-tag">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section eyebrow="Feedback" title="What clients say">
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="node-card flex h-full flex-col p-6">
                <blockquote className="text-sm leading-relaxed text-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-auto pt-6">
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="font-mono text-xs text-muted-foreground">{t.meta}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section
          id="process"
          eyebrow="Process"
          title="How we get from problem to production"
          intro="You approve the design before anything is built, and you get documentation you can actually use."
        >
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map((p) => (
              <li key={p.step} className="node-card p-6">
                <p className="font-mono text-sm text-primary">{p.step}</p>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* CTA */}
        <section className="container pt-24">
          <div className="node-card flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-xl space-y-3">
              <h2 className="text-2xl font-semibold md:text-3xl">
                Which part of your week is still manual?
              </h2>
              <p className="text-muted-foreground">
                Tell me the process and I'll tell you honestly whether automating it is worth it — and
                what it would take.
              </p>
            </div>
            <Button asChild size="lg">
              <Link to="/contact">
                Start a conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
