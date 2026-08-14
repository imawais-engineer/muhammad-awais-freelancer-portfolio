import { motion } from "framer-motion";
import { Mail, Globe, Linkedin, ArrowUpRight } from "lucide-react";

import BrandLogo from "@/components/BrandLogo";
import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { process, site } from "@/data/site";

const briefChecklist = [
  "The process you want automated, described the way you'd explain it to a new hire.",
  "The tools already involved (CRM, spreadsheets, inbox, chat).",
  "Roughly how many items run through it per day or week.",
  "How much time it currently eats, and who does it.",
];

const Contact = () => (
  <div className="min-h-screen">
    <Seo
      title={`Contact ${site.name} — ${site.title}`}
      description="Tell me which process is still manual and I'll tell you honestly whether automating it is worth it. Email, Upwork, Fiverr and LinkedIn."
      path="/contact"
    />
    <SiteHeader />

    <main className="container pt-20">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-3xl space-y-5"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Contact</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Let's build something great together.
        </h1>
        <p className="text-lg text-muted-foreground">
          Ready to automate your business processes, save time, and scale with confidence? I'm one
          message away — {site.location.toLowerCase()}.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
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
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
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

      <section className="mt-16 grid gap-4 lg:grid-cols-2">
        <article className="node-card p-6">
          <h2 className="text-xl font-semibold">What to send me</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {briefChecklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
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
    </main>

    <SiteFooter />
  </div>
);

export default Contact;
