// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#183B2B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nioto-togo.com"),
  title: {
    default: "NIOTO — Nouvelle Industrie des Oléagineux du Togo | Huile Queen's",
    template: "%s | NIOTO Togo",
  },
  description:
    "NIOTO fabrique l'huile raffinée de coton Queen's à Lomé, Togo. Filiale du groupe GEOCOTON, premier producteur de beurre brut de karité en Afrique de l'Ouest.",
  applicationName: "NIOTO",
  authors: [{ name: "NIOTO SA" }],
  generator: "Next.js",
  keywords: [
    "NIOTO",
    "NIOTO Togo",
    "huile Queen's",
    "huile de coton",
    "huile végétale raffinée",
    "beurre de karité brut",
    "karité Togo",
    "GEOCOTON",
    "ADVENS",
    "agro-industrie Togo",
    "Zone Portuaire Lomé",
    "tourteaux de coton",
  ],
  referrer: "origin-when-cross-origin",
  creator: "NIOTO SA",
  publisher: "Groupe GEOCOTON",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "NIOTO — L'industrie d'huile au Togo | Huile Queen's & Karité",
    description:
      "De la graine à votre table. NIOTO transforme les oléagineux togolais en produits de qualité depuis Lomé. Découvrez notre huile raffinée Queen's et notre beurre brut de karité.",
    url: "https://www.nioto-togo.com",
    siteName: "NIOTO",
    images: [
      {
        url: "/nioto_images/image_baniere.jpg",
        width: 1200,
        height: 630,
        alt: "NIOTO — Nouvelle Industrie des Oléagineux du Togo",
      },
    ],
    locale: "fr_TG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIOTO — Nouvelle Industrie des Oléagineux du Togo",
    description:
      "Producteur de l'huile raffinée Queen's et premier exportateur de beurre de karité au Togo.",
    images: ["/nioto_images/image_baniere.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "google17a02779aeb61014",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.nioto-togo.com/#organization",
      name: "NIOTO — Nouvelle Industrie des Oléagineux du Togo",
      alternateName: "NIOTO SA",
      url: "https://www.nioto-togo.com",
      logo: "https://www.nioto-togo.com/nioto_images/nioto_logo.jpg",
      image: "https://www.nioto-togo.com/nioto_images/image_baniere.jpg",
      description:
        "Créée en 1989, NIOTO est le leader togolais de la trituration des graines oléagineuses et du raffinage d'huile de coton sous la marque Queen's.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Zone industrielle du Port, Katanga, Zone Portuaire",
        addressLocality: "Lomé",
        postalCode: "BP 3086",
        addressCountry: "TG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 6.136,
        longitude: 1.278,
      },
      telephone: [
        "+228 22 27 23 79",
        "+228 22 27 26 84",
        "+228 22 27 35 23",
      ],
      sameAs: [
        "https://www.facebook.com/nioto.togo/",
      ],
      parentOrganization: {
        "@type": "Organization",
        name: "Groupe GEOCOTON / ADVENS",
        url: "https://www.geocoton.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nioto-togo.com/#website",
      url: "https://www.nioto-togo.com",
      name: "NIOTO Togo",
      publisher: {
        "@id": "https://www.nioto-togo.com/#organization",
      },
      inLanguage: "fr-TG",
    },
    {
      "@type": "Product",
      "@id": "https://www.nioto-togo.com/#product-queens",
      name: "Huile de Coton Raffinée Queen's",
      image: "https://www.nioto-togo.com/nioto_images/image1.jpg",
      description:
        "Huile végétale raffinée 100% graine de coton, enrichie en vitamine A, sans cholestérol, idéale pour friture, cuisson et assaisonnement.",
      brand: {
        "@type": "Brand",
        name: "Queen's",
      },
      manufacturer: {
        "@id": "https://www.nioto-togo.com/#organization",
      },
      category: "Alimentation > Huiles et Matières grasses",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "XOF",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Product",
      "@id": "https://www.nioto-togo.com/#product-karite",
      name: "Beurre Brut de Karité",
      image: "https://www.nioto-togo.com/nioto_images/image4.jpg",
      description:
        "Beurre brut de karité extrait mécaniquement d'amandes togolaises et ouest-africaines, destiné aux industries cosmétiques et agroalimentaires mondiales.",
      brand: {
        "@type": "Brand",
        name: "NIOTO",
      },
      manufacturer: {
        "@id": "https://www.nioto-togo.com/#organization",
      },
      category: "Matières premières > Oléagineux",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${manrope.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
