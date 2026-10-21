"use client";
// components/ui/AutoWrite.tsx
// Effet machine à écrire pour le Hero — cycle sur un tableau de phrases

import { useEffect, useRef, useState } from "react";

interface AutoWriteProps {
  phrases: string[];
  className?: string;
  speed?: number;     // ms par caractère
  pauseMs?: number;   // pause à la fin d'une phrase
}

export function AutoWrite({
  phrases,
  className = "",
  speed = 55,
  pauseMs = 2200,
}: AutoWriteProps) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const current = phrases[phraseIdx];

    const tick = () => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
          timeoutRef.current = setTimeout(tick, speed);
        } else {
          // Pause puis efface
          timeoutRef.current = setTimeout(() => setDeleting(true), pauseMs);
        }
      } else {
        if (charIdx > 0) {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
          timeoutRef.current = setTimeout(tick, speed / 2);
        } else {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % phrases.length);
          timeoutRef.current = setTimeout(tick, 300);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, speed);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIdx, deleting, phraseIdx]);

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {displayed}
      <span className="autowrite-cursor" aria-hidden="true" />
    </span>
  );
}
