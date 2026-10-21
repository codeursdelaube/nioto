"use client";
// components/sections/Citizen.tsx
// "Une entreprise citoyenne" — engagements NIOTO

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { CITIZEN } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

gsap.registerPlugin(ScrollTrigger);

export function Citizen() {
  const listRef = useRef<HTMLOListElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = listRef.current?.querySelectorAll("li");
        if (!items) return;

        gsap.fromTo(
          items,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const items = listRef.current?.querySelectorAll("li");
        if (items) gsap.set(items, { opacity: 1, x: 0 });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="citizen"
      ref={sectionRef}
      className="section-pad relative overflow-hidden bg-[var(--nioto-coton)]"
    >
      {/* Image d'ambiance en arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src={CITIZEN.image}
          alt="NIOTO — équipe et site de production"
          fill
          sizes="100vw"
          className="object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-[var(--nioto-coton)]/92" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Texte intro */}
          <Reveal>
            <p className="text-[var(--nioto-or)] text-xs font-semibold tracking-widest uppercase mb-3">
              Responsabilité
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--nioto-brun)] leading-tight mb-6">
              {CITIZEN.titre}
            </h2>
            <p className="text-[var(--nioto-brun)]/65 text-lg leading-relaxed font-sans">
              {CITIZEN.intro}
            </p>
          </Reveal>

          {/* Liste des engagements */}
          <ol ref={listRef} className="flex flex-col gap-0">
            {CITIZEN.engagements.map((eng, i) => (
              <li
                key={i}
                className="flex gap-5 py-5 border-b border-[var(--nioto-brun)]/8 last:border-b-0"
                style={{ opacity: 0 }}
              >
                <span className="text-3xl font-serif font-bold text-[var(--nioto-or)]/20 leading-none select-none shrink-0 w-9">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[var(--nioto-brun)]/80 leading-relaxed font-sans text-base pt-1">
                  {eng}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
