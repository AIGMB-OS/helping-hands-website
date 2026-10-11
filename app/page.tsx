import { ButtonLink, TextLink } from "@/components/button-link";
import { HomeHero } from "@/components/hero-photo";
import { FittedPhoto } from "@/components/remote-image";
import { Badge } from "@/components/ui/badge";
import {
  church,
  donateFormUrl,
  donationsSentence,
  handUpArchive,
  handUpLatest,
  hhEmail,
  missionParagraph,
  taxLine,
} from "@/lib/facts";
import { programs } from "@/lib/programs";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Helping Hands",
  description: missionParagraph,
};

const helpPointers = [
  {
    title: "Backpacks for Kids",
    text: "Weekend, break, and holiday food for children at Rock Springs Elementary, North Lincoln Middle and High, and Lincoln Charter. Volunteers pack and deliver it. This is not a public walk-up pantry.",
    href: "/programs#backpacks",
  },
  {
    title: "Asbury Resource Center",
    text: "Free, like-new clothing, socks, underwear, and shoes for any child in Lincoln County needing these items. Most are referred through school counselors and social workers or Sunrise Resource outreach. Hours and an address are not listed.",
    href: "/programs#asbury",
  },
  {
    title: "Furnish a Future",
    text: "Donated furniture and household goods for neighbors leaving domestic abuse, homelessness, or other situations with little or no furniture. Email a photo to faf@denverumc.org or call (704) 269-2875. There is no public request form.",
    href: "/programs#furnish-a-future",
  },
  {
    title: "East Lincoln Christian Ministry",
    text: "A partner ministry: financial assistance, a grocery cart of food and toiletries, and clothing. 4278 Catawba Burris Rd., Denver, NC. (704) 483-4415. Tuesday, Thursday, and Saturday, 9:00 to noon.",
    href: "/programs#elcm",
  },
];

