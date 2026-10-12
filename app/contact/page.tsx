import { TextLink } from "@/components/button-link";
import { Note } from "@/components/note";
import { PageIntro } from "@/components/page-intro";
import { church, hhEmail, ministryContacts } from "@/lib/facts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write Helping Hands at helpinghandsdenvernc@gmail.com, or use a ministry contact.",
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact"
        title="Write Helping Hands"
        lede={
          <>
            The Helping Hands email is{" "}
            <TextLink href={`mailto:${hhEmail}`}>{hhEmail}</TextLink>.
          </>
        }
      />
      <div className="mx-auto max-w-6xl space-y-12 px-5 py-12">
        <Note title="Church phone and building">
          <p>
            Use the church contacts below for the church phone and building. Beth
            Bynum at{" "}
            <TextLink href="mailto:receptionist@denverumc.org">
              receptionist@denverumc.org
            </TextLink>{" "}
            takes pie orders.
          </p>
        </Note>

        <section className="space-y-4">
          <h2 className="section-title">Ministry contacts</h2>
          <p>
            Carol Brown uses outreach@denverumc.org. Christmas stocking items use
            carol.brown@denverumc.org. Furnish a Future sorting is Tuesdays 10:00
            a.m.–noon, and the October newsletter also says 9:00–11:00 a.m. Amy
            Ramsey answers Lincoln County DSS questions. The October newsletter
            gives Amber Mayo for foster families.
          </p>
          <div className="overflow-x-auto border-y border-border">
            <table className="w-full min-w-[44rem] text-left text-sm">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Role
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Contact
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Ministry
                  </th>
                </tr>
              </thead>
              <tbody>
                {ministryContacts.map((row) => (
                  <tr key={`${row.name}-${row.contact}`} className="border-t border-border">
                    <th scope="row" className="px-4 py-3 font-semibold">
                      {row.name}
                    </th>
                    <td className="px-4 py-3">{row.role}</td>
                    <td className="px-4 py-3">
                      {row.href ? (
                        <TextLink href={row.href}>{row.contact}</TextLink>
                      ) : (
                        row.contact
                      )}
                    </td>
                    <td className="px-4 py-3">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-t border-border pt-10">
          <h2 className="section-title">{church.name}</h2>
          <p className="mt-3 max-w-2xl">
            This block is the church, the place Helping Hands was founded and where
            several activities happen. It is not a Helping Hands office listing.
            Partner addresses stay on each partner’s program section.
          </p>
          <address className="mt-5 space-y-1 not-italic">
            <p>{church.street}</p>
            <p>Mailing address: {church.mailing}</p>
            <p>
              <TextLink href={church.phoneHref}>{church.phone}</TextLink>
            </p>
            <p>
              <TextLink href={`mailto:${church.email}`}>{church.email}</TextLink>
            </p>
            <p>{church.hours}</p>
            <p>
              <TextLink href={church.map}>Map</TextLink>
            </p>
          </address>
        </section>
      </div>
    </main>
  );
}
