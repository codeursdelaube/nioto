"use client";
// components/sections/Karite.tsx

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Reveal } from "@/components/ui/Reveal";
import { KARITE } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function Karite() {
  const bandeauRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        if (bandeauRef.current) {
          gsap.to(bandeauRef.current, {
            x: -120,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="karite"
      ref={sectionRef}
      className="section-pad bg-[var(--nioto-brun)] text-[var(--nioto-coton)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Texte */}
          <Reveal>
            <p className="text-[var(--nioto-or)] text-xs font-semibold tracking-widest uppercase mb-3">
              Activité B2B
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              {KARITE.titre}
            </h2>
            <p className="text-xl font-serif italic text-[var(--nioto-or)] mb-6">
              {KARITE.accroche}
            </p>
            <p className="text-[var(--nioto-coton)]/70 leading-relaxed text-base font-sans">
              {KARITE.description}
            </p>
            {KARITE.tonnage && (
              <p className="mt-4 text-sm text-[var(--nioto-coton)]/40 italic font-sans">
                {KARITE.tonnage}
              </p>
            )}
          </Reveal>

          {/* Image */}
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/nioto_images/image5.jpg"
                alt="Amandes de karité — NIOTO, premier producteur d'Afrique de l'Ouest"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--nioto-brun)]/25" />
            </div>
          </Reveal>
        </div>

        {/* Bandeau des débouchés — GSAP défilement horizontal */}
        <div className="overflow-hidden mt-8">
          <div ref={bandeauRef} className="flex gap-8 min-w-max">
            {KARITE.debouches.map((d, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 border-t border-[var(--nioto-or)]/25 pt-6"
              >
                <span className="text-xs text-[var(--nioto-or)] font-semibold tracking-widest uppercase mb-3 block">
                  0{i + 1}
                </span>
                <h4 className="text-lg font-serif font-bold text-[var(--nioto-coton)] mb-2">{d.titre}</h4>
                <p className="text-sm text-[var(--nioto-coton)]/60 leading-relaxed font-sans">{d.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
