import { ButtonLink } from "@/components/button-link";
import { DavidFundraiserFeature } from "@/components/david-fundraiser-feature";
import { HomeHero } from "@/components/hero-photo";
import { ImageBanner } from "@/components/image-banner";
import { davidFundraiserPath } from "@/lib/david-garmon";
import { handUpLatest, missionParagraph } from "@/lib/facts";
import { upcomingEvents } from "@/lib/upcoming-events";
import {
  Backpack,
  CalendarDays,
  Gift,
  Heart,
  MessageCircle,
  Shirt,
  Sofa,
  Utensils,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helping Hands",
  description: missionParagraph,
};

const programs = [
  {
    name: "The Little Pantry",
    text: "Food in the church parking lot, no questions asked.",
    href: "/programs/the-little-pantry",
    icon: Utensils,
  },
  {
    name: "Backpacks for Kids",
    text: "Weekend food for children at local schools.",
    href: "/programs/backpacks-for-kids",
    icon: Backpack,
  },
  {
    name: "Asbury Resource Center",
    text: "Free clothing for children in Lincoln County.",
    href: "/programs/asbury-resource-center",
    icon: Shirt,
  },
  {
    name: "Furnish a Future",
    text: "Furniture and household goods for neighbors starting over.",
    href: "/programs/furnish-a-future",
    icon: Sofa,
  },
];

const involved = [
  {
    kicker: "Volunteer",
    text: "Give your time and make a difference in someone's life.",
    action: "Get Involved",
    href: "/volunteer",
    icon: Heart,
  },
  {
    kicker: "Join Us",
    text: "Attend a first-Monday meeting and discover ways to serve.",
    action: "Other Ways to Join Us",
    href: "/ways-to-join-us",
    icon: CalendarDays,
  },
  {
    kicker: "Give to Helping Hands",
    text: "Your generosity helps support the mission and work of Helping Hands.",
    action: "Support Helping Hands",
    href: "/donate",
    icon: Gift,
  },
];

export default function HomePage() {
  return (
    <main>
      <HomeHero />

      <section id="upcoming" aria-labelledby="upcoming-heading" className="bg-blue">
        <div className="wrap section">
          <h2 id="upcoming-heading" className="section-title">
            Upcoming Events
          </h2>
          <div className="mt-6">
            <DavidFundraiserFeature actionHref={davidFundraiserPath} heading="h3" />
          </div>
          <ul className="mt-4 grid items-stretch gap-4 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <li key={event.href} className="soft-card">
                <p className="label">{event.when}</p>
                <h3 className="card-title mt-2">{event.title}</h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed">{event.detail}</p>
                <ButtonLink href={event.href} variant="outline" className="mt-4 w-fit">
                  {event.action}
                </ButtonLink>
              </li>
            ))}
          </ul>
          <ButtonLink href="/upcoming-events" variant="dark" className="mt-6 w-fit">
            View All Upcoming Events →
          </ButtonLink>
        </div>
      </section>

      <section id="programs" aria-labelledby="need-heading">
        <div className="wrap section">
          <h2 id="need-heading" className="section-title max-w-3xl">
            Are You or a Neighbor in Need? We&apos;re Here to Help.
          </h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/get-help-photo.png"
            alt="A volunteer hands a neighbor a box of groceries while others pack food nearby."
            className="media mt-5 rounded-lg"
          />
          <div className="mt-4 grid grid-cols-1 items-stretch gap-3 md:grid-cols-2">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <article key={program.href} className="soft-card">
                  <span className="icon-chip">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="card-title mt-3">{program.name}</h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed">{program.text}</p>
                  <ButtonLink href={program.href} variant="outline" className="mt-4 w-fit">
                    Learn More
                  </ButtonLink>
                </article>
              );
            })}
          </div>
          <div className="banner mt-4">
            <div>
              <h3 className="section-title">Need More Assistance?</h3>
              <p className="mt-1 leading-relaxed">
                Explore all the ways Helping Hands can help.
              </p>
            </div>
            <ButtonLink href="/get-help" variant="dark" className="w-fit shrink-0">
              All Ways to Get Help
            </ButtonLink>
          </div>
        </div>
      </section>

      <ImageBanner
        src="/images/the-hand-up.png"
        alt="The Hand Up"
        hotspots={[
          {
            href: handUpLatest.href,
            label: "Read Latest Issue",
            left: "4.77%",
            top: "68.96%",
            width: "19.23%",
            height: "13.23%",
          },
          {
            href: "/about#hand-up",
            label: "Browse Archive",
            left: "24.04%",
            top: "68.70%",
            width: "17.45%",
            height: "13.99%",
          },
        ]}
      />

      <section id="involved" aria-labelledby="involved-heading" className="place-section">
        <div className="wrap section">
          <h2 id="involved-heading" className="section-title max-w-xl">
            There&apos;s a Place for You at Helping Hands
          </h2>
          <div className="place-grid">
            {involved.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.href} className="place-card">
                  <span className="icon-chip">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="place-title">{card.kicker}</h3>
                  <p>{card.text}</p>
                  <ButtonLink href={card.href} variant="dark">
                    <Icon className="size-4" aria-hidden="true" />
                    {card.action}
                  </ButtonLink>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="spotlight-heading">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/community-spotlight-photo.png"
          alt="A volunteer handing a backpack to a child at an outdoor giveaway."
          className="media"
        />
        <div className="spotlight-band">
          <div className="wrap section">
            <div className="spotlight-grid">
              <div>
                <p className="label">Community Spotlight</p>
                <h2 id="spotlight-heading" className="spotlight-title mt-3">
                  Know Someone We Should Spotlight?
                </h2>
              </div>
              <div>
                <p className="spotlight-copy">
                  Is there a person in the community you think we should spotlight?{" "}
                  <strong>Someone helping others</strong> or a story you want to share?{" "}
                  <strong>We&apos;d love to hear about it.</strong>
                </p>
                <ButtonLink href="/community-spotlight" variant="dark" className="mt-6 w-fit">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Share a Story
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
