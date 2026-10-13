import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Database, KeyRound, Terminal } from "lucide-react";

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

const TITLE = "Model Context Protocol (MCP) Server Engineering | Muhammad Awais";
const DESCRIPTION =
  "Custom Model Context Protocol (MCP) servers built with Python & TypeScript: secure, read-only database bridges, dynamic schema introspection, AST query validation, and zero-leakage enterprise AI integrations.";
const PATH = "/services/mcp-engineering";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Zero-Leakage Protocol Sandboxing",
    body: "Custom MCP servers built with FastMCP communicating over stdio or SSE via JSON-RPC 2.0. Raw credentials and row-level PII never reach external cloud LLMs.",
  },
  {
    icon: Database,
    title: "Read-Only Database Bridges",
    body: "Scoped read-only database connections for PostgreSQL, MySQL, MongoDB, and enterprise REST APIs with strict timeouts and query caps.",
  },
  {
    icon: Terminal,
    title: "AST-Based SQL Query Validation",
    body: "Automated abstract syntax tree inspection via sqlglot ensuring LLMs can execute only analytical SELECT operations, barring all mutations and injections.",
  },
  {
    icon: KeyRound,
    title: "Enterprise Tool & Context Exposure",
    body: "Seamless compatibility with Claude Desktop, Cursor, and custom agent backends, exposing tools and resources with deterministic JSON schemas.",
  },
];

const caseStudySlugs = [
  "privacy-first-sql-mcp-analyst",
  "autonomous-cicd-code-reviewer",
  "hierarchical-support-swarm",
];

const faqs = [
  {
    q: "What is Model Context Protocol (MCP) and why does my business need it?",
    a: "MCP is the open standard created by Anthropic for connecting AI models to external tools, databases, and business systems securely. Instead of building brittle, custom API wrappers, MCP creates an isolated, interoperable protocol bridge that prevents data leakage and enforces strict permission boundaries.",
  },
  {
    q: "How does an MCP server guarantee that production database data doesn't leak?",
    a: "The MCP server exposes database schemas (table names, column types, foreign keys) without row data. When an LLM generates a SQL query, the MCP server validates it against an AST whitelist, executes it within a sandboxed read-only transaction, and returns only aggregated results or specific answer metrics.",
  },
  {
    q: "Which transports and SDKs do you support?",
    a: "I build production MCP servers using the official FastMCP Python SDK and TypeScript SDKs, supporting both standard input/output (stdio) for local tools (Claude Desktop, Cursor) and Server-Sent Events (SSE) for distributed web applications.",
  },
  {
    q: "Can an MCP server integrate with internal company REST APIs?",
    a: "Yes. An MCP server can wrap internal microservices, CRM APIs, Stripe, Jira, or ERP endpoints, exposing them as safe tools with typed parameters and strict rate-limiting.",
  },
];

const techStack = [
  "FastMCP SDK",
  "Python 3.12",
  "TypeScript",
  "JSON-RPC 2.0",
  "sqlglot AST",
  "PostgreSQL",
  "Docker",
  "SSE Transports",
];

const McpEngineering = () => {
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
            <span className="tech-tag border-primary/30 font-mono text-primary">Context Protocols</span>
            <span className="tech-tag">Model Context Protocol (MCP)</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="gradient-text-primary">Model Context Protocol (MCP)</span> Server Engineering
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Secure, privacy-first bridges connecting LLMs to your private databases and APIs. I build hardened
            MCP servers that allow AI models to query production data without exposing raw credentials or leaking customer PII.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {techStack.map((tech) => (
              <TechTag key={tech} label={tech} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-3">
            <Button asChild className="bg-gradient-cta border-0 text-white shadow-glow-strong hover:opacity-95 transition-opacity">
              <Link to="/contact">Build a Custom MCP Server</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">View MCP Case Studies</Link>
            </Button>
          </div>
        </motion.header>

        {/* Architecture Capabilities */}
        <section className="mt-20" aria-labelledby="capabilities">
          <h2 id="capabilities" className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Protocol Isolation &amp; Security Standards
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Built to enterprise compliance standards: read-only sandboxes, schema-only exposure, and rigorous AST validation.
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
            Deployed MCP Systems
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Real MCP server implementations demonstrating zero data leakage and self-correcting execution.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((p) => p && <ProjectCard key={p.slug} project={p} />)}
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-20" aria-labelledby="faqs">
          <h2 id="faqs" className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            MCP Protocol: Common Questions
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
            Need to bridge your LLM to enterprise databases safely?
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Let&apos;s build an MCP server configured to your data policies, schema boundaries, and internal authentication stack.
          </p>
          <div className="mt-6">
            <Button asChild className="bg-gradient-cta border-0 text-white shadow-glow-sm hover:opacity-95 transition-opacity">
              <Link to="/contact">Discuss Custom MCP Bridge →</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default McpEngineering;
