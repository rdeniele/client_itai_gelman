"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function QuestionSection() {
  const { t } = useLanguage();

  return (
    <section id="question" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <SectionHeading kicker={t.question.kicker} title={t.question.title} />

        <Reveal delay={0.1}>
          <p className="gradient-text mx-auto mt-10 max-w-2xl text-balance text-center text-2xl font-bold sm:text-3xl">
            {t.question.question}
          </p>
        </Reveal>

        <div className="mx-auto mt-10 max-w-xl space-y-3">
          {t.question.paragraphs.map((p, i) => (
            <Reveal key={p} delay={0.15 + i * 0.06}>
              <p className="text-center leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-border bg-surface/60 p-7">
              <ul className="space-y-3">
                {t.question.notChoose.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/20" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="h-full rounded-2xl border border-accent-green/30 bg-accent-green/5 p-7">
              <ul className="space-y-3">
                {t.question.doChoose.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-accent-green-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-2xl space-y-5 border-t border-border pt-10">
          {t.question.closing.map((p, i) => (
            <Reveal key={p} delay={0.1 + i * 0.1}>
              <p
                className={`text-center leading-relaxed ${
                  i === t.question.closing.length - 1
                    ? "text-lg font-medium text-accent-soft"
                    : "text-muted"
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
