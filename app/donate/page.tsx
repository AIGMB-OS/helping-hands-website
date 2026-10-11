import { ButtonLink, TextLink } from "@/components/button-link";
import { Note } from "@/components/note";
import { PageIntro } from "@/components/page-intro";
import { FittedPhoto } from "@/components/remote-image";
import {
  church,
  donateFormUrl,
  donationsSentence,
  hhEmail,
  taxLine,
} from "@/lib/facts";
import { supportProgram } from "@/lib/programs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Helping Hands through the Support Helping Hands form, Tax ID 39-4766413. This is not the church offering.",
};

export default function DonatePage() {
  return (
    <main>
      <PageIntro
        eyebrow="Donate"
        title="Support Helping Hands"
        lede={
          <>
            {taxLine} {donationsSentence} The button below opens the form titled
            “Support Helping Hands!” Amounts and fields are on that form, not on
            this page.
          </>
        }
      />
      <div className="mx-auto max-w-3xl space-y-10 px-5 py-14">
        <FittedPhoto
          src={supportProgram.detailImage}
          alt="Support Helping Hands"
          className="max-h-56"
        />
        <ButtonLink href={donateFormUrl} className="w-fit">
          Support Helping Hands!
        </ButtonLink>
        <Note title="Not the church offering">
          <p>
            Gifts to the Denver United Methodist Church offering are a different
            path. This page does not use that path. Use the Support Helping Hands!
            form above.
          </p>
        </Note>

        <section className="space-y-4">
          <h2 className="text-4xl text-ink">David Garmon half-triathlon</h2>
          <p>
            “At age 74, David Garmon is taking on another half-triathlon — this
            time to raise funds for the Ministries of Helping Hands.” That
            description does not include the race date, a match amount, or a
            sponsorship goal.
          </p>
          <Note title="October 2026 newsletter">
            <p>
              The newsletter calls it “Oct 24 David Moves — Edisto Island
              Half-Triathlon, Helping Hands Fundraiser,” on October 24, 2026, and
              says all donations to sponsor him will be used to help local families
              and will be matched up to $10,000.
            </p>
            <p>
              The donation form’s description ends at “Every dollar donated will be
              matched up to $10,”. The October newsletter says the match is up to
              $10,000. No personal email for David Garmon is listed.
            </p>
          </Note>
        </section>

        <section className="space-y-4">
          <h2 className="text-4xl text-ink">In-kind gifts</h2>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              Furnish a Future: mattresses, box springs, beds, bedding, and pillows
              in queen, full, or twin. No king sizes. Microwaves, toaster ovens,
              pots and pans, table service and tableware. Living room and bedroom
              furniture, especially sofas. Washer/dryers and               refrigerators. Please do not give large furniture, window treatments,
              pictures, books, decorative items, or king-size beds or linens. Email{" "}
              <TextLink href="mailto:faf@denverumc.org">faf@denverumc.org</TextLink>{" "}
              with a picture if possible, or call{" "}
              <TextLink href="tel:+17042692875">(704) 269-2875</TextLink>.
            </li>
            <li>
              Little Pantry: non-perishable food. Darlene Melton,{" "}
              <TextLink href="mailto:marvinjmelton@bellsouth.net">
                marvinjmelton@bellsouth.net
              </TextLink>
              .
            </li>
            <li>
              Backpacks for Kids:{" "}
              <TextLink href="https://www.amazon.com/hz/wishlist/ls/3T04DX8AF8DQ8/ref=cm_go_nav_hz">
                Amazon wishlist
              </TextLink>
              .
            </li>
            <li>
              Amy&apos;s House wish list:{" "}
              <TextLink href="https://www.amazon.com/registries/gl/guest-view/G5BP0SOVFZ75">
                Amazon registry
              </TextLink>
              .
            </li>
            <li>
              Lakewood TV: sponsor service for a room at{" "}
              <TextLink href={`mailto:${hhEmail}`}>{hhEmail}</TextLink>.
            </li>
            <li>Prayer shawls made by volunteers.</li>
            <li>
              First Thursday Lunch desserts. Wendi Sweet,{" "}
              <TextLink href="mailto:wendi.sweet@denverumc.org">
                wendi.sweet@denverumc.org
              </TextLink>
              .
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-4xl text-ink">October newsletter in-kind list</h2>
          <p>
            These items are from the October 2026 Hand Up. Most of them may be
            brought to Denver United Methodist Church Monday–Thursday, 10:00
            a.m.–3:00 p.m. Those are the church’s office hours, not a separate
            Helping Hands office schedule.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Asbury: funds for new socks and underwear.</li>
            <li>
              Backpacks: jelly in a plastic jar or bottle, vegetables, small
              cereals, grits and oatmeal packets, applesauce cups or squeeze, fruit
              cups, snacks.
            </li>
            <li>
              Fostering Grace: Walmart and fast-food gift cards; diapers in sizes
              newborn, 1, and 2; a Denver-area storage unit.
            </li>
            <li>Hesed House: snacks for check-in.</li>
            <li>Hills Chapel: shelf-stable food.</li>
            <li>
              Bridge of Love: long-grain white rice, Pueblo Lindo dry black beans,
              instant corn masa, corn and flour tortillas, and canned chili and
              black beans.
            </li>
            <li>Harbour Health: holiday sponsorship for active clients. More to come.</li>
            <li>
              Matthew 25 Ministry: clean pill bottles with no labels, brought to the
              next Helping Hands meeting.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-4xl text-ink">Fundraisers</h2>
          <h3 className="text-2xl text-ink">First Thursday Lunch</h3>
          <p>
            September–May. A complete meal with dessert and a drink is $10. 8x8
            pies are $12. Proceeds help local children and their families. Birdies
            is funded through this lunch. Pie orders: call the church
            office at{" "}
            <TextLink href={church.phoneHref}>{church.phone}</TextLink> or email
            Beth Bynum,{" "}
            <TextLink href="mailto:receptionist@denverumc.org">
              receptionist@denverumc.org
            </TextLink>
            .
          </p>
          <h3 className="text-2xl text-ink">Charlie Blackburn Memorial Golf Tournament</h3>
          <p>
            Annual. The 2026 tournament was April 27. The next date is Monday,
            April 26, 2027, 11:00 a.m.–6:00 p.m. Save the date. There is no course,
            fee, or registration link.{" "}
            <TextLink href="https://www.facebook.com/share/p/1GPqkkokeb/">
              Pictures from the 2026 tournament
            </TextLink>
            .
          </p>
          <h3 className="text-2xl text-ink">Hesed House Fashion Show</h3>
          <p>
            From the October newsletter: November 7, 2026, 6:00–9:00 p.m., James
            Warren Citizens Center. Tickets $20.{" "}
            <TextLink href="mailto:hesedhousedirector@gmail.com">
              hesedhousedirector@gmail.com
            </TextLink>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
