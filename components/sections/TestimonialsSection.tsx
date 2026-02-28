import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  const testimonials = [
    {
      quote: t("t1_quote"),
      author: t("t1_author"),
      role: t("t1_role"),
    },
    {
      quote: t("t2_quote"),
      author: t("t2_author"),
      role: t("t2_role"),
    },
    {
      quote: t("t3_quote"),
      author: t("t3_author"),
      role: t("t3_role"),
    },
  ];

  return (
    <section className="py-24 bg-foreground">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <span className="label-xs text-white/40">{t("label")}</span>
          <span className="accent-line mx-auto" />
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-white">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-lg p-8 space-y-6"
            >
              {/* Quote mark */}
              <span className="font-serif text-4xl text-accent leading-none">
                &ldquo;
              </span>
              <p className="font-serif text-lg text-white/80 leading-relaxed -mt-2">
                {item.quote}
              </p>
              <div className="pt-2 border-t border-white/10">
                <p className="font-medium text-white text-sm">{item.author}</p>
                <p className="text-xs text-white/40 mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
