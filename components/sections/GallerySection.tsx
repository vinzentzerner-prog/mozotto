import { useTranslations } from "next-intl";
import Image from "next/image";
import { getGalleryItems } from "@/lib/media";

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

const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACEQAAICAQQDAQAAAAAAAAAAAAECAxEABBIhMUFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwCl5Ol0QzJPU6uVnLc+uS3Yr2u1X1YRkE+2AAHySajvjHNXKLjX6dDwz2ORfzFKIBJA+0KUpH//2Q==";

export default function GallerySection() {
  const t = useTranslations("gallery");
  const items = getGalleryItems();

  if (items.length === 0) return null;

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
          {items.map((item, i) => (
            <div
              key={item.src}
              className={`relative break-inside-avoid ${ASPECT_RATIOS[i % ASPECT_RATIOS.length]} overflow-hidden rounded-lg bg-muted group`}
            >
              {item.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={`Mozotto event ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
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
