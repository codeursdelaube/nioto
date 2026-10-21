"use client";
// components/ui/ProductCarousel.tsx
// Swiper carousel des produits Queen's

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  src: string;
  alt: string;
}

interface ProductCarouselProps {
  slides: Slide[];
}

export function ProductCarousel({ slides }: ProductCarouselProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [lightbox, setLightbox] = useState<Slide | null>(null);

  return (
    <>
      <div className="relative group">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, A11y, Autoplay]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation!.prevEl = prevRef.current;
              swiper.params.navigation!.nextEl = nextRef.current;
            }
          }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          a11y={{ prevSlideMessage: "Diapositive précédente", nextSlideMessage: "Diapositive suivante" }}
          autoplay={{ delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          loop
          breakpoints={{
            0:    { slidesPerView: 1, spaceBetween: 16 },
            768:  { slidesPerView: 2, spaceBetween: 24 },
            1280: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="pb-10"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLightbox(slide)}
                className="relative w-full overflow-hidden rounded-sm cursor-zoom-in block"
                aria-label={`Agrandir : ${slide.alt}`}
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </motion.button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Boutons navigation */}
        <button
          ref={prevRef}
          aria-label="Diapositive précédente"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[var(--nioto-coton)] border border-[var(--nioto-brun)]/10 flex items-center justify-center text-[var(--nioto-brun)] hover:bg-[var(--nioto-or)] hover:text-white transition-colors -ml-5"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          ref={nextRef}
          aria-label="Diapositive suivante"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[var(--nioto-coton)] border border-[var(--nioto-brun)]/10 flex items-center justify-center text-[var(--nioto-brun)] hover:bg-[var(--nioto-or)] hover:text-white transition-colors -mr-5"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-3xl w-full max-h-[90vh] rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh]">
                <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain" />
              </div>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Fermer"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
