import { useState, useEffect } from "react";

/**
 * useScrollPosition — tracks window vertical scroll position.
 * Use to trigger navbar glassmorphism or scroll-based effects.
 */
export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
