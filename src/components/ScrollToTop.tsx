import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      let frames = 0;
      let raf = 0;
      const tryScroll = () => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
        if (frames++ < 30) raf = requestAnimationFrame(tryScroll);
      };
      tryScroll();
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
