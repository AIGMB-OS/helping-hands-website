import type { ReactNode } from "react";

export function Note({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="border-l-2 border-pine/50 bg-muted/80 px-5 py-4 text-base leading-relaxed text-foreground">
      {title ? <p className="mb-1 font-semibold text-ink">{title}</p> : null}
      <div className="space-y-2">{children}</div>
    </aside>
  );
}
