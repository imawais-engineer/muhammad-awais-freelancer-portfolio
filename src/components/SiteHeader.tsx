import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/#services" },
  { label: "Process", to: "/#process" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const SiteHeader = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-panel-border bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm text-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
          Muhammad Awais
          <span className="hidden text-muted-foreground sm:inline">— {site.title}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={cn("system-link", pathname === item.to && "text-foreground")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-panel-border md:hidden">
          <div className="container flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="system-link py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
