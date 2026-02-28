import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title") };
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 bg-background min-h-screen">
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
