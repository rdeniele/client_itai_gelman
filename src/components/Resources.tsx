"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const LOGO_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/logos/onlineperception.png": { width: 1458, height: 260 },
  "/logos/georepute.png": { width: 1484, height: 493 },
  "/logos/copyup.png": { width: 1194, height: 324 },
  "/logos/gintex.png": { width: 1407, height: 414 },
  "/logos/geon.png": { width: 543, height: 578 },
};

export default function Resources() {
  const { t } = useLanguage();

  return (
    <section id="resources" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <SectionHeading kicker={t.resources.kicker} title={t.resources.title} />

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-center leading-relaxed text-muted">
            {t.resources.intro}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {t.resources.items.map((item, i) => {
            const dims = item.logo ? LOGO_DIMENSIONS[item.logo] : undefined;
            return (
              <Reveal key={item.name} delay={0.14 + i * 0.05}>
                <div className="flex items-center justify-between rounded-2xl border border-border bg-surface/60 px-5 py-4 transition-colors duration-300 hover:border-accent/40">
                  <div className="flex items-center gap-3">
                    {item.logo && dims && (
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={dims.width}
                        height={dims.height}
                        className="h-6 w-auto shrink-0 object-contain"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-xs text-muted">{item.tag}</p>
                    </div>
                  </div>
                  <span className="text-accent">↓</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4} className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
          >
            {t.resources.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
