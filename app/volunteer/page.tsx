import { TextLink } from "@/components/button-link";
import { Note } from "@/components/note";
import { PageIntro } from "@/components/page-intro";
import { hhEmail, rakeFormUrl } from "@/lib/facts";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "The Helping Hands monthly meeting and a ministry-by-ministry volunteer directory.",
};

export default function VolunteerPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Volunteer"
        title="Give your time"
        lede="You are invited to hear the many ways God is moving in this community and how you can help. If you are interested in a specific ministry, please speak with the ministry lead following the meeting."
      />
      <div className="mx-auto max-w-6xl [&>*]:max-w-3xl space-y-8 px-5 py-12">
        <Note title="Start with a ministry lead">
          <p>
            Each ministry has its own way to help. Write{" "}
            <TextLink href={`mailto:${hhEmail}`}>{hhEmail}</TextLink> about the
            first-Monday meeting.
          </p>
        </Note>
        <p>
          Helping Hands Meeting: first Monday of each month, 10:30 a.m.–12:00 p.m.,
          Chapel. The next meeting is Monday, November 2, 2026.{" "}
          <TextLink href="https://www.denverumc.org/events/helping-hands-meeting/2026-11-02.ics">
            Save to your calendar
          </TextLink>
          .
        </p>

        <VolunteerRow title="Asbury Resource Center">
          Sort donations and assist families shopping.{" "}
          <TextLink href="mailto:lesliebarlowe@gmail.com">lesliebarlowe@gmail.com</TextLink>
          . The October newsletter asks for
          volunteers every Tuesday 10:00 a.m.–3:00 p.m. to sort clothing, and at
          shopping days on November 3 and November 7, 9:00 a.m.–2:30 p.m.
        </VolunteerRow>
        <VolunteerRow title="Backpacks for Kids">
          Pack and deliver food.{" "}
          <TextLink href="mailto:julieadoss@gmail.com">julieadoss@gmail.com</TextLink>
          ,{" "}
          <TextLink href="mailto:jsidler07@hotmail.com">jsidler07@hotmail.com</TextLink>
          , and the{" "}
          <TextLink href="https://www.signupgenius.com/go/20F0D4EAFA823AAFB6-50558396-20242025">
            Signup Genius
          </TextLink>
          . The October newsletter lists packing on November 3 at 9 a.m., and says
          delivery drivers are needed.
        </VolunteerRow>
        <VolunteerRow title="Community Garden">
          Harvest and maintain. New and experienced gardeners are welcome. Carol,{" "}
          <TextLink href="mailto:outreach@denverumc.org">outreach@denverumc.org</TextLink>
          , including notice of upcoming garden opportunities. The October
          newsletter lists a workday at Denver United Methodist Church on October
          24 at 8:00 a.m.
        </VolunteerRow>
        <VolunteerRow title="First Thursday Lunch">
          Wednesday before the lunch at 9:00 a.m. in the FLC to pick chicken, and
          Thursday 11:00 a.m.–1:00 p.m. to serve and clean up, in the FLC.{" "}
          <TextLink href="mailto:denzilmbell@gmail.com">denzilmbell@gmail.com</TextLink>
          . Desserts are welcome:{" "}
          <TextLink href="mailto:wendi.sweet@denverumc.org">
            wendi.sweet@denverumc.org
          </TextLink>
          .
        </VolunteerRow>
        <VolunteerRow title="Furnish a Future">
          Sort donations, and a moving team for pickups and deliveries. Sorting
          is Tuesdays 10:00 a.m.–noon. Dale Webster,{" "}
          <TextLink href="mailto:faf@denverumc.org">faf@denverumc.org</TextLink>.
          The October newsletter also says Mission Depot is open Tuesdays
          9:00–11:00 a.m. or by appointment. Moving team: Dennis Lee,{" "}
          <TextLink href="mailto:lkndawg@yahoo.com">lkndawg@yahoo.com</TextLink>.
        </VolunteerRow>
        <VolunteerRow title="The Little Pantry">
          Provide non-perishable food and fill the pantry daily. Darlene Melton,{" "}
          <TextLink href="mailto:marvinjmelton@bellsouth.net">
            marvinjmelton@bellsouth.net
          </TextLink>
          .
        </VolunteerRow>
        <VolunteerRow title="Prayer Shawl Ministry">
          Monthly in the library. Beginners welcome. Home projects are accepted.
          Shawn Eudy,{" "}
          <TextLink href="mailto:shawnwyatteudy52@gmail.com">
            shawnwyatteudy52@gmail.com
          </TextLink>
          , and Carla Freeman,{" "}
          <TextLink href="mailto:freecef@aol.com">freecef@aol.com</TextLink>. The
          Sunday meeting time is 4:00–6:00 p.m. The October 18, 2026 meeting is
          in the library.
        </VolunteerRow>
        <VolunteerRow title="Sewing Ladies">
          Mondays 9:00 a.m.–noon. Sew, measure, cut, or iron. Wanda Reynolds,{" "}
          <TextLink href="mailto:wandareynolds@gmail.com">wandareynolds@gmail.com</TextLink>
          .
        </VolunteerRow>
        <VolunteerRow title="School mentoring">
          Weekly mentoring or tutoring at named schools. Mary Repko, Rock Springs,{" "}
          <TextLink href="mailto:repkomary@gmail.com">repkomary@gmail.com</TextLink>
          . Christina Sutton, Asbury Academy,{" "}
          <TextLink href="mailto:christinasuttontransition@gmail.com">
            christinasuttontransition@gmail.com
          </TextLink>
          . Bob Smith, Battleground Elementary,{" "}
          <TextLink href="mailto:bobs709356@gmail.com">bobs709356@gmail.com</TextLink>
          . The October newsletter asks for mentors to spend one hour a week with a
          child.
        </VolunteerRow>
        <VolunteerRow title="Rake 'n Run">
          All ages, in partnership with East Lincoln Christian Ministries.
          <Note title="2025 form">
            <p>
              The signup form is titled Rake &apos;n Run (2025). It says “Join us
              Saturday, November 22nd,” meet at 9:00 a.m. in the parking lot behind
              the Community Garden, and names Rich Benson,{" "}
              <TextLink href="mailto:richjuliebenson@gmail.com">
                richjuliebenson@gmail.com
              </TextLink>
              . November 22, 2025 has passed.{" "}
              <TextLink href={rakeFormUrl}>Open the 2025 form</TextLink>.
            </p>
          </Note>
        </VolunteerRow>
        <VolunteerRow title="Room in the Inn">
          Partner. Volunteer by text: text RITI to 980-389-7674.
        </VolunteerRow>
        <VolunteerRow title="East Lincoln Christian Ministry">
          Partner. Volunteers can apply on-site at 4278 Catawba Burris Rd.{" "}
          <TextLink href="tel:+17044834415">(704) 483-4415</TextLink>.
        </VolunteerRow>
        <VolunteerRow title="Amy's House">
          Partner.{" "}
          <TextLink href="https://lincolncounty-cadv.org/how-you-can-help/">
            Volunteer or donate
          </TextLink>
          . The October newsletter says Amy&apos;s Closet volunteer applications are
          available in the stores.
        </VolunteerRow>
        <VolunteerRow title="Child Advocacy Center">
          Partner. Fundraising events and donations. Sue Gauthier,{" "}
          <TextLink href="mailto:sgauthier@cac-lincolncounty.org">
            sgauthier@cac-lincolncounty.org
          </TextLink>
          .
        </VolunteerRow>
        <VolunteerRow title="Guardian ad Litem">
          Partner. Volunteer advocates. Lilly Fostvedt,{" "}
          <TextLink href="mailto:lfostvedt@yahoo.com">lfostvedt@yahoo.com</TextLink>.
        </VolunteerRow>
        <VolunteerRow title="Building & Repair">
          Wally Mlynarski,{" "}
          <TextLink href="mailto:wzm.fish@gmail.com">wzm.fish@gmail.com</TextLink>.
        </VolunteerRow>
        <VolunteerRow title="Lakewood TV">
          Sponsor a room’s TV service.{" "}
          <TextLink href={`mailto:${hhEmail}`}>{hhEmail}</TextLink>. The October
          newsletter says service for all 13 TVs is $200 a month.
        </VolunteerRow>
      </div>
    </main>
  );
}

function VolunteerRow({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border pt-6">
      <h2 className="section-title">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
