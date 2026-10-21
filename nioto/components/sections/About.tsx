"use client";
// components/sections/About.tsx
// Section "Qui est NIOTO" — mise en page asymétrique

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ABOUT } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Paragraphes en fade-up avec stagger
        const paragraphs = textRef.current?.querySelectorAll("p");
        if (paragraphs) {
          gsap.fromTo(
            paragraphs,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        }

        // Image qui se dévoile par clip-path
        if (imgRef.current) {
          gsap.fromTo(
            imgRef.current,
            { clipPath: "inset(100% 0 0 0)" },
            {
              clipPath: "inset(0% 0 0 0)",
              duration: 1.2,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: imgRef.current,
                start: "top 75%",
                once: true,
              },
            }
          );
        }
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const paragraphs = textRef.current?.querySelectorAll("p");
        if (paragraphs) gsap.set(paragraphs, { opacity: 1, y: 0 });
        if (imgRef.current) gsap.set(imgRef.current, { clipPath: "inset(0% 0 0 0)" });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-pad bg-[var(--nioto-coton)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texte à gauche */}
          <div ref={textRef}>
            <p className="text-[var(--nioto-or)] text-xs font-semibold tracking-widest uppercase mb-4">
              Notre entreprise
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--nioto-brun)] mb-8 leading-tight">
              {ABOUT.titre}
            </h2>
            <div className="space-y-5">
              {ABOUT.paragraphes.map((p, i) => (
                <p key={i} className="text-[var(--nioto-brun)]/75 leading-relaxed text-base md:text-lg" style={{ opacity: 0 }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Filet décoratif */}
            <div className="mt-10 pt-6 border-t border-[var(--nioto-brun)]/10">
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-2xl font-serif font-bold text-[var(--nioto-or)]">Queen&apos;s</p>
                  <p className="text-xs text-[var(--nioto-brun)]/50 mt-1">Marque phare — huile de coton</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-[var(--nioto-or)]">GEOCOTON</p>
                  <p className="text-xs text-[var(--nioto-brun)]/50 mt-1">Groupe français — maison mère</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-[var(--nioto-or)]">Lomé</p>
                  <p className="text-xs text-[var(--nioto-brun)]/50 mt-1">Zone industrielle du Port</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image à droite, décalée */}
          <div className="relative lg:mt-16">
            <div
              ref={imgRef}
              className="relative aspect-[3/4] max-w-md ml-auto overflow-hidden rounded-sm"
              style={{ clipPath: "inset(100% 0 0 0)" }}
            >
              <Image
                src={ABOUT.image}
                alt="NIOTO — transformation des oléagineux à Lomé"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              {/* Overlay léger */}
              <div className="absolute inset-0 bg-[var(--nioto-or)]/5" />
            </div>
            {/* Accent décoratif */}
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 border border-[var(--nioto-or)]/20 rounded-sm -z-10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
