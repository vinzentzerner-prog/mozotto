import { readdirSync } from "fs";
import { join } from "path";

const MEDIA_DIR = join(process.cwd(), "public", "media");

/** Returns true if a file exists in /public/media/ (case-insensitive). */
export function mediaExists(filename: string): boolean {
  try {
    const lower = filename.toLowerCase();
    return readdirSync(MEDIA_DIR).some((f) => f.toLowerCase() === lower);
  } catch {
    return false;
  }
}

/**
 * Returns the public URL path for a media file using the actual on-disk
 * filename (case-insensitive lookup). Returns null if not found.
 */
export function mediaPath(filename: string): string | null {
  try {
    const lower = filename.toLowerCase();
    const match = readdirSync(MEDIA_DIR).find((f) => f.toLowerCase() === lower);
    return match ? `/media/${match}` : null;
  } catch {
    return null;
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
