import { TextLink } from "@/components/button-link";
import { RequestAssistanceForm } from "@/components/request-assistance-form";
import { PageIntro } from "@/components/page-intro";
import { church } from "@/lib/facts";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Get Help",
  description:
    "Food, clothing, furniture, and other community resources from Helping Hands and partner organizations.",
};

export default function GetHelpPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Get Help"
        title="We're here to help"
        lede="Food, children’s clothing, and furniture are available through Helping Hands. Start with the ministry that fits, use the contact listed there, or send a request at the bottom of this page."
      />
      <div className="mx-auto max-w-6xl [&>*]:max-w-3xl space-y-10 px-5 py-12">
        <section id="food" aria-labelledby="food-heading" className="scroll-mt-28 space-y-8">
          <h2 id="food-heading" className="section-title">
            Food Assistance
          </h2>
          <HelpItem title="The Little Pantry" href="/programs/the-little-pantry">
            <p>
              The Little Pantry is in the parking lot at {church.name}, {church.street},
              and provides food to anyone who needs it, no questions asked. Volunteers
              fill it daily with non-perishable food.
            </p>
            <p>
              Darlene Melton,{" "}
              <TextLink href="mailto:marvinjmelton@bellsouth.net">
                marvinjmelton@bellsouth.net
              </TextLink>
              .
            </p>
          </HelpItem>
          <HelpItem title="Backpacks for Kids" href="/programs/backpacks-for-kids">
            <p>
              Backpacks for Kids provides food for children at Rock Springs Elementary,
              North Lincoln Middle and High, and Lincoln Charter to have on weekends,
              school breaks, and holidays. Volunteers pack and deliver food to the
              schools.
            </p>
            <p>
              Julie Doss,{" "}
              <TextLink href="mailto:julieadoss@gmail.com">julieadoss@gmail.com</TextLink>
              . Jamie Sidler,{" "}
              <TextLink href="mailto:jsidler07@hotmail.com">jsidler07@hotmail.com</TextLink>
              .
            </p>
          </HelpItem>
          <HelpItem title="Community Garden" href="/programs#community-garden">
            <p>
              The Community Garden provides free fresh produce to struggling neighbors.
              Produce goes to food-insecure families through Backpacks for Kids, the
              Little Pantry, and East Lincoln Christian Ministries.
            </p>
            <p>
              Carol,{" "}
              <TextLink href="mailto:outreach@denverumc.org">outreach@denverumc.org</TextLink>
              .
            </p>
          </HelpItem>
          <HelpItem
            title="East Lincoln Christian Ministry"
            href="/programs#elcm"
            badge="Partner"
          >
            <p>
              ELCM provides financial assistance for neighbors experiencing an economic
              crisis, a grocery cart full of food and toiletries, and clothing for
              families who need them.
            </p>
            <p>
              4278 Catawba Burris Rd., Denver, NC.{" "}
              <TextLink href="tel:+17044834415">(704) 483-4415</TextLink>. Tuesday,
              Thursday, and Saturday, 9:00 to noon.
            </p>
            <p>
              The October 2026 newsletter says ELCM is accepting Thanksgiving donations
              of turkeys and hams. Charlie Cicio,{" "}
              <TextLink href="tel:+16314558989">631-455-8989</TextLink>.
            </p>
          </HelpItem>
          <HelpItem
            title="Sunrise Resource Center pantry"
            href="/programs#sunrise"
            badge="Sunrise residents"
          >
            <p>
              Sunrise Resource Center includes a supplemental food pantry and emergency
              assistance among programs offered to Sunrise residents.
            </p>
            <p>
              <TextLink href="mailto:momsandmunchkinsnc@gmail.com">
                momsandmunchkinsnc@gmail.com
              </TextLink>
            </p>
          </HelpItem>
        </section>

        <section id="clothing" aria-labelledby="clothing-heading" className="scroll-mt-28 space-y-8">
          <h2 id="clothing-heading" className="section-title">
            Clothing Assistance
          </h2>
          <HelpItem title="Asbury Resource Center" href="/programs/asbury-resource-center">
            <p>
              The Asbury Resource Center offers free, like-new clothing, socks,
              underwear, and shoes to any child in Lincoln County needing these items.
              Most are referred through school counselors and social workers or Sunrise
              Resource outreach.
            </p>
            <p>
              Leslie Barlowe,{" "}
              <TextLink href="mailto:lesliebarlowe@gmail.com">lesliebarlowe@gmail.com</TextLink>
              .
            </p>
          </HelpItem>
          <HelpItem
            title="Amy's Closet & Amy's House"
            href="/programs#amys"
            badge="Partner"
          >
            <p>
              Amy&apos;s Closet is a not-for-profit resale shop that benefits Amy&apos;s
              House (Lincoln County Coalition Against Domestic Violence). The October
              newsletter says it sells like-new clothing and is open Tuesday–Saturday
              starting at 10:00 a.m.
            </p>
            <p>
              1584B Hwy 16, Denver,{" "}
              <TextLink href="tel:+17044835515">(704) 483-5515</TextLink>. 849 S. Laurel
              St., Lincolnton,{" "}
              <TextLink href="tel:+17042403688">(704) 240-3688</TextLink>.
            </p>
            <p>
              <TextLink href="https://lincolncounty-cadv.org/">Amy&apos;s House</TextLink>
            </p>
          </HelpItem>
          <HelpItem title="East Lincoln Christian Ministry" href="#food" badge="Partner">
            <p>
              ELCM also provides clothing for families who need it, along with food and
              financial assistance. Hours and address are with{" "}
              <TextLink href="#food">Food Assistance</TextLink>.
            </p>
          </HelpItem>
        </section>

        <section id="furniture" aria-labelledby="furniture-heading" className="scroll-mt-28 space-y-8">
          <h2 id="furniture-heading" className="section-title">
            Furniture &amp; Household Items
          </h2>
          <HelpItem title="Furnish a Future" href="/programs/furnish-a-future">
            <p>
              Furnish a Future accepts donated furniture and household goods and gives
              them to neighbors leaving domestic abuse, homelessness, or other
              situations that have left them with little or no furniture.
            </p>
            <p>
              To offer an item, email{" "}
              <TextLink href="mailto:faf@denverumc.org">faf@denverumc.org</TextLink> and
              attach a picture if possible, or call{" "}
              <TextLink href="tel:+17042692875">(704) 269-2875</TextLink>.
            </p>
            <p>
              Needs include mattresses, box springs, beds, bedding, and pillows in
              queen, full, or twin (no king sizes); microwaves, toaster ovens, pots and
              pans, table service and tableware; living room and bedroom furniture,
              especially sofas; and washer/dryers and refrigerators.
            </p>
            <p>
              Please do not give large furniture, window treatments, pictures, books,
              decorative items, or king-size beds or linens.
            </p>
            <p>
              Sorting is Tuesdays 10:00 a.m.–noon with Dale Webster at{" "}
              <TextLink href="mailto:faf@denverumc.org">faf@denverumc.org</TextLink>.
              The October newsletter also says Mission Depot is open Tuesdays
              9:00–11:00 a.m., or by appointment.
            </p>
          </HelpItem>
        </section>

        <section id="other" aria-labelledby="other-heading" className="scroll-mt-28 space-y-8">
          <h2 id="other-heading" className="section-title">
            Other Community Resources
          </h2>
          <HelpItem title="Building & Repair Team" href="/programs#building-repair">
            <p>
              The Building &amp; Repair Team builds handicap ramps and decks, and makes
              certain repairs to unsafe homes for those who cannot afford the repairs
              themselves.
            </p>
            <p>
              Wally Mlynarski,{" "}
              <TextLink href="mailto:wzm.fish@gmail.com">wzm.fish@gmail.com</TextLink>.
            </p>
          </HelpItem>
          <HelpItem title="Birdies" href="/programs#birdies">
            <p>
              Birdies is a partnership between Helping Hands and Lincoln County Schools
              social workers. They provide lice kits, caps and gowns, and 100 filled
              Christmas stockings for middle and high school students chosen by those
              social workers.
            </p>
            <p>
              Carol Brown,{" "}
              <TextLink href="mailto:outreach@denverumc.org">outreach@denverumc.org</TextLink>
              . For Christmas stocking items, the October newsletter uses{" "}
              <TextLink href="mailto:carol.brown@denverumc.org">
                carol.brown@denverumc.org
              </TextLink>
              .
            </p>
          </HelpItem>
          <HelpItem title="Love Denver" href="/programs#love-denver">
            <p>
              Love Denver is a free back-to-school event with other churches: backpacks
              of school supplies, gently worn clothing, sports physicals, haircuts,
              groceries, games, crafts, lunch, and more.
            </p>
            <p>
              <TextLink href="https://www.lovedenver.net/#">lovedenver.net</TextLink>
            </p>
          </HelpItem>
          <HelpItem title="Moms & Munchkins" href="/programs#moms-munchkins" badge="Partner">
            <p>
              Moms &amp; Munchkins is a free, nonprofit parenting program, offering
              individualized and group engagements.
            </p>
            <p>
              <TextLink href="mailto:MomsandMunchkinsnc@gmail.com">
                MomsandMunchkinsnc@gmail.com
              </TextLink>
              .{" "}
              <TextLink href="https://www.facebook.com/profile.php?id=100057396941921">
                Facebook
              </TextLink>
              .
            </p>
          </HelpItem>
          <HelpItem title="School Mentoring" href="/programs#school-mentoring">
            <p>
              Rock Springs mentors meet weekly with children. Asbury Academy volunteers
              mentor, tutor, and teach job skills. Battleground Elementary focuses on
              reading below grade level.
            </p>
            <p>
              Mary Repko,{" "}
              <TextLink href="mailto:repkomary@gmail.com">repkomary@gmail.com</TextLink>
              . Christina Sutton,{" "}
              <TextLink href="mailto:christinasuttontransition@gmail.com">
                christinasuttontransition@gmail.com
              </TextLink>
              . Bob Smith,{" "}
              <TextLink href="mailto:bobs709356@gmail.com">bobs709356@gmail.com</TextLink>
              .
            </p>
          </HelpItem>
          <HelpItem title="Foster family partners" href="/programs#foster" badge="Partners">
            <p>
              Foster Family Ministry lists Lincoln County DSS, The Advocate Mission,
              Fostering Grace, the Child Advocacy Center, Sipe&apos;s Orchard Home, and
              Guardian ad Litem. Each organization has its own site.
            </p>
            <p>
              Amy Ramsey, Lincoln County DSS,{" "}
              <TextLink href="mailto:amy.ramsey@lincolncountync.gov">
                amy.ramsey@lincolncountync.gov
              </TextLink>
              . The October newsletter also gives Amber Mayo,{" "}
              <TextLink href="mailto:amber.mayo@lincolncountync.gov">
                amber.mayo@lincolncountync.gov
              </TextLink>
              , for foster families.
            </p>
            <p>
              <TextLink href="https://www.lincolncountync.gov/265/Foster-Care-and-Adoption">
                Lincoln County DSS
              </TextLink>
              .{" "}
              <TextLink href="https://www.theadvocate.us/">The Advocate Mission</TextLink>
              .{" "}
              <TextLink href="https://fosteringgracenc.org/">Fostering Grace</TextLink>
              .{" "}
              <TextLink href="http://www.cac-lincolncounty.org/">
                Child Advocacy Center
              </TextLink>
              .{" "}
              <TextLink href="https://www.sipesorchardhome.org/">
                Sipe&apos;s Orchard Home
              </TextLink>
              .
            </p>
          </HelpItem>
          <HelpItem title="Homeless ministries" href="/programs#homeless" badge="Partners">
            <p>
              Soul to Soul Outreach works with people who are homeless through
              advocacy, connection to resources, and spiritual guidance.{" "}
              <TextLink href="tel:+17049667785">(704) 966-7785</TextLink>.{" "}
              <TextLink href="mailto:soultosouloutreach22@gmail.com">
                soultosouloutreach22@gmail.com
              </TextLink>
              .{" "}
              <TextLink href="https://www.soultosouloutreach.org/">
                soultosouloutreach.org
              </TextLink>
              .
            </p>
            <p>
              The Hesed House of Hope is a nonprofit and currently the only homeless
              shelter in Lincoln County.{" "}
              <TextLink href="https://www.hesedhouseofhope.com/">
                hesedhouseofhope.com
              </TextLink>
              .
            </p>
            <p>
              Journey of Hope helps people experiencing chronic homelessness, or in
              danger of becoming homeless, with outreach, meals, blessing bags, and
              advocacy.{" "}
              <TextLink href="https://www.journeyofhopeministry.com/">
                journeyofhopeministry.com
              </TextLink>
              .
            </p>
            <p>
              Room in the Inn provides dinner, showers, a warm bed, and breakfast with
              other local churches, in summer for relief from the heat and in winter
              for relief from the cold. Text RITI to 980-389-7674 to volunteer.
            </p>
          </HelpItem>
          <HelpItem title="Prayer Shawl Ministry" href="/programs#prayer-shawl">
            <p>
              Prayer shawls are given for hope, comfort, and healing, and also to
              celebrate happy occasions. The ministry meets monthly in the library.
            </p>
            <p>
              Shawn Eudy,{" "}
              <TextLink href="mailto:shawnwyatteudy52@gmail.com">
                shawnwyatteudy52@gmail.com
              </TextLink>
              . Carla Freeman,{" "}
              <TextLink href="mailto:freecef@aol.com">freecef@aol.com</TextLink>.
            </p>
          </HelpItem>
          <HelpItem title="Harbour Health" href="/programs#harbour-health" badge="Partner">
            <p>
              Formerly Heartbeats. The ministry page links the Harbour Health website.
              The October newsletter says Harbour Health (Heartbeats) Women&apos;s
              Center provides free pregnancy tests, ultrasounds, counseling, and needed
              supplies for women experiencing an unexpected pregnancy.
            </p>
            <p>
              <TextLink href="https://supportheartbeats.org/">Harbour Health website</TextLink>
            </p>
          </HelpItem>
        </section>

        <section id="request" aria-labelledby="request-heading" className="scroll-mt-28 border-t border-border pt-12">
          <h2 id="request-heading" className="section-title">
            Request Help
          </h2>
          <p className="mt-4 max-w-2xl">
            Share your name, a way to reach you, and the kind of help you need.
            The contacts above are the way to reach a ministry directly.
          </p>
          <div className="mt-8 border border-border bg-card p-5 sm:p-8">
            <RequestAssistanceForm />
          </div>
        </section>
      </div>
    </main>
  );
}

function HelpItem({
  title,
  href,
  badge,
  children,
}: {
  title: string;
  href: string;
  badge?: string;
  children: ReactNode;
}) {
  return (
    <article className="space-y-3 border-t border-border pt-6">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="card-title">{title}</h3>
        {badge ? <p className="text-sm font-semibold text-pine">{badge}</p> : null}
      </div>
      <div className="space-y-3">{children}</div>
      <p>
        <TextLink href={href}>Ministry details</TextLink>
      </p>
    </article>
  );
}
