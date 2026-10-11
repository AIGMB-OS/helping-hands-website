import { ButtonLink, TextLink } from "@/components/button-link";
import { ProgramBlock } from "@/components/program-block";
import { PageIntro } from "@/components/page-intro";
import { FittedPhoto } from "@/components/remote-image";
import { donateFormUrl, handUpLatest } from "@/lib/facts";
import { handUpCard, programGroups, programs, supportProgram } from "@/lib/programs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Helping Hands ministries, partner listings, and fundraisers.",
};

export default function ProgramsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Programs"
        title="Ministries, partners, and fundraisers"
        lede="Each ministry includes its description, contact, schedule, and links. Partners are labeled. Where two details disagree, both are shown."
      />
      <div className="mx-auto max-w-6xl px-5">
        <nav aria-label="Program groups" className="flex flex-wrap gap-2 py-6">
          {programGroups.map((group) => (
            <TextLink key={group.id} href={`#group-${group.id}`}>
              {group.title}
            </TextLink>
          ))}
        </nav>

        <section id="support-helping-hands" className="scroll-mt-28 border-t border-border py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_1fr]">
            <FittedPhoto
              src={supportProgram.detailImage}
              alt={supportProgram.name}
              className="max-h-48"
            />
            <div>
              <h2 className="text-3xl text-ink md:text-4xl">{supportProgram.name}</h2>
              <p className="mt-4">{supportProgram.sentence}</p>
              <p className="mt-4">
                Donations use the form titled “Support Helping Hands!” All donations
                directly support the mission of Helping Hands.
              </p>
              <ButtonLink href={donateFormUrl} className="mt-6 w-fit">
                Support Helping Hands!
              </ButtonLink>
            </div>
          </div>
        </section>

        <section id="hand-up-newsletter" className="scroll-mt-28 border-t border-border py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_1fr]">
            <FittedPhoto
              src={handUpCard.detailImage}
              alt="The Hand Up"
              className="max-h-24"
            />
            <div>
              <h2 className="text-3xl text-ink md:text-4xl">{handUpCard.name}</h2>
              <p className="mt-4">{handUpCard.sentence}</p>
              <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                <TextLink href={handUpLatest.href}>Read the latest issue</TextLink>
                <TextLink href="/about#hand-up">The Hand Up archive</TextLink>
              </p>
            </div>
          </div>
        </section>

        {programGroups.map((group) => (
          <section key={group.id} id={`group-${group.id}`} className="scroll-mt-28 py-6">
            <h2 className="pt-8 text-4xl text-ink md:text-5xl">{group.title}</h2>
            <p className="mt-3 max-w-3xl">{group.intro}</p>
            {programs
              .filter((program) => program.group === group.id)
              .map((program) => (
                <ProgramBlock key={program.slug} program={program} />
              ))}
          </section>
        ))}
      </div>
    </main>
  );
}
