import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Globe, ArrowUpRight } from "lucide-react";

import BrandLogo from "@/components/BrandLogo";
import ContactForms from "@/components/ContactForms";
import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import FaqSection from "@/components/FaqSection";
import { process, site, testimonials } from "@/data/site";
import {
  contactFaqs,
  engagementOptions,
  pricingApproach,
  showPricePlaceholders,
  typicalProjects,
} from "@/data/contactContent";
import { routeMeta } from "@/data/routeMeta";
import { getPageJsonLd } from "@/data/structuredData";

const briefChecklist = [
  "The process you want automated, described the way you'd explain it to a new hire.",
  "The tools already involved (CRM, spreadsheets, inbox, chat).",
  "Roughly how many items run through it per day or week.",
  "How much time it currently eats, and who does it.",
];

const Contact = () => (
  <div className="min-h-screen">
    <Seo
      title={routeMeta["/contact"].title}
      description={routeMeta["/contact"].description}
      path="/contact"
      jsonLd={getPageJsonLd("/contact")}
    />
    <SiteHeader />

    <main id="main" tabIndex={-1} className="container pt-20">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
        className="max-w-3xl space-y-5"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Contact</p>
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Hire an <span className="gradient-text-primary">n8n &amp; AI Automation Engineer</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Hire a freelance AI Automation Engineer to automate your business processes with n8n
          workflow automation, AI agents and CRM integrations. I'm one message away —{" "}
          {site.location.toLowerCase()}.
        </p>
        <p className="text-muted-foreground">
          Not sure what fits yet? Review the{" "}
          <Link to="/services" className="system-link">
            AI automation services
          </Link>{" "}
          first, including CRM and lead automation.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-gradient-cta border-0 text-white shadow-glow-strong hover:opacity-95 transition-opacity">
            <a href={`mailto:${site.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email me
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={site.links.upwork} target="_blank" rel="noreferrer noopener">
              <BrandLogo label="Upwork" className="mr-2" />
              Hire on Upwork
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={site.links.fiverr} target="_blank" rel="noreferrer noopener">
              <BrandLogo label="Fiverr" className="mr-2" />
              Order on Fiverr
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={site.links.linkedin} target="_blank" rel="noreferrer noopener">
              <BrandLogo label="LinkedIn" className="mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={site.links.github} target="_blank" rel="noreferrer noopener">
              <BrandLogo label="GitHub" className="mr-2" />
              GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={site.website} target="_blank" rel="noreferrer noopener">
              <Globe className="mr-2 h-4 w-4" />
              Website
            </a>
          </Button>
        </div>
      </motion.header>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">Send me the details</h2>
        <p className="mt-2 max-w-2xl text-base text-muted-foreground">
          A quick message works fine. If you already know the process you want automated, the
          detailed brief gets you a realistic scope faster.
        </p>
        <div className="mt-6">
          <ContactForms />
        </div>
      </section>

      <section className="mt-16 grid gap-4 lg:grid-cols-2">
        <article className="node-card p-6">
          <h2 className="text-xl font-semibold">What to send me</h2>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            {briefChecklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-muted-foreground">
            That's enough for me to come back with a realistic scope, an approach, and an honest view
            on whether automation is the right call.
          </p>
        </article>

        <article className="node-card p-6">
          <h2 className="text-xl font-semibold">What happens next</h2>
          <ol className="mt-4 space-y-4">
            {process.map((p) => (
              <li key={p.step} className="flex gap-4">
                <span className="font-mono text-sm text-primary">{p.step}</span>
                <span>
                  <span className="block text-sm font-medium">{p.title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{p.detail}</span>
                </span>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="mt-16" aria-labelledby="engagements">
        <h2 id="engagements" className="text-2xl font-semibold tracking-tight">
          Ways to work together
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {engagementOptions.map((o) => (
            <article key={o.title} className="node-card p-6">
              <h3 className="text-lg font-semibold">{o.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{o.detail}</p>
              {showPricePlaceholders && <p className="mt-3 font-mono text-sm text-primary">{o.priceNote}</p>}
            </article>
          ))}
        </div>
        <h3 className="mt-10 text-xl font-semibold">How pricing works</h3>
        <ul className="mt-4 max-w-3xl space-y-3 text-base text-muted-foreground">
          {pricingApproach.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Full details:{" "}
          <Link to="/terms" className="system-link">
            terms of service
          </Link>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="typical-projects">
        <h2 id="typical-projects" className="text-2xl font-semibold tracking-tight">
          Projects I typically take on
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {typicalProjects.map((p) => (
            <li key={p.href}>
              <Link to={p.href} className="node-card card-interactive flex items-center justify-between gap-3 p-4 text-base">
                <span>{p.label}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-base text-muted-foreground">
          See every build with its architecture and results in the{" "}
          <Link to="/projects" className="system-link">
            n8n and AI automation case studies
          </Link>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="client-feedback">
        <h2 id="client-feedback" className="text-2xl font-semibold tracking-tight">
          What clients say
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.author} className="node-card p-6">
              <blockquote className="text-base leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                {t.author}, {t.role} · {t.meta}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <FaqSection faqs={contactFaqs} title="Before you get in touch" className="mt-16 max-w-4xl" />
    </main>

    <SiteFooter />
  </div>
);

export default Contact;
