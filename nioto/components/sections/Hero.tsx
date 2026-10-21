"use client";
// components/sections/Hero.tsx
// Hero section avec parallaxe GSAP, autowrite, et goutte d'huile animée

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { HERO } from "@/lib/content";
import { AutoWrite } from "@/components/ui/AutoWrite";
import { OilDrop } from "@/components/ui/OilDrop";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // ── Révélation du titre ligne par ligne ──
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const lines = titleRef.current?.querySelectorAll(".hero-line");
        if (lines) {
          gsap.fromTo(
            lines,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              ease: "power3.out",
              stagger: 0.15,
              delay: 0.3,
            }
          );
        }

        if (subtitleRef.current) {
          gsap.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.9, delay: 0.85, ease: "power3.out" }
          );
        }

        if (arrowRef.current) {
          gsap.fromTo(
            arrowRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, delay: 1.4 }
          );
        }

        // ── Parallaxe image au scroll ──
        if (imgRef.current) {
          gsap.to(imgRef.current, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });

      // Reduced motion
      mm.add("(prefers-reduced-motion: reduce)", () => {
        const lines = titleRef.current?.querySelectorAll(".hero-line");
        if (lines) gsap.set(lines, { y: 0, opacity: 1 });
        if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 1, y: 0 });
        if (arrowRef.current) gsap.set(arrowRef.current, { opacity: 1 });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Image de fond avec voile vert */}
      <div ref={imgRef} className="absolute inset-0 scale-110">
        <Image
          src={HERO.image}
          alt="NIOTO — usine d'huile raffinée à Lomé, Togo"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        {/* Voile vert sombre */}
        <div className="absolute inset-0 bg-[var(--nioto-vert)]/75" />
        {/* Gradient bas pour la lisibilité */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--nioto-vert)]/60 to-transparent" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-4xl">
          {/* Goutte animée */}
          <OilDrop size={52} animated className="mb-8" />

          {/* Titre ligne par ligne */}
          <div ref={titleRef} className="overflow-hidden">
            {HERO.titre.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <h1
                  className="hero-line hero-title text-[var(--nioto-coton)] block"
                  style={{ opacity: 0 }}
                >
                  {line}
                </h1>
              </div>
            ))}
          </div>

          {/* Autowrite sous le titre */}
          <div className="mt-6 mb-8">
            <span className="text-lg md:text-xl font-medium text-[var(--nioto-or)] font-sans inline-block min-h-[2em]">
              <AutoWrite phrases={HERO.autowritePhrases} speed={60} pauseMs={2000} />
            </span>
          </div>

          {/* Sous-titre */}
          <p
            ref={subtitleRef}
            className="text-[var(--nioto-coton)]/75 text-base md:text-lg leading-relaxed max-w-xl font-sans"
            style={{ opacity: 0 }}
          >
            {HERO.sousTitre}
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("queens")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3 bg-[var(--nioto-or)] text-[var(--nioto-vert)] font-semibold text-sm rounded-sm hover:bg-[var(--nioto-or-light)] transition-colors"
            >
              Découvrir Queen&apos;s
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3 border border-[var(--nioto-coton)]/30 text-[var(--nioto-coton)] font-semibold text-sm rounded-sm hover:bg-white/10 transition-colors"
            >
              Notre histoire
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={arrowRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <button
          onClick={scrollDown}
          aria-label="Défiler vers le bas"
          className="flex flex-col items-center gap-2 text-[var(--nioto-coton)]/50 hover:text-[var(--nioto-or)] transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase font-sans">Découvrir</span>
          <ArrowDown size={18} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
