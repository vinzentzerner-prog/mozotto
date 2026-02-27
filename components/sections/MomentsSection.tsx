import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";

export default function MomentsSection() {
  const t = useTranslations("moments");
  const locale = useLocale();

  return (
    <section id="moments" className="py-28 bg-foreground relative overflow-hidden">
      {/* Warm accent glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 w-64 h-64 rounded-full bg-accent/5 blur-2xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Label */}
          <span className="label-xs text-white/40">{t("label")}</span>
          <span className="block w-10 h-px bg-accent mx-auto" />

          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
            {t("title")}
          </h2>

          {/* Body */}
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            {t("body")}
          </p>

          {/* CTA */}
          <div className="pt-4">
            <Button asChild variant="accent" size="xl">
              <Link href={`/${locale}/booking`}>{t("cta")}</Link>
            </Button>
            <p className="text-xs text-white/30 mt-4">{t("note")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
