import { Link, useLocation } from "react-router-dom";

const navItems = ["About", "Skills", "Projects", "Services", "Contact"];

const SiteHeader = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-panel-border bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="font-mono text-sm text-muted-foreground transition-colors duration-200 ease-standard hover:text-foreground">
          Muhammad Awais’s Portfolio
        </Link>
        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item} href={isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`} className="system-link">
              {item}
            </a>
          ))}
          <Link to="/media-kit" className="system-link">
            Media Kit
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
