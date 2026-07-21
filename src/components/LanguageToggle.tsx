"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`relative flex items-center rounded-full border border-border bg-black/[0.03] p-1 backdrop-blur-sm ${className}`}
      role="group"
      aria-label="Language switch"
    >
      {(["en", "he"] as const).map((option) => {
        const active = lang === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            className={`relative z-10 min-w-[2.75rem] cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-300 ${
              active ? "text-black" : "text-muted hover:text-foreground"
            }`}
            aria-pressed={active}
          >
            {option === "en" ? "EN" : "עב"}
            {active && (
              <motion.span
                layoutId="lang-pill"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute inset-0 -z-10 rounded-full bg-[var(--accent)]"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
