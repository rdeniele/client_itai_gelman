"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function Typewriter({
  words,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseDuration = 1800,
  className = "",
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    if (words.length === 0) return;
    const currentWord = words[wordIndex % words.length];

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setPhase("pausing"), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (phase === "pausing") {
      const timeout = setTimeout(() => setPhase("deleting"), pauseDuration / 3);
      return () => clearTimeout(timeout);
    }

    if (text.length > 0) {
      const timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    // Deleting finished: advance to the next word and restart the typing phase.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWordIndex((i) => (i + 1) % words.length);
    setPhase("typing");
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span>{text}</span>
      <span
        aria-hidden
        className="ms-1 inline-block h-[0.9em] w-[2px] translate-y-[0.05em] animate-[blink_1s_steps(1)_infinite] bg-current"
      />
    </span>
  );
}
