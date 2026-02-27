"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Flame, Wine, MapPin } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const trustItems = [
    { icon: Flame, text: t("trust_1") },
    { icon: Wine, text: t("trust_2") },
    { icon: MapPin, text: t("trust_3") },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/media/hero-poster.jpg"
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-85" />

      {/* Warm glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 section-container py-32 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-up">
          {/* Label */}
          <span className="label-xs text-white/50 block">
            Live Cooking · Schweiz
          </span>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-white">
            {t("headline")}
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t("subline")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild variant="accent" size="xl">
              <Link href={`/${locale}/booking`}>{t("cta_primary")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#events">{t("cta_secondary")}</a>
            </Button>
          </div>

          {/* Trust bullets */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            {trustItems.map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon size={14} className="text-accent shrink-0" />
                <span className="text-xs text-white/60 font-sans">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-white/20" />
        <div className="w-1 h-1 rounded-full bg-white/40" />
      </div>
    </section>
  );
}
