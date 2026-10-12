import Link from "next/link";

type Hotspot = {
  href: string;
  label: string;
  left: string;
  top: string;
  width: string;
  height: string;
};

export function ImageBanner({
  src,
  alt,
  hotspots,
}: {
  src: string;
  alt: string;
  hotspots: Hotspot[];
}) {
  return (
    <div className="relative">
      {/* Banner art already includes its heading and button graphics. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="block h-auto w-full" />
      {hotspots.map((spot) => {
        const className =
          "absolute z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine";
        const style = {
          left: spot.left,
          top: spot.top,
          width: spot.width,
          height: spot.height,
        };
        const external =
          spot.href.startsWith("http://") || spot.href.startsWith("https://");

        if (external) {
          return (
            <a
              key={spot.label}
              href={spot.href}
              className={className}
              style={style}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">
                {spot.label} (opens in a new tab)
              </span>
            </a>
          );
        }

        return (
          <Link key={spot.label} href={spot.href} className={className} style={style}>
            <span className="sr-only">{spot.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
