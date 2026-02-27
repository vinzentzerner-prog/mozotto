import { useTranslations } from "next-intl";
import Image from "next/image";
import { mediaExists } from "@/lib/media";

const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACEQAAICAQQDAQAAAAAAAAAAAAECAxEABBIhMUFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwCl5Ol0QzJPU6uVnLc+uS3Yr2u1X1YRkE+2AAHySajvjHNXKLjX6dDwz2ORfzFKIBJA+0KUpH//2Q==";

const founders = [
  {
    nameKey: "founder_1_name" as const,
    roleKey: "founder_1_role" as const,
    bioKey: "founder_1_bio" as const,
    imageJpg: "founder-1.jpg",
    imageMp4: "founder-1.mp4",
    alt: "Moritz – Risotto",
  },
  {
    nameKey: "founder_2_name" as const,
    roleKey: "founder_2_role" as const,
    bioKey: "founder_2_bio" as const,
    imageJpg: "founder-2.jpg",
    imageMp4: "founder-2.mp4",
    alt: "Vinzent – Champagne",
  },
];

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 bg-secondary/40 border-t border-border">
      <div className="section-container">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="label-xs text-accent">{t("label")}</span>
          <span className="accent-line mx-auto" />
          <h2 className="font-serif text-4xl md:text-5xl font-medium">{t("title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Founders grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {founders.map((founder) => (
            <div key={founder.nameKey} className="flex flex-col items-center text-center gap-6">
              {/* Portrait */}
              <div className="relative w-48 h-60 rounded-2xl overflow-hidden bg-muted shrink-0">
                {mediaExists(founder.imageMp4) ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  >
                    <source src={`/media/${founder.imageMp4}`} type="video/mp4" />
                  </video>
                ) : mediaExists(founder.imageJpg) ? (
                  <Image
                    src={`/media/${founder.imageJpg}`}
                    alt={founder.alt}
                    fill
                    className="object-cover object-top"
                    sizes="192px"
                    placeholder="blur"
                    blurDataURL={BLUR_PLACEHOLDER}
                  />
                ) : null}
                {/* Subtle warm tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 to-transparent" />
              </div>

              {/* Text */}
              <div className="space-y-2">
                <p className="label-xs text-accent">{t(founder.roleKey)}</p>
                <h3 className="font-serif text-2xl font-medium">{t(founder.nameKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {t(founder.bioKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
