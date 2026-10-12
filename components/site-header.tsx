"use client";

import { LogoMark } from "@/components/logo-mark";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav } from "@/lib/facts";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const quickLinks = [
  { href: "/get-help", label: "Get Help" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate" },
] as const;

function isQuick(href: string) {
  return quickLinks.some((item) => item.href === href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-1.5">
        <Link href="/" className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine">
          <LogoMark className="h-14 w-auto sm:h-16" priority />
        </Link>
        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 xl:flex">
          {nav.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`rounded-md px-2.5 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine ${
                  current
                    ? "bg-secondary text-secondary-foreground"
                    : isQuick(item.href)
                      ? "text-pine hover:bg-muted"
                      : "text-ink hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="ml-auto inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm font-semibold xl:hidden"
            aria-label="Open menu"
          >
            <Menu aria-hidden="true" />
            Menu
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-card sm:max-w-sm">
            <SheetHeader>
              <SheetTitle className="text-left font-heading text-2xl">
                Helping Hands
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 pb-8">
              {nav.map((item) => {
                const current = isCurrent(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-3 text-lg font-semibold ${
                      current ? "bg-secondary text-secondary-foreground" : "hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function SkipLink() {
  return (
    <a
      href="#content"
      className="absolute top-3 left-3 z-[70] -translate-y-24 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:translate-y-0"
    >
      Skip to content
    </a>
  );
}
