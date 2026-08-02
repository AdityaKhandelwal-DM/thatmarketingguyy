import Image from "next/image";
import { cn } from "@/lib/utils";

interface MediaProps {
  /** file name inside /public/images, without extension — e.g. "rest_dining" */
  src: string;
  alt: string;
  /** aspect + radius live here, e.g. "aspect-[3/2] rounded-card" */
  className?: string;
  /** responsive width hint for next/image srcset selection */
  sizes?: string;
  /** load eagerly — use only for above-the-fold imagery */
  priority?: boolean;
  /** dark bottom gradient, for captions laid over the image */
  overlay?: boolean;
  /** subtle zoom on hover of the nearest `.group` ancestor */
  zoomOnHover?: boolean;
}

/**
 * Photographic media block. Always cover-cropped and never distorted —
 * the container owns the aspect ratio, the image fills it.
 *
 * Sources live in /public/images as 1200×800 webp (700×700 under /sq).
 * See public/images/README.md for provenance and how to swap one out.
 */
export default function Media({
  src,
  alt,
  className,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  overlay = false,
  zoomOnHover = false,
}: MediaProps) {
  return (
    <div className={cn("relative overflow-hidden bg-bg-light", className)}>
      <Image
        src={`/images/${src}.webp`}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover",
          zoomOnHover &&
            "transition-transform duration-[400ms] group-hover:scale-[1.04]"
        )}
      />
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-text-primary/75 via-text-primary/15 to-transparent"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
