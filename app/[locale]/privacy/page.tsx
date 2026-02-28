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
  const t = await getTranslations({ locale, namespace: "privacy" });
  return {
    title: t("title"),
    alternates: { canonical: `/${locale}/privacy` },
  };
}

function PrivacyContent() {
  const locale = useLocale();
  const isDE = locale === "de";

  const sections = isDE
    ? [
        {
          title: "1. Verantwortliche Stelle",
          body: (
            <>
              <p>moZotto (in Gründung)</p>
              <p>Vertreten durch: Moritz Schlatter und Vinzent Zerner</p>
              <p>Schweiz</p>
            </>
          ),
        },
        {
          title: "2. Erhebung und Verarbeitung von Daten",
          body: (
            <p>
              Wir erheben ausschliesslich personenbezogene Daten, die Sie uns freiwillig über das
              Buchungsformular zur Verfügung stellen. Dazu gehören insbesondere Name,
              E-Mail-Adresse sowie Angaben zu Ihrem geplanten Anlass. Eine darüber hinausgehende
              Datenerhebung findet nicht statt.
            </p>
          ),
        },
        {
          title: "3. Zweck der Verarbeitung",
          body: (
            <p>
              Die übermittelten Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage sowie
              zur Kontaktaufnahme im Zusammenhang mit Ihrem Event verwendet. Eine Weitergabe an
              Dritte erfolgt nicht, es sei denn, dies ist zur Durchführung Ihres Auftrags
              ausdrücklich erforderlich.
            </p>
          ),
        },
        {
          title: "4. Buchungsformular (Tally)",
          body: (
            <p>
              Für das Buchungs- und Kontaktformular nutzen wir den Dienst Tally (tally.so). Wenn
              Sie das Formular ausfüllen, werden Ihre Daten an Tally übermittelt und dort
              verarbeitet. Die Datenschutzbestimmungen von Tally finden Sie unter{" "}
              <a
                href="https://tally.so/help/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-accent transition-colors"
              >
                tally.so/help/privacy-policy
              </a>
              .
            </p>
          ),
        },
        {
          title: "5. Hosting",
          body: (
            <p>
              Diese Website wird bei Vercel Inc., San Francisco, USA, gehostet. Beim Aufruf der
              Website werden technische Verbindungsdaten (u.a. IP-Adresse, Zeitstempel) von Vercel
              verarbeitet. Weitere Informationen:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-accent transition-colors"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          ),
        },
        {
          title: "6. Cookies und Tracking",
          body: (
            <p>
              Wir verwenden keine Tracking-Cookies und setzen keine Analysetools von
              Drittanbietern ein. Es erfolgt kein Einsatz von Google Analytics, Meta Pixel oder
              ähnlichen Diensten.
            </p>
          ),
        },
        {
          title: "7. Ihre Rechte",
          body: (
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten. Für entsprechende Anfragen wenden
              Sie sich bitte über unser{" "}
              <a
                href={`/${locale}/booking`}
                className="underline underline-offset-2 hover:text-accent transition-colors"
              >
                Buchungsformular
              </a>{" "}
              an uns.
            </p>
          ),
        },
        {
          title: "8. Anwendbares Recht",
          body: (
            <p>
              Diese Datenschutzerklärung unterliegt dem Schweizer Datenschutzgesetz (DSG). Bei
              Nutzern aus dem EU/EWR-Raum gilt ergänzend die Datenschutz-Grundverordnung (DSGVO).
            </p>
          ),
        },
      ]
    : [
        {
          title: "1. Data controller",
          body: (
            <>
              <p>moZotto (in formation)</p>
              <p>Represented by: Moritz Schlatter and Vinzent Zerner</p>
              <p>Switzerland</p>
            </>
          ),
        },
        {
          title: "2. Data collection",
          body: (
            <p>
              We only collect personal data that you voluntarily provide via the booking form. This
              includes in particular your name, email address and details about your planned event.
              No further data is collected.
            </p>
          ),
        },
        {
          title: "3. Purpose of processing",
          body: (
            <p>
              The data you submit is used exclusively to process your enquiry and to contact you in
              connection with your event. Data is not shared with third parties unless strictly
              necessary to fulfil your request.
            </p>
          ),
        },
        {
          title: "4. Booking form (Tally)",
          body: (
            <p>
              We use the service Tally (tally.so) for our booking and contact form. When you
              submit the form, your data is transferred to and processed by Tally. Tally{"'"}s
              privacy policy can be found at{" "}
              <a
                href="https://tally.so/help/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-accent transition-colors"
              >
                tally.so/help/privacy-policy
              </a>
              .
            </p>
          ),
        },
        {
          title: "5. Hosting",
          body: (
            <p>
              This website is hosted by Vercel Inc., San Francisco, USA. Technical connection data
              (including IP address, timestamp) is processed by Vercel when you visit the site.
              More information:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-accent transition-colors"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          ),
        },
        {
          title: "6. Cookies and tracking",
          body: (
            <p>
              We do not use tracking cookies and do not employ any third-party analytics tools. No
              Google Analytics, Meta Pixel or similar services are used.
            </p>
          ),
        },
        {
          title: "7. Your rights",
          body: (
            <p>
              You have the right at any time to access, rectify, erase or restrict the processing
              of your personal data. Please contact us via our{" "}
              <a
                href={`/${locale}/booking`}
                className="underline underline-offset-2 hover:text-accent transition-colors"
              >
                booking form
              </a>{" "}
              for such requests.
            </p>
          ),
        },
        {
          title: "8. Applicable law",
          body: (
            <p>
              This privacy policy is governed by the Swiss Federal Act on Data Protection (FADP).
              For users in the EU/EEA, the GDPR applies additionally.
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
            {isDE ? "Datenschutzerklärung" : "Privacy policy"}
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

export default function PrivacyPage() {
  return <PrivacyContent />;
}
