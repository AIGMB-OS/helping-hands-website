import { TextLink } from "@/components/button-link";
import { Note } from "@/components/note";
import { PageIntro } from "@/components/page-intro";
import { church } from "@/lib/facts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Help",
  description:
    "Ways a neighbor can find food, clothing, furniture, and partner services. There is no public get-help form.",
};

export default function GetHelpPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Get Help"
        title="What a neighbor can do"
        lede="These are ways a neighbor can find help without joining a committee. There is no public get-help application, intake form, or confidentiality form."
      />
      <div className="mx-auto max-w-3xl space-y-12 px-5 py-14">
        <Note title="No public get-help form">
          <p>
            There is no public form to request help from Helping Hands.
          </p>
        </Note>

        <section aria-labelledby="food-heading" className="space-y-4">
          <h2 id="food-heading" className="text-4xl text-ink">
            Food
          </h2>
          <h3 className="text-2xl text-ink">The Little Pantry</h3>
          <p>
            The Little Pantry is located in DUMC&apos;s parking lot and provides food
            to anyone who needs it, no questions asked. Volunteers provide
            non-perishable food and fill the pantry daily.
          </p>
          <p>
            The parking lot is at {church.name}, {church.street}. That is the
            church address. Hours beyond daily filling are not listed. Contact Darlene
            Melton,{" "}
            <TextLink href="mailto:marvinjmelton@bellsouth.net">
              marvinjmelton@bellsouth.net
            </TextLink>
            .
          </p>
          <h3 className="pt-4 text-2xl text-ink">Backpacks for Kids</h3>
          <p>
            Backpacks for Kids provides food for children at Rock Springs
            Elementary, North Lincoln Middle and High, and Lincoln Charter to have
            on weekends, school breaks, and holidays. Volunteers pack and deliver
            food to the schools. It is not a public walk-up pantry.
          </p>
          <p>
            Julie Doss,{" "}
            <TextLink href="mailto:julieadoss@gmail.com">julieadoss@gmail.com</TextLink>
            . Jamie Sidler,{" "}
            <TextLink href="mailto:jsidler07@hotmail.com">jsidler07@hotmail.com</TextLink>
            .
          </p>
          <h3 className="pt-4 text-2xl text-ink">Community Garden produce</h3>
          <p>
            The garden provides free fresh produce to struggling neighbors and
            food-insecure families. Produce goes out through Backpacks for Kids,
            the Little Pantry in the parking lot, and East Lincoln Christian
            Ministries. No public pickup hour is listed.
          </p>
          <h3 className="pt-4 text-2xl text-ink">East Lincoln Christian Ministry</h3>
          <p>
            Partner. ELCM provides financial assistance for neighbors experiencing
            an economic crisis, a grocery cart full of food and toiletries, and
            clothing for families who need them.
          </p>
          <p>
            4278 Catawba Burris Rd., Denver, NC.{" "}
            <TextLink href="tel:+17044834415">(704) 483-4415</TextLink>. Tuesday,
            Thursday, and Saturday, 9:00 to noon.
          </p>
          <Note title="October 2026 newsletter">
            <p>
              ELCM is accepting Thanksgiving donations of turkeys and hams. Contact
              Charlie Cicio at{" "}
              <TextLink href="tel:+16314558989">631-455-8989</TextLink>.
            </p>
          </Note>
        </section>

        <section aria-labelledby="clothing-heading" className="space-y-4">
          <h2 id="clothing-heading" className="text-4xl text-ink">
            Clothing
          </h2>
          <p>
            The Asbury Resource Center offers free, like-new clothing, socks,
            underwear, and shoes to any child in Lincoln County needing these
            items. Most are referred through school counselors and social workers
            or Sunrise Resource outreach. Volunteers sort donations and assist
            families when shopping.
          </p>
          <p>
            Hours and an address are not listed. Leslie Barlowe,{" "}
            <TextLink href="mailto:lesliebarlowe@gmail.com">
              lesliebarlowe@gmail.com
            </TextLink>
            .
          </p>
        </section>

        <section aria-labelledby="goods-heading" className="space-y-4">
          <h2 id="goods-heading" className="text-4xl text-ink">
            Home goods
          </h2>
          <p>
            Furnish a Future accepts donated furniture and household goods and
            gives it to neighbors leaving domestic abuse, homelessness, or other
            situations that have left them with little or no furniture or means to
            purchase it.
          </p>
          <p>There is no public request form.</p>
          <p>
            To offer an item, email{" "}
            <TextLink href="mailto:faf@denverumc.org">faf@denverumc.org</TextLink>{" "}
            and attach a picture if possible, or call{" "}
            <TextLink href="tel:+17042692875">(704) 269-2875</TextLink>.
          </p>
          <p>
            Needs include mattresses, box springs, beds, bedding, and
            pillows in queen, full, or twin (no king sizes); microwaves, toaster
            ovens, pots and pans, table service and tableware; living room and
            bedroom furniture, especially sofas; and washer/dryers and
            refrigerators.
          </p>
          <p>
            Please do not give large furniture, window treatments,
            pictures, books, decorative items, or king-size beds or linens.
          </p>
          <p>
            <TextLink href="/programs#furnish-a-future">
              Furnish a Future details, including both Tuesday hours
            </TextLink>
          </p>
        </section>

        <section aria-labelledby="housing-heading" className="space-y-4">
          <h2 id="housing-heading" className="text-4xl text-ink">
            Housing help and shelters
          </h2>
          <p>
            These are partner organizations. They are not a Helping Hands walk-in
            office.
          </p>
          <h3 className="text-2xl text-ink">Soul to Soul Outreach</h3>
          <p>
            Works to meet the needs of the homeless and indigent through advocacy,
            connection to resources, and spiritual guidance.{" "}
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
          <h3 className="text-2xl text-ink">The Hesed House of Hope</h3>
          <p>
            A non-profit organization and currently the only homeless shelter in
            Lincoln County.{" "}
            <TextLink href="https://www.hesedhouseofhope.com/">
              hesedhouseofhope.com
            </TextLink>
            . No phone is listed.
          </p>
          <h3 className="text-2xl text-ink">Journey of Hope</h3>
          <p>
            Helps those experiencing chronic homelessness and/or those in danger of
            becoming homeless by providing love, support, and tangible items that
            are needed daily. It provides Christ-centered services
            through outreach, food/meals, blessing bags, and advocacy.{" "}
            <TextLink href="https://www.journeyofhopeministry.com/">
              journeyofhopeministry.com
            </TextLink>
            .
          </p>
          <h3 className="text-2xl text-ink">Room in the Inn</h3>
          <p>
            Dinner, showers, a warm bed, and breakfast with other local churches in
            the summer for respite from the heat and in the winter for relief from
            the cold. Interested in volunteering? Text RITI to 980-389-7674.
          </p>
        </section>

        <section aria-labelledby="students-heading" className="space-y-4">
          <h2 id="students-heading" className="text-4xl text-ink">
            Students and families
          </h2>
          <h3 className="text-2xl text-ink">Birdies</h3>
          <p>
            A partnership between Helping Hands and the Lincoln County Schools
            social workers. Needs are filled for children in local schools,
            including lice kits, caps and gowns, and 100 filled Christmas stockings
            for middle and high school students chosen by those social workers.
            This is not a public walk-up closet.
          </p>
          <p>
            Carol Brown is listed at{" "}
            <TextLink href="mailto:outreach@denverumc.org">
              outreach@denverumc.org
            </TextLink>
            . For stocking items, the October newsletter lists{" "}
            <TextLink href="mailto:carol.brown@denverumc.org">
              carol.brown@denverumc.org
            </TextLink>
            . The two addresses are not the same.
          </p>
          <h3 className="text-2xl text-ink">Love Denver</h3>
          <p>
            A completely free back-to-school event with other churches: backpacks
            of school supplies, gently worn clothing, sports physicals, haircuts,
            groceries, games, crafts, lunch, and more. No date, place, or contact
            is listed.
          </p>
          <p>
            <TextLink href="https://www.lovedenver.net/#">lovedenver.net</TextLink>
          </p>
          <h3 className="text-2xl text-ink">Moms & Munchkins</h3>
          <p>
            A FREE, nonprofit parenting program, offering individualized & group
            engagements. No schedule, ages, or location are listed.{" "}
            <TextLink href="mailto:MomsandMunchkinsnc@gmail.com">
              MomsandMunchkinsnc@gmail.com
            </TextLink>
            .
          </p>
          <h3 className="text-2xl text-ink">Sunrise Resource Center</h3>
          <p>
            Programs for Sunrise residents include parenting classes, a
            finance/budgeting initiative, Bible studies, community gatherings,
            after-school and summer programs, early literacy, a supplemental food
            pantry, and emergency assistance. Where Sunrise is and who operates the
            housing are not listed. The supplemental pantry is for Sunrise
            residents, not a public walk-up.
          </p>
          <p>
            <TextLink href="/programs#foster">Foster-care partner listings</TextLink>
          </p>
        </section>

        <section aria-labelledby="repairs-heading" className="space-y-4">
          <h2 id="repairs-heading" className="text-4xl text-ink">
            Home repairs
          </h2>
          <p>
            The Building & Repair Team builds handicap ramps and decks, and makes
            certain repairs to unsafe homes for those who cannot afford to make the
            repairs themselves.
          </p>
          <p>
            Eligibility rules, a service area, a schedule, and a request form are
            not listed. Wally Mlynarski,{" "}
            <TextLink href="mailto:wzm.fish@gmail.com">wzm.fish@gmail.com</TextLink>.
          </p>
        </section>
      </div>
    </main>
  );
}
