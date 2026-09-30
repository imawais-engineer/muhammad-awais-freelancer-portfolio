import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import Seo from "@/components/Seo";
import { faqPageJsonLd } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectCard from "@/components/ProjectCard";
import TechTag from "@/components/TechTag";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getProject } from "@/data/projects";
import { deliverables, proofStats, site } from "@/data/site";
import { SITE_URL } from "@/lib/seo";
import { getPageJsonLd } from "@/data/structuredData";
import { serviceGroups, servicesFaqs as faqs } from "@/data/serviceContent";

const problemMap = [
  {
    problem: "Leads arrive but nobody follows up fast enough",
    answer: "Lead qualification automation plus CRM routing and automated follow-up",
  },
  {
    problem: "Your team copies data between tools all day",
    answer: "n8n / API workflow automation that syncs the systems directly",
  },
  {
    problem: "The same support questions repeat every day",
    answer: "An AI assistant or triage workflow that answers and routes automatically",
  },
  {
    problem: "Reporting takes hours every week",
    answer: "Scheduled automated reporting into Slack, Telegram or email",
  },
  {
    problem: "Your processes depend on one person knowing them",
    answer: "Documented workflow automation the whole team can run and maintain",
  },
];

const flow = [
  "Trigger",
  "Validate",
  "Process / AI",
  "Store",
  "CRM / Action",
  "Notification",
  "Logging",
];

const toolGroups = [
  { label: "Automation platforms", tools: ["n8n", "Make.com", "Zapier"] },
  { label: "AI models", tools: ["OpenAI", "Claude", "Gemini"] },
  { label: "CRM & pipelines", tools: ["HubSpot", "Pipedrive", "GoHighLevel"] },
  { label: "Data & workspace", tools: ["Airtable", "Notion", "Google Workspace"] },
  { label: "Messaging", tools: ["Slack", "Telegram", "WhatsApp"] },
  { label: "Engineering", tools: ["REST APIs / Webhooks", "Python", "Supabase / PostgreSQL"] },
];

const whyItems = [
  "5.0 / 5.0 Upwork rating across delivered automation work",
  "12 automation systems shipped and documented on this site",
  "Real paid client engagements, not tutorial rebuilds",
  "Repeat and referral work from clients who came back for the next system",
  "Production-minded workflows: error handling, retries, logging and monitoring",
  "n8n, AI integration and custom API engineering in the same pair of hands",
];

const caseStudySlugs = [
  "ai-lead-qualification-real-estate",
  "whatsapp-ai-assistant-google-docs",
  "slack-reporting-pipeline-apify-n8n",
];

