"use client";
// components/ui/Counter.tsx
// Compteur animé au scroll via GSAP

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface CounterProps {
  valeur: number;
  suffixe?: string;
  className?: string;
}

export function Counter({ valeur, suffixe = "", className = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const obj = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: valeur,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              if (el) el.textContent = Math.round(obj.val) + suffixe;
            },
          });
        },
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      if (el) el.textContent = valeur + suffixe;
    });

    // Valeur initiale
    if (el) el.textContent = "0" + suffixe;

    return () => mm.revert();
  }, [valeur, suffixe]);

  return (
    <span ref={ref} className={className}>
      0{suffixe}
    </span>
  );
}
