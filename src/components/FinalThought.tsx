"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";

export default function FinalThought() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
        <Reveal>
          <p className="section-kicker mb-3 text-xs font-semibold uppercase text-accent">
            {t.finalThought.kicker}
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {t.finalThought.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-muted">{t.finalThought.lead}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="gradient-text mx-auto mt-6 max-w-2xl text-balance text-2xl font-bold leading-snug sm:text-3xl">
            {t.finalThought.question}
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {t.finalThought.closing.map((p, i) => (
            <Reveal key={p} delay={0.3 + i * 0.08}>
              <p className="leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
