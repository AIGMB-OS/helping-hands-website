import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import type { VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "default",
  size = "lg",
  external,
}: ButtonLinkProps) {
  const classes = cn(
    buttonVariants({ variant, size }),
    "h-11 px-4 text-base",
    className,
  );
  const isExternal =
    external ?? (href.startsWith("http://") || href.startsWith("https://"));

  if (isExternal || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        {isExternal ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className =
    "font-semibold text-pine underline decoration-teal decoration-2 underline-offset-[0.2em] hover:decoration-pine";
  const external = href.startsWith("http://") || href.startsWith("https://");

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
