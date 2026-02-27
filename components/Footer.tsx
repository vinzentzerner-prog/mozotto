import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "#events", label: tNav("events") },
    { href: "#packages", label: tNav("packages") },
    { href: "#menu", label: tNav("menu") },
    { href: "#gallery", label: tNav("gallery") },
    { href: "#faq", label: tNav("faq") },
    { href: "#contact", label: tNav("contact") },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="font-serif text-2xl font-medium text-white">
              Mozotto
            </span>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
            <span className="accent-line" />
          </div>

          {/* Nav */}
          <div>
            <p className="label-xs text-white/40 mb-4">{t("links_title")}</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="label-xs text-white/40 mb-4">{t("legal_title")}</p>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/impressum`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {t("impressum")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {t("privacy")}
                </Link>
              </li>
            </ul>

            {/* Locale */}
            <div className="mt-8 flex gap-3">
              <Link
                href="/de"
                className="label-xs text-white/40 hover:text-white transition-colors"
              >
                DE
              </Link>
              <span className="text-white/20">·</span>
              <Link
                href="/en"
                className="label-xs text-white/40 hover:text-white transition-colors"
              >
                EN
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <p className="text-xs text-white/30">
          {t("copyright", { year })}
        </p>
      </div>
    </footer>
  );
}
