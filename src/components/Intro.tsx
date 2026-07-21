"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <section id="intro" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <SectionHeading kicker={t.intro.kicker} title={t.hero.name} />
        <div className="mt-10 space-y-6">
          {t.intro.paragraphs.map((p, i) => (
            <Reveal key={p} delay={i * 0.08}>
              <p
                className={`leading-relaxed ${
                  i === t.intro.paragraphs.length - 1
                    ? "text-xl font-medium text-accent-soft"
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
