import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUp, ArrowUpRight, Github, Globe, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

const LAST_UPDATED = "11 August 2026";

const standardEase: [number, number, number, number] = [0.2, 0, 0, 1];
const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: standardEase } },
};

type Section = {
  id: string;
  nav: string;
  title: string;
  body: React.ReactNode;
};

const List = ({ items }: { items: string[] }) => (
  <ul className="mt-3 space-y-2 text-muted-foreground">
    {items.map((item) => (
      <li key={item}>• {item}</li>
    ))}
  </ul>
);

const sections: Section[] = [
  {
    id: "introduction",
    nav: "Introduction",
    title: "Introduction",
    body: (
      <>
        <p>
          These Terms govern your access to this website and your engagement with Muhammad Awais for professional
          services. By using the website or working with me on a project, you agree to these Terms.
        </p>
        <p className="mt-3">
          Service provider: <span className="text-foreground">Muhammad Awais — AI Automation & Workflow Engineer</span>.
          Website:{" "}
          <a href="https://www.imawais.engineer/" className="text-primary underline-offset-4 hover:underline">
            https://www.imawais.engineer/
          </a>
          .
        </p>
        <p className="mt-3">
          This is an independent professional (solopreneur) business. It is not an agency, corporation, or registered
          legal entity, and nothing here should be read as implying otherwise.
        </p>
      </>
    ),
  },
  {
    id: "services",
    nav: "Services",
    title: "Services",
    body: (
      <>
        <p>Depending on what we agree, services may include:</p>
        <List
          items={[
            "AI automation",
            "Workflow automation",
            "AI integrations",
            "Web development",
            "Front-end development",
            "AI-powered tools",
            "Technical consulting",
            "Automation system design",
            "Development collaboration",
            "Digital solutions and other technology services agreed with a client",
          ]}
        />
        <p className="mt-3">
          The exact scope, deliverables, timeline, pricing, and requirements for any engagement are defined separately —
          through a proposal, agreement, statement of work, platform contract, or written communication between us.
        </p>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    nav: "Client Responsibilities",
    title: "Client Responsibilities",
    body: (
      <>
        <p>To keep a project moving, clients are responsible for:</p>
        <List
          items={[
            "Providing accurate project information",
            "Providing required content, credentials, API keys, assets, and access",
            "Communicating requirements clearly",
            "Reviewing deliverables",
            "Providing timely feedback",
            "Ensuring they have the right to provide any materials supplied to me",
            "Complying with applicable laws and the terms of any third-party platforms involved",
          ]}
        />
      </>
    ),
  },
  {
    id: "ai-third-party",
    nav: "AI & Third-Party Services",
    title: "AI and Third-Party Services",
    body: (
      <>
        <p>Projects often depend on services I do not own or control. These may include:</p>
        <List
          items={[
            "AI APIs and model providers",
            "Third-party APIs",
            "Automation platforms such as n8n, Make.com, and Zapier",
            "Cloud services such as Microsoft Azure",
            "SaaS platforms and hosting providers",
            "External integrations",
          ]}
        />
        <p className="mt-3">
          Each third-party service is governed by its own terms, pricing, availability, rate limits, and policies. I
          make no claim of ownership or control over these platforms, and changes they make may affect a delivered
          system.
        </p>
      </>
    ),
  },
  {
    id: "scope",
    nav: "Project Scope",
    title: "Project Scope and Changes",
    body: (
      <>
        <List
          items={[
            "Work is performed against the scope agreed in writing.",
            "New features or requirements may require additional time or fees.",
            "Material scope changes should be agreed before implementation.",
            "Estimates are estimates — they are not guarantees unless explicitly stated as fixed commitments.",
          ]}
        />
      </>
    ),
  },
  {
    id: "payments",
    nav: "Payments",
    title: "Payments and Fees",
    body: (
      <>
        <List
          items={[
            "Fees are agreed before or during a project.",
            "Payment schedules vary by project and are set in the relevant agreement.",
            "Third-party platform, subscription, hosting, and API fees are separate unless explicitly included.",
            "Work outside the agreed scope may incur additional fees.",
          ]}
        />
      </>
    ),
  },
  {
    id: "intellectual-property",
    nav: "Intellectual Property",
    title: "Intellectual Property",
    body: (
      <>
        <List
          items={[
            "Materials provided by a client remain the client's property.",
            "Third-party tools and libraries remain subject to their respective licenses.",
            "Ownership of custom deliverables follows the specific agreement between the parties.",
            "Unless otherwise agreed, pre-existing tools, reusable components, methodologies, templates, know-how, and general development techniques remain with their respective owner.",
            "Open-source software remains governed by its applicable license.",
          ]}
        />
      </>
    ),
  },
  {
    id: "confidentiality",
    nav: "Confidentiality",
    title: "Confidentiality",
    body: (
      <>
        <p>
          Confidential information shared during an engagement — credentials, internal processes, unreleased plans,
          business data — is treated responsibly and used only for the purpose of the work.
        </p>
        <p className="mt-3">
          This section describes a professional practice rather than a formal legal protection. Where stronger
          protection is required, a separate NDA can be signed before work begins.
        </p>
      </>
    ),
  },
  {
    id: "website-use",
    nav: "Website Use",
    title: "Website Use",
    body: (
      <>
        <p>You may browse this website, share links to it, and contact me through it. You may not:</p>
        <List
          items={[
            "Attempt unauthorized access to the website or its infrastructure",
            "Attempt to disrupt, overload, or interfere with the website",
            "Use the website for malicious activity",
            "Copy or reuse website content without permission",
            "Abuse contact forms, systems, or infrastructure",
          ]}
        />
      </>
    ),
  },
  {
    id: "portfolio",
    nav: "Portfolio",
    title: "Portfolio and Case Studies",
    body: (
      <p>
        Completed work may be referenced in my portfolio, media kit, or professional profiles where appropriate. This is
        always subject to client confidentiality, contractual restrictions, and any explicit client request to keep an
        engagement private.
      </p>
    ),
  },
  {
    id: "third-party-links",
    nav: "Third-Party Links",
    title: "Third-Party Links",
    body: (
      <>
        <p>This website links to external destinations, which may include:</p>
        <List
          items={["GitHub", "LinkedIn", "Project websites", "SaaS platforms", "Partner websites", "External resources"]}
        />
        <p className="mt-3">
          Those sites are controlled by third parties and have their own terms and privacy policies. I am not
          responsible for their content or practices.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    nav: "Disclaimer",
    title: "Disclaimer",
    body: (
      <>
        <List
          items={[
            "Technology projects frequently depend on external platforms and services.",
            "AI-generated outputs are probabilistic and may require human review before use.",
            "Automation systems depend on third-party APIs, which can change, deprecate, or fail.",
            "No guarantee is implied regarding uninterrupted operation of third-party systems.",
            "Project-specific warranties, if any, are defined in the relevant agreement.",
          ]}
        />
      </>
    ),
  },
  {
    id: "liability",
    nav: "Liability",
    title: "Limitation of Liability",
    body: (
      <>
        <p>
          To the extent permitted by applicable law, I am not liable for indirect, incidental, or consequential losses —
          including lost profits, lost data, or business interruption — arising from the use of this website, delivered
          work, or third-party services. Where liability cannot be excluded, it is limited to the fees paid for the
          specific engagement giving rise to the claim.
        </p>
        <p className="mt-3 text-foreground">
          These Terms are provided as general business terms and are not a substitute for legal advice. Project-specific
          agreements may supersede or supplement these Terms.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    nav: "Termination",
    title: "Termination",
    body: (
      <p>
        Either party may end a professional engagement, subject to the notice and conditions in the applicable project
        agreement. Approved fees for work already completed remain payable, and both parties should cooperate on an
        orderly handover of access, credentials, and delivered materials.
      </p>
    ),
  },
  {
    id: "changes",
    nav: "Changes",
    title: "Changes to These Terms",
    body: (
      <p>
        These Terms may be updated from time to time to reflect changes in my services or working practices. The current
        version is always the one published on this page, dated{" "}
        <span className="text-foreground">{LAST_UPDATED}</span>.
      </p>
    ),
  },
];

const contactLinks = [
  { icon: Globe, label: "Website", value: "imawais.engineer", url: "https://www.imawais.engineer/" },
  { icon: Linkedin, label: "LinkedIn", value: "se-muhammad-awais", url: "https://linkedin.com/in/se-muhammad-awais/" },
  { icon: Github, label: "GitHub", value: "Think-Gleam", url: "https://github.com/Think-Gleam" },
];

const Terms = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Terms of Service | Muhammad Awais"
        description="Terms of service covering website use and automation engagements with Muhammad Awais, AI Automation Engineer."
        path="/terms"
        noindex
      />
      <SiteHeader />

      <main id="main">
        <section className="container py-14 md:py-20">
          <motion.div className="max-w-3xl space-y-5" initial="hidden" animate="show" variants={reveal}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Business Documentation</p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Terms of Service</h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Terms governing the use of my website and professional services.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="tech-tag">Last Updated: {LAST_UPDATED}</span>
              <span className="tech-tag">Muhammad Awais — AI Automation & Workflow Engineer</span>
            </div>
          </motion.div>
        </section>

        <div className="container grid gap-8 pb-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav aria-label="Table of contents" className="node-card p-5">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Contents</p>
              <ol className="mt-4 max-h-[60vh] space-y-2 overflow-y-auto pr-1">
                {sections.map((section, i) => (
                  <li key={section.id} className="flex gap-2 text-base">
                    <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    <a
                      href={`#${section.id}`}
                      className="text-muted-foreground transition-colors duration-200 ease-standard hover:text-foreground focus-visible:text-foreground"
                    >
                      {section.nav}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="max-w-3xl space-y-5">
            {sections.map((section, i) => (
              <motion.section
                key={section.id}
                id={section.id}
                className="node-card scroll-mt-24 p-6 md:p-8"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={reveal}
              >
                <p className="font-mono text-xs text-muted-foreground">Section {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-xl font-semibold md:text-2xl">{section.title}</h2>
                <div className="mt-4 leading-relaxed text-muted-foreground">{section.body}</div>
              </motion.section>
            ))}

            <motion.section
              id="contact"
              className="node-card scroll-mt-24 p-6 md:p-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={reveal}
            >
              <p className="font-mono text-xs text-muted-foreground">Section {String(sections.length + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 text-xl font-semibold md:text-2xl">Contact</h2>
              <p className="mt-4 text-muted-foreground">
                <span className="text-foreground">Muhammad Awais</span>
                <br />
                AI Automation &amp; Workflow Engineer
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-panel-border bg-panel-strong px-4 py-3 text-muted-foreground transition-colors duration-200 ease-standard hover:border-primary hover:text-foreground"
                    >
                      <Icon className="size-5 shrink-0" />
                      <span className="min-w-0 font-mono text-sm">
                        <span className="block text-xs text-muted-foreground">{item.label}</span>
                        <span className="block truncate">{item.value}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="hero" asChild>
                  <Link to="/#contact">
                    Discuss a Project <ArrowRight />
                  </Link>
                </Button>
                <Button variant="shell" asChild>
                  <Link to="/media-kit">
                    Media Kit <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </motion.section>

            <div className="flex justify-end">
              <a href="#main" className="system-link">
                Back to top <ArrowUp className="size-4" />
              </a>
            </div>
          </article>
        </div>
      </main>

      <SiteFooter />

      {showTop && (
        <a
          href="#main"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 inline-flex size-11 items-center justify-center rounded-full border border-panel-border bg-panel-strong text-foreground shadow-elevated transition-colors duration-200 ease-standard hover:border-primary"
        >
          <ArrowUp className="size-5" />
        </a>
      )}
    </div>
  );
};

export default Terms;
