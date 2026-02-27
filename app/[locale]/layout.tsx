import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mozotto – Live Risotto & Champagne Events Schweiz",
    template: "%s | Mozotto",
  },
  description:
    "Exklusives Live-Cooking über Holzfeuer mit Premium Champagne für Firmen- & Privatevents in der Schweiz. Jetzt Anfrage senden.",
  keywords: [
    "Risotto Event",
    "Live Cooking",
    "Champagne",
    "Corporate Events Schweiz",
    "Private Events",
    "Catering Zürich",
    "Holzfeuer",
  ],
  openGraph: {
    type: "website",
    locale: "de_CH",
    alternateLocale: "en_GB",
    siteName: "Mozotto",
    title: "Mozotto – Live Risotto & Champagne Events Schweiz",
    description:
      "Exklusives Live-Cooking über Holzfeuer mit Premium Champagne für Firmen- & Privatevents in der Schweiz.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mozotto – Live Risotto & Champagne Events",
    description: "Premium Live-Cooking für exklusive Events in der Schweiz.",
  },
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
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
