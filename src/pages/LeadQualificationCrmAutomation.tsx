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
import { getPageJsonLd } from "@/data/structuredData";
import { leadFaqs as faqs } from "@/data/serviceContent";

const TITLE = "AI Lead Qualification & CRM Automation | Muhammad Awais";
const DESCRIPTION =
  "Lead qualification automation, AI lead scoring, CRM and sales pipeline automation, lead routing and automated follow-up — built and documented by freelance AI Automation Engineer Muhammad Awais.";
const PATH = "/services/lead-qualification-crm-automation";

const problems = [
  "Inquiries arrive across a web form, email, WhatsApp and social, and nobody owns the whole list",
  "The first reply takes hours or days, by which point the lead has spoken to someone else",
  "Sales spends its morning reading unqualified enquiries to find the two worth calling",
  "CRM stages are updated late, inconsistently, or not at all",
  "Follow-up depends on someone remembering, so quiet leads simply go cold",
  "The same lead gets processed twice and receives two different replies",
];

const pipeline = [
  { step: "Capture", note: "Web form, landing page, email, WhatsApp or marketplace webhook into a single entry point." },
  { step: "Validate", note: "Required fields checked, formats normalised, junk submissions rejected before anything downstream runs." },
  { step: "Deduplicate", note: "Match on email, phone or submission ID so a repeated webhook cannot create a second lead." },
  { step: "Enrich", note: "Add the context the criteria need — budget, location, source, timeline, prior history." },
  { step: "Qualify / score", note: "AI reads the free-text intent, rules apply your own thresholds, and the result is written down." },
  { step: "Route", note: "Qualified leads to the right owner and pipeline stage; the rest to a nurture path." },
  { step: "Follow up", note: "First reply, reminders and re-engagement triggered on a schedule instead of on memory." },
  { step: "Log", note: "Every decision recorded, so you can audit why a lead was scored and routed the way it was." },
];

const qualification = [
  {
    title: "Structured criteria first",
    body: "Budget, timeline, location, service fit, source — anything already expressible as a rule stays a rule. Rules are cheap, deterministic and easy for you to change.",
  },
  {
    title: "AI for the messy part",
    body: "Free-text messages carry the intent that structured fields miss. An AI step reads the enquiry, extracts what was actually asked for and summarises it into fields the rest of the pipeline can use.",
  },
  {
    title: "A score you can explain",
    body: "The output is a score plus the reasoning behind it, stored on the record. Sales sees why a lead was ranked where it was rather than trusting an opaque number.",
  },
  {
    title: "Thresholds you control",
    body: "Qualified, nurture and rejected bands are configuration, not code. When your definition of a good lead shifts, the threshold shifts with it.",
  },
];

const routing = [
  "Owner assignment by territory, service line, value band or round-robin",
  "Pipeline stage set automatically on qualification, reply and booking",
  "Contact and deal records created or updated — never duplicated",
  "Task and reminder creation for the assigned owner",
  "Instant Slack, Telegram, WhatsApp or email notification with the lead summary attached",
  "Two-way sync where the CRM and the delivery tool both need to stay current",
];

const followUp = [
  "Immediate acknowledgement so the lead knows they have been received",
  "Drafted or templated first reply, with a human approval step where tone matters",
  "Timed reminder sequences that stop the moment the lead replies",
  "Reply detection that updates the CRM stage instead of leaving the thread in an inbox",
  "Re-engagement for leads that went quiet, without re-contacting anyone already in progress",
  "Booking links and appointment confirmations wired into the same flow",
];

const reliability = [
  "Idempotency keys on every inbound webhook so retried deliveries cannot double-process a lead",
  "Deduplication against existing CRM records before creation, not after",
  "Retries with back-off on CRM and enrichment API calls",
  "Fallback branch when the AI step fails or returns something unusable — the lead still reaches a human",
  "Run logging in a sheet or database, independent of the automation platform's own history",
  "Failure alerts so a silent breakage surfaces in minutes, not at the end of the month",
];

const toolGroups = [
  { label: "Automation", tools: ["n8n", "Make.com", "Webhooks", "REST APIs"] },
  { label: "CRM & pipelines", tools: ["HubSpot", "Pipedrive", "GoHighLevel", "ClickUp"] },
  { label: "AI", tools: ["OpenAI", "Claude", "Gemini"] },
  { label: "Data", tools: ["Airtable", "Notion", "Google Sheets", "Supabase / PostgreSQL"] },
  { label: "Capture", tools: ["Web forms", "Landing pages", "Gmail", "WhatsApp"] },
  { label: "Notifications", tools: ["Slack", "Telegram", "Email"] },
];

