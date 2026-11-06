"use client";

import { logoUrl } from "@/lib/facts";
import { useState } from "react";

export function LogoMark({
  className = "h-14 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="font-heading text-2xl tracking-tight text-ink">
        Helping Hands
      </span>
    );
  }

  return (
    {/* The logo is already a small CDN file. Skipping the image optimizer avoids a slow Render resize. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={logoUrl}
      alt="Helping Hands"
      width={670}
      height={350}
      className={className}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setFailed(true)}
    />
  );
}
