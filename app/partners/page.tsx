import { TextLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Community organizations listed with Helping Hands, grouped by the services they provide.",
};

const categories: {
  id: string;
  title: string;
  intro: string;
  items: { name: string; text: string; links: { label: string; href: string }[] }[];
}[] = [
  {
    id: "food",
    title: "Food, clothing, and financial help",
    intro: "A community ministry with its own address and hours.",
    items: [
      {
        name: "East Lincoln Christian Ministry",
        text: "Financial assistance, a grocery cart of food and toiletries, and clothing. Tuesday, Thursday, and Saturday, 9:00 to noon.",
        links: [
          { label: "Ministry details", href: "/programs#elcm" },
          { label: "(704) 483-4415", href: "tel:+17044834415" },
          {
            label: "Facebook",
            href: "https://www.facebook.com/profile.php?id=100063620230853",
          },
        ],
      },
    ],
  },
  {
    id: "clothing",
    title: "Clothing",
    intro: "A resale shop that supports a domestic-violence organization.",
    items: [
      {
        name: "Amy's Closet & Amy's House",
        text: "Amy's Closet is a not-for-profit resale shop that benefits Amy's House. Stores in Denver and Lincolnton.",
        links: [
          { label: "Ministry details", href: "/programs#amys" },
          { label: "Amy's House", href: "https://lincolncounty-cadv.org/" },
          {
            label: "Volunteer or donate",
            href: "https://lincolncounty-cadv.org/how-you-can-help/",
          },
        ],
      },
    ],
  },
  {
    id: "shelter",
    title: "Shelter and outreach",
    intro: "Organizations that serve people who are homeless or unsheltered.",
    items: [
      {
        name: "Soul to Soul Outreach",
        text: "Advocacy, connection to resources, and spiritual guidance.",
        links: [
          { label: "Website", href: "https://www.soultosouloutreach.org/" },
          { label: "(704) 966-7785", href: "tel:+17049667785" },
        ],
      },
      {
        name: "The Hesed House of Hope",
        text: "A nonprofit, and currently the only homeless shelter in Lincoln County.",
        links: [{ label: "Website", href: "https://www.hesedhouseofhope.com/" }],
      },
      {
        name: "Journey of Hope",
        text: "Outreach, meals, blessing bags, and advocacy for people experiencing homelessness.",
        links: [{ label: "Website", href: "https://www.journeyofhopeministry.com/" }],
      },
      {
        name: "Room in the Inn",
        text: "Dinner, showers, a bed, and breakfast with local churches in summer and winter.",
        links: [{ label: "With homeless ministries", href: "/programs#homeless" }],
      },
    ],
  },
  {
    id: "families",
    title: "Foster care, children, and parenting",
    intro: "Each organization has its own role. Helping Hands lists them together.",
    items: [
      {
        name: "Lincoln County DSS",
        text: "Services to assist families in overcoming crises.",
        links: [
          {
            label: "Foster care and adoption",
            href: "https://www.lincolncountync.gov/265/Foster-Care-and-Adoption",
          },
        ],
      },
      {
        name: "The Advocate Mission",
        text: "Whole-family support, connecting families with partners and churches.",
        links: [{ label: "Website", href: "https://www.theadvocate.us/" }],
      },
      {
        name: "Fostering Grace",
        text: "Practical needs, encouragement, prayer, and support for foster, kinship, adoptive, and reunified families.",
        links: [{ label: "Website", href: "https://fosteringgracenc.org/" }],
      },
      {
        name: "Child Advocacy Center",
        text: "Forensic interviews and referrals for children and families. Helping Hands partners on Christmas gifts.",
        links: [{ label: "Website", href: "http://www.cac-lincolncounty.org/" }],
      },
      {
        name: "Sipe's Orchard Home",
        text: "Aims to empower young people in a stable and supportive environment.",
        links: [{ label: "Website", href: "https://www.sipesorchardhome.org/" }],
      },
      {
        name: "Guardian ad Litem",
        text: "Trained volunteers who advocate for a child in District Court.",
        links: [{ label: "Facebook", href: "https://www.facebook.com/lcncgal/" }],
      },
      {
        name: "Moms & Munchkins",
        text: "A free parenting program with individual and group engagements.",
        links: [
          { label: "Ministry details", href: "/programs#moms-munchkins" },
          { label: "Email", href: "mailto:MomsandMunchkinsnc@gmail.com" },
        ],
      },
    ],
  },
  {
    id: "residents",
    title: "Sunrise residents",
    intro: "Programs offered to Sunrise residents.",
    items: [
      {
        name: "Sunrise Resource Center",
        text: "Parenting, budgeting, Bible studies, gatherings, after-school and summer programs, literacy, a supplemental food pantry, and emergency assistance.",
        links: [{ label: "Ministry details", href: "/programs#sunrise" }],
      },
    ],
  },
  {
    id: "health",
    title: "Health",
    intro: "Formerly Heartbeats.",
    items: [
      {
        name: "Harbour Health",
        text: "The October newsletter describes free pregnancy tests, ultrasounds, counseling, and supplies.",
        links: [
          { label: "Website", href: "https://supportheartbeats.org/" },
          { label: "Ministry details", href: "/programs#harbour-health" },
        ],
      },
    ],
  },
  {
    id: "churches",
    title: "Churches working together",
    intro: "A network of United Methodist congregations, also called United Methodist Friends.",
    items: [
      {
        name: "Missional Network",
        text: "Home repairs, workdays, community fun days, and a spring and summer program for children.",
        links: [
          { label: "Ministry details", href: "/programs#missional-network" },
          {
            label: "Facebook",
            href: "https://www.facebook.com/Unitedmethodistfriends",
          },
        ],
      },
    ],
  },
];

export default function PartnersPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Partners"
        title="Community partners"
        lede="These organizations are not Helping Hands offices. They are grouped by the services they provide."
      />
      <div className="mx-auto max-w-6xl space-y-10 px-5 py-12">
        {categories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-28">
            <h2 className="section-title">{category.title}</h2>
            <p className="mt-3 max-w-2xl">{category.intro}</p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {category.items.map((item) => (
                <PartnerCard key={item.name} name={item.name} text={item.text}>
                  {item.links.map((link) => (
                    <TextLink key={link.href} href={link.href}>
                      {link.label}
                    </TextLink>
                  ))}
                </PartnerCard>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

function PartnerCard({
  name,
  text,
  children,
}: {
  name: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <article className="border-t border-border pt-5">
      <h3 className="card-title">{name}</h3>
      <p className="mt-2">{text}</p>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2">{children}</p>
    </article>
  );
}
