import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import EventsSection from "@/components/sections/EventsSection";
import MomentsSection from "@/components/sections/MomentsSection";
import MenuSection from "@/components/sections/MenuSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Mozotto – Live Risotto & Champagne Events Schweiz",
    description:
      locale === "de"
        ? "Live-Risotto über Holzfeuer & Premium Champagne für Firmen- und Privatevents in der Schweiz. Catering Zürich, Bern, Basel. Anfrage in 24h beantwortet."
        : "Live risotto over a wood fire & premium Champagne for corporate and private events in Switzerland. Catering Zurich, Bern, Basel.",
    alternates: {
      canonical: `/${locale}`,
      languages: { de: "/de", en: "/en" },
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
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
