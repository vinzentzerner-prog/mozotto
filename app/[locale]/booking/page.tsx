import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TallyEmbed from "@/components/TallyEmbed";
import { getGalleryItems } from "@/lib/media";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACEQAAICAQQDAQAAAAAAAAAAAAECAxEABBIhMUFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwCl5Ol0QzJPU6uVnLc+uS3Yr2u1X1YRkE+2AAHySajvjHNXKLjX6dDwz2ORfzFKIBJA+0KUpH//2Q==";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "booking" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

function BookingPageContent() {
  const t = useTranslations("booking");
  const locale = useLocale();

  const steps = [
    { step: "01", title: t("step_1"), desc: t("step_1_desc") },
    { step: "02", title: t("step_2"), desc: t("step_2_desc") },
    { step: "03", title: t("step_3"), desc: t("step_3_desc") },
  ];

  const galleryItems = getGalleryItems().slice(0, 4);

  return (
    <>
      <Header />
      <main className="pt-24 pb-0">
        {/* Hero band */}
        <section className="py-20 bg-secondary/40 border-b border-border">
          <div className="section-container">
            <div className="max-w-2xl">
              <span className="label-xs text-accent">{t("label")}</span>
              <span className="accent-line mt-3" />
              <h1 className="font-serif text-4xl md:text-6xl font-medium mt-4 leading-tight">
                {t("title")}
              </h1>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                {t("subtitle")}
              </p>

              {/* Response time */}
              <div className="flex items-center gap-2 mt-6">
                <Clock size={14} className="text-accent" />
                <span className="text-sm text-muted-foreground">
                  {t("response_time")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Steps + Form */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Steps */}
              <div className="lg:col-span-2 space-y-10">
                {steps.map((s) => (
                  <div key={s.step} className="flex gap-5">
                    <div className="shrink-0">
                      <span className="font-serif text-3xl font-medium text-accent/40">
                        {s.step}
                      </span>
                    </div>
                    <div className="pt-1">
                      <p className="font-serif text-lg font-medium">{s.title}</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tally Form */}
              <div className="lg:col-span-3">
                <TallyEmbed locale={locale} />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery strip — only rendered when media files exist */}
        {galleryItems.length > 0 && (
          <section className="py-16 bg-background border-t border-border">
            <div className="section-container">
              <h2 className="font-serif text-2xl font-medium mb-8">
                {t("gallery_title")}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {galleryItems.map((item, i) => (
                  <div
                    key={item.src}
                    className="relative aspect-square overflow-hidden rounded-lg bg-muted"
                  >
                    {item.type === "video" ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={item.src}
                        alt={`Mozotto event ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 25vw"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={BLUR_PLACEHOLDER}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button asChild variant="outline" size="sm">
                  <Link href="/#gallery">
                    <ArrowRight size={14} />
                    Zur Galerie
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default function BookingPage() {
  return <BookingPageContent />;
}
