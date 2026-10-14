import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  MapPin,
  Star,
} from "lucide-react";


import Seo from "@/components/Seo";
import FaqSection from "@/components/FaqSection";
import { homeFaqs } from "@/data/faqs";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EngineeringValueCard from "@/components/EngineeringValueCard";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import HomeServiceCard from "@/components/HomeServiceCard";
import ProcessStep from "@/components/ProcessStep";
import N8nSimulator from "@/components/N8nSimulator";
import BottleneckComparison from "@/components/BottleneckComparison";
import BrandLogo from "@/components/BrandLogo";

import { Button } from "@/components/ui/button";
import { SITE_URL, absoluteUrl, faqPageJsonLd } from "@/lib/seo";
import { clientProjects, projects } from "@/data/projects";
import {
  about,
  process,
  proofStats,
  site,
  testimonials,
} from "@/data/site";


const profileImage = "/profile.webp";

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
}) => {
  const reduceMotion = useReducedMotion();
  return (
  <motion.section
    id={id}
    initial={reduceMotion ? false : "hidden"}
    whileInView={reduceMotion ? undefined : "show"}
    viewport={{ once: true, margin: "-80px" }}
    variants={reveal}
    className="container scroll-mt-20 space-y-6 pt-16 md:scroll-mt-24 md:space-y-8 md:pt-24"
  >
    <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.25em]">
          {eyebrow}
        </p>
        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">{title}</h2>
        {intro && <p className="text-base text-muted-foreground">{intro}</p>}
      </div>
      {action && <div className="[&>*]:w-full sm:[&>*]:w-auto">{action}</div>}
    </header>

    {children}
  </motion.section>
  );
};

/**
 * Homepage information architecture (Phase 1):
 * Hero → Proof strip → Featured client work → Services → Process →
 * Engineering approach → About preview → Credentials & testimonials → Final CTA.
 *
 * Deep technical sections (technology stack, integration map, full architecture
 * catalogue, AI capabilities, scraping & data, deliverables) intentionally live
 * outside the homepage flow. Their data still exists in `src/data/site.ts`
 * (`techStack`, `integrationMap`, `architecturePatterns`, `aiCapabilities`,
 * `scrapingCapabilities`, `deliverables`, `methodologies`, `businessProblems`)
 * for reuse in case studies and inner pages in later phases.
 */
