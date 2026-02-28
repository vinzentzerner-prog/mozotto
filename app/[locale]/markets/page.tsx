import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketsSection from "@/components/sections/MarketsSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "markets" });
  return {
    title: `${t("title")} – Mozotto`,
    description:
      locale === "de"
        ? "Mozotto an Schweizer Weihnachtsmärkten – Zürich, Bern, Basel. Live-Risotto über Holzfeuer und Premium Champagne an ausgewählten Standorten."
        : "Mozotto at Swiss Christmas markets — Zurich, Bern, Basel. Live risotto over wood fire and premium Champagne at selected locations.",
    alternates: { canonical: `/${locale}/markets`, languages: { de: "/de/markets", en: "/en/markets" } },
  };
}

export default function MarketsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 bg-background min-h-screen">
        <MarketsSection />
      </main>
      <Footer />
    </>
  );
}
