"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const parallaxRange = reducedMotion ? [0, 0] : undefined;
  const glowY = useTransform(scrollYProgress, [0, 1], parallaxRange ?? [0, 140]);
  const gridY = useTransform(scrollYProgress, [0, 1], parallaxRange ?? [0, 60]);
  const portraitY = useTransform(scrollYProgress, [0, 1], parallaxRange ?? [0, -50]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          style={{ y: glowY }}
          className="absolute -top-40 start-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-accent/20 via-accent-purple/15 to-accent-green/10 blur-[120px]"
        />
        <motion.div
          style={{ y: gridY }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(28,27,24,0.07)_1px,transparent_0)] [background-size:32px_32px]"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-kicker mb-5 text-xs font-semibold uppercase text-accent"
          >
            {t.hero.kicker}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t.hero.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-4 h-10 text-xl font-medium text-accent-soft sm:text-2xl"
          >
            <Typewriter words={t.hero.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-6 max-w-xl text-lg font-medium text-foreground/90"
          >
            {t.hero.lead}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-4 max-w-xl leading-relaxed text-muted"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#ecosystem"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground/90 transition-colors duration-300 hover:border-accent/60 hover:text-accent-soft"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: portraitY }}
          className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none"
        >
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-transparent to-transparent blur-2xl" />
            <div className="animate-float-slow relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[0_30px_80px_-24px_rgba(28,27,24,0.28)]">
              <Image
                src="/ItaiGelman_hero_image.jpeg"
                alt="Itai Gelman"
                width={1300}
                height={1600}
                priority
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-5 -start-5 flex items-center gap-3 rounded-2xl border border-border bg-surface/95 px-4 py-3 text-xs shadow-xl backdrop-blur">
              <Image
                src="/logos/gintex.png"
                alt={t.footer.brand}
                width={96}
                height={47}
                className="h-5 w-auto shrink-0"
              />
              <p className="text-muted">{t.footer.tagline}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-6 start-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted sm:flex"
      >
        {t.hero.scrollHint}
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
        </span>
      </motion.a>
    </section>
  );
}
