import { readdirSync, existsSync } from "fs";
import { join } from "path";

const MEDIA_DIR = join(process.cwd(), "public", "media");

/** Returns true if a file exists in /public/media/ */
export function mediaExists(filename: string): boolean {
  try {
    return existsSync(join(MEDIA_DIR, filename));
  } catch {
    return false;
  }
}

type GalleryItem =
  | { type: "image"; src: string }
  | { type: "video"; src: string };

/**
 * Reads /public/media/ and returns all gallery-* files in sorted order.
 * Supports .jpg .jpeg .webp .png (image) and .mp4 .mov (video).
 */
export function getGalleryItems(): GalleryItem[] {
  try {
    return readdirSync(MEDIA_DIR)
      .filter((f) =>
        /^gallery-\d+\.(jpg|jpeg|webp|png|mp4|mov)$/i.test(f)
      )
      .sort()
      .map((f) => ({
        type: /\.(mp4|mov)$/i.test(f) ? "video" : "image",
        src: `/media/${f}`,
      }));
  } catch {
    return [];
  }
}
