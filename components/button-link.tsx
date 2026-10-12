import { cn } from "cn";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "default" | "outline" | "secondary" | "dark";

const variantClass: Record<ButtonVariant, string> = {
  default: "btn btn-primary",
  outline: "btn btn-secondary",
  secondary: "btn btn-primary",
  dark: "btn btn-dark",
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "default",
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: string;
  external?: boolean;
}) {
  const classes = cn(variantClass[variant], className);
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
  const external = href.startsWith("http://") || href.startsWith("https://");

  if (external) {
    return (
      <a
        href={href}
        className="link"
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
      <a href={href} className="link">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className="link">
      {children}
    </Link>
  );
}
