import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Network, Server, Workflow, Zap } from "lucide-react";

import Seo from "@/components/Seo";
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
import { getPageJsonLd } from "@/data/structuredData";

const TITLE = "Deterministic Automation & Hybrid Orchestration | Muhammad Awais";
const DESCRIPTION =
  "Hardened infrastructure pipelines combining n8n workflow automation with custom Python backends, Celery/Redis queues, Docker containers, and guaranteed at-least-once delivery.";
const PATH = "/services/hybrid-automation";

const capabilities = [
  {
    icon: Workflow,
    title: "n8n + Python Hybrid Orchestration",
    body: "Connect visual n8n workflow triggers and webhook listeners directly to high-performance Python reasoning microservices and LangGraph graphs.",
  },
  {
    icon: Server,
    title: "No-Code to Code Migrations",
    body: "Refactor fragile, sprawling Zapier and Make setups that hit memory and rate limits into modular, version-controlled Python microservices.",
  },
  {
    icon: Network,
    title: "High-Throughput API Pipelines",
    body: "Engineered with Redis message brokers, Celery worker pools, and automated retry harnesses to guarantee at-least-once message delivery under burst loads.",
  },
  {
    icon: Zap,
    title: "Self-Hosted Infrastructure",
    body: "Hardened self-hosted n8n and worker infrastructure deployed in Docker on VPS, AWS ECS, or DigitalOcean, ensuring 100% data sovereignty.",
  },
];

const caseStudySlugs = [
  "slack-reporting-pipeline-apify-n8n",
  "client-intake-onboarding-automation",
  "ai-customer-support-triage",
];

const faqs = [
  {
    q: "What is a 'hybrid automation' architecture?",
    a: "Hybrid automation combines the agility of visual workflow engines (like n8n) for webhook ingestion and CRM routing with dedicated Python microservices for heavy computation, custom cryptography, vector search, and agentic reasoning. This gives you the best of both worlds: rapid iteration without hitting no-code platform walls.",
  },
  {
    q: "When should our team migrate away from Zapier or Make?",
    a: "When you face recurring timeout errors, high per-task costs, lack of version control (git), or inability to run custom algorithms or private models. We migrate your workflows into self-hosted n8n and Python microservices that scale predictably.",
  },
  {
    q: "How do you guarantee reliability during third-party API downtime?",
    a: "Every integration features idempotent webhook processing, exponential backoff retries, dead-letter queues (DLQs), and automated alerts so transient outages never drop customer transactions.",
  },
  {
    q: "Can you maintain and monitor existing self-hosted n8n instances?",
    a: "Yes. I optimize database connection pooling, configure Redis queue execution modes for high concurrency, set up Docker backups, and monitor worker performance.",
  },
];

const techStack = [
  "n8n (Self-Hosted)",
  "Python 3.12",
  "Redis",
  "Celery",
  "Docker",
  "PostgreSQL",
  "FastAPI",
  "Webhooks",
];

const HybridAutomation = () => {
  const caseStudies = caseStudySlugs.map((slug) => getProject(slug)).filter(Boolean);
  const jsonLd = getPageJsonLd(PATH);

  return (
    <div className="min-h-screen">
      <Seo title={TITLE} description={DESCRIPTION} path={PATH} jsonLd={jsonLd} />
      <SiteHeader />

      <main id="main" tabIndex={-1} className="container pt-16 md:pt-20">
        <Link to="/services" className="system-link">
          ← All Services
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
          className="mt-6 max-w-3xl space-y-5"
        >
          <div className="flex flex-wrap gap-2">
            <span className="tech-tag border-primary/30 font-mono text-primary">Hybrid Orchestration</span>
            <span className="tech-tag">n8n &amp; Python Microservices</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="gradient-text-primary">Deterministic Automation</span> &amp; Hybrid Orchestration
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hardened infrastructure pipelines combining visual workflow automation with intelligent Python microservices.
            I help businesses scale past fragile no-code limits with robust, self-healing data pipelines and guaranteed delivery.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {techStack.map((tech) => (
              <TechTag key={tech} label={tech} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-3">
            <Button asChild className="bg-gradient-cta border-0 text-white shadow-glow-strong hover:opacity-95 transition-opacity">
              <Link to="/contact">Upgrade Your Pipelines</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">View Production Case Studies</Link>
            </Button>
          </div>
        </motion.header>

        {/* Core Capabilities */}
        <section className="mt-20" aria-labelledby="capabilities">
          <h2 id="capabilities" className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Hardened Infrastructure Engineering
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Built for enterprise volume: message queuing, idempotency controls, and containerized deployments.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="node-card card-interactive p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2.5 text-primary border border-primary/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{c.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mt-20" aria-labelledby="case-studies">
          <h2 id="case-studies" className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            High-Volume Production Builds
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Workflows and pipelines managing thousands of executions without manual babysitting.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((p) => p && <ProjectCard key={p.slug} project={p} />)}
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-20" aria-labelledby="faqs">
          <h2 id="faqs" className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Hybrid Orchestration: Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-8 max-w-3xl">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <section className="mt-20 border-t border-panel-border pt-10">
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Have workflows that outgrew basic no-code tools?
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Let&apos;s review your architecture and engineer a hybrid pipeline that scales reliably with your company&apos;s growth.
          </p>
          <div className="mt-6">
            <Button asChild className="bg-gradient-cta border-0 text-white shadow-glow-sm hover:opacity-95 transition-opacity">
              <Link to="/contact">Discuss Architecture Migration →</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default HybridAutomation;
