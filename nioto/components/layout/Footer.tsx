"use client";
// components/layout/Footer.tsx

import Image from "next/image";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CONTACT, COMPANY, NAV_LINKS } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[var(--nioto-vert)] text-[var(--nioto-coton)]">
      <div className="max-w-7xl mx-auto px-6 section-pad">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Colonne 1 — Identité */}
            <div className="flex flex-col gap-5">
              <div className="relative h-12 w-36">
                <Image
                  src="/nioto_images/nioto_logo.jpg"
                  alt="Logo NIOTO"
                  fill
                  sizes="144px"
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
              <p className="text-[var(--nioto-coton)]/70 text-sm leading-relaxed max-w-xs">
                Transformer les oléagineux togolais en produits de qualité, de la graine à votre table.
              </p>
              <p className="text-[var(--nioto-or)] text-xs font-medium tracking-wide uppercase">
                Filiale du groupe GEOCOTON
              </p>
            </div>

            {/* Colonne 2 — Contact */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[var(--nioto-coton)] font-serif font-semibold text-lg mb-2">Contact</h3>

              <div className="flex gap-3 text-sm text-[var(--nioto-coton)]/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--nioto-or)]" />
                <div>
                  <p>{CONTACT.adresse}</p>
                  <p>{CONTACT.bp}</p>
                </div>
              </div>

              <div className="flex gap-3 text-sm text-[var(--nioto-coton)]/70">
                <Phone size={16} className="mt-0.5 shrink-0 text-[var(--nioto-or)]" />
                <div className="flex flex-col gap-1">
                  {CONTACT.telephones.map((t) => (
                    <motion.a
                      key={t.href}
                      href={t.href}
                      whileHover={{ x: 4, color: "var(--nioto-or)" }}
                      transition={{ duration: 0.15 }}
                      className="hover:text-[var(--nioto-or)] transition-colors min-h-[44px] flex items-center"
                    >
                      {t.label}
                    </motion.a>
                  ))}
                  <p className="text-[var(--nioto-coton)]/40 text-xs">Fax : {CONTACT.fax}</p>
                </div>
              </div>

              <div className="flex gap-3 text-sm text-[var(--nioto-coton)]/70">
                <Clock size={16} className="mt-0.5 shrink-0 text-[var(--nioto-or)]" />
                <p>{CONTACT.horaires}</p>
              </div>

              {CONTACT.email && (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-[var(--nioto-or)] hover:underline"
                >
                  {CONTACT.email}
                </a>
              )}

              <a
                href={CONTACT.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-sm border border-[var(--nioto-or)]/40 text-[var(--nioto-or)] text-sm hover:bg-[var(--nioto-or)] hover:text-[var(--nioto-vert)] transition-colors w-fit min-h-[44px]"
              >
                <ExternalLink size={14} />
                Itinéraire
              </a>
            </div>

            {/* Colonne 3 — Liens & Réseaux */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[var(--nioto-coton)] font-serif font-semibold text-lg mb-2">Navigation</h3>
              <nav className="flex flex-col gap-2" aria-label="Navigation footer">
                {NAV_LINKS.map((link) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    whileHover={{ x: 4, color: "var(--nioto-or)" }}
                    transition={{ duration: 0.15 }}
                    className="text-left text-sm text-[var(--nioto-coton)]/70 hover:text-[var(--nioto-or)] transition-colors min-h-[36px] flex items-center"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-white/10">
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--nioto-coton)]/70 hover:text-[var(--nioto-or)] transition-colors min-h-[44px]"
                  aria-label="NIOTO sur Facebook"
                >
                  <FacebookIcon />
                  Suivez-nous sur Facebook
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Ligne basse */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--nioto-coton)]/40">
          <p>© {year} NIOTO SA · Lomé, Togo</p>
          <p className="text-[var(--nioto-coton)]/20">Nouvelle Industrie des Oléagineux du Togo</p>
        </div>
      </div>
    </footer>
  );
}
