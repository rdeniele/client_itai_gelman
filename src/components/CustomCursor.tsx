"use client";

import { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 6;

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringInnerRef = useRef<HTMLDivElement>(null);
  const ringOuterRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    // Capability check requires the DOM, so it can't be computed during the initial render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(fine);
    if (!fine) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lerpSpeed = reduced ? 1 : 0.18;

    document.documentElement.classList.add("custom-cursor-active");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    const history: { x: number; y: number }[] = Array.from({ length: TRAIL_LENGTH }, () => ({
      x: mouseX,
      y: mouseY,
    }));

    const setTransform = (el: HTMLDivElement | null, x: number, y: number) => {
      if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setTransform(dotRef.current, mouseX, mouseY);
    };

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element && !!el.closest('a, button, input, textarea, select, [role="button"], label');

    const handleOver = (e: MouseEvent) => {
      const active = isInteractive(e.target);
      ringInnerRef.current?.classList.toggle("cursor-ring-active", active);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });

    let raf = 0;
    const tick = () => {
      ringX += (mouseX - ringX) * lerpSpeed;
      ringY += (mouseY - ringY) * lerpSpeed;
      setTransform(ringOuterRef.current, ringX, ringY);

      history.unshift({ x: ringX, y: ringY });
      history.length = TRAIL_LENGTH;
      trailRefs.current.forEach((el, i) => {
        const p = history[i];
        if (p) setTransform(el, p.x, p.y);
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          className="absolute left-0 top-0 rounded-full bg-accent-purple"
          style={{
            width: 6 - i * 0.6,
            height: 6 - i * 0.6,
            opacity: 0.35 - i * 0.05,
          }}
        />
      ))}

      <div ref={ringOuterRef} className="absolute left-0 top-0">
        <div ref={ringInnerRef} className="cursor-ring" />
      </div>

      <div ref={dotRef} className="absolute left-0 top-0 h-2 w-2 rounded-full bg-accent" />
    </div>
  );
}
