import { TextLink } from "@/components/button-link";
import { Note } from "@/components/note";
import { PageIntro } from "@/components/page-intro";
import { handUpLatest } from "@/lib/facts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Recurring Helping Hands gatherings and upcoming dates.",
};

export default function EventsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Events"
        title="Meetings, lunch, and save-the-dates"
        lede="Regular gatherings, dated events, and dates whose time or place is not listed."
      />
      <div className="mx-auto max-w-3xl space-y-12 px-5 py-14">
        <section className="space-y-6">
          <h2 className="text-4xl text-ink">Recurring</h2>
          <article>
            <h3 className="text-2xl text-ink">Helping Hands Meeting</h3>
            <p className="mt-2">
              First Monday of each month, 10:30 a.m.–12:00 p.m., Chapel. You are
              invited to hear the many ways God is moving in this community and how
              you can help. If you are interested in a specific ministry, please
              speak with the ministry lead following the meeting.
            </p>
          </article>
          <article>
            <h3 className="text-2xl text-ink">First Thursday Lunch</h3>
            <p className="mt-2">
              First Thursday, September–May, 11:00 a.m.–1:00 p.m. A complete meal
              with dessert and a drink is $10. 8x8 pies are $12. The published
              location is FLC.
            </p>
          </article>
          <article id="prayer-shawl">
            <h3 className="text-2xl text-ink">Prayer Shawl Ministry</h3>
            <p className="mt-2">
              Monthly, in the library. Sunday, October 18, 2026, 4:00–6:00 p.m.
              The next prayer-shawl date after October 18, 2026 is not listed. New
              knitters and crocheters are welcome.{" "}
              <TextLink href="https://www.denverumc.org/events/prayer-shawl-ministry/2026-10-18">
                Event page
              </TextLink>
              .{" "}
              <TextLink href="https://www.denverumc.org/events/prayer-shawl-ministry/2026-10-18.ics">
                Save to your calendar
              </TextLink>
              .
            </p>
          </article>
          <article>
            <h3 className="text-2xl text-ink">Sewing Ladies</h3>
            <p className="mt-2">Mondays, 9:00 a.m.–noon. The room is not listed.</p>
          </article>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl text-ink">Dated events</h2>
          <article>
            <h3 className="text-2xl text-ink">Monday, November 2, 2026</h3>
            <p className="mt-2">
              Helping Hands Meeting, 10:30 a.m.–12:00 p.m., Chapel.{" "}
              <TextLink href="https://www.denverumc.org/events/helping-hands-meeting/2026-11-02">
                Event page
              </TextLink>
              .{" "}
              <TextLink href="https://www.denverumc.org/events/helping-hands-meeting/2026-11-02.ics">
                Calendar file
              </TextLink>
              .
            </p>
          </article>
          <article>
            <h3 className="text-2xl text-ink">Thursday, November 5, 2026</h3>
            <p className="mt-2">
              First Thursday Lunch, 11:00 a.m.–1:00 p.m., FLC.{" "}
              <TextLink href="https://www.denverumc.org/events/first-thursday-lunch/2026-11-05">
                Event page
              </TextLink>
              .{" "}
              <TextLink href="https://www.denverumc.org/events/first-thursday-lunch/2026-11-05.ics">
                Calendar file
              </TextLink>
              .
            </p>
          </article>
          <article id="golf">
            <h3 className="text-2xl text-ink">Monday, April 26, 2027</h3>
            <p className="mt-2">
              Charlie Blackburn Memorial Golf Tournament, 11:00 a.m.–6:00 p.m. Save
              the Date. There is no course, fee, or registration link, and no place
              is listed. The 2026 tournament was April 27.{" "}
              <TextLink href="https://www.denverumc.org/events/golf-tournament/2027-04-26">
                Event page
              </TextLink>
              .
            </p>
          </article>
        </section>

        <section className="space-y-4">
          <h2 className="text-4xl text-ink">Dates not listed</h2>
          <Note title="What is not listed">
            <p>
              December 7, 2026 is a later Helping Hands meeting. Its time and room
              are not listed.
            </p>
            <p>
              December 3, 2026 is a later First Thursday Lunch. Its details are not
              listed.
            </p>
            <p>
              The next prayer-shawl date after October 18, 2026 is not listed.
            </p>
            <p>
              Rake &apos;n Run’s signup is the 2025 form. It names Saturday,
              November 22, which has passed. That date is not this year’s event,
              and it is not on this calendar.
            </p>
          </Note>
        </section>

        <section className="space-y-4">
          <h2 className="text-4xl text-ink">From the October 2026 Hand Up</h2>
          <p>
            These dates are from the October 2026 issue,{" "}
            <TextLink href={handUpLatest.href}>{handUpLatest.label}</TextLink>.
            Some are community efforts, separate from the regular Helping Hands
            schedule.
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              October 15 — Sunrise Fall Festival. Volunteer help and donations are
              needed. Contact Lea. No last name or email is listed.
            </li>
            <li>
              October 17 — Apple Fest 5K, United Way of Lincoln County, 8:00 a.m.,
              start and finish at Lincolnton High School.
            </li>
            <li>
              October 24 — Community Garden Workday, 8:00 a.m., at Denver United
              Methodist Church.
            </li>
            <li>
              October 24 — Missional Network Family Fun Day, Rock Springs
              Campground, 11:00–2:00.
            </li>
            <li>
              October 24 — David Moves, Edisto Island Half-Triathlon, Helping Hands
              fundraiser.
            </li>
            <li>
              October 24 — Soul to Soul “Soles for Souls” trail run. Registration
              8:15 a.m. if minimum numbers are met, 9:00 a.m. start.{" "}
              <TextLink href="https://www.soultosouloutreach.org/events-1">
                Event page
              </TextLink>
              .
            </li>
            <li>
              Through November 1 — GriefShare at Pursuit Rock Springs Campus, 3:00–5:00
              p.m. The series is listed as August 16–November 1. Registration
              required.
            </li>
            <li>
              November 3 — Asbury school shopping day, 9:00 a.m.–2:30 p.m.
            </li>
            <li>November 3 — Backpacks packing, 9 a.m.</li>
            <li>
              November 3 — Bridge of Hearts, 9:30–11:30 a.m., 124 Talbert Pointe
              Dr., Mooresville.
            </li>
            <li>
              November 4 — Chicken Pickin at the Denver United Methodist Family
              Life Center.
            </li>
            <li>
              November 7 — Asbury Sunrise shopping day, 9:00 a.m.–2:30 p.m.
            </li>
            <li>
              November 7 — Hesed House Fashion Show, 6:00–9:00 p.m., James Warren
              Citizens Center. Tickets $20.{" "}
              <TextLink href="mailto:hesedhousedirector@gmail.com">
                hesedhousedirector@gmail.com
              </TextLink>
              .
            </li>
            <li>
              Until November 8 — Divorce Care at Pursuit’s main campus, 3:00–5:00
              p.m. Registration required.
            </li>
            <li>
              November 14 — McAdams Free Clinic Community Care Day, 9:00 a.m.–1:00
              p.m., on the East Lincoln Christian Ministry campus. Contact Gail. No
              last name or email is listed.
            </li>
          </ul>
          <p>
            The October issue says United Way of Lincoln County’s October emergency
            assistance funds were already used. Call 211 or the United Way office.
          </p>
        </section>
      </div>
    </main>
  );
}
