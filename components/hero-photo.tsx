import { missionParagraph } from "@/lib/facts";
import { ChevronRight, Gift, Heart, User } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

function HeroPill({
  href,
  className,
  icon,
  children,
}: {
  href: string;
  className: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a2744] ${className}`}
    >
      {icon}
      {children}
      <ChevronRight className="size-4 shrink-0" aria-hidden="true" />
    </Link>
  );
}

export function HomeHero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="border-b border-border bg-[#f7f4ee]"
    >
      <div className="md:relative">
        {/* Whole photograph, real aspect ratio. Not cropped. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt="Volunteers packing donated food"
          className="block h-auto w-full"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(247,244,238,0.94)_0%,rgba(247,244,238,0.78)_26%,rgba(247,244,238,0.28)_46%,rgba(247,244,238,0)_64%)] md:block"
        />
        <div className="px-5 py-8 md:absolute md:inset-0 md:flex md:items-center md:px-10 md:py-8 lg:px-14">
          <div className="max-w-xl">
            <h1
              id="hero-heading"
              className="font-heading text-[2.35rem] leading-[1.02] font-medium tracking-[-0.02em] text-[#1a2744] sm:text-5xl lg:text-6xl"
            >
              Building
              <br />
              Community
              <br />
              Through Service
            </h1>
            <p className="mt-4 max-w-md text-[0.95rem] leading-snug text-[#243044] md:text-base">
              {missionParagraph}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <HeroPill href="/get-help" className="bg-[#1e4a38] text-white" icon={<User className="size-4" aria-hidden="true" />}>
                Get Help
              </HeroPill>
              <HeroPill href="/volunteer" className="bg-white text-[#1a2744]" icon={<Heart className="size-4" aria-hidden="true" />}>
                Volunteer
              </HeroPill>
              <HeroPill href="/donate" className="bg-[#c4622d] text-white" icon={<Gift className="size-4" aria-hidden="true" />}>
                Donate
              </HeroPill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
