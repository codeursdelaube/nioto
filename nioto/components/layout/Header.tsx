"use client";
// components/layout/Header.tsx

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
            ? "bg-[var(--nioto-coton)]/95 backdrop-blur-sm border-b border-[var(--nioto-brun)]/10 py-3"
            : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
            aria-label="NIOTO — Accueil"
          >
            <div
              className="relative h-10 w-38 transition-all duration-300"
              style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
            >
              <Image
                src="/nioto_images/nioto_logo.jpg"
                alt="Logo NIOTO"
                fill
                sizes="112px"
                className="object-contain object-left"
                priority
              />
            </div>
          </button>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[var(--nioto-or)] ${scrolled ? "text-[var(--nioto-brun)]" : "text-[var(--nioto-coton)]"
                  }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#footer")}
              className="flex items-center gap-2 px-5 py-2 rounded-sm text-sm font-semibold bg-[var(--nioto-or)] text-white hover:bg-[var(--nioto-ambre)] transition-colors"
            >
              Nous contacter <ArrowRight size={14} />
            </button>
          </nav>

          {/* Burger mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2"
            aria-label="Ouvrir le menu"
            style={{ color: scrolled ? "var(--nioto-brun)" : "#FAF7F0" }}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[var(--nioto-vert)] flex flex-col p-8"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-28">
                  <Image
                    src="/nioto_images/nioto_logo.jpg"
                    alt="Logo NIOTO"
                    fill
                    sizes="112px"
                    className="object-contain object-left brightness-0 invert"
                    priority
                  />
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Fermer le menu"
                className="text-[var(--nioto-coton)] p-2 hover:text-[var(--nioto-or)] transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-2" aria-label="Menu mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-3xl font-serif font-semibold text-[var(--nioto-coton)] py-3 border-b border-white/10 hover:text-[var(--nioto-or)] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="mt-auto">
              <p className="text-[var(--nioto-coton)]/40 text-sm">Filiale du groupe GEOCOTON</p>
              <p className="text-[var(--nioto-coton)]/40 text-sm">Lomé, Togo</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
