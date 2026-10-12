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
    <header className="bg-blue">
      <div className="wrap section">
        {eyebrow ? <p className="label">{eyebrow}</p> : null}
        <h1 className="display mt-2 max-w-3xl">{title}</h1>
        <div className="mt-4 max-w-3xl leading-relaxed">{lede}</div>
      </div>
    </header>
  );
}
