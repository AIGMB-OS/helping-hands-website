import { ButtonLink } from "@/components/button-link";
import {
  davidFundraiserAlt,
  davidFundraiserDescription,
  davidFundraiserImage,
  davidFundraiserMatch,
  davidFundraiserTitle,
} from "@/lib/david-garmon";

export function DavidFundraiserFeature({
  actionHref,
  heading = "h2",
}: {
  actionHref: string;
  heading?: "h1" | "h2" | "h3";
}) {
  const Title = heading;

  return (
    <article className="soft-card overflow-hidden p-0 hover:bg-white">
      <div className="md:grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-center">
        {/* Original fundraiser graphic. Text below is HTML, not added to the file. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={davidFundraiserImage} alt={davidFundraiserAlt} className="media" />
        <div className="p-5 md:p-6">
          <p className="label">Support Helping Hands</p>
          <Title className="section-title mt-2">{davidFundraiserTitle}</Title>
          <p className="mt-3 text-lg font-semibold leading-snug text-ink">
            {davidFundraiserDescription}
          </p>
          <p className="match mt-4">{davidFundraiserMatch}</p>
          <ButtonLink href={actionHref} className="mt-5 w-fit">
            Support David&apos;s Fundraiser
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
