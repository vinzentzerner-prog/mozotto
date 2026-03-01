"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Only use transparent mode on the homepage (the hero video provides the dark bg)
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
  const solid = !isHomePage || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}#events`, label: t("events") },
    { href: `/${locale}#moments`, label: t("moments") },
    { href: `/${locale}#menu`, label: t("menu") },
    { href: `/${locale}#contact`, label: t("contact") },
  ];

  const otherLocale = locale === "de" ? "en" : "de";
  const otherLocaleLabel = locale === "de" ? "EN" : "DE";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          solid
            ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className={cn(
                "font-serif text-xl font-medium tracking-wide transition-colors",
                solid ? "text-foreground" : "text-white"
              )}
            >
              mo<span className="text-accent">Z</span>otto
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-sans font-medium transition-colors hover:text-accent",
                    solid ? "text-foreground/80" : "text-white/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* Locale switcher */}
              <Link
                href={`/${otherLocale}`}
                className={cn(
                  "label-xs transition-colors hover:text-accent hidden sm:block",
                  solid ? "text-muted-foreground" : "text-white/60"
                )}
              >
                {otherLocaleLabel}
              </Link>

              {/* CTA */}
              <Button
                asChild
                variant={solid ? "default" : "accent"}
                size="sm"
                className="hidden sm:inline-flex"
              >
                <Link href={`/${locale}/booking`}>{t("cta")}</Link>
              </Button>

              {/* Mobile menu toggle */}
              <button
                className={cn(
                  "lg:hidden p-2 transition-colors",
                  solid ? "text-foreground" : "text-white"
                )}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm font-medium text-foreground/80 hover:text-accent border-b border-border last:border-0 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex items-center gap-3">
                <Button asChild variant="default" size="sm" className="flex-1">
                  <Link href={`/${locale}/booking`}>{t("cta")}</Link>
                </Button>
                <Link
                  href={`/${otherLocale}`}
                  className="label-xs hover:text-accent transition-colors"
                >
                  {otherLocaleLabel}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
