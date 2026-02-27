import { useTranslations } from "next-intl";
import { risotti, champagneTiers, upsells } from "@/content/menu";
import Image from "next/image";

export default function MenuSection() {
  const t = useTranslations("menu");

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="label-xs text-accent">{t("label")}</span>
          <span className="accent-line mx-auto" />
          <h2 className="font-serif text-4xl md:text-5xl font-medium">{t("title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Risotti */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-serif text-2xl font-medium">{t("risotto_title")}</h3>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Risotto image */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-8">
              <Image
                src="/media/risotto-closeup.jpg"
                alt="Signature Risotto"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACEQAAICAQQDAQAAAAAAAAAAAAECAxEABBIhMUFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwCl5Ol0QzJPU6uVnLc+uS3Yr2u1X1YRkE+2AAHySajvjHNXKLjX6dDwz2ORfzFKIBJA+0KUpH//2Q=="
              />
            </div>

            <div className="space-y-6">
              {risotti.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between gap-4 pb-6 border-b border-border last:border-0"
                >
                  <div>
                    <p className="font-serif text-lg font-medium">
                      {t(item.nameKey as Parameters<typeof t>[0])}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t(item.descKey as Parameters<typeof t>[0])}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Champagne + Upsells */}
          <div className="space-y-12">
            {/* Champagne */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="font-serif text-2xl font-medium">
                  {t("champagne_title")}
                </h3>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Champagne image */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-8">
                <Image
                  src="/media/champagne-pour.jpg"
                  alt="Premium Champagne"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACEQAAICAQQDAQAAAAAAAAAAAAECAxEABBIhMUFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwCl5Ol0QzJPU6uVnLc+uS3Yr2u1X1YRkE+2AAHySajvjHNXKLjX6dDwz2ORfzFKIBJA+0KUpH//2Q=="
                />
              </div>

              <div className="space-y-4">
                {champagneTiers.map((tier) => {
                  const tierLabel =
                    tier.tier === "house"
                      ? t("champagne_house")
                      : tier.tier === "reserve"
                        ? t("champagne_reserve")
                        : t("champagne_prestige");

                  return (
                    <div key={tier.tier} className="border border-border rounded-lg p-5">
                      <p className="label-xs text-accent mb-3">{tierLabel}</p>
                      {tier.items.map((item) => (
                        <div key={item.id}>
                          <p className="font-serif text-base font-medium">
                            {t(item.nameKey as Parameters<typeof t>[0])}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {t(item.descKey as Parameters<typeof t>[0])}
                          </p>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Upsells */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h3 className="font-serif text-xl font-medium">
                    {t("upsell_title")}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t("upsell_subtitle")}
                  </p>
                </div>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="flex flex-wrap gap-2">
                {upsells.map((u) => (
                  <span
                    key={u.id}
                    className="text-xs border border-border rounded-full px-3 py-1.5 text-muted-foreground"
                  >
                    {t(u.nameKey as Parameters<typeof t>[0])}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
