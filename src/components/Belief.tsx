"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Belief() {
  const { t } = useLanguage();

  return (
    <section id="belief" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute start-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-purple/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-2xl px-6 sm:px-10">
        <SectionHeading kicker={t.belief.kicker} title={t.belief.title} />

        <div className="mt-10 space-y-6">
          {t.belief.paragraphs.map((p, i) => (
            <Reveal key={p} delay={i * 0.08}>
              <p
                className={`text-center leading-relaxed ${
                  i === t.belief.paragraphs.length - 1
                    ? "text-xl font-semibold text-accent-soft"
                    : "text-lg text-muted"
                }`}
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
