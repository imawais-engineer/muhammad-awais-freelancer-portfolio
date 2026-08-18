import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  MapPin,
  Star,
} from "lucide-react";


import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EngineeringValueCard from "@/components/EngineeringValueCard";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import HomeServiceCard from "@/components/HomeServiceCard";
import ProcessStep from "@/components/ProcessStep";

import { Button } from "@/components/ui/button";
import { clientProjects } from "@/data/projects";
import {
  about,
  process,
  proofStats,
  site,
  testimonials,
} from "@/data/site";


import profileImage from "@/assets/profile.webp";

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
    className="container scroll-mt-20 space-y-6 pt-16 md:scroll-mt-24 md:space-y-8 md:pt-24"
  >
    <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.25em]">
          {eyebrow}
        </p>
        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">{title}</h2>
        {intro && <p className="text-sm text-muted-foreground sm:text-base">{intro}</p>}
      </div>
      {action && <div className="[&>*]:w-full sm:[&>*]:w-auto">{action}</div>}
    </header>

    {children}
  </motion.section>
);

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: site.positioning,
    email: `mailto:${site.email}`,
    url: site.website,
    knowsAbout: ["n8n", "Make.com", "Zapier", "AI Agents", "Workflow Automation", "RAG"],
    sameAs: [site.links.upwork, site.links.fiverr, site.links.linkedin],
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
        title={`${site.name} — ${site.title}`}
        description="I build n8n, Make and AI automation systems that cut 20+ hours of manual work a week for agencies, SaaS teams and small businesses."
        path="/"
        jsonLd={jsonLd}
      />
      <SiteHeader />

      <main className="pb-8">
        {/* 01 — Hero */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={reveal}
          className="container pt-8 md:pt-12"
        >
          <div className="grid items-center gap-5 md:gap-6 md:grid-cols-[minmax(0,1fr)_220px] lg:grid-cols-[minmax(0,1fr)_260px]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.25em]">
                AI Automation Engineer · n8n · AI Systems
              </p>
              <h1 className="mt-2 max-w-3xl text-[1.7rem] font-semibold leading-[1.12] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                I build AI-powered systems that eliminate repetitive work.
              </h1>
              <p className="mt-3 max-w-[38ch] text-base leading-relaxed text-muted-foreground sm:max-w-2xl md:text-lg">
                I help agencies, SaaS teams, and small businesses automate operations, connect their
                tools, and turn manual workflows into reliable systems.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link to="/contact">
                    Start an Automation Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Link to="/projects">
                    View Case Studies
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                <span className="inline-flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                  {site.location}
                </span>
              </div>
            </div>

            <div className="node-card order-first mx-auto w-full max-w-[168px] p-3 sm:max-w-[200px] md:order-none md:mx-0 md:max-w-[220px] lg:max-w-[260px] lg:p-4">
              <img
                src={profileImage}
                alt="Portrait of Muhammad Awais, AI automation engineer"
                loading="eager"
                className="aspect-square w-full rounded-xl object-cover"
              />
              <div className="mt-2 flex items-center justify-center gap-2">
                <p className="text-sm font-semibold tracking-tight text-foreground sm:text-base md:text-lg lg:text-xl">{site.name}</p>
                <span
                  className="inline-flex"
                  aria-label="Identity verified"
                  title="Identity verified — government ID check and visual verification"
                >
                  <BadgeCheck className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>

          {/* 02 — Proof strip */}
          <dl className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {proofStats.map((stat) => (
              <div key={stat.label} className="node-card p-4">
                <dt className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.15em] text-muted-foreground sm:text-[11px] sm:tracking-[0.2em]">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-foreground sm:text-xl md:text-2xl">{stat.value}</dd>
              </div>
            ))}
          </dl>

        </motion.section>

        {/* 03 — Featured client work */}
        <Section
          id="work"
          eyebrow="Featured work"
          title="Paid work, running in production"
          intro="Delivered for paying clients, with outcomes you can verify in the case studies."
          action={
            <Button asChild variant="secondary" className="shrink-0">
              <Link to="/projects">
                View all projects
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
          title="What I build"
          intro="The areas where automation pays for itself fastest — delivered as tested, documented systems, not one-off scripts."
          action={
            <Button asChild variant="secondary" className="shrink-0">
              <Link to="/contact">Discuss your process</Link>
            </Button>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <HomeServiceCard
              title="AI Automation & Agents"
              problem="Customer questions, support tickets, and content decisions pile up faster than a small team can handle."
              solution="LLM-powered assistants and classification workflows that answer, route, and extract on your channels."
              outcome="Faster first replies, fewer manual decisions, and 24/7 handling of routine requests."
              tools="OpenAI · Claude · Gemini · n8n"
            />
            <HomeServiceCard
              title="Workflow & Process Automation"
              problem="Teams waste hours moving data between spreadsheets, inboxes, and disconnected apps."
              solution="End-to-end pipelines that connect your tools and run on triggers, schedules, or webhooks."
              outcome="Repetitive work disappears, errors drop, and operations scale without hiring."
              tools="n8n · Make · Zapier · APIs · Webhooks"
            />
            <HomeServiceCard
              title="CRM & Lead Automation"
              problem="Leads arrive faster than they can be qualified, routed, and followed up."
              solution="Capture → score → route → book meetings and trigger follow-ups automatically."
              outcome="Good leads never go cold; sales time is spent on qualified calls."
              tools="HubSpot · Pipedrive · GoHighLevel · Airtable"
            />
            <HomeServiceCard
              title="Data & Scraping Automation"
              problem="Market tracking, reporting, and data collection are rebuilt by hand every week."
              solution="Scheduled scraping, enrichment, and structured delivery to sheets, dashboards, or CRMs."
              outcome="Reliable data feeds and reports without the manual copy-paste."
              tools="Apify · Python · REST APIs · Google Sheets"
            />
          </div>
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
          title="Who I am, and how I work"
          action={
            <Link to="/about" className="system-link hover:text-primary">
              Read the full background
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          }
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="node-card p-5 sm:p-6">
              <p className="text-base leading-relaxed text-foreground">{about.intro}</p>
              <p className="mt-4 border-l-2 border-primary pl-4 text-sm italic text-muted-foreground">
                {about.principle}
              </p>
            </article>
            <article className="node-card flex flex-col p-5 sm:p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Who I help
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{about.whoIHelp}</p>
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
                <div className="flex items-center gap-1 text-primary" aria-label={`${t.rating} out of 5`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-foreground sm:text-base">“{t.quote}”</blockquote>
                <figcaption className="mt-auto flex flex-wrap items-center gap-3 pt-6">
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
                    <p className="break-words text-sm font-medium">{t.author}</p>
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
                  <article key={credential.title} className="node-card flex gap-3 p-4 sm:p-5">
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
            <Button asChild size="lg" className="w-full shrink-0 sm:w-auto">
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
