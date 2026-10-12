import { TextLink } from "@/components/button-link";
import { HandUpSpotlight } from "@/components/hand-up-spotlight";
import { PageIntro } from "@/components/page-intro";
import { handUpArchive, missionParagraph, taxLine } from "@/lib/facts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Helping Hands is an outreach ministry founded at Denver United Methodist Church, serving in and around Lincoln County.",
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About"
        title="An outreach ministry in Lincoln County"
        lede={missionParagraph}
      />
      <div className="mx-auto max-w-6xl [&>*]:max-w-3xl space-y-8 px-5 py-12">
        <p>
          DUMC is Denver United Methodist Church in Denver, North Carolina, where
          Helping Hands was founded. Partner names are on the{" "}
          <TextLink href="/programs">Programs</TextLink> page.
        </p>
        <p>{taxLine}</p>
        <p>
          The ministry name is Helping Hands. The October 2026 newsletter calls
          itself the official newsletter of Helping Hands Community Service Group.
        </p>
        <p>
          Some partners are independent nonprofits or church partnerships. They
          are labeled on <TextLink href="/programs">Programs</TextLink>.
        </p>

        <section className="scroll-mt-28 space-y-8 border-t border-border pt-8">
          <HandUpSpotlight archiveHref="#hand-up-list" />
          <h2 id="hand-up-list" className="scroll-mt-28 card-title">
            All issues
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            {handUpArchive.map((issue) => (
              <li key={issue.href}>
                <TextLink href={issue.href}>{issue.label}</TextLink>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
