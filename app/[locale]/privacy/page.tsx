import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return { title: t("title") };
}

function PrivacyContent() {
  const t = useTranslations("privacy");

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="section-container max-w-2xl">
          <span className="label-xs text-accent">Legal</span>
          <span className="accent-line mt-3" />
          <h1 className="font-serif text-4xl md:text-5xl font-medium mt-4 mb-10">
            {t("title")}
          </h1>
          <div className="prose prose-sm max-w-none text-foreground/80 leading-relaxed whitespace-pre-line">
            {t("content")}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
