import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Cpu, GitFork, RefreshCw } from "lucide-react";

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

const TITLE = "Agentic Systems & State Graph Architecture | Muhammad Awais";
const DESCRIPTION =
  "Custom multi-agent workflows built on LangGraph and Python: stateful DAG execution, Actor-Critic and Evaluator-Optimizer loops, Human-in-the-Loop review gates, and deterministic Pydantic schemas.";
const PATH = "/services/agentic-systems";

const capabilities = [
  {
    icon: GitFork,
    title: "Stateful Directed Acyclic Graphs (DAGs)",
    body: "Workflows modeled with LangGraph and Python where each node updates an immutable, strongly-typed state object. Durable checkpoints ensure state persists across pauses and server restarts.",
  },
  {
    icon: RefreshCw,
    title: "Actor-Critic & Evaluator-Optimizer Loops",
    body: "Multi-agent reflection patterns where a coder/generator agent is pitted against a strict critic or test sandbox. The loop iterates autonomously until strict quality and syntax criteria are met.",
  },
  {
    icon: ShieldCheck,
    title: "Human-in-the-Loop Approval Breakpoints",
    body: "Deterministic interrupt() nodes that pause execution before critical transactions (dispatching proposals, refunding money, altering records), resuming only when authorized via custom UI.",
  },
  {
    icon: Cpu,
    title: "Pydantic Schema Enforcement",
    body: "Zero unstructured hallucination. Every agent interaction is constrained by Pydantic models with automated schema validation, type checking, and boundary rules.",
  },
];

const caseStudySlugs = [
  "human-in-the-loop-proposal-swarm",
  "hierarchical-support-swarm",
  "brand-governed-content-critic",
];

const faqs = [
  {
    q: "Why use state graphs in LangGraph instead of linear prompt chains?",
    a: "Linear prompt chains break the moment an LLM encounters unexpected ambiguity, format errors, or multi-step decision paths. LangGraph models processes as cyclical state machines with strongly typed state, allowing agents to branch, retry, self-correct, and pause for human approval with 100% durability.",
  },
  {
    q: "How do Human-in-the-Loop (HITL) interrupt gates work in production?",
    a: "LangGraph checkpointers freeze the complete state graph in PostgreSQL. The system generates an approval token and alerts managers via a Next.js dashboard or webhook. When the manager clicks Approve or edits a section, the graph resumes from the exact checkpoint without re-running earlier steps.",
  },
  {
    q: "Which LLMs do you use for agentic systems?",
    a: "Primarily Claude 3.5 Sonnet for deep reasoning, coding, and structured extraction, along with GPT-4o for analytical synthesis and Grok / Gemini for rapid multimodal tasks. All model calls use strict temperature settings and schema validation.",
  },
  {
    q: "How do you prevent agents from hallucinating or running in infinite loops?",
    a: "Every loop is governed by hard iteration limits (typically 3–4 passes max), Pydantic validation boundaries, and deterministic fallback branches. If an agent fails to converge, the thread safely escalates to human staff rather than burning tokens.",
  },
];

const techStack = [
  "Python 3.12",
  "LangGraph",
  "FastAPI",
  "Claude 3.5 Sonnet",
  "GPT-4o",
  "PostgreSQL",
  "Pydantic v2",
  "Docker",
  "Supabase",
];

const AgenticSystems = () => {
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
            <span className="tech-tag border-primary/30 font-mono text-primary">Specialized Agent Engineering</span>
            <span className="tech-tag">LangGraph &amp; Python</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="gradient-text-primary">Agentic Systems</span> &amp; State Graph Architecture
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Custom multi-agent workflows that plan, reason, and self-heal. I design and build production-grade
            stateful agent systems on LangGraph and Python that manage ambiguous, multi-step business operations
            with deterministic data governance.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {techStack.map((tech) => (
              <TechTag key={tech} label={tech} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-3">
            <Button asChild className="bg-gradient-cta border-0 text-white shadow-glow-strong hover:opacity-95 transition-opacity">
              <Link to="/contact">Build an Agentic System</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">Inspect System Architecture</Link>
            </Button>
          </div>
        </motion.header>

        {/* Core Architectural Capabilities */}
        <section className="mt-20" aria-labelledby="capabilities">
          <h2 id="capabilities" className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Engineered Agentic Patterns
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Moving beyond brittle single-prompt chatbots into resilient distributed agent systems with immutable state.
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

        {/* Relevant Case Studies */}
        <section className="mt-20" aria-labelledby="case-studies">
          <h2 id="case-studies" className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Documented Agentic Builds
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Production builds detailing graph topology, state checkpoints, and measured outcomes.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((p) => p && <ProjectCard key={p.slug} project={p} />)}
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-20" aria-labelledby="faqs">
          <h2 id="faqs" className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Agent Architecture: Frequently Asked Questions
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
            Have a complex workflow requiring autonomous reasoning?
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Schedule a technical discovery session. We will map your operational bottlenecks, design the state graph topology, and establish verified failure boundaries.
          </p>
          <div className="mt-6">
            <Button asChild className="bg-gradient-cta border-0 text-white shadow-glow-sm hover:opacity-95 transition-opacity">
              <Link to="/contact">Schedule Technical Scoping Call →</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default AgenticSystems;

