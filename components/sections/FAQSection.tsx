import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/content/faqs";

export default function FAQSection() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="py-24 bg-secondary/40">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Sticky header */}
          <div className="lg:col-span-2 space-y-4 lg:sticky lg:top-28 lg:self-start">
            <span className="label-xs text-accent">{t("label")}</span>
            <span className="accent-line" />
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight">
              {t("title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>
                    {t(faq.questionKey as Parameters<typeof t>[0])}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t(faq.answerKey as Parameters<typeof t>[0])}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
