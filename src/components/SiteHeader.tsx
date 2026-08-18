import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", to: "/#work", hash: "#work" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/#process", hash: "#process" },
  { label: "About", to: "/#about", hash: "#about" },
] as const;

const SiteHeader = () => {
  const { pathname, hash: currentHash } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNav =
    (item: (typeof navItems)[number]) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      setOpen(false);
      if (!("hash" in item) || !item.hash) return;
      if (pathname !== "/") return;
      event.preventDefault();
      const el = document.querySelector(item.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      if (currentHash !== item.hash) navigate(item.to, { replace: true });
    };

  return (
    <header className="sticky top-0 z-40 border-b border-panel-border bg-background/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:border focus:border-primary/40 focus:bg-background focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:text-primary"
      >
        Skip to content
      </a>
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm text-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
          Muhammad Awais
          <span className="hidden text-muted-foreground lg:inline">— {site.title}</span>
        </Link>

        <div className="hidden items-center gap-5 md:flex lg:gap-6">
          <nav aria-label="Primary" className="flex items-center gap-5 lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={handleNav(item)}
                className={cn("system-link", pathname === item.to && "text-foreground")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="rounded-md border border-primary/40 bg-primary/10 whitespace-nowrap px-3 py-1.5 font-mono text-xs text-primary transition-colors hover:bg-primary/20"
          >
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-panel-border md:hidden">
          <div className="container flex flex-col gap-1 py-3 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={handleNav(item)}
                className="system-link flex min-h-[44px] items-center py-2 text-base"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md border border-primary/40 bg-primary/10 flex min-h-[44px] items-center justify-center px-3 py-2 text-center font-mono text-sm text-primary"
            >
              Start a Project
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
