import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const t = useTranslations("contact");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  return (
    <section id="contact" className="py-24 bg-secondary/40">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <span className="label-xs text-accent">{t("label")}</span>
            <span className="accent-line mx-auto" />
            <h2 className="font-serif text-4xl md:text-5xl font-medium">
              {t("title")}
            </h2>
            <p className="text-muted-foreground">{t("subtitle")}</p>
          </div>

          <Button asChild size="xl" variant="accent">
            <Link href={`/${locale}/booking`}>{tNav("cta")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
