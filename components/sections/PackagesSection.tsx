import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { packages } from "@/content/packages";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PackagesSection() {
  const t = useTranslations("packages");
  const locale = useLocale();

  return (
    <section id="packages" className="py-24 bg-secondary/40">
      <div className="section-container">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="label-xs text-accent">{t("label")}</span>
          <span className="accent-line mx-auto" />
          <h2 className="font-serif text-4xl md:text-5xl font-medium">{t("title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => {
            const name = t(pkg.nameKey as Parameters<typeof t>[0]);
            const tag = t(pkg.tagKey as Parameters<typeof t>[0]);
            const idealFor = t(pkg.idealForKey as Parameters<typeof t>[0]);
            const duration = t(pkg.durationKey as Parameters<typeof t>[0]);

            return (
              <div
                key={pkg.id}
                className={cn(
                  "relative rounded-lg border bg-card p-8 flex flex-col gap-6 transition-shadow hover:shadow-md",
                  pkg.featured
                    ? "border-accent shadow-sm ring-1 ring-accent/20"
                    : "border-border"
                )}
              >
                {/* Featured badge */}
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="space-y-2">
                  {!pkg.featured && (
                    <span className="label-xs text-muted-foreground">{tag}</span>
                  )}
                  <h3 className="font-serif text-2xl font-medium">{name}</h3>
                </div>

                {/* Meta */}
                <div className="space-y-3 border-t border-b border-border py-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t("ideal_for")}</span>
                    <span className="font-medium text-right max-w-[60%]">{idealFor}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t("guests")}</span>
                    <span className="font-medium">
                      {pkg.guestsMin}–{pkg.guestsMax}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t("duration")}</span>
                    <span className="font-medium">{duration}</span>
                  </div>
                </div>

                {/* Inclusions */}
                <div className="flex-1 space-y-2">
                  <p className="label-xs text-muted-foreground mb-3">{t("includes")}</p>
                  {pkg.inclusionsKeys.map((key) => (
                    <div key={key} className="flex items-start gap-2">
                      <Check
                        size={14}
                        className="text-accent mt-0.5 shrink-0"
                      />
                      <span className="text-sm text-foreground/80">
                        {t(key as Parameters<typeof t>[0])}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  asChild
                  variant={pkg.featured ? "default" : "outline"}
                  className="w-full"
                >
                  <Link href={`/${locale}/booking`}>{t("cta")}</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
