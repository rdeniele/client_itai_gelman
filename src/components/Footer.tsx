"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
        <Reveal>
          <Image
            src="/logos/gintex.png"
            alt={t.footer.brand}
            width={1407}
            height={414}
            className="mx-auto h-8 w-auto"
          />
          <p className="mt-2 text-sm text-muted">{t.footer.tagline}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href="#top"
            className="mt-4 inline-block text-sm font-medium text-accent-soft transition-colors hover:text-accent"
          >
            {t.footer.storyLink}
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <blockquote className="mx-auto mt-10 max-w-xl border-t border-border pt-8">
            <p className="text-balance text-lg italic text-foreground/85">“{t.footer.quote}”</p>
            <footer className="mt-3 text-sm text-muted">— {t.footer.quoteAuthor}</footer>
          </blockquote>
        </Reveal>

        <p className="mt-10 text-xs text-muted">
          © <span className="ltr-nums">{year}</span> {t.footer.brand}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
