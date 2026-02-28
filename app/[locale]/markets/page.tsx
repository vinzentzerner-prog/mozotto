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
    description: t("subtitle"),
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
