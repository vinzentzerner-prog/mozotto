"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

type GalleryItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string };

// Edit this array to add/remove/reorder items.
// Use type "video" for .mp4 files, type "image" for .jpg/.webp etc.
const GALLERY_ITEMS: GalleryItem[] = [
  { type: "video", src: "/media/gallery-01.mp4" },
  { type: "image", src: "/media/gallery-02.jpg", alt: "Live risotto cooking" },
  { type: "image", src: "/media/gallery-03.jpg", alt: "Wood fire detail" },
  { type: "video", src: "/media/gallery-04.mp4" },
  { type: "image", src: "/media/gallery-05.jpg", alt: "Champagne pour" },
  { type: "image", src: "/media/gallery-06.jpg", alt: "Event atmosphere" },
  { type: "image", src: "/media/gallery-07.jpg", alt: "Risotto closeup" },
  { type: "video", src: "/media/gallery-08.mp4" },
  { type: "image", src: "/media/gallery-09.jpg", alt: "Guests enjoying" },
  { type: "image", src: "/media/gallery-10.jpg", alt: "Champagne glasses" },
  { type: "image", src: "/media/gallery-11.jpg", alt: "Fire and risotto" },
  { type: "image", src: "/media/gallery-12.jpg", alt: "Event setup" },
];

const ASPECT_RATIOS = [
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
];

export default function GallerySection() {
  const t = useTranslations("gallery");

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="label-xs text-accent">{t("label")}</span>
          <span className="accent-line mx-auto" />
          <h2 className="font-serif text-4xl md:text-5xl font-medium">{t("title")}</h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`relative break-inside-avoid ${ASPECT_RATIOS[i]} overflow-hidden rounded-lg bg-muted group`}
            >
              {item.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={item.poster}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACEQAAICAQQDAQAAAAAAAAAAAAECAxEABBIhMUFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwCl5Ol0QzJPU6uVnLc+uS3Yr2u1X1YRkE+2AAHySajvjHNXKLjX6dDwz2ORfzFKIBJA+0KUpH//2Q=="
                />
              )}
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
