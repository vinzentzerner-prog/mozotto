import { useTranslations } from "next-intl";
import { Flame, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { mediaExists, mediaPath } from "@/lib/media";

export default function EventsSection() {
  const t = useTranslations("events");

  const tiles = [
    {
      icon: Flame,
      titleKey: "tile_1_title" as const,
      descKey: "tile_1_desc" as const,
    },
    {
      icon: Sparkles,
      titleKey: "tile_2_title" as const,
      descKey: "tile_2_desc" as const,
    },
    {
      icon: CheckCircle2,
      titleKey: "tile_3_title" as const,
      descKey: "tile_3_desc" as const,
    },
  ];

  // Prefer Mozotto-second-section.mp4, then fall back to events.mp4
  const videoSrc =
    mediaPath("Mozotto-second-section.mp4") ?? mediaPath("events.mp4");
  const imageSrc = mediaExists("events.jpg") ? "/media/events.jpg" : null;

  return (
    <section id="events" className="py-24 bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Video or Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-muted order-2 lg:order-1">
            {videoSrc ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : imageSrc ? (
              <Image
                src={imageSrc}
                alt="Live Risotto cooking at an event"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACEQAAICAQQDAQAAAAAAAAAAAAECAxEABBIhMUFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwCl5Ol0QzJPU6uVnLc+uS3Yr2u1X1YRkE+2AAHySajvjHNXKLjX6dDwz2ORfzFKIBJA+0KUpH//2Q=="
              />
            ) : null}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>

          {/* Right: Content */}
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="label-xs text-accent">{t("label")}</span>
              <span className="accent-line" />
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight">
                {t("title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                {t("subtitle")}
              </p>
            </div>

            <div className="space-y-6">
              {tiles.map((tile) => (
                <div key={tile.titleKey} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <tile.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium mb-1">
                      {t(tile.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(tile.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
