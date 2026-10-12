import { ButtonLink, TextLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Ways to Join Us",
  description:
    "The Helping Hands meeting is the first Monday of each month, 10:30 a.m. to noon, in the Chapel.",
};

export default function WaysToJoinUsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Join Us"
        title="Other ways to join us"
        lede="You are invited to hear the many ways God is moving in this community and how you can help. If you are interested in a specific ministry, please speak with the ministry lead following the meeting."
      />
      <div className="mx-auto max-w-6xl [&>*]:max-w-3xl space-y-6 px-5 py-12">
        <h2 className="section-title">First-Monday meeting</h2>
        <p>
          Helping Hands Meeting: first Monday of each month, 10:30 a.m.–12:00 p.m.,
          Chapel. The next meeting is Monday, November 2, 2026.{" "}
          <TextLink href="https://www.denverumc.org/events/helping-hands-meeting/2026-11-02.ics">
            Save to your calendar
          </TextLink>
          .
        </p>
        <ButtonLink href="/volunteer" variant="outline" className="w-fit">
          Volunteer
        </ButtonLink>
      </div>
    </main>
  );
}
