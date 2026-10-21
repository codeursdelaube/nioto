import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NIOTO — Nouvelle Industrie des Oléagineux du Togo",
    short_name: "NIOTO",
    description: "Huile de coton raffinée Queen's et Beurre brut de karité à Lomé, Togo.",
    start_url: "/",
    display: "standalone",
    background_color: "#183B2B",
    theme_color: "#183B2B",
    icons: [
      {
        src: "/nioto_images/nioto_logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/nioto_images/nioto_logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
