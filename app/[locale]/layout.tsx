import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mozotto.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mozotto – Live Risotto & Champagne Events Schweiz",
    template: "%s | Mozotto",
  },
  description:
    "Exklusives Live-Cooking über Holzfeuer mit Premium Champagne für Firmen- & Privatevents in der Schweiz. Catering Zürich, Bern, Basel. Jetzt Anfrage senden.",
  keywords: [
    "Risotto Event Schweiz",
    "Live Cooking Zürich",
    "Firmenfeier Catering Zürich",
    "Firmenanlass Catering Schweiz",
    "Catering Bern",
    "Catering Basel",
    "Corporate Event Catering Schweiz",
    "Holzfeuer Kochen",
    "Champagne Catering",
    "Apéro Catering Schweiz",
    "Live Risotto",
    "Weihnachtsmarkt Risotto Zürich",
    "Premium Event Catering",
    "Live Cooking Event Schweiz",
    "Partyservice Zürich",
    "Risotto Catering",
    "Champagner Catering Schweiz",
  ],
  openGraph: {
    type: "website",
    locale: "de_CH",
    alternateLocale: "en_GB",
    siteName: "Mozotto",
    title: "Mozotto – Live Risotto & Champagne Events Schweiz",
    description:
      "Exklusives Live-Cooking über Holzfeuer mit Premium Champagne für Firmen- & Privatevents in der Schweiz.",
    images: [
      {
        url: "/media/hero-poster.jpg",
        width: 1280,
        height: 720,
        alt: "Mozotto – Live Risotto über dem Holzfeuer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mozotto – Live Risotto & Champagne Events",
    description: "Premium Live-Cooking für exklusive Events in der Schweiz.",
    images: ["/media/hero-poster.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CateringService",
  name: "Mozotto",
  description:
    "Premium Live-Cooking über Holzfeuer mit kuratierter Champagne-Selektion für Firmen- und Privatevents in der Schweiz.",
  url: SITE_URL,
  image: `${SITE_URL}/media/hero-poster.jpg`,
  logo: `${SITE_URL}/media/hero-poster.jpg`,
  areaServed: { "@type": "Country", name: "Switzerland" },
  servesCuisine: ["Italian", "Risotto"],
  priceRange: "CHF CHF CHF",
  founder: [
    { "@type": "Person", name: "Moritz", jobTitle: "Risotto Chef" },
    { "@type": "Person", name: "Vinzent", jobTitle: "Champagne Sommelier" },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Live Risotto & Champagne Event",
      description:
        "Live-Risotto über Holzfeuer mit kuratierter Champagne-Selektion für 20–120 Gäste.",
    },
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "de" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