const Index = () => {
  const reduceMotion = useReducedMotion();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: site.name,
        alternateName: ["Awais", "imawais", "imawais.engineer"],
        jobTitle: "AI Automation Engineer",
        description: site.positioning,
        email: `mailto:${site.email}`,
        url: `${SITE_URL}/`,
        image: absoluteUrl(profileImage),
        knowsAbout: [
          "AI automation",
          "n8n workflow automation",
          "business process automation",
          "AI integrations",
          "lead qualification automation",
          "CRM automation",
          "software engineering",
        ],
        sameAs: [site.links.upwork, site.links.fiverr, site.links.linkedin, site.links.github],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: `${site.name} — AI Automation Engineer`,
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: "Muhammad Awais | AI Automation Engineer & n8n Workflow Automation",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
      },
      faqPageJsonLd(homeFaqs),
    ],
  };

  const featuredProjects = clientProjects.slice(0, 3);
  const engineeringValues = [
    {
      title: "Resilient execution",
      benefit: "API failures, rate limits, and timeouts don't silently break your workflow.",
      mechanism:
        "Errors are caught on every branch, and failed writes retry with backoff before the run is logged as failed.",
      label: "Error handling · retries",
    },
    {
      title: "No duplicate work",
      benefit: "Duplicate triggers are controlled so the same record isn't processed twice.",
      mechanism:
        "State flags and stable keys guarantee each item is handled exactly once, even if a trigger double-fires.",
      label: "Idempotency · state",
    },
    {
      title: "Secure integrations",
      benefit: "Credentials stay out of workflow logic and exports.",
      mechanism:
        "Keys live in platform credential stores or environment variables, with scoped, revocable tokens limited to what each workflow needs.",
      label: "Credential hygiene · least privilege",
    },
    {
      title: "Visible failures",
      benefit: "You find out about problems before your customers do.",
      mechanism:
        "Run logs, execution history, and failure alerts give clear visibility into what happened and where.",
      label: "Monitoring · logging",
    },
  ];


  return (
    <div className="min-h-screen">
      <Seo
        title="Muhammad Awais | AI Automation Engineer & n8n Workflow Automation"
        description="Freelance n8n workflow automation engineer and AI integration specialist. Muhammad Awais builds production automation systems for agencies and SaaS teams — saving 20+ hours of manual work every week."
        path="/"
        jsonLd={jsonLd}
      />
      <SiteHeader />

      <main id="main" tabIndex={-1} className="pb-8">
        {/* 01 — Hero */}
        <section className="container pt-6 md:pt-10">
          {/* Swiss Editorial Telemetry Strip */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-panel-border bg-panel/30 px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground backdrop-blur">
            <span className="flex items-center gap-2 text-foreground font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse" />
              Status: Deploying Production Systems (Q4 2026)
            </span>
            <span className="hidden items-center gap-1.5 sm:inline-flex">
              <span className="sr-only">Upwork</span>
              <BrandLogo label="Upwork" />
              5 Star Rated
              <Star className="h-3.5 w-3.5 fill-current text-primary" aria-hidden="true" />
              <span aria-hidden="true">·</span> {projects.length} Portfolio Projects
            </span>
            <span className="inline-flex items-center gap-1.5 text-primary font-medium">
              PK <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /> CH / US / UK Clients
            </span>
          </div>

          <div className="grid items-center gap-5 md:gap-6 md:grid-cols-[minmax(0,1fr)_220px] lg:grid-cols-[minmax(0,1fr)_260px]">
            <div>
              <h1 className="max-w-3xl font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                <span className="gradient-text">I build AI automation systems</span>{" "}
                <span className="text-foreground">that eliminate repetitive work.</span>
              </h1>
              <p className="mt-3 max-w-[38ch] text-base leading-relaxed text-muted-foreground sm:max-w-2xl md:text-lg">
                I'm Muhammad Awais, a freelance n8n workflow automation engineer and AI integration specialist. I help agencies, SaaS teams
                and growing businesses eliminate 20+ hours of manual work per week with production-ready AI workflows, CRM pipelines, and custom automation.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="h-auto min-h-11 w-full whitespace-normal text-center sm:w-auto bg-gradient-cta border-0 text-white shadow-glow-strong hover:opacity-95 transition-opacity">
                  <Link to="/contact">
                    Start an AI automation project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="h-auto min-h-11 w-full whitespace-normal text-center sm:w-auto">
                  <Link to="/projects">
                    View automation case studies
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.6875rem] leading-relaxed text-muted-foreground sm:text-xs">
                <span className="inline-flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                  {site.location}
                </span>
              </div>
            </div>

            <div className="node-card order-first mx-auto w-full max-w-[10.5rem] p-3 sm:max-w-[12.5rem] md:order-none md:mx-0 md:max-w-[13.75rem] lg:max-w-[16.25rem] lg:p-4">
              <img
                src="/profile.webp"
                srcSet="/profile-256.webp 256w, /profile.webp 512w"
                sizes="(max-width: 640px) 10.5rem, (max-width: 768px) 12.5rem, (max-width: 1024px) 13.75rem, 16.25rem"
                alt="Portrait of Muhammad Awais, freelance AI Automation Engineer"
                loading="eager"
                {...{ fetchpriority: "high" }}
                decoding="async"
                width={512}
                height={512}
                className="aspect-square w-full rounded-full object-cover"
              />
              <div className="mt-2 flex items-center justify-center gap-2">
                <p className="text-sm font-semibold tracking-tight text-foreground sm:text-base md:text-lg lg:text-xl">{site.name}</p>
                <span
                  className="inline-flex"
                  role="img"
                  aria-label="Identity verified"
                  title="Identity verified — government ID check and visual verification"
                >
                  <BadgeCheck className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-1 text-center text-[0.6875rem] leading-snug tracking-tight text-muted-foreground">
                {site.shortTitle}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                {(["upwork", "fiverr", "github", "linkedin"] as const).map((platform) => {
                  const label = { upwork: "Upwork", fiverr: "Fiverr", github: "GitHub", linkedin: "LinkedIn" }[platform];
                  return (
                    <a
                      key={platform}
                      href={site.links[platform]}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}
                      title={label}
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-panel-border bg-secondary/40 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-9 sm:w-9"
                    >
                      <BrandLogo label={label} className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Live n8n Execution Studio (Obsidian Canvas) */}
          <div className="mt-8">
            <N8nSimulator />
          </div>

          {/* 02 — Proof strip */}
          <dl className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {proofStats.map((stat) => (
              <div key={stat.label} className="node-card p-4">
                <dt className="font-mono text-[0.625rem] uppercase leading-relaxed tracking-[0.15em] text-muted-foreground sm:text-[0.6875rem] sm:tracking-[0.2em]">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-foreground sm:text-xl md:text-2xl">{stat.value}</dd>
              </div>
            ))}
          </dl>

        </section>

        {/* 03 — Featured client work */}
        <Section
          id="work"
          eyebrow="Featured work"
          title="AI automation projects running in production"
          intro="Paid client builds — lead qualification, CRM routing, AI agents and automated reporting — with outcomes you can verify in each case study."
          action={
            <Button asChild variant="secondary" className="shrink-0">
              <Link to="/projects">
                View all AI automation projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          }
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>

        {/* 04 — What I build / services */}
        <Section
          id="services"
          eyebrow="Services"
          title="AI automation and n8n workflow services"
          intro="The areas where automation pays for itself fastest — AI agents, n8n workflow automation, CRM and lead automation, and business process automation — delivered as tested, documented systems, not one-off scripts."
          action={
            <Button asChild variant="secondary" className="shrink-0">
              <Link to="/contact">Discuss your process</Link>
            </Button>
          }
        >
          <BottleneckComparison />
          <p className="mt-6 text-base text-muted-foreground">
            Full detail on scope, tools, deliverables and FAQs:{" "}
            <Link to="/services" className="system-link">
              AI automation services
            </Link>
            .
          </p>
        </Section>

        {/* 05 — How I work */}
        <Section
          id="process"
          eyebrow="Process"
          title="From problem to production in five steps"
          intro="You approve the system design before anything is built, and you get documentation you can actually use."
        >
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <ProcessStep
              step={process[0].step}
              title={process[0].title}
              outcome="We define scope, tools, success metrics, and timeline together."
              detail="I understand your goals, pain points, and existing stack before proposing anything."
            />
            <ProcessStep
              step={process[1].step}
              title={process[1].title}
              outcome="You review and approve the architecture before anything is built."
              detail="I map the data flow and logic in a clear diagram so you can validate the approach."
            />
            <ProcessStep
              step={process[2].step}
              title={process[2].title}
              outcome="A tested workflow that handles real-world edge cases and failures."
              detail="I build in your chosen platform and rigorously test each branch for resilience."
            />
            <ProcessStep
              step={process[3].step}
              title={process[3].title}
              outcome="The system goes live with monitoring and a handover walkthrough."
              detail="I deploy to production and show you exactly how to operate and monitor it."
            />
            <ProcessStep
              step={process[4].step}
              title={process[4].title}
              outcome="Ongoing support, updates, and enhancements as your business evolves."
              detail="You get continued help and adjustments so the system keeps delivering value."
            />
          </ol>
        </Section>

        {/* 06 — Why work with me / engineering approach */}
        <Section
          id="approach"
          eyebrow="Why work with me"
          title="Built to run, not just connect"
          intro="The engineering priorities behind every build — full architecture detail lives inside each case study."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {engineeringValues.map((item) => (
              <EngineeringValueCard
                key={item.title}
                title={item.title}
                benefit={item.benefit}
                mechanism={item.mechanism}
                label={item.label}
              />
            ))}
          </div>
        </Section>


        {/* 07 — About preview */}
        <Section
          id="about"
          eyebrow="About"
          title="Muhammad Awais, AI Automation Engineer"
          action={
            <Link to="/about" className="system-link hover:text-primary">
              About Muhammad Awais
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          }
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="node-card p-5 sm:p-6">
              <p className="text-base leading-relaxed text-foreground">{about.intro}</p>
              <p className="mt-4 border-l-2 border-primary pl-4 text-base italic text-muted-foreground">
                {about.principle}
              </p>
            </article>
            <article className="node-card flex flex-col p-5 sm:p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Who I help
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{about.whoIHelp}</p>
            </article>
          </div>
        </Section>


        {/* 08 — Credentials & verified proof */}
        <Section
          id="proof"
          eyebrow="Proof"
          title="Trusted by clients. Built with discipline."
          action={
            <a
              href={site.links.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="system-link hover:text-primary"
            >
              View Upwork profile
              <ArrowUpRight className="h-4 w-4" />
            </a>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.author} className="node-card flex h-full flex-col p-5 sm:p-6">
                <div className="flex items-center gap-1 text-primary" role="img" aria-label={`${t.rating} out of 5`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-foreground sm:text-base">“{t.quote}”</blockquote>
                <figcaption className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                  {"avatar" in t && t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={`Client photo of ${t.author}, ${t.role} at ${t.company}`}
                      loading="lazy"
                      decoding="async"
                      width={44}
                      height={44}
                      data-nosnippet
                      className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-border"
                    />
                  ) : (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-sm text-muted-foreground">
                      {t.author.charAt(0)}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="break-words text-base font-medium">{t.author}</p>
                    <p className="break-words font-mono text-xs leading-relaxed text-muted-foreground">
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
                    {t.meta && <p className="mt-0.5 text-xs text-muted-foreground">{t.meta}</p>}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Recognition & credentials
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {about.credentials
                .filter((c) =>
                  [
                    "n8n Certified — Essentials & APIs",
                    "GenAI Workflow Orchestration — DeepLearning.AI",
                    "USAII Global AI Hackathon 2026 — Finalist",
                    "Upwork — 5.0/5.0 rating",
                  ].includes(c.title)
                )
                .map((credential) => (
                  <article key={credential.title} className="node-card-muted flex gap-3 p-5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <h4 className="text-sm font-semibold leading-snug">{credential.title}</h4>
                      <p className="mt-1 text-xs text-muted-foreground">{credential.detail}</p>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </Section>

        <FaqSection faqs={homeFaqs} className="container max-w-4xl pt-16 md:pt-24" />

        {/* 09 — Final CTA */}
        <section className="container pt-16 md:pt-24">
          <div className="node-card flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-xl space-y-3">
              <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
                Which part of your week is still manual?
              </h2>
              <p className="text-muted-foreground">
                Tell me the process and I'll tell you honestly whether automating it is worth it — and
                what it would take.
              </p>
            </div>
            <Button asChild size="lg" className="h-auto min-h-11 w-full shrink-0 whitespace-normal text-center sm:w-auto">
              <Link to="/contact">
                Start an AI automation project
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
