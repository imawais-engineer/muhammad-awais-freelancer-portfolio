import { motion } from "framer-motion";
import { Mail, Globe, Linkedin, ArrowUpRight } from "lucide-react";

import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { process, site } from "@/data/site";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    note: "Best for detailed project briefs — I reply within a working day.",
  },
  {
    label: "Upwork",
    value: "5.0 / 5.0 rating",
    href: site.links.upwork,
    icon: ArrowUpRight,
    note: "Hire with contract protection and escrow.",
  },
  {
    label: "Fiverr",
    value: "mawais_pk",
    href: site.links.fiverr,
    icon: ArrowUpRight,
    note: "Good for smaller, well-defined automation tasks.",
  },
  {
    label: "LinkedIn",
    value: "imawais-engineer",
    href: site.links.linkedin,
    icon: Linkedin,
    note: "Connect, or message me about longer-term work.",
  },
  {
    label: "Website",
    value: "imawais.engineer",
    href: site.website,
    icon: Globe,
    note: "More about me and what I'm building.",
  },
];

const briefChecklist = [
  "The process you want automated, described the way you'd explain it to a new hire.",
  "The tools already involved (CRM, spreadsheets, inbox, chat).",
  "Roughly how many items run through it per day or week.",
  "How much time it currently eats, and who does it.",
];

const Contact = () => (
  <div className="min-h-screen">
    <Seo
      title="Contact Muhammad Awais | Automation Engineer"
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
              Hire on Upwork
            </a>
          </Button>
        </div>
      </motion.header>

      <section className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {channels.map((channel) => {
          const Icon = channel.icon;
          return (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer noopener"
              className="node-card group flex h-full flex-col gap-2 p-6 hover:shadow-elevated"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {channel.label}
                </span>
                <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="break-words text-base font-medium text-foreground">{channel.value}</p>
              <p className="text-sm text-muted-foreground">{channel.note}</p>
            </a>
          );
        })}
      </section>

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
