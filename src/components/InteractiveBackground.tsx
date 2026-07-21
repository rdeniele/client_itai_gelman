"use client";

import { useEffect, useRef, useState } from "react";

export default function InteractiveBackground() {
  const [enabled, setEnabled] = useState(false);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const active = fine && !reduced;
    // Capability check requires the DOM, so it can't be computed during the initial render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(active);
    if (!active) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let curX = targetX;
    let curY = targetY;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMove, { passive: true });

    let raf = 0;
    const tick = () => {
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;
      if (spotRef.current) {
        spotRef.current.style.setProperty("--spot-x", `${curX}px`);
        spotRef.current.style.setProperty("--spot-y", `${curY}px`);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={spotRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-30"
      style={{
        background:
          "radial-gradient(650px circle at var(--spot-x, 50%) var(--spot-y, 30%), rgba(111,155,209,0.14), rgba(162,148,209,0.07) 45%, transparent 70%)",
      }}
    />
  );
}
