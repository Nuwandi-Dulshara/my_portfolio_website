import { useState, useEffect } from "react";

/**
 * useMousePosition — tracks mouse X/Y coordinates.
 * Returns normalized values (-1 to 1) relative to the viewport center.
 * Returns { x: 0, y: 0 } on touch/mobile devices.
 */
export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}
