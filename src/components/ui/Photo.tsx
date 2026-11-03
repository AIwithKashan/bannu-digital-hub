import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  /** Tailwind aspect class, e.g. aspect-[4/3]. Omit when parent controls height. */
  ratio?: string;
  className?: string;
  /** Wipe-in reveal on scroll */
  reveal?: boolean;
  delay?: number;
  /** Scrubbed vertical drift, 0.06 to 0.16 feels right */
  parallax?: number;
  position?: string;
  quality?: number;
};

/** Optimised, responsive photo inside a rounded frame, with optional motion hooks. */
export function Photo({
  src,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  ratio = "",
  className = "",
  reveal,
  delay,
  parallax,
  position = "center",
  quality = 75,
}: Props) {
  return (
    <div
      className={`media-frame ${ratio} ${className}`}
      {...(reveal ? { "data-img-reveal": "", "data-delay": delay ?? 0 } : {})}
    >
      <div data-img-inner="" className="absolute inset-0">
        <div
          className={parallax ? "absolute inset-x-0 -top-[10%] h-[120%]" : "absolute inset-0"}
          {...(parallax ? { "data-parallax": parallax } : {})}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            quality={quality}
            className="object-cover"
            style={{ objectPosition: position }}
          />
        </div>
      </div>
    </div>
  );
}
