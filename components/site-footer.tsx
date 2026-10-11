import { church, hhEmail, nav, taxLine } from "@/lib/facts";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-ink text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-heading text-3xl">Helping Hands</p>
          <p className="mt-3 max-w-xs text-base text-primary-foreground/90">
            Building Community Through Service. An outreach ministry founded at
            Denver United Methodist Church.
          </p>
          <p className="mt-4 text-sm leading-relaxed">{taxLine}</p>
        </div>
        <div>
          <p className="eyebrow text-teal">Write</p>
          <p className="mt-3">
            <a
              className="font-semibold underline decoration-teal decoration-2 underline-offset-4"
              href={`mailto:${hhEmail}`}
            >
              {hhEmail}
            </a>
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-teal">{church.name}</p>
          <p className="mt-3 text-sm leading-relaxed">
            The street address, phone, and office hours below are the church,
            where Helping Hands was founded. Helping Hands does not list a separate
            office phone or mailing address.
          </p>
          <address className="mt-4 text-sm leading-relaxed not-italic">
            {church.street}
            <br />
            {church.mailing}
            <br />
            <a className="underline decoration-teal underline-offset-4" href={church.phoneHref}>
              {church.phone}
            </a>
            <br />
            {church.hours}
          </address>
          <p className="mt-3 text-sm">
            <a
              className="font-semibold underline decoration-teal decoration-2 underline-offset-4"
              href={church.map}
              target="_blank"
              rel="noopener noreferrer"
            >
              Map
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