export default function HomePage() {
  return (
    <main>
      <HomeHero />

      <section id="paths" aria-labelledby="paths-heading" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 id="paths-heading" className="text-3xl text-ink md:text-4xl">
            Three ways to take part
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
            <div className="md:pr-8">
              <p className="eyebrow">01</p>
              <h3 className="mt-2 font-heading text-3xl text-ink">Get Help</h3>
              <p className="mt-3">
                Food in the church parking lot, plus clothing, furniture, and
                partner hours. There is no public get-help form.
              </p>
              <ButtonLink href="/get-help" className="mt-5 w-fit">
                See what is available
              </ButtonLink>
            </div>
            <div className="md:px-8">
              <p className="eyebrow">02</p>
              <h3 className="mt-2 font-heading text-3xl text-ink">Volunteer</h3>
              <p className="mt-3">
                Come to the first-Monday meeting and speak with a ministry lead
                afterward. There is no single volunteer application.
              </p>
              <ButtonLink href="/volunteer" variant="outline" className="mt-5 w-fit">
                Volunteer directory
              </ButtonLink>
            </div>
            <div className="md:pl-8">
              <p className="eyebrow">03</p>
              <h3 className="mt-2 font-heading text-3xl text-ink">Donate</h3>
              <p className="mt-3">{donationsSentence}</p>
              <ButtonLink href={donateFormUrl} className="mt-5 w-fit">
                Support Helping Hands!
              </ButtonLink>
              <p className="mt-4 text-sm">
                <Link href="/donate" className="font-semibold text-pine underline decoration-teal decoration-2 underline-offset-[0.2em]">
                  In-kind gifts and fundraisers
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="help-now" aria-labelledby="help-heading" className="bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow">Available now</p>
          <h2 id="help-heading" className="mt-3 text-3xl text-ink md:text-4xl">
            Help available now
          </h2>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <h3 className="font-heading text-3xl text-ink">The Little Pantry</h3>
              <p className="mt-4 text-lg leading-relaxed">
                The Little Pantry is located in DUMC&apos;s parking lot and provides
                food to anyone who needs it, no questions asked. Volunteers fill it
                daily with non-perishable food.
              </p>
              <p className="mt-4">
                The parking lot is at {church.name}, {church.street}. That address
                is the church. Hours beyond daily filling are not listed.
              </p>
              <p className="mt-4">
                <TextLink href="mailto:marvinjmelton@bellsouth.net">
                  Darlene Melton, marvinjmelton@bellsouth.net
                </TextLink>
              </p>
              <ButtonLink href="/get-help" variant="outline" className="mt-6 w-fit">
                See all help
              </ButtonLink>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {helpPointers.map((item) => (
                <li key={item.title} className="py-5">
                  <h3 className="font-heading text-2xl text-ink">{item.title}</h3>
                  <p className="mt-2">{item.text}</p>
                  <p className="mt-3">
                    <TextLink href={item.href}>View more</TextLink>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="ministries" aria-labelledby="ministries-heading" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow">Ministries</p>
          <h2 id="ministries-heading" className="mt-3 max-w-3xl text-3xl text-ink md:text-4xl">
            Ministries and partners
          </h2>
          <p className="mt-4 max-w-2xl">
            Each listing uses a sentence from that ministry. Entries marked Partner,
            Partners, Church network, or Sunrise residents are not Helping Hands
            offices.
          </p>
          <div className="mt-10 grid gap-x-16 lg:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.slug}
                className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-start gap-4 border-t border-border py-5"
              >
                <FittedPhoto
                  src={program.image}
                  alt={program.name}
                  className="max-h-16 w-full"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-xl text-ink">{program.name}</h3>
                    {program.badge ? (
                      <Badge variant="secondary">{program.badge}</Badge>
                    ) : null}
                  </div>
                  <p className="mt-2">{program.sentence}</p>
                  <p className="mt-3">
                    <TextLink href={`/programs#${program.slug}`}>View more</TextLink>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="upcoming" aria-labelledby="upcoming-heading" className="border-t border-border bg-[#e5f1ef]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow">Coming up</p>
          <h2 id="upcoming-heading" className="mt-3 text-3xl text-ink md:text-4xl">
            Upcoming
          </h2>
          <div className="mt-8 grid md:grid-cols-2 md:gap-x-16">
            <article className="border-t border-pine/20 py-6">
              <p className="eyebrow">Monday, November 2, 2026</p>
              <h3 className="mt-2 font-heading text-3xl">Helping Hands Meeting</h3>
              <p className="mt-3">
                10:30 a.m.–12:00 p.m. in the Chapel. First Monday of each month.
                You are invited to hear the many ways God is moving in this
                community and how you can help. If you are interested in a
                specific ministry, please speak with the ministry lead following
                the meeting.
              </p>
              <p className="mt-4">
                <TextLink href="https://www.denverumc.org/events/helping-hands-meeting/2026-11-02.ics">
                  Save to your calendar
                </TextLink>
              </p>
            </article>
            <article className="border-t border-pine/20 py-6">
              <p className="eyebrow">Thursday, November 5, 2026</p>
              <h3 className="mt-2 font-heading text-3xl">First Thursday Lunch</h3>
              <p className="mt-3">
                11:00 a.m.–1:00 p.m. First Thursday, September through May. A
                complete meal with dessert and a drink is $10. The published
                location is FLC.
              </p>
              <p className="mt-4">
                <TextLink href="https://www.denverumc.org/events/first-thursday-lunch/2026-11-05.ics">
                  Save to your calendar
                </TextLink>
              </p>
            </article>
            <article className="border-t border-pine/20 py-6">
              <p className="eyebrow">Monthly</p>
              <h3 className="mt-2 font-heading text-3xl">Prayer Shawl Ministry</h3>
              <p className="mt-3">
                Meets monthly in the library, 4:00–6:00 p.m. The next prayer-shawl
                date after October 18, 2026 is not listed.
              </p>
              <p className="mt-4">
                <TextLink href="/events#prayer-shawl">Meeting details</TextLink>
              </p>
            </article>
            <article className="border-t border-pine/20 py-6">
              <p className="eyebrow">Monday, April 26, 2027</p>
              <h3 className="mt-2 font-heading text-3xl">Golf tournament</h3>
              <p className="mt-3">
                Charlie Blackburn Memorial Golf Tournament, 11:00 a.m.–6:00 p.m.
                Save the date. There is no course, fee, or registration link.
              </p>
              <p className="mt-4">
                <TextLink href="/events#golf">Save the date</TextLink>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="hand-up" aria-labelledby="handup-heading" className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center md:py-16">
          <FittedPhoto
            src="https://dq5pwpg1q8ru0.cloudfront.net/2025/10/29/12/14/09/57ffa8ed-cc06-4b3d-a921-63461b3a3d7d/the-Hand-up.png"
            alt="The Hand Up"
            className="max-h-24 sm:max-w-56"
          />
          <div>
            <p className="eyebrow">Newsletter</p>
            <h2 id="handup-heading" className="mt-2 text-3xl text-ink">
              The Hand Up
            </h2>
            <p className="mt-2 max-w-2xl">
              The latest issue is October 2026. Earlier issues are in the archive.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink href={handUpLatest.href}>Read the latest issue</ButtonLink>
              <ButtonLink href="/about#hand-up" variant="outline">
                Archive ({handUpArchive.length} files)
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="trust" aria-labelledby="trust-heading" className="bg-ink text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 id="trust-heading" className="text-3xl md:text-4xl">
            {taxLine}
          </h2>
          <p className="mt-4 max-w-2xl text-lg">{donationsSentence}</p>
          <ButtonLink href={donateFormUrl} variant="secondary" className="mt-6 w-fit">
            Support Helping Hands!
          </ButtonLink>
        </div>
      </section>

      <section id="visit" aria-labelledby="visit-heading" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 id="visit-heading" className="text-3xl text-ink md:text-4xl">
          Visit and write
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-border">
          <div className="md:pr-12">
            <h3 className="font-heading text-3xl text-ink">Helping Hands</h3>
            <p className="mt-4">
              <TextLink href={`mailto:${hhEmail}`}>{hhEmail}</TextLink>
            </p>
            <p className="mt-4">
              No Helping Hands phone number, street address, or office hours are
              listed.
            </p>
          </div>
          <div className="md:pl-12">
            <h3 className="font-heading text-3xl text-ink">{church.name}</h3>
            <p className="mt-4">
              {church.street}
              <br />
              <TextLink href={church.phoneHref}>{church.phone}</TextLink>
              <br />
              {church.hours}
            </p>
            <p className="mt-4">
              <TextLink href={church.map}>Map</TextLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
