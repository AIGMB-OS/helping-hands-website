import { ButtonLink } from "@/components/button-link";
import { DavidFundraiserFeature } from "@/components/david-fundraiser-feature";
import { PageIntro } from "@/components/page-intro";
import { davidFundraiserPath } from "@/lib/david-garmon";
import { upcomingEvents } from "@/lib/upcoming-events";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "David Garmon's half-triathlon fundraiser and the next dated Helping Hands gatherings.",
};

export default function UpcomingEventsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Upcoming Events"
        title="What's ahead"
        lede="David Garmon's fundraiser, and the next dated gatherings."
      />
      <div className="mx-auto max-w-6xl space-y-8 px-5 py-12">
        <DavidFundraiserFeature actionHref={davidFundraiserPath} />
        <ul className="grid gap-4 md:grid-cols-2">
          {upcomingEvents.map((event) => (
            <li key={event.href} className="soft-card">
              <p className="label">{event.when}</p>
              <h2 className="card-title mt-2">{event.title}</h2>
              <p className="mt-1 flex-1 text-sm leading-relaxed">{event.detail}</p>
              <ButtonLink href={event.href} variant="outline" className="mt-4 w-fit">
                {event.action}
              </ButtonLink>
            </li>
          ))}
        </ul>
        <ButtonLink href="/events" variant="outline" className="w-fit">
          All events
        </ButtonLink>
      </div>
    </main>
  );
}
