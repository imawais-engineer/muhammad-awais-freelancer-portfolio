import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BadgeCheck, Check, MapPin, Star } from "lucide-react";

import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { featuredProjects, projects } from "@/data/projects";
import { about, methodologies, process, proofStats, services, site, techStack, testimonials } from "@/data/site";
import profileImage from "@/assets/profile.png";

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
  action,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  action?: React.ReactNode;
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
    <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        {intro && <p className="text-muted-foreground">{intro}</p>}
      </div>
      {action}
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
        {/* 1 — Intro */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={reveal}
          className="container pt-16 md:pt-24"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                AI Automation Engineer · n8n &amp; Make Expert
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
                I build systems that cut{" "}
                <span className="text-primary">20+ hours of manual work</span> a week.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{site.tagline}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Book an automation audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link to="/projects">See {projects.length} case studies</Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {site.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Star className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  5.0 / 5.0 on Upwork
                </span>
              </div>
            </div>

            <div className="node-card order-first max-w-xs p-6 lg:order-none">
              <img
                src={profileImage}
                alt="Portrait of Muhammad Awais, AI automation engineer"
                loading="eager"
                className="aspect-square w-full rounded-xl object-cover"
              />
              <div className="mt-4 flex items-center gap-1.5">
                <p className="text-sm font-medium">{site.name}</p>
                <BadgeCheck
                  className="h-4 w-4 shrink-0 text-primary"
                  aria-label="Identity verified"
                  title="Identity verified — government ID check and visual verification"
                />
              </div>
              <p className="font-mono text-xs text-muted-foreground">{site.title}</p>
            </div>
          </div>

          <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* 2 — Credentials */}
        <Section
          id="credentials"
          eyebrow="Credentials"
          title="Certifications & recognition"
          intro="Verified training and competition results behind the work."
          action={
            <Link to="/about" className="system-link hover:text-primary">
              Read the full background
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          }
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {about.credentials.map((credential) => (
              <article key={credential.title} className="node-card flex gap-3 p-6">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold leading-snug">{credential.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{credential.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* 3 — Services overview */}
        <Section
          id="services"
          eyebrow="Services"
          title="What I build"
          intro="Six areas where automation pays for itself fastest — delivered as tested, documented systems, not one-off scripts."
          action={
            <Button asChild variant="secondary" className="shrink-0">
              <Link to="/contact">Discuss your process</Link>
            </Button>
          }
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="node-card flex h-full flex-col p-6">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {service.items.slice(0, 3).map((item) => (
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

        {/* 3 — Featured work */}
        <Section
          id="work"
          eyebrow="Selected work"
          title="Production systems, with the numbers"
          intro="Every build below is running in production. Open a case study for the architecture, workflow logic and measured results."
          action={
            <Button asChild variant="secondary" className="shrink-0">
              <Link to="/projects">
                All {projects.length} case studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          }
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>

        {/* 4 — How I work */}
        <Section
          id="process"
          eyebrow="Process"
          title="From problem to production in five steps"
          intro="You approve the system design before anything is built, and you get documentation you can actually use."
        >
          <ol className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {process.map((p) => (
              <li key={p.step} className="node-card flex h-full flex-col p-5">
                <p className="font-mono text-sm text-primary">{p.step}</p>
                <h3 className="mt-2 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* 5 — Stack snapshot */}
        <Section
          id="stack"
          eyebrow="Technology"
          title="The stack I work in"
          intro="Platform-agnostic by design — I pick the tool that makes your system cheapest to run and easiest to maintain."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((group) => (
              <article key={group.category} className="node-card p-5">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {group.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.tools.slice(0, 5).map((tool) => (
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

        {/* 6 — Trust: testimonials + about teaser */}
        <Section eyebrow="Proof" title="What clients say">
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.author} className="node-card flex h-full flex-col p-6">
                <div className="flex items-center gap-1 text-primary" aria-label={`${t.rating} out of 5`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-6">
                  {"avatar" in t && t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={`${t.author}, ${t.role} at ${t.company}`}
                      loading="lazy"
                      className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-border"
                    />
                  ) : (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-sm text-muted-foreground">
                      {t.author.charAt(0)}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{t.author}</p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {t.role}
                      {"companyUrl" in t && t.companyUrl ? (
                        <>
                          {" · "}
                          <a
                            href={t.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary"
                          >
                            {t.company}
                          </a>
                        </>
                      ) : (
                        t.company ? ` · ${t.company}` : null
                      )}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* 7 — CTA */}
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
