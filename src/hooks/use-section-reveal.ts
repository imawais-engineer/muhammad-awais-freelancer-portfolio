import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Restrained fade/rise for <main> sections below the fold (220ms, no springs).
 * Skipped entirely under prefers-reduced-motion; sections already on screen are never hidden.
 */
export const useSectionReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const id = requestAnimationFrame(() => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("main section")).filter(
        (el) => el.getBoundingClientRect().top > window.innerHeight,
      );
      sections.forEach((el) => el.classList.add("reveal-pending"));
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            e.target.classList.add("reveal-in");
            e.target.classList.remove("reveal-pending");
            io.unobserve(e.target);
          }),
        { rootMargin: "0px 0px -8% 0px" },
      );
      sections.forEach((el) => io.observe(el));
      cleanup = () => {
        io.disconnect();
        sections.forEach((el) => el.classList.remove("reveal-pending"));
      };
    });
    let cleanup = () => {};
    return () => {
      cancelAnimationFrame(id);
      cleanup();
    };
  }, [pathname]);
};
