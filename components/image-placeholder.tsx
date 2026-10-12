export function ImagePlaceholder({
  label,
  note,
}: {
  label: string;
  note: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex min-h-40 w-full flex-col items-center justify-center gap-2 border border-dashed border-navy/30 bg-ivory px-6 py-10 text-center"
    >
      <p className="label">
        {label}
      </p>
      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{note}</p>
    </div>
  );
}
