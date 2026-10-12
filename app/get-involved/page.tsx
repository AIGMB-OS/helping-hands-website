import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, come to the first-Monday meeting, join a ministry, or support Helping Hands.",
};

const ways = [
  {
    title: "Volunteering",
    text: "Give your time and make a difference in someone's life.",
    action: "Get Involved",
    href: "/volunteer",
  },
  {
    title: "Meetings",
    text: "The Helping Hands meeting is the first Monday of each month, 10:30 a.m.–12:00 p.m., in the Chapel.",
    action: "Other Ways to Join Us",
    href: "/ways-to-join-us",
  },
  {
    title: "Community ministries",
    text: "Food, children’s clothing, furniture, and the other ministries are listed with their contacts.",
    action: "Programs",
    href: "/programs",
  },
  {
    title: "Other ways to participate",
    text: "Start with the monthly meeting, then talk with a ministry lead.",
    action: "Ways to join",
    href: "/ways-to-join-us",
  },
  {
    title: "Giving",
    text: "Your generosity helps support the mission and work of Helping Hands.",
    action: "Support Helping Hands",
    href: "/donate",
  },
];

export default function GetInvolvedPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Get Involved"
        title="There's a place for you at Helping Hands"
        lede="Volunteer, come to a meeting, join a ministry, or give."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-12 md:grid-cols-2">
        {ways.map((way) => (
          <article
            key={way.title}
            className="soft-card"
          >
            <h2 className="card-title">{way.title}</h2>
            <p className="mt-3 flex-1 leading-relaxed">{way.text}</p>
            <ButtonLink href={way.href} className="mt-6 w-fit">
              {way.action}
            </ButtonLink>
          </article>
        ))}
      </div>
    </main>
  );
}