const caseStudySlugs = [
  "ai-lead-qualification-real-estate",
  "lead-reply-sync-gohighlevel-clickup",
  "client-intake-onboarding-automation",
  "real-estate-lead-generation-browseract-make",
];

const LeadQualificationCrmAutomation = () => {
  const caseStudies = caseStudySlugs.map((slug) => getProject(slug)).filter(Boolean);

  const jsonLd = getPageJsonLd(PATH);

  return (
    <div className="min-h-screen">
      <Seo title={TITLE} description={DESCRIPTION} path={PATH} jsonLd={jsonLd} />
      <SiteHeader />

      <main id="main" className="container pt-16 md:pt-20">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
          className="max-w-3xl space-y-5"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            <Link to="/services" className="hover:text-primary/80">
              Services
            </Link>{" "}
            / Lead &amp; CRM
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            AI Lead Qualification &amp; CRM Automation
          </h1>
          <p className="text-lg text-muted-foreground">
            I&apos;m Muhammad Awais, a freelance AI Automation Engineer. I build the system between
            &ldquo;an enquiry arrived&rdquo; and &ldquo;the right person is already talking to
            them&rdquo; — lead capture, qualification and scoring, routing into the CRM, pipeline
            updates and follow-up that runs on its own.
          </p>
          <p className="text-muted-foreground">
            Most teams do not have a lead volume problem. They have a response-time and consistency
            problem, and that is something a well-built pipeline fixes permanently.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild>
              <Link to="/contact">Automate my lead pipeline</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">View automation case studies</Link>
            </Button>
          </div>
        </motion.header>

        <section className="mt-20" aria-labelledby="problem">
          <h2 id="problem" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Where lead management usually breaks
          </h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {problems.map((item) => (
              <li key={item} className="node-card flex gap-3 p-5 text-base text-muted-foreground">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20" aria-labelledby="pipeline">
          <h2 id="pipeline" className="text-2xl font-semibold tracking-tight md:text-3xl">
            The end-to-end pipeline
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            A typical lead automation architecture, from the moment a form is submitted to the point
            where the outcome is logged.
          </p>
          <ol className="mt-8 grid gap-3">
            {pipeline.map((row, i) => (
              <li
                key={row.step}
                className="node-card grid gap-2 p-5 sm:grid-cols-[auto_minmax(0,180px)_minmax(0,1fr)] sm:items-center sm:gap-4"
              >
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs text-foreground">{row.step}</span>
                <span className="text-sm text-muted-foreground">{row.note}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20" aria-labelledby="qualification">
          <h2 id="qualification" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Qualification and lead scoring
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {qualification.map((item) => (
              <article key={item.title} className="node-card flex h-full flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                <p className="mt-3 text-base text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20" aria-labelledby="routing">
          <h2 id="routing" className="text-2xl font-semibold tracking-tight md:text-3xl">
            CRM routing and pipeline management
          </h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {routing.map((item) => (
              <li key={item} className="node-card flex gap-3 p-5 text-base text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20" aria-labelledby="follow-up">
          <h2 id="follow-up" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Follow-up automation
          </h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {followUp.map((item) => (
              <li key={item} className="node-card flex gap-3 p-5 text-base text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20" aria-labelledby="reliability">
          <h2 id="reliability" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Reliability and idempotency
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            A lead pipeline that occasionally duplicates or drops records costs more trust than it
            saves time, so the unhappy paths get designed first.
          </p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {reliability.map((item) => (
              <li key={item} className="node-card flex gap-3 p-5 text-base text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-base text-muted-foreground">
            The engineering practice behind this — sub-workflows, retries, error workflows and
            logging — is described on the{" "}
            <Link to="/services/n8n-workflow-automation" className="system-link">
              n8n workflow automation
            </Link>{" "}
            page.
          </p>
        </section>

        <section className="mt-20" aria-labelledby="case-studies">
          <h2 id="case-studies" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Lead and CRM case studies
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Each page states the real platform and whether the build was delivered client work or a
            self-initiated demonstration.
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
        </section>

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

        <section className="mt-20" aria-labelledby="faq">
          <h2 id="faq" className="text-2xl font-semibold tracking-tight md:text-3xl">
            Questions teams ask before automating their pipeline
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
            Ready to stop losing leads to response time?
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Tell me where your leads come from, what makes one worth calling, and which CRM they
            should land in. You&apos;ll get a clear picture of the pipeline that would sit behind it.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">Automate my lead pipeline</Link>
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

export default LeadQualificationCrmAutomation;
