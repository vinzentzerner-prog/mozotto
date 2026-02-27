import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { markets } from "@/content/markets";
import { MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function MarketsSection() {
  const t = useTranslations("markets");
  const locale = useLocale();

  return (
    <section id="markets" className="py-20 bg-background border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Header + image */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="label-xs text-muted-foreground">{t("label")}</span>
              <span className="accent-line" />
              <h2 className="font-serif text-3xl font-medium">{t("title")}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("subtitle")}
              </p>
            </div>

            {/* Market image (small) */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
              <Image
                src="/media/market.jpg"
                alt="Christmas market"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACEQAAICAQQDAQAAAAAAAAAAAAECAxEABBIhMUFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwCl5Ol0QzJPU6uVnLc+uS3Yr2u1X1YRkE+2AAHySajvjHNXKLjX6dDwz2ORfzFKIBJA+0KUpH//2Q=="
              />
            </div>

            <p className="text-xs text-muted-foreground italic">{t("note")}</p>
          </div>

          {/* Market list */}
          <div className="lg:col-span-2 space-y-4">
            {markets.map((market) => (
              <div
                key={market.id}
                className="flex items-start justify-between gap-4 p-5 rounded-lg border border-border bg-card hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-serif text-base font-medium">
                      {t(market.nameKey as Parameters<typeof t>[0])}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t(market.cityKey as Parameters<typeof t>[0])} ·{" "}
                      {t(market.dateKey as Parameters<typeof t>[0])}
                    </p>
                  </div>
                </div>
                {market.mapUrl && (
                  <a
                    href={market.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Open map"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}

            <div className="pt-4">
              <Button asChild variant="accent-outline" size="sm">
                <Link href={`/${locale}/booking`}>{t("cta")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
