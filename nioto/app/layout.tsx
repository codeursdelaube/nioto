// app/layout.tsx
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "NIOTO — Nouvelle Industrie des Oléagineux du Togo | Huile Queen's",
  description:
    "NIOTO fabrique l'huile raffinée de coton Queen's à Lomé, Togo. Filiale du groupe GEOCOTON, premier producteur de beurre brut de karité en Afrique de l'Ouest.",
  keywords: ["NIOTO", "huile Queen's", "huile de coton", "Togo", "karité", "Lomé", "agro-industrie"],
  openGraph: {
    title: "NIOTO — L'industrie d'huile au Togo",
    description:
      "De la graine à votre table. NIOTO transforme les oléagineux togolais en produits de qualité depuis Lomé.",
    locale: "fr_FR",
    type: "website",
  },
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NIOTO — Nouvelle Industrie des Oléagineux du Togo",
              url: "https://www.nioto-togo.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Zone industrielle du Port, Katanga, Zone Portuaire",
                addressLocality: "Lomé",
                postalCode: "BP 3086",
                addressCountry: "TG",
              },
              telephone: [
                "+22822272379",
                "+22822272684",
                "+22822273523",
              ],
              sameAs: ["https://www.facebook.com/nioto.togo/"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
