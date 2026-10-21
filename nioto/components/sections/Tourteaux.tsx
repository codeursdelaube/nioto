"use client";
// components/sections/Tourteaux.tsx

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { TOURTEAUX } from "@/lib/content";

// SVG schéma graine → huile + tourteau
function GraineSchema() {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md mx-auto"
      aria-label="Schéma de valorisation complète de la graine de coton"
      role="img"
    >
      {/* Graine centrale */}
      <ellipse cx="200" cy="100" rx="30" ry="40" fill="var(--nioto-or)" fillOpacity="0.3" stroke="var(--nioto-or)" strokeWidth="2" />
      <text x="200" y="106" textAnchor="middle" fill="var(--nioto-or)" fontSize="9" fontFamily="serif" fontWeight="600">Graine</text>

      {/* Flèche vers huile (haut gauche) */}
      <line x1="175" y1="75" x2="100" y2="40" stroke="var(--nioto-or)" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="98,34 105,42 93,44" fill="var(--nioto-or)" />

      {/* Flèche vers tourteau (bas droite) */}
      <line x1="225" y1="125" x2="300" y2="160" stroke="var(--nioto-karite)" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="302,166 295,158 307,156" fill="var(--nioto-karite)" />

      {/* Huile */}
      <rect x="30" y="18" width="90" height="38" rx="3" fill="var(--nioto-or)" fillOpacity="0.12" stroke="var(--nioto-or)" strokeWidth="1.5" />
      <text x="75" y="34" textAnchor="middle" fill="var(--nioto-or)" fontSize="9" fontFamily="serif" fontWeight="600">Huile raffinée</text>
      <text x="75" y="48" textAnchor="middle" fill="var(--nioto-or)" fontSize="7.5" fontFamily="sans-serif">Queen's</text>

      {/* Tourteau */}
      <rect x="280" y="148" width="90" height="38" rx="3" fill="var(--nioto-karite)" fillOpacity="0.12" stroke="var(--nioto-karite)" strokeWidth="1.5" />
      <text x="325" y="164" textAnchor="middle" fill="var(--nioto-karite)" fontSize="9" fontFamily="serif" fontWeight="600">Tourteaux</text>
      <text x="325" y="178" textAnchor="middle" fill="var(--nioto-karite)" fontSize="7.5" fontFamily="sans-serif">Alimentation animale</text>
    </svg>
  );
}

export function Tourteaux() {
  return (
    <section id="tourteaux" className="section-pad bg-[var(--nioto-karite)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texte */}
          <Reveal>
            <p className="text-[var(--nioto-or)] text-xs font-semibold tracking-widest uppercase mb-3">
              Économie circulaire
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--nioto-brun)] leading-tight mb-4">
              {TOURTEAUX.titre}
            </h2>
            <p className="text-2xl font-serif italic text-[var(--nioto-or)] mb-6">
              {TOURTEAUX.accroche}
            </p>
            <p className="text-[var(--nioto-brun)]/70 leading-relaxed text-base font-sans">
              {TOURTEAUX.description}
            </p>
          </Reveal>

          {/* Schéma SVG */}
          <Reveal delay={0.1}>
            <div className="bg-[var(--nioto-coton)] rounded-sm p-8">
              <GraineSchema />
              <p className="text-center text-xs text-[var(--nioto-brun)]/40 mt-4 font-sans italic">
                Valorisation complète de la graine de coton togolaise
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
