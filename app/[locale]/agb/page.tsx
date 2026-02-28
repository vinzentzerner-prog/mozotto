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
  const t = await getTranslations({ locale, namespace: "agb" });
  return {
    title: t("title"),
    alternates: { canonical: `/${locale}/agb` },
  };
}

function AgbContent() {
  const locale = useLocale();
  const isDE = locale === "de";

  const sections = isDE
    ? [
        {
          title: "Anbieter",
          body: (
            <>
              <p>moZotto (in Gründung)</p>
              <p>Vertreten durch: Moritz Schlatter und Vinzent Zerner</p>
              <p>Schweiz</p>
            </>
          ),
        },
        {
          title: "§ 1 Geltungsbereich",
          body: (
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
              moZotto und dem Auftraggeber (nachfolgend «Kunde») über Live-Catering-Dienstleistungen
              (insbesondere Live-Risotto-Cooking und Champagne-Service). Abweichende Bedingungen
              des Kunden werden nicht anerkannt, es sei denn, moZotto stimmt diesen ausdrücklich
              schriftlich zu.
            </p>
          ),
        },
        {
          title: "§ 2 Angebot und Vertragsabschluss",
          body: (
            <>
              <p>
                2.1 Anfragen des Kunden über das Buchungsformular stellen kein verbindliches Angebot
                dar.
              </p>
              <p>
                2.2 Ein Vertrag kommt erst zustande, wenn moZotto die Buchung schriftlich per
                E-Mail bestätigt.
              </p>
              <p>
                2.3 Das Angebot von moZotto ist, sofern nicht anders angegeben, 14 Tage ab
                Ausstellungsdatum gültig.
              </p>
            </>
          ),
        },
        {
          title: "§ 3 Leistungsumfang",
          body: (
            <>
              <p>
                3.1 moZotto erbringt Live-Cooking-Dienstleistungen gemäss der individuell
                vereinbarten Leistungsbeschreibung.
              </p>
              <p>
                3.2 Im Standardleistungsumfang enthalten sind: Kocher, Zutaten, Geschirr, Gläser
                sowie das Serviceteam.
              </p>
              <p>
                3.3 Zusatzleistungen (z.B. Holzkohlegrill, Tische und Bestuhlung) sind separat zu
                vereinbaren und werden gesondert ausgewiesen.
              </p>
              <p>
                3.4 Änderungen des Leistungsumfangs bedürfen der schriftlichen Zustimmung beider
                Parteien.
              </p>
            </>
          ),
        },
        {
          title: "§ 4 Preise und Bezahlung",
          body: (
            <>
              <p>4.1 Die Preise richten sich nach dem individuell vereinbarten Angebot.</p>
              <p>
                4.2 Nach bestätigter Buchung ist eine Anzahlung von 30 % des Gesamtpreises
                innerhalb von 7 Tagen zu leisten.
              </p>
              <p>
                4.3 Der Restbetrag ist spätestens 7 Tage vor dem Veranstaltungsdatum zu
                begleichen.
              </p>
              <p>
                4.4 Bei Zahlungsverzug ist moZotto berechtigt, Verzugszinsen von 5 % p.a. zu
                berechnen und die Leistung bis zur vollständigen Bezahlung zurückzuhalten.
              </p>
              <p>4.5 Alle Preise verstehen sich in Schweizer Franken (CHF).</p>
            </>
          ),
        },
        {
          title: "§ 5 Stornierung durch den Kunden",
          body: (
            <>
              <p>
                5.1 Stornierungen sind ausschliesslich schriftlich per E-Mail einzureichen und
                gelten ab Eingang der Stornierungsbestätigung durch moZotto.
              </p>
              <p>
                5.2 Bei Stornierung mehr als 30 Tage vor dem Event: Rückerstattung der Anzahlung
                abzüglich einer Bearbeitungsgebühr von CHF 150.–.
              </p>
              <p>
                5.3 Bei Stornierung 15–30 Tage vor dem Event: 50 % des vereinbarten
                Gesamtpreises werden in Rechnung gestellt.
              </p>
              <p>
                5.4 Bei Stornierung weniger als 15 Tage vor dem Event: 100 % des vereinbarten
                Gesamtpreises werden in Rechnung gestellt.
              </p>
            </>
          ),
        },
        {
          title: "§ 6 Stornierung durch moZotto",
          body: (
            <>
              <p>
                6.1 Bei höherer Gewalt, schwerer Erkrankung eines der Gründer oder anderen
                unvorhersehbaren Umständen, die die Leistungserbringung verunmöglichen, ist moZotto
                berechtigt, den Auftrag zu stornieren.
              </p>
              <p>
                6.2 In diesem Fall wird die geleistete Anzahlung vollständig zurückerstattet.
                Weitergehende Ansprüche des Kunden sind ausgeschlossen.
              </p>
            </>
          ),
        },
        {
          title: "§ 7 Pflichten des Kunden",
          body: (
            <>
              <p>
                7.1 Der Kunde stellt die notwendige Infrastruktur bereit: mindestens 6×4 m
                Aufstellfläche, Stromanschluss 230V/16A sowie ausreichende Belüftung oder
                Aussenbereich für den Holzfeuer-Kocher.
              </p>
              <p>
                7.2 Der Kunde informiert moZotto spätestens 7 Tage vor dem Event über allfällige
                Besonderheiten des Veranstaltungsortes (z.B. Zufahrtsbeschränkungen, Auflagen der
                Gebäudeleitung).
              </p>
              <p>
                7.3 Änderungen der Gästezahl sind spätestens 7 Tage vor dem Event mitzuteilen.
                Kurzfristige Mehrmengen kann moZotto nicht garantieren.
              </p>
              <p>
                7.4 Der Kunde stellt sicher, dass moZotto die Veranstaltungsräumlichkeiten
                spätestens 2 Stunden vor Veranstaltungsbeginn zur Aufstellung betreten kann.
              </p>
            </>
          ),
        },
        {
          title: "§ 8 Haftung",
          body: (
            <>
              <p>
                8.1 moZotto haftet nur für nachgewiesene, direkte Schäden, die auf grober
                Fahrlässigkeit oder Vorsatz beruhen.
              </p>
              <p>
                8.2 Die Haftung für indirekte Schäden, entgangenen Gewinn oder Folgeschäden ist
                ausgeschlossen.
              </p>
              <p>
                8.3 Die Gesamthaftung von moZotto ist auf den Betrag des jeweiligen
                Vertragswertes beschränkt.
              </p>
              <p>
                8.4 moZotto haftet nicht für Allergien oder Unverträglichkeiten, sofern der Kunde
                keine entsprechenden Informationen vorab mitgeteilt hat.
              </p>
            </>
          ),
        },
        {
          title: "§ 9 Foto- und Videoaufnahmen",
          body: (
            <p>
              moZotto ist berechtigt, im Rahmen der Veranstaltung Foto- und Videoaufnahmen zu
              erstellen und diese für eigene Marketingzwecke zu verwenden. Sofern der Kunde dies
              nicht wünscht, ist dies spätestens 7 Tage vor dem Event schriftlich mitzuteilen.
            </p>
          ),
        },
        {
          title: "§ 10 Geheimhaltung",
          body: (
            <p>
              Beide Parteien verpflichten sich, vertrauliche Informationen der jeweils anderen
              Partei nicht an Dritte weiterzugeben, sofern keine gesetzliche Pflicht zur
              Offenlegung besteht.
            </p>
          ),
        },
        {
          title: "§ 11 Anwendbares Recht und Gerichtsstand",
          body: (
            <>
              <p>Diese AGB und alle daraus entstehenden Rechtsbeziehungen unterstehen Schweizer Recht.</p>
              <p>
                Ausschliesslicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang
                mit diesen AGB ist Zürich, Schweiz.
              </p>
            </>
          ),
        },
        {
          title: "§ 12 Salvatorische Klausel",
          body: (
            <p>
              Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam oder
              undurchführbar sein oder werden, bleibt die Gültigkeit der übrigen Bestimmungen
              hiervon unberührt. Die unwirksame Bestimmung ist durch eine wirksame zu ersetzen,
              die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
            </p>
          ),
        },
      ]
    : [
        {
          title: "Provider",
          body: (
            <>
              <p>moZotto (in formation)</p>
              <p>Represented by: Moritz Schlatter and Vinzent Zerner</p>
              <p>Switzerland</p>
            </>
          ),
        },
        {
          title: "§ 1 Scope",
          body: (
            <p>
              These General Terms and Conditions (T&Cs) apply to all contracts between moZotto and
              the client for live catering services (in particular live risotto cooking and Champagne
              service). Deviating conditions of the client are not recognised unless moZotto expressly
              agrees to them in writing.
            </p>
          ),
        },
        {
          title: "§ 2 Offer and contract formation",
          body: (
            <>
              <p>
                2.1 Enquiries submitted by the client via the booking form do not constitute a
                binding offer.
              </p>
              <p>
                2.2 A contract is only concluded once moZotto confirms the booking in writing by
                email.
              </p>
              <p>
                2.3 Unless otherwise stated, moZotto's offer is valid for 14 days from the date of
                issue.
              </p>
            </>
          ),
        },
        {
          title: "§ 3 Scope of services",
          body: (
            <>
              <p>
                3.1 moZotto provides live cooking services in accordance with the individually agreed
                service description.
              </p>
              <p>
                3.2 The standard scope includes: cooker, ingredients, crockery, glasses and the
                service team.
              </p>
              <p>
                3.3 Additional services (e.g. charcoal grill, tables and seating) must be agreed
                separately and will be listed individually.
              </p>
              <p>
                3.4 Changes to the scope of services require the written consent of both parties.
              </p>
            </>
          ),
        },
        {
          title: "§ 4 Prices and payment",
          body: (
            <>
              <p>4.1 Prices are based on the individually agreed offer.</p>
              <p>
                4.2 A deposit of 30% of the total price is due within 7 days of booking
                confirmation.
              </p>
              <p>
                4.3 The remaining balance is due no later than 7 days before the event date.
              </p>
              <p>
                4.4 In the event of late payment, moZotto is entitled to charge default interest of
                5% p.a. and to withhold services until full payment has been received.
              </p>
              <p>4.5 All prices are in Swiss Francs (CHF).</p>
            </>
          ),
        },
        {
          title: "§ 5 Cancellation by the client",
          body: (
            <>
              <p>
                5.1 Cancellations must be submitted in writing by email and take effect from receipt
                of moZotto's written confirmation of cancellation.
              </p>
              <p>
                5.2 Cancellation more than 30 days before the event: deposit refunded less a
                processing fee of CHF 150.–.
              </p>
              <p>
                5.3 Cancellation 15–30 days before the event: 50% of the agreed total price will be
                invoiced.
              </p>
              <p>
                5.4 Cancellation less than 15 days before the event: 100% of the agreed total price
                will be invoiced.
              </p>
            </>
          ),
        },
        {
          title: "§ 6 Cancellation by moZotto",
          body: (
            <>
              <p>
                6.1 In the event of force majeure, serious illness of one of the founders, or other
                unforeseeable circumstances that make performance impossible, moZotto is entitled to
                cancel the order.
              </p>
              <p>
                6.2 In such cases, any deposit paid will be refunded in full. Further claims by the
                client are excluded.
              </p>
            </>
          ),
        },
        {
          title: "§ 7 Client obligations",
          body: (
            <>
              <p>
                7.1 The client provides the necessary infrastructure: at least 6×4 m of setup space,
                a 230V/16A power connection and adequate ventilation or an outdoor area for the
                wood-fire cooker.
              </p>
              <p>
                7.2 The client informs moZotto no later than 7 days before the event of any
                specifics of the venue (e.g. access restrictions, building management requirements).
              </p>
              <p>
                7.3 Changes to guest numbers must be communicated no later than 7 days before the
                event. moZotto cannot guarantee last-minute increases.
              </p>
              <p>
                7.4 The client ensures that moZotto can access the venue no later than 2 hours
                before the event start for setup.
              </p>
            </>
          ),
        },
        {
          title: "§ 8 Liability",
          body: (
            <>
              <p>
                8.1 moZotto is only liable for proven, direct damages arising from gross negligence
                or wilful misconduct.
              </p>
              <p>
                8.2 Liability for indirect damages, loss of profit or consequential loss is
                excluded.
              </p>
              <p>
                8.3 moZotto's total liability is limited to the value of the respective contract.
              </p>
              <p>
                8.4 moZotto is not liable for allergic reactions or intolerances if the client
                failed to provide relevant information in advance.
              </p>
            </>
          ),
        },
        {
          title: "§ 9 Photography and video",
          body: (
            <p>
              moZotto is entitled to take photos and videos during the event and to use them for its
              own marketing purposes. If the client does not wish this, written notice must be given
              no later than 7 days before the event.
            </p>
          ),
        },
        {
          title: "§ 10 Confidentiality",
          body: (
            <p>
              Both parties undertake not to disclose confidential information of the other party to
              third parties, unless there is a legal obligation to do so.
            </p>
          ),
        },
        {
          title: "§ 11 Applicable law and jurisdiction",
          body: (
            <>
              <p>
                These T&Cs and all legal relationships arising from them are governed by Swiss law.
              </p>
              <p>
                The exclusive place of jurisdiction for all disputes arising out of or in connection
                with these T&Cs is Zurich, Switzerland.
              </p>
            </>
          ),
        },
        {
          title: "§ 12 Severability",
          body: (
            <p>
              Should individual provisions of these T&Cs be wholly or partially invalid or
              unenforceable, the validity of the remaining provisions shall not be affected. The
              invalid provision shall be replaced by a valid provision that comes closest to the
              economic purpose of the invalid provision.
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
            {isDE ? "Allgemeine Geschäftsbedingungen" : "Terms & Conditions"}
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

export default function AgbPage() {
  return <AgbContent />;
}
