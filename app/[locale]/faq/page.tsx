import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/sections/FAQSection";
import { faqs } from "@/content/faqs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });
  return {
    title: `${t("title")} – Mozotto`,
    description:
      locale === "de"
        ? "Häufige Fragen zu Live-Cooking Buchungen: Platzbedarf, Gästezahl, Reisegebiet, Anzahlung und mehr. Mozotto beantwortet alles."
        : "Frequently asked questions about live cooking bookings: space, guest numbers, travel area, deposit and more.",
    alternates: { canonical: `/${locale}/faq`, languages: { de: "/de/faq", en: "/en/faq" } },
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: t(faq.questionKey as Parameters<typeof t>[0]),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(faq.answerKey as Parameters<typeof t>[0]),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="pt-24 bg-background min-h-screen">
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
