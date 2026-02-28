import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GallerySection from "@/components/sections/GallerySection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gallery" });
  return {
    title: `${t("title")} – Mozotto`,
    description: t("subtitle"),
  };
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-24 bg-background min-h-screen">
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
