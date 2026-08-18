import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Check } from "lucide-react";

import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { about, process, site } from "@/data/site";
import profileImage from "@/assets/profile.webp";

const About = () => (
  <div className="min-h-screen">
    <Seo
      title={`About ${site.name} — ${site.title}`}
      description="n8n-certified automation engineer and AI hackathon finalist building production workflows for agencies, SaaS teams and small businesses worldwide."
      path="/about"
    />
    <SiteHeader />

    <main className="container pt-20">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-3xl space-y-5"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">About</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{about.intro}</h1>
        <p className="font-mono text-sm text-muted-foreground">{site.location}</p>
      </motion.header>

      <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="space-y-14">
          <section className="max-w-3xl space-y-5 text-muted-foreground">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Who I help</h2>
            <p className="max-w-3xl text-muted-foreground">{about.whoIHelp}</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-primary">My approach</h2>
            <ol className="grid gap-4 md:grid-cols-3">
              {about.approach.map((step, i) => (
                <li key={step} className="node-card p-5">
                  <p className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
            <p className="node-card p-5 text-foreground">{about.principle}</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              How I work with clients
            </h2>
            <ol className="space-y-3">
              {process.map((p) => (
                <li key={p.step} className="node-card flex gap-4 p-5">
                  <span className="font-mono text-sm text-primary">{p.step}</span>
                  <span>
                    <span className="block font-medium">{p.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{p.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24">
          <div className="node-card overflow-hidden p-0">
            <img
              src={profileImage}
              alt="Portrait of Muhammad Awais"
              className="aspect-square w-full object-cover"
              loading="lazy"
              decoding="async"
              width={640}
              height={640}
            />
            <div className="p-5">
              <div className="flex items-center gap-2">
                <p className="text-xl font-semibold tracking-tight text-foreground">{site.name}</p>
                <span
                  className="inline-flex"
                  aria-label="Identity verified"
                  title="Identity verified — government ID check and visual verification"
                >
                  <BadgeCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>

          <div className="node-card p-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Certifications & recognition
            </h2>
            <ul className="mt-5 space-y-5">
              {about.credentials.map((c) => (
                <li key={c.title} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-medium">{c.title}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">{c.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="node-card space-y-4 p-6">
            <p className="text-sm text-muted-foreground">
              Available for automation projects, retainers, and workflow rescue work.
            </p>
            <Button asChild className="w-full">
              <Link to="/contact">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </aside>
      </div>
    </main>

    <SiteFooter />
  </div>
);

export default About;
