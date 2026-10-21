// lib/gsap.ts
// Enregistrement unique des plugins GSAP — importer ce fichier une seule fois côté client
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
