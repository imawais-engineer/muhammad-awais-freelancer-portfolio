import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Floating "Discuss your workflow" button on case-study pages.
 * Appears once the reader has scrolled past the #outcome section.
 */
const StickyWorkflowCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("outcome");
    if (!target) return;
    const onScroll = () => setVisible(target.getBoundingClientRect().bottom < 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 transition-[opacity,transform] duration-200 ease-standard motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
      aria-hidden={!visible}
    >
      <Link
        to="/contact"
        tabIndex={visible ? 0 : -1}
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-highlight px-5 py-2.5 font-mono text-sm font-semibold text-highlight-foreground shadow-elevated transition-[filter] hover:brightness-110"
      >
        Discuss your workflow
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
};

export default StickyWorkflowCta;
