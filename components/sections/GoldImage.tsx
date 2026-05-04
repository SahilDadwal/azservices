import Image from "next/image";

type GoldImageProps = {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
  sizes?: string;
};

export function GoldImage({ src, alt, className, priority = false, sizes = "100vw" }: GoldImageProps) {
  return (
    <div
      className={`image-lift image-zoom relative w-full max-w-full overflow-hidden rounded-lg border border-gold-soft bg-white shadow-gold ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