const Services = () => {
  const caseStudies = caseStudySlugs.map((slug) => getProject(slug)).filter(Boolean);

  const jsonLd = getPageJsonLd("/services");

  return (
    <div className="min-h-screen">
      <Seo
        title="AI Automation Services | n8n Workflow Automation | Muhammad Awais"
        description="AI automation services for agencies, SaaS teams and small businesses — n8n workflow automation, AI agents, CRM and lead automation that remove hours of manual work every week."
        path="/services"
        jsonLd={jsonLd}
      />
      <SiteHeader />

      <main id="main" className="container pt-16 md:pt-20">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
          className="max-w-3xl space-y-5"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            Services
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            AI Automation Services for Businesses That Want Less Manual Work
          </h1>
          <p className="text-lg text-muted-foreground">
            I&apos;m Muhammad Awais, a freelance AI Automation Engineer. I design and build n8n
            workflow automation, AI systems and agents, CRM and lead automation, and the connected
            business processes that sit between them — so the repetitive parts of your operation run
            without anyone chasing them.
          </p>
          <p className="text-muted-foreground">
            I work with agencies, SaaS teams, founders, operations teams and small businesses whose
            processes still depend on someone copying, checking or forwarding things by hand.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild>
              <Link to="/contact">Start an Automation Project</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">View Automation Case Studies</Link>
            </Button>
          </div>
        </motion.header>

        {/* Services overview */}
        <section className="mt-20" aria-labelledby="what-i-build">
          <h2 id="what-i-build" className="text-2xl font-semibold tracking-tight md:text-3xl">
            What I build
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Four service areas. Most engagements combine two of them, because a real process rarely
            stops at one system.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {serviceGroups.map((group) => (
              <article key={group.id} id={group.id} className="node-card flex h-full flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug">{group.title}</h3>
                <p className="mt-3 text-base text-muted-foreground">{group.intro}</p>
                {group.link && (
                  <p className="mt-3 text-base">
                    <Link to={group.link.href} className="system-link">
                      {group.link.label}
                    </Link>
                  </p>
                )}
                <ul className="mt-5 space-y-2.5 text-base text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Problem → automation mapping */}
        <section className="mt-20" aria-labelledby="problem-mapping">
          <h2 id="problem-mapping" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Common problems and how they get automated
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            If one of these sounds like your week, there is almost certainly a system worth building.
          </p>
          <ul className="mt-8 grid gap-3">
            {problemMap.map((row) => (
              <li
                key={row.problem}
                className="node-card grid gap-2 p-5 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center sm:gap-4"
              >
                <span className="text-sm text-foreground">“{row.problem}”</span>
                <ArrowRight
                  className="hidden h-4 w-4 shrink-0 text-primary sm:block"
                  aria-hidden="true"
                />
                <span className="text-sm text-muted-foreground">{row.answer}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Typical system */}
        <section className="mt-20" aria-labelledby="typical-system">
          <h2 id="typical-system" className="text-2xl font-semibold tracking-tight md:text-3xl">
            What a typical system looks like
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Most builds follow the same backbone. The exact architecture depends entirely on your
            process, your tools and how much has to be right the first time.
          </p>
          <ol className="mt-8 flex flex-wrap items-center gap-2">
            {flow.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-md border border-panel-border bg-panel px-3 py-2 font-mono text-xs text-foreground">
                  {step}
                </span>
                {i < flow.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-base text-muted-foreground">
            Every external call gets error handling and retries, every run gets logged, and the
            logic is written so a future developer — or you — can read it without me in the room.
          </p>
        </section>

        {/* Tools */}
        <section className="mt-20" aria-labelledby="tools">
          <h2 id="tools" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Tools &amp; integrations
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolGroups.map((group) => (
              <div key={group.label} className="node-card p-5">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {group.label}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <TechTag key={tool} label={tool} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className="mt-20" aria-labelledby="deliverables">
          <h2 id="deliverables" className="text-2xl font-semibold tracking-tight md:text-3xl">
            What you receive
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div key={item.title} className="node-card p-5">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why work with me */}
        <section className="mt-20" aria-labelledby="why">
          <h2 id="why" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Why work with Muhammad Awais
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <ul className="space-y-3 text-muted-foreground">
              {whyItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {proofStats.slice(0, 2).map((stat) => (
                <div key={stat.label} className="node-card p-5">
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-mono text-2xl text-primary">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-6 text-base text-muted-foreground">
            More background on{" "}
            <Link to="/about" className="system-link">
              how I work as an AI automation engineer
            </Link>
            .
          </p>
        </section>

        {/* Case studies */}
        <section className="mt-20" aria-labelledby="case-studies">
          <h2 id="case-studies" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Selected case studies
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            One lead qualification build, one AI assistant, one automated reporting pipeline — each
            documented end to end.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map(
              (project) => project && <ProjectCard key={project.slug} project={project} />,
            )}
          </div>
          <p className="mt-6 text-base text-muted-foreground">
            <Link to="/projects" className="system-link">
              View all AI automation projects
            </Link>
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-20" aria-labelledby="faq">
          <h2 id="faq" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Questions clients ask before starting
          </h2>
          <Accordion type="single" collapsible className="mt-8 max-w-3xl">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-left text-base">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Final CTA */}
        <section className="mt-20 border-t border-panel-border pt-10" aria-labelledby="final-cta">
          <h2 id="final-cta" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Have a manual process worth automating?
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Describe how the process works today — the trigger, the steps, the tools, the people
            involved. You&apos;ll get an honest assessment of what can be automated, what shouldn&apos;t
            be, and what the system would look like.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link to="/contact">Start an Automation Project</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Services;
