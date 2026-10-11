import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede: ReactNode;
}) {
  return (
    <header className="border-b border-border bg-[#e5f1ef]">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.08] text-ink md:text-5xl">
          {title}
        </h1>
        <div className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground">
          {lede}
        </div>
      </div>
    </header>
  );
}
