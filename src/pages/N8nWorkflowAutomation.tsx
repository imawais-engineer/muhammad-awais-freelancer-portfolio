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
import { deliverables, site } from "@/data/site";
import { SITE_URL } from "@/lib/seo";

const TITLE = "n8n Workflow Automation Engineer | Muhammad Awais";
const DESCRIPTION =
  "Freelance n8n workflow automation engineer building production workflows: API and webhook integrations, AI-assisted steps, error handling and retries, and documented business process automation.";
const PATH = "/services/n8n-workflow-automation";

const goodFor = [
  {
    title: "Processes that cross several systems",
    body: "A form, a CRM, a spreadsheet, a messaging app and a database can all sit in one flow instead of one person moving data between them.",
  },
  {
    title: "Logic that a simple task-to-task tool cannot express",
    body: "Branching, loops, batching, deduplication and custom code inside the flow — the places where linear automation tools run out of room.",
  },
  {
    title: "Work that has to keep running unattended",
    body: "Retries, error branches, alerts and execution history so failures are visible instead of silent.",
  },
  {
    title: "Tools with an API but no ready-made connector",
    body: "n8n's HTTP request and webhook nodes let almost any REST API become a step in the process.",
  },
  {
    title: "Data you would rather keep on your own infrastructure",
    body: "Self-hosted n8n keeps execution data and credentials inside your environment, which matters for some clients more than convenience does.",
  },
];

const builds = [
  {
    title: "Lead qualification and CRM workflows",
    body: "Inbound inquiries captured, enriched, scored and pushed into the CRM with the right owner and stage. See the lead qualification and CRM automation service for the full picture.",
  },
  {
    title: "Automated reporting",
    body: "Scheduled workflows that gather data, shape it and deliver a readable report to Slack, Telegram or email without anyone assembling a spreadsheet.",
  },
  {
    title: "Client intake and onboarding",
    body: "Intake form to folder structure, records, tasks and welcome sequence — one submission triggering the whole onboarding chain.",
  },
  {
    title: "Lead follow-up and reply handling",
    body: "Replies detected, logged and synced across CRM and project tools so the follow-up state is never held in someone's inbox.",
  },
  {
    title: "AI assistants and agents inside workflows",
    body: "WhatsApp, Slack and web assistants that read from your own documents and answer inside an auditable n8n flow.",
  },
  {
    title: "Email classification and triage",
    body: "Incoming mail and support messages read by an AI step, labelled, routed and escalated according to your own rules.",
  },
  {
    title: "Review and reputation automation",
    body: "New reviews collected, analysed for sentiment and routed to the right response path or internal alert.",
  },
];

const architecture = [
  { step: "Webhook / schedule trigger", note: "Form post, app event, incoming message or cron." },
  { step: "Validate & normalise", note: "Reject malformed payloads early; standardise fields." },
  { step: "Deduplicate", note: "Check an ID or hash so a repeated payload is not processed twice." },
  { step: "Enrich / AI step", note: "API lookups, classification, extraction or scoring." },
  { step: "Branch", note: "IF / switch routing per outcome, with a fallback path." },
  { step: "Write to systems", note: "CRM, database, sheet or storage — each call wrapped in retries." },
  { step: "Notify", note: "Slack, Telegram, WhatsApp or email to the right person." },
  { step: "Log & alert", note: "Every run recorded; failures raise an error workflow alert." },
];

const reliability = [
  "Error branches on every external call, with an error workflow that reports failures instead of swallowing them",
  "Retry policies and back-off on rate-limited or flaky APIs",
  "Sub-workflows for shared logic, so one change does not have to be repeated in five places",
  "Deduplication keys and idempotency checks so re-delivered webhooks cannot double-process",
  "Run logging to a sheet or database, separate from n8n's own execution history",
  "Named, annotated nodes and documented credentials so another engineer can pick the workflow up",
];

const rescue = [
  "Workflows that break silently and nobody notices until a client complains",
  "Flows that grew organically into one unreadable canvas of 80 nodes",
  "Automations hitting API rate limits or timing out on larger data volumes",
  "Duplicate records caused by webhooks firing more than once",
  "Migrations from Zapier or Make.com when the logic has outgrown the platform",
  "Handover work: documenting and stabilising a workflow built by someone who has left",
];

const toolGroups = [
  { label: "Platform", tools: ["n8n (cloud & self-hosted)", "Make.com", "Zapier"] },
  { label: "Interfaces", tools: ["REST APIs", "Webhooks", "OAuth2", "Custom code nodes"] },
  { label: "AI", tools: ["OpenAI", "Claude", "Gemini", "Vector search"] },
  { label: "CRM & pipelines", tools: ["HubSpot", "Pipedrive", "GoHighLevel", "ClickUp"] },
  { label: "Data", tools: ["Airtable", "Notion", "Google Sheets", "Supabase / PostgreSQL"] },
  { label: "Messaging", tools: ["Slack", "Telegram", "WhatsApp", "Gmail"] },
];

const caseStudySlugs = [
  "slack-reporting-pipeline-apify-n8n",
  "ai-customer-support-triage",
  "client-intake-onboarding-automation",
  "ai-email-labeling-agent-gmail",
  "lead-reply-sync-gohighlevel-clickup",
  "ai-review-management-system",
];

