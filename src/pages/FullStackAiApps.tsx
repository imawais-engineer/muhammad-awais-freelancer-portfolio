import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, LayoutDashboard, LineChart, Radio, Lock } from "lucide-react";

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
import { routeMeta } from "@/data/routeMeta";
import { getServicePage } from "@/data/seoPages";
import { fullStackFaqs as faqs } from "@/data/serviceContent";

const PATH = "/services/full-stack-ai-apps";
const { title: TITLE, description: DESCRIPTION } = routeMeta[PATH];

const capabilities = [
  {
    icon: LayoutDashboard,
    title: "Next.js 15 & React Agent Portals",
    body: "High-performance web applications designed for human oversight: side-by-side diff viewers, rich-text markdown editors, and live node state monitors.",
  },
  {
    icon: Radio,
    title: "Real-Time Streaming via SSE & WebSockets",
    body: "Server-Sent Events (SSE) streaming token-by-token generation and live node execution progress from LangGraph and FastAPI backends.",
  },
  {
    icon: LineChart,
    title: "Dynamic Visualizations with Recharts & D3",
    body: "Automated visualization components that intelligently choose between bar, line, area, and pie charts based on LLM analytical payloads.",
  },
  {
    icon: Lock,
    title: "Enterprise Auth & Role-Based Access (RBAC)",
    body: "Multi-tenant database architectures, Supabase Auth, OAuth2, and role-based permissions preventing unauthorized agent interventions.",
  },
];

const { caseStudies: caseStudySlugs } = getServicePage(PATH);

const techStack = [
  "Next.js 15",
  "TypeScript",
  "React 18",
  "Tailwind CSS",
  "FastAPI",
  "Recharts",
  "Supabase",
  "Server-Sent Events (SSE)",
];

const FullStackAiApps = () => {
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
            <span className="tech-tag border-primary/30 font-mono text-primary">Full-Stack AI Engineering</span>
            <span className="tech-tag">Next.js 15 &amp; FastAPI</span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="gradient-text-primary">AI Internal Tools</span> &amp; Next.js AI App Development
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Production web applications built to operationalize autonomous intelligence. I build responsive
            Next.js dashboards, real-time agent steering consoles, and Human-in-the-Loop review portals with
            secure multi-tenant architectures.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {techStack.map((tech) => (
              <TechTag key={tech} label={tech} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-3">
            <Button asChild className="bg-gradient-cta border-0 text-white shadow-glow-strong hover:opacity-95 transition-opacity">
              <Link to="/contact">Build an AI Dashboard</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">View Interactive Demos</Link>
            </Button>
          </div>
        </motion.header>

        {/* Core Capabilities */}
        <section className="mt-20" aria-labelledby="capabilities">
          <h2 id="capabilities" className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Full-Stack Application Architecture
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            From streaming SSE agent interfaces to dynamic BI visualization engines.
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
            Shipped Full-Stack AI Products
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            End-to-end applications combining Next.js frontends with custom agent backends.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((p) => p && <ProjectCard key={p.slug} project={p} />)}
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-20" aria-labelledby="faqs">
          <h2 id="faqs" className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Full-Stack AI: Common Questions
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
            Ready to give your AI systems an intuitive user interface?
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Let&apos;s build a responsive Next.js application that puts your team in command of autonomous workflows.
          </p>
          <div className="mt-6">
            <Button asChild className="bg-gradient-cta border-0 text-white shadow-glow-sm hover:opacity-95 transition-opacity">
              <Link to="/contact">Discuss Your AI Product <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default FullStackAiApps;

