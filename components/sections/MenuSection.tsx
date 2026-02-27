import { useTranslations } from "next-intl";
import { risotti, champagneTiers, extras } from "@/content/menu";
import { mediaExists, mediaPath } from "@/lib/media";
import { ChefHat, Flame } from "lucide-react";

export default function MenuSection() {
  const t = useTranslations("menu");

  const risottoVideoPath = mediaPath("risotto-closeup.mp4");
  const champagneVideoPath = mediaPath("champagner-pour.mp4") ?? mediaPath("champagne-pour.mp4");

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

            {/* Risotto video */}
            {risottoVideoPath && (
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-8">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={risottoVideoPath} type="video/mp4" />
                </video>
              </div>
            )}

            <div className="space-y-6">
              {risotti.map((item) => (
                <div key={item.id} className="pb-6 border-b border-border last:border-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-serif text-xl font-medium">
                        {t(item.nameKey as Parameters<typeof t>[0])}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {t(item.descKey as Parameters<typeof t>[0])}
                      </p>
                    </div>
                    {item.chefRecommendation && (
                      <div className="shrink-0 flex items-center gap-1.5 bg-accent/10 border border-accent/20 text-accent rounded-full px-3 py-1 text-xs font-sans font-medium whitespace-nowrap">
                        <ChefHat size={12} />
                        {t("chef_recommendation")}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Extras / optional add-ons */}
              {extras.map((extra) => (
                <div key={extra.id} className="flex items-start gap-3 pt-2">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center mt-0.5">
                    <Flame size={14} className="text-muted-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-serif text-base font-medium">
                        {t(extra.nameKey as Parameters<typeof t>[0])}
                      </p>
                      <span className="label-xs text-muted-foreground border border-border rounded-full px-2 py-0.5">
                        {t("optional")}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t(extra.descKey as Parameters<typeof t>[0])}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Champagne */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-serif text-2xl font-medium">
                {t("champagne_title")}
              </h3>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Champagne video */}
            {champagneVideoPath && (
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-8">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={champagneVideoPath} type="video/mp4" />
                </video>
              </div>
            )}

            {/* Intro note */}
            <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
              {t("champagne_intro")}
            </p>

            <div className="space-y-3">
              {champagneTiers.map((tier) => {
                const tierLabel =
                  tier.tier === "classics"
                    ? t("champagne_classics")
                    : tier.tier === "prestige"
                      ? t("champagne_prestige")
                      : t("champagne_sommeliers");

                return (
                  <div key={tier.tier} className="border border-border rounded-lg p-4">
                    <p className="label-xs text-accent mb-3">{tierLabel}</p>
                    <div className="space-y-3">
                      {tier.items.map((item) => (
                        <div key={item.id}>
                          <p className="font-serif text-sm font-medium">
                            {t(item.nameKey as Parameters<typeof t>[0])}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                            {t(item.descKey as Parameters<typeof t>[0])}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pairing guide */}
            <div className="mt-5 border border-accent/20 bg-accent/5 rounded-lg p-4 space-y-2">
              <p className="label-xs text-accent">{t("pairing_label")}</p>
              <div className="space-y-1">
                <p className="text-xs text-foreground/80">
                  <span className="font-medium">{t("pairing_tartufo")}:</span>{" "}
                  {t("pairing_tartufo_picks")}
                </p>
                <p className="text-xs text-foreground/80">
                  <span className="font-medium">{t("pairing_zafferano")}:</span>{" "}
                  {t("pairing_zafferano_picks")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
