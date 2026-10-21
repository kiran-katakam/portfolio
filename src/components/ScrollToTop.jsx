import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    // Pages are lazy-loaded, so the target may not exist yet: retry briefly.
    let tries = 0;
    const id = setInterval(() => {
      const el = document.getElementById(hash.slice(1));
      if (el || ++tries > 20) {
        clearInterval(id);
        el?.scrollIntoView({ block: "start" });
      }
    }, 50);
    return () => clearInterval(id);
  }, [pathname, hash]);

  return null;
}
