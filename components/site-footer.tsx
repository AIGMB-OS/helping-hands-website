import { church, hhEmail, nav, taxLine } from "@/lib/facts";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer mt-auto">
      <div className="wrap section">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <p className="footer-name">Helping Hands</p>
            <p className="mt-3 max-w-md leading-relaxed">
              Building Community Through Service. An outreach ministry founded at
              Denver United Methodist Church.
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed">{taxLine}</p>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">Write</h2>
            <p className="footer-contact">
              <Mail aria-hidden="true" />
              <a className="font-semibold text-navy" href={`mailto:${hhEmail}`}>
                {hhEmail}
              </a>
            </p>
            <ul className="footer-links">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">{church.name}</h2>
            <p className="mt-3 text-sm leading-relaxed">
              The street address, phone, and office hours below are the church,
              where Helping Hands was founded.
            </p>
            <address className="mt-3 text-sm leading-relaxed not-italic">
              <span className="footer-contact">
                <MapPin aria-hidden="true" />
                <span>
                  {church.street}
                  <br />
                  {church.mailing}
                </span>
              </span>
              <span className="footer-contact">
                <Phone aria-hidden="true" />
                <span>
                  <a className="font-semibold text-navy" href={church.phoneHref}>
                    {church.phone}
                  </a>
                  <br />
                  {church.hours}
                </span>
              </span>
            </address>
            <p className="mt-3 text-sm">
              <a
                className="font-semibold text-navy underline decoration-[#b7d5d9] underline-offset-4"
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
      </div>
    </footer>
  );
}