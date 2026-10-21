"use client";
// components/sections/Queens.tsx
// Section produit phare Queen's — Carousel + 5 raisons + nutrition

import { Reveal } from "@/components/ui/Reveal";
import { ProductCarousel } from "@/components/ui/ProductCarousel";
import { QUEENS } from "@/lib/content";

export function Queens() {
  return (
    <section id="queens" className="section-pad bg-[var(--nioto-karite)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête */}
        <Reveal>
          <p className="text-[var(--nioto-or)] text-xs font-semibold tracking-widest uppercase mb-3">
            Produit phare
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-[var(--nioto-brun)] leading-none">
                Queen&apos;s
              </h2>
              <p className="text-xl text-[var(--nioto-brun)]/70 mt-3 font-sans">{QUEENS.accroche}</p>
            </div>
            <p className="text-sm text-[var(--nioto-brun)]/60 max-w-xs leading-relaxed font-sans">
              {QUEENS.description}
            </p>
          </div>
        </Reveal>

        {/* Carousel */}
        <Reveal delay={0.1}>
          <div className="mb-20">
            <ProductCarousel slides={QUEENS.images} />
          </div>
        </Reveal>

        {/* 5 bonnes raisons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <Reveal>
            <h3 className="text-3xl font-serif font-bold text-[var(--nioto-brun)] mb-8 leading-tight">
              Les 5 bonnes raisons de choisir Queen&apos;s
            </h3>
            <ol className="flex flex-col gap-0">
              {QUEENS.cinqRaisons.map((r, i) => (
                <li
                  key={r.num}
                  className="flex gap-5 py-6 border-b border-[var(--nioto-brun)]/10 last:border-b-0"
                >
                  <span className="text-4xl font-serif font-bold text-[var(--nioto-or)]/25 leading-none select-none shrink-0 w-12">
                    {r.num}
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--nioto-brun)] text-base mb-1">{r.titre}</p>
                    <p className="text-[var(--nioto-brun)]/60 text-sm leading-relaxed font-sans">{r.texte}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Tableau nutritionnel */}
          <Reveal delay={0.15}>
            <div className="bg-[var(--nioto-coton)] rounded-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-bold text-[var(--nioto-brun)]">
                  Valeurs nutritionnelles
                </h3>
                <span className="text-xs text-[var(--nioto-brun)]/40 font-sans italic">
                  {QUEENS.nutrition.mention}
                </span>
              </div>

              <table className="w-full text-sm font-sans">
                <tbody>
                  {QUEENS.nutrition.valeurs.map((v, i) => (
                    <tr key={i} className="border-b border-[var(--nioto-brun)]/8 last:border-b-0">
                      <td className="py-4 text-[var(--nioto-brun)]/70 pr-4">{v.label}</td>
                      <td className="py-4 text-right font-mono">
                        <span className="text-2xl font-serif font-bold text-[var(--nioto-or)]">
                          {v.valeur}
                        </span>
                        <span className="text-xs text-[var(--nioto-brun)]/50 ml-1">{v.unite}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="mt-6 pt-4 border-t border-[var(--nioto-brun)]/8 text-xs text-[var(--nioto-brun)]/45 leading-relaxed font-sans italic">
                {QUEENS.nutrition.note}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
