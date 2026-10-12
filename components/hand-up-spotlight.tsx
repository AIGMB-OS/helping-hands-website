import { ButtonLink } from "@/components/button-link";
import { FittedPhoto } from "@/components/remote-image";
import { handUpLatest } from "@/lib/facts";
import { handUpCard } from "@/lib/programs";

export function HandUpSpotlight({
  id = "hand-up",
  archiveHref = "/about#hand-up",
}: {
  id?: string;
  archiveHref?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:gap-12">
        <FittedPhoto
          src={handUpCard.image}
          alt="The Hand Up"
          className="mx-auto w-full max-w-xs"
        />
        <div>
          <p className="eyebrow">Newsletter</p>
          <h2 id={`${id}-heading`} className="mt-2 section-title">
            The Hand Up
          </h2>
          <p className="mt-3 max-w-xl text-lg leading-relaxed">
            The Hand Up is the Helping Hands newsletter. The latest issue is October
            2026.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={handUpLatest.href}>Read Latest Issue</ButtonLink>
            <ButtonLink href={archiveHref} variant="outline">
              Browse Archive
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
