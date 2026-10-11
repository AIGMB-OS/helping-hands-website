import { TextLink } from "@/components/button-link";
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
      <div className="mx-auto max-w-3xl space-y-8 px-5 py-14">
        <p>
          DUMC is Denver United Methodist Church in Denver, North Carolina, where
          Helping Hands was founded. Partner names are on the{" "}
          <TextLink href="/programs">Programs</TextLink> page.
        </p>
        <p>{taxLine}</p>
        <p>
          The ministry name is Helping Hands. The October 2026 newsletter calls
          itself the “OFFICIAL NEWSLETTER OF HELPING HANDS COMMUNITY SERVICE
          GROUP.” A legal name, founding year, board, and staff list are not
          listed.
        </p>
        <p>
          Ministry leads’ contact details are listed. A staff list and a board are
          not.
        </p>
        <p>
          Some partners are independent nonprofits or church partnerships. They
          are labeled on <TextLink href="/programs">Programs</TextLink>.
        </p>

        <section id="hand-up" className="scroll-mt-28 space-y-4 border-t border-border pt-8">
          <h2 className="text-4xl text-ink">The Hand Up</h2>
          <p>
            Issues are PDF downloads, newest first. The latest is October 2026.
            Earlier issues are linked below.
          </p>
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
