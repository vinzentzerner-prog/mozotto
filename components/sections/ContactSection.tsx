import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

export default function ContactSection() {
  const t = useTranslations("contact");
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="default">
              <Link href={`/${locale}/booking`}>
                <Mail size={16} />
                {t("email")}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://wa.me/41000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
                {t("whatsapp")}
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">{t("note")}</p>
        </div>
      </div>
    </section>
  );
}
