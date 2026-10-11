"use client";

import { logoUrl } from "@/lib/facts";
import Image from "next/image";
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
    <Image
      src={logoUrl}
      alt="Helping Hands"
      width={670}
      height={350}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