const N8nWorkflowAutomation = () => {
  const caseStudies = caseStudySlugs.map((slug) => getProject(slug)).filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}${PATH}#webpage`,
        url: `${SITE_URL}${PATH}`,
        name: "n8n Workflow Automation Engineer",
        description: DESCRIPTION,
        inLanguage: "en",
        isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
        breadcrumb: { "@id": `${SITE_URL}${PATH}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${PATH}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: "n8n Workflow Automation", item: `${SITE_URL}${PATH}` },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}${PATH}#service`,
        name: "n8n Workflow Automation",
        url: `${SITE_URL}${PATH}`,
        description:
          "Design, build, documentation and rescue of production n8n workflows: webhook and API integrations, AI-assisted steps, error handling, retries, sub-workflows and logging.",
        serviceType: "n8n workflow automation",
        provider: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: site.name },
        areaServed: "Worldwide",
      },
      faqPageJsonLd(faqs),
    ],
  };

  return (
    <div className="min-h-screen">
      <Seo title={TITLE} description={DESCRIPTION} path={PATH} jsonLd={jsonLd} />
      <SiteHeader />

      <main id="main" className="container pt-16 md:pt-20">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl space-y-5"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            <Link to="/services" className="hover:text-primary/80">
              Services
            </Link>{" "}
            / n8n
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            n8n Workflow Automation Engineer
          </h1>
          <p className="text-lg text-muted-foreground">
            I&apos;m Muhammad Awais, a freelance AI Automation Engineer. I build n8n workflow
            automation for businesses, agencies and SaaS teams — connecting APIs and webhooks,
            adding AI where it earns its place, and shipping workflows that keep running after
            handover.
          </p>
          <p className="text-muted-foreground">
            The systems documented on this site cover lead qualification, automated reporting,
            client intake, follow-up, AI assistants, email classification and review handling. Most
            were built in n8n; where another platform was the right answer, I say so on the project
            page.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild>
              <Link to="/contact">Discuss an n8n workflow</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">View automation case studies</Link>
            </Button>
          </div>
        </motion.header>

        <section className="mt-20" aria-labelledby="good-for">
          <h2 id="good-for" className="text-2xl font-semibold tracking-tight md:text-3xl">
            What n8n is genuinely good for
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            n8n is a node-based automation platform: a trigger starts a run, and the nodes after it
            call APIs, transform data, branch on conditions, run code or hand a step to an AI model.
            That extra room matters in a few specific situations.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {goodFor.map((item) => (
              <article key={item.title} className="node-card flex h-full flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20" aria-labelledby="what-i-build">
          <h2 id="what-i-build" className="text-2xl font-semibold tracking-tight md:text-3xl">
            What I build with n8n
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Each of these categories maps to a documented build on this site, so you can read the
            architecture rather than take the description on trust.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {builds.map((item) => (
              <article key={item.title} className="node-card flex h-full flex-col p-5">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Lead-side work is covered in more depth on the{" "}
            <Link to="/services/lead-qualification-crm-automation" className="system-link">
              lead qualification and CRM automation
            </Link>{" "}
            page.
          </p>
        </section>

        <section className="mt-20" aria-labelledby="architecture">
          <h2 id="architecture" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Example workflow architecture
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            A production n8n workflow usually has the same skeleton regardless of the business
            process sitting on top of it.
          </p>
          <ol className="mt-8 grid gap-3">
            {architecture.map((row, i) => (
              <li
                key={row.step}
                className="node-card grid gap-2 p-5 sm:grid-cols-[auto_minmax(0,240px)_minmax(0,1fr)] sm:items-center sm:gap-4"
              >
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-mono text-xs text-foreground">{row.step}</span>
                <span className="text-sm text-muted-foreground">{row.note}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20" aria-labelledby="integrations">
          <h2 id="integrations" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Integrations
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
          <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
            Where a tool has no native node, the integration goes through its REST API or an
            incoming webhook instead — the same approach used in the builds below.
          </p>
        </section>

        <section className="mt-20" aria-labelledby="reliability">
          <h2 id="reliability" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Reliability and engineering practice
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            The difference between a demo and a production workflow is almost entirely in what
            happens on the unhappy path.
          </p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {reliability.map((item) => (
              <li key={item} className="node-card flex gap-3 p-5 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20" aria-labelledby="case-studies">
          <h2 id="case-studies" className="text-2xl font-semibold tracking-tight md:text-3xl">
            n8n case studies
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Each project page states whether it was delivered client work or a self-initiated
            demonstration build, and which platform it actually runs on.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map(
              (project) => project && <ProjectCard key={project.slug} project={project} />,
            )}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            <Link to="/projects" className="system-link">
              View all AI automation projects
            </Link>
          </p>
        </section>

        <section className="mt-20" aria-labelledby="rescue">
          <h2 id="rescue" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Existing workflow rescue and optimisation
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            You do not need a blank canvas to start. A large share of automation work is fixing what
            is already there.
          </p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {rescue.map((item) => (
              <li key={item} className="node-card flex gap-3 p-5 text-sm text-muted-foreground">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20" aria-labelledby="deliverables">
          <h2 id="deliverables" className="text-2xl font-semibold tracking-tight md:text-3xl">
            What you receive
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div key={item.title} className="node-card p-5">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20" aria-labelledby="faq">
          <h2 id="faq" className="text-2xl font-semibold tracking-tight md:text-3xl">
            n8n questions clients ask
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

        <section className="mt-20 border-t border-panel-border pt-10" aria-labelledby="final-cta">
          <h2 id="final-cta" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Have a process — or a broken workflow — worth looking at?
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Describe the trigger, the steps, the tools and who is involved today. You&apos;ll get an
            honest read on whether n8n is the right platform, what the workflow would look like, and
            what it takes to run it reliably.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">Discuss an n8n workflow</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/services">All automation services</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default N8nWorkflowAutomation;
