"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";

export default function VideoSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal>
          <p className="section-kicker mb-3 text-center text-xs font-semibold uppercase text-accent">
            {t.video.kicker}
          </p>
          <h3 className="mb-8 text-center text-2xl font-bold sm:text-3xl">{t.video.title}</h3>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group relative aspect-video overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,74,0.18),transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,27,24,0.04),transparent_40%)]" />
            <button
              type="button"
              aria-label="Play personal video"
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-foreground/90"
            >
              <motion.span
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/50 bg-accent/10 backdrop-blur-sm transition-colors group-hover:bg-accent/20"
              >
                <svg viewBox="0 0 24 24" className="ms-1 h-8 w-8 fill-accent-soft">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.span>
              <span className="text-sm text-muted">{t.video.caption}</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
