"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export default function Nav() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="flex items-center">
          <Image src="/logos/gintex.png" alt={t.footer.brand} width={1407} height={414} className="h-7 w-auto" priority />
        </a>

        <div className="hidden items-center gap-6 whitespace-nowrap lg:flex xl:gap-8">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageToggle className="hidden sm:flex" />
          <a
            href="#contact"
            className="hidden whitespace-nowrap rounded-full bg-accent px-4 py-2 text-xs font-semibold text-black transition-transform duration-300 hover:scale-105 lg:inline-block"
          >
            {t.nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {t.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-2 py-2.5 text-sm text-muted transition-colors hover:bg-black/[0.03] hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-black"
              >
                {t.nav.cta}
              </a>
              <LanguageToggle className="mt-3 self-start" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
