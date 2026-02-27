import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import EventsSection from "@/components/sections/EventsSection";
import MomentsSection from "@/components/sections/MomentsSection";
import MenuSection from "@/components/sections/MenuSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import FAQSection from "@/components/sections/FAQSection";
import MarketsSection from "@/components/sections/MarketsSection";
import ContactSection from "@/components/sections/ContactSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  return {
    title: "Mozotto – Live Risotto & Champagne Events Schweiz",
    description: t("subline"),
    alternates: {
      languages: {
        de: "/de",
        en: "/en",
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EventsSection />
        <MomentsSection />
        <MenuSection />
        <TestimonialsSection />
        <GallerySection />
        <FAQSection />
        <MarketsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
