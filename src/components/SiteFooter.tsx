import { Link } from "react-router-dom";

import { site } from "@/data/site";

const SiteFooter = () => (
  <footer className="mt-24 border-t border-panel-border">
    <div className="container grid gap-8 py-12 md:grid-cols-3">
      <div className="space-y-2">
        <p className="font-mono text-sm text-foreground">{site.name}</p>
        <p className="text-base text-muted-foreground">{site.title}</p>
        <a href={`mailto:${site.email}`} className="system-link">
          {site.email}
        </a>
      </div>

      <nav aria-label="Site" className="flex flex-col gap-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Site</p>
        <Link to="/projects" className="system-link">Projects</Link>
        <Link to="/services" className="system-link">AI automation services</Link>
        <Link to="/services/n8n-workflow-automation" className="system-link">n8n workflow automation</Link>
        <Link to="/services/lead-qualification-crm-automation" className="system-link">Lead qualification &amp; CRM automation</Link>
        <Link to="/about" className="system-link">About</Link>
        <Link to="/contact" className="system-link">Contact</Link>
        <Link to="/terms" className="system-link">Terms of Service</Link>
      </nav>

      <nav aria-label="Elsewhere" className="flex flex-col gap-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Elsewhere</p>
        <a href={site.links.upwork} target="_blank" rel="noreferrer noopener" className="system-link">Upwork</a>
        <a href={site.links.fiverr} target="_blank" rel="noreferrer noopener" className="system-link">Fiverr</a>
        <a href={site.links.linkedin} target="_blank" rel="noreferrer noopener" className="system-link">LinkedIn</a>
      </nav>
    </div>

    <div className="border-t border-panel-border">
      <p className="container py-6 font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name} — {site.title}
      </p>
    </div>
  </footer>
);

export default SiteFooter;
