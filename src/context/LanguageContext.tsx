"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type ContentShape, type Lang } from "@/data/content";

interface LanguageContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: ContentShape;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const STORAGE_KEY = "itai-gelman-lang";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    // One-time rehydration from localStorage/browser locale after mount (window
    // is unavailable during SSR, so this can't be computed in the initializer).
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "he") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored);
    } else {
      const browserLang = window.navigator.language?.toLowerCase() ?? "";
      if (browserLang.startsWith("he")) {
        setLangState("he");
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "he" : "en");
  }, [lang, setLang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir: lang === "he" ? "rtl" : "ltr",
      t: content[lang],
      toggleLang,
      setLang,
    }),
    [lang, toggleLang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
