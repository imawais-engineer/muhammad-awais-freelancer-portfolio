import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="mt-20 border-t border-panel-border">
    <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Muhammad Awais — Freelance AI Automation Engineer
      </p>
      <nav aria-label="Document links" className="flex flex-wrap gap-x-6 gap-y-2">
        <Link to="/" className="system-link">
          Home
        </Link>
        <Link to="/media-kit" className="system-link">
          Media Kit
        </Link>
        <Link to="/terms" className="system-link">
          Terms of Service
        </Link>
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
