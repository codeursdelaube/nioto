"use client";
// components/sections/Process.tsx
// "Du champ à la bouteille" — section épinglée GSAP scrub desktop

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { PROCESS_STEPS } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // ── Desktop ≥ 1024px : pin + scrub des slides ──
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];
          if (!panels.length) return;

          // Position initiale : tous cachés sauf le premier
          panels.forEach((p, i) => {
            gsap.set(p, { autoAlpha: i === 0 ? 1 : 0 });
          });

          // Épingler la section
          const totalScroll = (panels.length - 1) * window.innerHeight;

          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${totalScroll}`,
            pin: true,
            pinSpacing: true,
            onUpdate: (self) => {
              const step = Math.round(self.progress * (panels.length - 1));

              panels.forEach((p, i) => {
                if (i === step) {
                  gsap.to(p, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" });
                } else {
                  gsap.to(p, { autoAlpha: 0, y: i < step ? -15 : 15, duration: 0.35 });
                }
              });

              // Barre de progression
              if (progressRef.current) {
                gsap.set(progressRef.current, {
                  width: `${((step + 1) / panels.length) * 100}%`,
                });
              }
            },
          });
        }
      );

      // ── Mobile < 1024px : reveals simples ──
      mm.add("(max-width: 1023px)", () => {
        const items = sectionRef.current?.querySelectorAll<HTMLElement>(".process-mobile-item");
        if (!items) return;
        items.forEach((item) => {
          gsap.set(item, { opacity: 0, y: 30 });
          ScrollTrigger.create({
            trigger: item,
            start: "top 85%",
            once: true,
            onEnter: () =>
              gsap.to(item, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }),
          });
        });
      });

      // ── Reduced motion ──
      mm.add("(prefers-reduced-motion: reduce)", () => {
        panelRefs.current.forEach((p) => {
          if (p) gsap.set(p, { autoAlpha: 1, y: 0 });
        });
        const items = sectionRef.current?.querySelectorAll<HTMLElement>(".process-mobile-item");
        if (items) items.forEach((item) => gsap.set(item, { opacity: 1, y: 0 }));
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-[var(--nioto-vert)] text-[var(--nioto-coton)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Version desktop : affichage plein écran ── */}
        <div className="hidden lg:flex flex-col min-h-screen justify-center py-16">
          {/* En-tête */}
          <div className="mb-10">
            <p className="text-[var(--nioto-or)] text-xs font-semibold tracking-widest uppercase mb-3">
              Notre savoir-faire
            </p>
            <h2 className="text-5xl font-serif font-bold leading-tight">
              Du champ <span className="text-[var(--nioto-or)]">à votre table.</span>
            </h2>
          </div>

          {/* Barre de progression */}
          <div className="mb-10">
            <div className="h-px bg-white/10 relative">
              <div
                ref={progressRef}
                className="absolute top-0 left-0 h-full bg-[var(--nioto-or)]"
                style={{ width: `${(1 / PROCESS_STEPS.length) * 100}%`, transition: "width 0.35s ease" }}
              />
            </div>
            <div className="flex justify-between mt-2">
              {PROCESS_STEPS.map((step) => (
                <span key={step.id} className="text-xs text-white/30 font-sans">
                  0{step.id}
                </span>
              ))}
            </div>
          </div>

          {/* Slides superposées */}
          <div className="relative" style={{ minHeight: "380px" }}>
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.id}
                ref={(el) => { panelRefs.current[i] = el; }}
                className="absolute inset-0 grid grid-cols-2 gap-16 items-center"
                style={{ visibility: i === 0 ? "visible" : "hidden", opacity: i === 0 ? 1 : 0 }}
              >
                {/* Texte */}
                <div>
                  <span className="text-[10rem] font-serif font-bold text-[var(--nioto-or)]/10 leading-none select-none block -mb-6">
                    0{step.id}
                  </span>
                  <h3 className="text-3xl font-serif font-bold mb-4">{step.titre}</h3>
                  <p className="text-[var(--nioto-coton)]/70 leading-relaxed text-lg max-w-md font-sans">
                    {step.texte}
                  </p>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={step.image}
                    alt={`NIOTO — ${step.titre}`}
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[var(--nioto-vert)]/15" />
                </div>
              </div>
            ))}
          </div>

          {/* Hint scroll */}
          <p className="text-white/25 text-xs text-right mt-8 font-sans">
            Faites défiler pour explorer →
          </p>
        </div>

        {/* ── Version mobile : empilée ── */}
        <div className="lg:hidden section-pad">
          <p className="text-[var(--nioto-or)] text-xs font-semibold tracking-widest uppercase mb-3">
            Notre savoir-faire
          </p>
          <h2 className="text-4xl font-serif font-bold leading-tight mb-12">
            Du champ <span className="text-[var(--nioto-or)]">à votre table.</span>
          </h2>

          <div className="flex flex-col gap-14">
            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="process-mobile-item" style={{ opacity: 0 }}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl font-serif font-bold text-[var(--nioto-or)]/25 leading-none select-none shrink-0">
                    0{step.id}
                  </span>
                  <h3 className="text-2xl font-serif font-bold mt-1">{step.titre}</h3>
                </div>
                <div className="relative overflow-hidden rounded-sm mb-5" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={step.image}
                    alt={`NIOTO — ${step.titre}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-[var(--nioto-coton)]/70 leading-relaxed font-sans">
                  {step.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
