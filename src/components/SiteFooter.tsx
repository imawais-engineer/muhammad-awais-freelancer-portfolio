import { Link } from "react-router-dom";
import { BriefcaseBusiness, Workflow, Users, UserRound, Mail, FileText, Linkedin } from "lucide-react";

import BrandLogo from "@/components/BrandLogo";
import { site } from "@/data/site";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const footerLinks = [
  { to: "/projects", label: "Projects", icon: BriefcaseBusiness },
  { to: "/services", label: "AI automation services", icon: Workflow },
  { to: "/services/n8n-workflow-automation", label: "n8n workflow automation", icon: Workflow },
  { to: "/services/lead-qualification-crm-automation", label: "Lead qualification & CRM automation", icon: Users },
  { to: "/about", label: "About", icon: UserRound },
  { to: "/contact", label: "Contact", icon: Mail },
  { to: "/terms", label: "Terms of Service", icon: FileText },
];

const SiteFooter = () => {
  useSectionReveal();
  return (
  <footer className="mt-24 border-t border-panel-border">
    <div className="container grid items-start gap-10 py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)]">
      <div className="min-w-0 space-y-4">
        <p className="flex min-h-6 items-center gap-2 font-mono text-sm font-semibold text-foreground"><span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />{site.name}</p>
        <p className="max-w-[28ch] text-base leading-relaxed text-muted-foreground">{site.title}</p>
        <a href={`mailto:${site.email}`} className="system-link inline-flex min-h-11 max-w-full items-center gap-2 break-all">
          <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          {site.email}
        </a>
      </div>

      <nav aria-label="Site" className="min-w-0 space-y-4">
        <p className="flex min-h-6 items-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Site</p>
        <div className="flex flex-col">
          {footerLinks.map(({ to, label, icon: Icon }) => (
            <Link key={to} to={to} className="system-link flex min-h-11 items-center gap-3 py-2 leading-relaxed">
              <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <nav aria-label="Elsewhere" className="min-w-0 space-y-4">
        <p className="flex min-h-6 items-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Elsewhere</p>
        <div className="flex flex-wrap items-center gap-3">
          {(["upwork", "fiverr", "linkedin"] as const).map((platform) => {
            const label = { upwork: "Upwork", fiverr: "Fiverr", linkedin: "LinkedIn" }[platform];
            return (
              <a key={platform} href={site.links[platform]} target="_blank" rel="noreferrer noopener" aria-label={label} title={label} className="group relative flex h-12 w-12 items-center justify-center rounded-md border border-panel-border bg-secondary/40 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {platform === "linkedin" ? <Linkedin className="h-6 w-6" aria-hidden="true" /> : <BrandLogo label={label} className="h-7 w-7" />}
                <span aria-hidden="true" className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md border border-panel-border bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">{label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>

    <div className="border-t border-panel-border">
      <p className="container py-6 font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name} — {site.title}
      </p>
    </div>
  </footer>
  );
};

export default SiteFooter;
