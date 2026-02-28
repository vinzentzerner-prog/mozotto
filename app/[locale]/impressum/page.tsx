import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "impressum" });
  return {
    title: t("title"),
    alternates: { canonical: `/${locale}/impressum` },
  };
}

function ImpressumContent() {
  const locale = useLocale();
  const isDE = locale === "de";

  const sections = isDE
    ? [
        {
          title: "Angaben zum Unternehmen",
          body: (
            <>
              <p>moZotto (in Gründung)</p>
              <p>Vertreten durch: Moritz Schlatter und Vinzent Zerner</p>
              <p>Schweiz</p>
              <p className="mt-3">
                Kontakt: über das{" "}
                <a href={`/${locale}/booking`} className="underline underline-offset-2 hover:text-accent transition-colors">
                  Buchungsformular
                </a>{" "}
                auf dieser Website
              </p>
            </>
          ),
        },
        {
          title: "Haftungsausschluss",
          body: (
            <p>
              Alle Inhalte dieser Website wurden mit grösster Sorgfalt erstellt und geprüft. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir keine Gewähr.
              Die Nutzung der Inhalte erfolgt auf eigene Gefahr. Haftungsansprüche gegen moZotto,
              die auf Schäden materieller oder ideeller Art beruhen, welche durch die Nutzung oder
              Nichtnutzung der dargebotenen Informationen entstanden sind, sind grundsätzlich
              ausgeschlossen.
            </p>
          ),
        },
        {
          title: "Urheberrecht",
          body: (
            <p>
              Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem
              schweizerischen Urheberrecht. Jede Vervielfältigung, Bearbeitung, Verbreitung oder
              jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedarf der
              schriftlichen Zustimmung von moZotto.
            </p>
          ),
        },
        {
          title: "Externe Links",
          body: (
            <p>
              Diese Website kann Links zu externen Webseiten enthalten. Für die Inhalte
              externer Seiten sind ausschliesslich deren Betreiber verantwortlich. moZotto
              übernimmt keine Haftung für externe Inhalte.
            </p>
          ),
        },
      ]
    : [
        {
          title: "Company details",
          body: (
            <>
              <p>moZotto (in formation)</p>
              <p>Represented by: Moritz Schlatter and Vinzent Zerner</p>
              <p>Switzerland</p>
              <p className="mt-3">
                Contact: via the{" "}
                <a href={`/${locale}/booking`} className="underline underline-offset-2 hover:text-accent transition-colors">
                  booking form
                </a>{" "}
                on this website
              </p>
            </>
          ),
        },
        {
          title: "Disclaimer",
          body: (
            <p>
              All content on this website has been created and reviewed with the utmost care. We
              accept no liability for the accuracy, completeness or currency of the information
              provided. Use of the content is at your own risk. Claims against moZotto for damages
              of a material or immaterial nature arising from the use or non-use of the information
              provided are excluded.
            </p>
          ),
        },
        {
          title: "Copyright",
          body: (
            <p>
              The content and works published on this website are subject to Swiss copyright law.
              Any reproduction, processing, distribution or any form of commercial exploitation
              beyond the limits of copyright law requires the prior written consent of moZotto.
            </p>
          ),
        },
        {
          title: "External links",
          body: (
            <p>
              This website may contain links to external websites. The operators of those sites are
              solely responsible for their content. moZotto accepts no liability for any external
              content.
            </p>
          ),
        },
      ];

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="section-container max-w-2xl">
          <span className="label-xs text-accent">{isDE ? "Rechtliches" : "Legal"}</span>
          <span className="accent-line mt-3" />
          <h1 className="font-serif text-4xl md:text-5xl font-medium mt-4 mb-12">
            {isDE ? "Impressum" : "Legal notice"}
          </h1>

          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="font-serif text-lg font-medium mb-3">{s.title}</h2>
                <div className="text-foreground/70 leading-relaxed space-y-2 text-sm">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function ImpressumPage() {
  return <ImpressumContent />;
}
