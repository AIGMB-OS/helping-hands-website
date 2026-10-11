"use client";

import Image from "next/image";
import { useState } from "react";

type RemoteImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

type FittedPhotoProps = {
  src: string;
  alt: string;
  className?: string;
};

export function RemoteImage({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
}: RemoteImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className ?? "object-contain"}
      onError={() => setFailed(true)}
    />
  );
}

/** Shows the whole picture at its real aspect ratio. Nothing is cropped. */
export function FittedPhoto({ src, alt, className }: FittedPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return null;
  }

  return (
    // Native img so width and height follow the file, not a crop box.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`h-auto w-auto max-w-full object-contain ${className ?? ""}`}
      onError={() => setFailed(true)}
    />
  );
}
