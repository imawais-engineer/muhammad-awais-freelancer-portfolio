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
import { getProject, projects } from "@/data/projects";
import { deliverables, proofStats, site } from "@/data/site";
import { SITE_URL } from "@/lib/seo";
import { getPageJsonLd } from "@/data/structuredData";
import { modernServices, serviceGroups, servicesFaqs as faqs } from "@/data/serviceContent";
import { routeMeta } from "@/data/routeMeta";

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
  `${projects.length} automation systems documented on this site, each with its architecture`,
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
        title={routeMeta["/services"].title}
        description={routeMeta["/services"].description}
        path="/services"
        jsonLd={jsonLd}
      />
      <SiteHeader />

      <main id="main" tabIndex={-1} className="container pt-16 md:pt-20">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
          className="max-w-3xl space-y-5"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            Engineering Services
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="gradient-text-primary">AI Workflow Automation</span> &amp; n8n Services
          </h1>
          <p className="text-lg text-muted-foreground">
            I&apos;m Muhammad Awais, an AI Automation Engineer and n8n expert. I build{" "}
            <Link to="/services/n8n-workflow-automation" className="system-link">n8n workflow automation</Link>,{" "}
            <Link to="/services/lead-qualification-crm-automation" className="system-link">AI lead qualification and CRM automation</Link>,{" "}
            <Link to="/services/agentic-systems" className="system-link">multi-agent AI systems</Link>,{" "}
            <Link to="/services/mcp-engineering" className="system-link">custom MCP servers</Link> and{" "}
            <Link to="/services/full-stack-ai-apps" className="system-link">full-stack AI tools</Link>. I also{" "}
            <Link to="/services/hybrid-automation" className="system-link">migrate Zapier and Make.com workflows to n8n</Link>{" "}
            and extend them with Python. Every build ships with error handling, retries and documentation.
          </p>
          <p className="text-muted-foreground">
            From high-velocity startups to enterprise teams, I replace fragile prompt chains and manual
            processes with robust, test-verified agent architectures.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild className="bg-gradient-cta border-0 text-white shadow-glow-strong hover:opacity-95 transition-opacity">
              <Link to="/contact">Discuss Your System</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">View AI Automation Case Studies</Link>
            </Button>
          </div>
        </motion.header>

        {/* Modernized Services overview */}
        <section className="mt-20" aria-labelledby="core-services">
          <h2 id="core-services" className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Specialized Software &amp; Agent Engineering
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Six services, from n8n workflows to custom MCP servers. Each engagement is delivered with
            error handling, documentation and a handover walkthrough.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {modernServices.map((service) => (
              <article key={service.id} id={service.id} className="node-card card-interactive flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold leading-snug text-foreground">
                    {service.title}
                  </h3>
                  <span className="tech-tag border-primary/30 font-mono text-[0.6875rem] text-primary">
                    Production
                  </span>
                </div>
                <p className="mt-2 font-mono text-sm italic text-primary/90">{service.tagline}</p>

                <div className="mt-4 rounded-lg border border-white/[0.06] bg-panel-strong/60 p-3">
                  <p className="font-mono text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Ideal for:</span> {service.idealFor}
                  </p>
                </div>

                <div className="mt-5 space-y-2">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Core Deliverables
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <TechTag key={tech} label={tech} />
                  ))}
                </div>

                <div className="mt-6 pt-2 border-t border-white/[0.06]">
                  <Link to={service.href} className="system-link inline-flex items-center text-sm font-medium">
                    Explore architecture &amp; scope
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
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
