"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { AccentColor, EcosystemItem } from "@/data/content";

const LOGO_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/logos/onlineperception.png": { width: 1600, height: 323 },
  "/logos/georepute.png": { width: 1488, height: 497 },
  "/logos/copyup.png": { width: 1599, height: 1600 },
  "/logos/gintex.png": { width: 1600, height: 800 },
  "/logos/geon.png": { width: 1024, height: 1024 },
};

const COLOR_STYLES: Record<
  AccentColor,
  {
    tag: string;
    glow: string;
    hoverBorder: string;
    badge: string;
    cycle: string;
    cta: string;
  }
> = {
  blue: {
    tag: "text-accent",
    glow: "bg-accent/10",
    hoverBorder: "hover:border-accent/40",
    badge: "border-accent/30 bg-accent/10 text-accent-soft",
    cycle: "border-accent/25 bg-accent/5 text-accent-soft",
    cta: "text-accent-soft hover:text-accent",
  },
  green: {
    tag: "text-accent-green",
    glow: "bg-accent-green/10",
    hoverBorder: "hover:border-accent-green/40",
    badge: "border-accent-green/30 bg-accent-green/10 text-accent-green-soft",
    cycle: "border-accent-green/25 bg-accent-green/5 text-accent-green-soft",
    cta: "text-accent-green-soft hover:text-accent-green",
  },
  purple: {
    tag: "text-accent-purple",
    glow: "bg-accent-purple/10",
    hoverBorder: "hover:border-accent-purple/40",
    badge: "border-accent-purple/30 bg-accent-purple/10 text-accent-purple-soft",
    cycle: "border-accent-purple/25 bg-accent-purple/5 text-accent-purple-soft",
    cta: "text-accent-purple-soft hover:text-accent-purple",
  },
};

function EcosystemCard({
  item,
  index,
  spanFull,
}: {
  item: EcosystemItem;
  index: number;
  spanFull?: boolean;
}) {
  const dims = item.logo ? LOGO_DIMENSIONS[item.logo] : undefined;
  const styles = COLOR_STYLES[item.color];

  return (
    <Reveal delay={index * 0.08} className={`h-full ${spanFull ? "sm:col-span-2" : ""}`}>
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 transition-colors duration-300 ${styles.hoverBorder}`}
      >
        <div
          className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${styles.glow}`}
        />

        <div className="mb-5 flex items-center gap-3">
          {item.logo && dims ? (
            <div className="flex h-10 items-center">
              <Image
                src={item.logo}
                alt={item.name}
                width={dims.width}
                height={dims.height}
                className="h-10 w-auto object-contain"
              />
            </div>
          ) : (
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-sm font-bold ${styles.badge}`}
            >
              {item.name.slice(0, 2).toUpperCase()}
            </span>
          )}
          <div>
            <h3 className={item.logo ? "sr-only" : "text-lg font-bold text-foreground"}>{item.name}</h3>
            <p className={`text-xs font-medium uppercase tracking-wide ${styles.tag}`}>{item.tag}</p>
          </div>
        </div>

        <div className="space-y-3 text-sm leading-relaxed text-muted">
          {item.description.map((d) => (
            <p key={d}>{d}</p>
          ))}
        </div>

        {item.points && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {item.points.map((point) => (
              <li
                key={point}
                className="rounded-full border border-border bg-black/[0.03] px-3 py-1 text-xs text-foreground/80"
              >
                {point}
              </li>
            ))}
          </ul>
        )}

        {item.cycle && (
          <div className={`mt-5 rounded-xl border px-4 py-3 text-center text-xs font-semibold ${styles.cycle}`}>
            <span className="ltr-nums">{item.cycle}</span>
          </div>
        )}

        {item.cycleLabel && (
          <p className="mt-2 text-center text-xs uppercase tracking-wide text-muted">
            {item.cycleLabel}
          </p>
        )}

        {item.footnote && <p className="mt-4 text-xs italic text-muted/80">{item.footnote}</p>}

        <a
          href={item.href ?? "#contact"}
          target={item.href ? "_blank" : undefined}
          rel={item.href ? "noopener noreferrer" : undefined}
          className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${styles.cta}`}
        >
          {item.cta}
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
          >
            →
          </span>
        </a>
      </article>
    </Reveal>
  );
}

export default function Ecosystem() {
  const { t } = useLanguage();

  return (
    <section id="ecosystem" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading kicker={t.ecosystem.kicker} title={t.ecosystem.title} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.ecosystem.items.map((item, i) => (
            <EcosystemCard
              key={item.name}
              item={item}
              index={i}
              spanFull={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
