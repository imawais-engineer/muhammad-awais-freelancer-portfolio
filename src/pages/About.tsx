import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Check, MapPin } from "lucide-react";

import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import { about, process, site } from "@/data/site";
import profileImage from "@/assets/profile.webp";

const About = () => (
  <div className="min-h-screen">
    <Seo
      title="About Muhammad Awais | AI Automation Engineer & n8n Expert"
      description="Muhammad Awais is a freelance n8n automation engineer and AI integration specialist based in Pakistan, delivering production workflow automation to agencies and SaaS teams worldwide."
      path="/about"
    />
    <SiteHeader />

    <main id="main" tabIndex={-1} className="container pt-20">
      <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div>
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
            className="max-w-3xl space-y-5"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">About</p>
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              About <span className="gradient-text-primary">Muhammad Awais</span> — AI Automation Engineer
            </h1>
            <p className="text-lg text-muted-foreground">{about.intro}</p>
            <p className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {site.location}
            </p>
          </motion.header>

          <div className="mt-14 space-y-14">
            <section className="max-w-3xl space-y-5 text-muted-foreground">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              <p>
                I work as a freelance AI Automation Engineer, and the work draws on a software
                engineering background: I build with TypeScript, Python and REST APIs, so I'm equally
                comfortable being briefed as an AI developer, full stack developer or AI solutions
                engineer when a project needs custom code alongside n8n workflow automation.
              </p>
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
                    <p className="mt-2 text-base text-muted-foreground">{step}</p>
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
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24">
          <div className="node-card overflow-hidden p-0">
            <img
              src={profileImage}
              alt="Portrait of Muhammad Awais, freelance AI Automation Engineer"
              className="aspect-square w-full object-cover"
              loading="lazy"
              decoding="async"
              width={512}
              height={512}
            />
            <div className="p-5">
              <div className="flex items-center gap-2">
                <p className="text-xl font-semibold tracking-tight text-foreground">{site.name}</p>
                <span
                  className="inline-flex"
                  role="img"
                  aria-label="Identity verified"
                  title="Identity verified — government ID check and visual verification"
                >
                  <BadgeCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-muted-foreground">{site.title}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {(["upwork", "fiverr", "github", "linkedin"] as const).map((platform) => {
                  const label = { upwork: "Upwork", fiverr: "Fiverr", github: "GitHub", linkedin: "LinkedIn" }[platform];
                  return (
                    <a key={platform} href={site.links[platform]} target="_blank" rel="noreferrer noopener" aria-label={label} title={label} className="flex h-10 w-10 items-center justify-center rounded-md border border-panel-border bg-secondary/40 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <BrandLogo label={label} className="h-5 w-5" />
                    </a>
                  );
                })}
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
            <p className="text-base text-muted-foreground">
              Available for automation projects, retainers, and workflow rescue work.
            </p>
            <p className="text-base text-muted-foreground">
              See the full range of{" "}
              <Link to="/services" className="system-link">
                n8n workflow automation services
              </Link>
              .
            </p>
            <Button asChild className="w-full">
              <Link to="/contact">
                Start an AI automation project
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
