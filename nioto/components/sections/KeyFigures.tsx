"use client";
// components/sections/KeyFigures.tsx
// Bandeau chiffres clés avec compteurs GSAP

import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { KEY_FIGURES } from "@/lib/content";

export function KeyFigures() {
  return (
    <section id="keyfigures" className="section-pad bg-[var(--nioto-vert)]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-[var(--nioto-or)] text-xs font-semibold tracking-widest uppercase mb-3">
            NIOTO en chiffres
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--nioto-coton)] mb-12 leading-tight">
            Une présence qui compte.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {KEY_FIGURES.map((fig, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="border-t border-[var(--nioto-or)]/20 pt-6">
                <p className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[var(--nioto-coton)] leading-none mb-3">
                  <Counter valeur={fig.valeur} suffixe={fig.suffixe} />
                </p>
                <p className="text-[var(--nioto-coton)]/60 text-sm leading-snug font-sans">
                  {fig.label}
                </p>
                {fig.note && (
                  <p className="text-[var(--nioto-coton)]/25 text-xs mt-1 font-sans italic">
                    ({fig.note})
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
