export type ProgramLink = { label: string; href: string };

export type ProgramContact = {
  label: string;
  href?: string;
};

export type ProgramFigure = { src: string; alt: string };

export type Program = {
  slug: string;
  name: string;
  sentence: string;
  badge?: string;
  image: string;
  detailImage: string;
  group: "food" | "families" | "care" | "network" | "fundraising";
  paragraphs: string[];
  schedule?: string[];
  contacts?: ProgramContact[];
  links?: ProgramLink[];
  notes?: string[];
  figures?: ProgramFigure[];
};

const card = "https://dq5pwpg1q8ru0.cloudfront.net";

export const programGroups = [
  {
    id: "food",
    title: "Food and goods",
    intro:
      "Food, children’s clothing, furniture, and a partner ministry with its own address and hours.",
  },
  {
    id: "families",
    title: "Families and schools",
    intro:
      "School partnerships, a back-to-school event, parenting, Sunrise resident programs, and foster-care partners.",
  },
  {
    id: "care",
    title: "Practical care",
    intro:
      "Home repairs, sewing, prayer shawls, a care-center TV sponsorship, and the annual leaf cleanup.",
  },
  {
    id: "network",
    title: "Partners and network",
    intro:
      "These are partner organizations or a church network, listed with Helping Hands.",
  },
  {
    id: "fundraising",
    title: "Fundraising gatherings",
    intro:
      "A monthly community lunch and an annual golf tournament, with the prices and dates listed for each.",
  },
] as const;

export const programs: Program[] = [
  {
    slug: "little-pantry",
    name: "The Little Pantry",
    sentence:
      "The Little Pantry is located in DUMC's parking lot and provides food to anyone who needs it, no questions asked.",
    image: `${card}/2025/11/19/14/34/08/797d9785-ddab-48a9-b1c3-0543726a4b4c/The-Little-Pantry.png`,
    detailImage: `${card}/2025/11/19/14/33/08/6c385602-b7a6-4fd6-b7f4-d4d65a61a649/The-Little-Pantry.png`,
    group: "food",
    paragraphs: [
      "The Little Pantry is located in DUMC's parking lot and provides food to anyone who needs it, no questions asked. Volunteers are needed to provide non-perishable food and to help fill the pantry daily.",
      "The parking lot is at Denver United Methodist Church, 3910 N. Hwy 16 Business, Denver, NC 28037. That street address is the church’s. Helping Hands does not list its own address. There is no inventory list, and no hours beyond daily filling.",
    ],
    contacts: [
      {
        label: "Darlene Melton, marvinjmelton@bellsouth.net",
        href: "mailto:marvinjmelton@bellsouth.net",
      },
    ],
  },
  {
    slug: "backpacks",
    name: "Backpacks for Kids",
    sentence:
      "Backpacks for Kids provides food for children at Rock Springs Elementary, North Lincoln Middle and High, and Lincoln Charter to have on weekends, school breaks, and holidays.",
    image: `${card}/2025/11/10/20/02/15/7cc56591-6cf6-4fa9-8455-19d9b61f60ee/Backpacks-for-Kids.jpg`,
    detailImage: `${card}/2025/11/10/17/25/04/d908fdf0-8298-4948-9b39-25281045a7d2/Backpacks-for-Kids.jpg`,
    group: "food",
    paragraphs: [
      "Because hunger doesn't take a break on the weekends.",
      "Backpacks for Kids provides food for children at Rock Springs Elementary, North Lincoln Middle and High, and Lincoln Charter to have on weekends, school breaks, and holidays. Volunteers pack and deliver food to the schools.",
      "This is not a public walk-up pantry.",
    ],
    contacts: [
      { label: "Julie Doss, julieadoss@gmail.com", href: "mailto:julieadoss@gmail.com" },
      { label: "Jamie Sidler, jsidler07@hotmail.com", href: "mailto:jsidler07@hotmail.com" },
    ],
    links: [
      {
        label: "Signup Genius",
        href: "https://www.signupgenius.com/go/20F0D4EAFA823AAFB6-50558396-20242025",
      },
      {
        label: "Amazon wishlist",
        href: "https://www.amazon.com/hz/wishlist/ls/3T04DX8AF8DQ8/ref=cm_go_nav_hz",
      },
    ],
    notes: [
      "The October 2026 newsletter says the program is currently serving 16 kids. The next packing session is November 3 at 9 a.m., and delivery drivers are needed. Needs listed there: jelly in a plastic jar or bottle, vegetables, small cereals, grits and oatmeal packets, applesauce cups or squeeze, fruit cups, snacks.",
    ],
  },
  {
    slug: "community-garden",
    name: "Community Garden",
    sentence:
      "The Community Garden provides a consistent, local source for free, fresh produce to struggling neighbors, while promoting a healthy lifestyle.",
    image: `${card}/2025/11/10/20/02/15/c13b53d3-42f4-4ad2-b168-8dd44b27c351/Community-Garden.jpg`,
    detailImage: `${card}/2025/11/10/17/48/38/a41aa0aa-a342-4f8e-aeac-4303cdc9f8d2/Community-Garden.jpg`,
    group: "food",
    paragraphs: [
      "The Community Garden provides a consistent, local source for free, fresh produce to struggling neighbors, while promoting a healthy lifestyle. Produce goes to food-insecure families through Backpacks for Kids, the Little Pantry in the parking lot, and East Lincoln Christian Ministries.",
      "Volunteers from the community are welcome to harvest vegetables and maintain the garden. Both new and experienced gardeners are welcome.",
      "A regular location and workday hour are not listed.",
    ],
    contacts: [
      {
        label: "Carol, outreach@denverumc.org, including notice of upcoming garden opportunities",
        href: "mailto:outreach@denverumc.org",
      },
    ],
    notes: [
      "Carol Brown is listed two ways. The garden and Birdies list outreach@denverumc.org. Christmas stockings list carol.brown@denverumc.org.",
      "The October newsletter invites people to a Community Garden workday at Denver United Methodist Church on October 24 at 8:00 a.m.",
    ],
  },
  {
    slug: "asbury",
    name: "Asbury Resource Center",
    sentence:
      "The Asbury Resource Center offers free, like-new clothing, socks, underwear, and shoes to any child in Lincoln County needing these items.",
    image: `${card}/2025/11/14/14/58/42/fdf37c17-1810-45b5-8359-529cc517fae4/Asbury-Resource-Center.png`,
    detailImage: `${card}/2025/11/14/14/58/25/0b50ed21-f8ce-41be-a357-b071e10125bd/Asbury-Resource-Center.png`,
    group: "food",
    paragraphs: [
      "The Asbury Resource Center offers free, like-new clothing, socks, underwear, and shoes to any child in Lincoln County needing these items. Most are referred through school counselors and social workers or Sunrise Resource outreach. Volunteers sort donations and assist families when shopping.",
      "Hours and an address are not listed.",
    ],
    contacts: [
      {
        label: "Leslie Barlowe, lesliebarlowe@gmail.com",
        href: "mailto:lesliebarlowe@gmail.com",
      },
    ],
    notes: [
      "The October newsletter lists a school shopping day on November 3 and a Sunrise shopping day on November 7, both 9:00 a.m.–2:30 p.m. It asks for volunteers at those events and every Tuesday 10:00 a.m.–3:00 p.m. to sort clothing, and says funds for new socks and underwear are always needed.",
    ],
  },
  {
    slug: "furnish-a-future",
    name: "Furnish a Future",
    sentence:
      "Furnish a Future accepts donated furniture and household goods from community members, and gives it to neighbors leaving domestic abuse, homelessness, or other situations that have left them with little or no furniture or means to purchase it.",
    image: `${card}/2025/11/10/20/02/15/e0050f99-9fca-475f-b50d-bc6e5a7b5b12/Furnish-a-Future.jpg`,
    detailImage: `${card}/2025/11/10/18/42/14/04b06bc8-c693-4dc0-89df-0fbf05c545e8/Furnish-a-Future.jpg`,
    group: "food",
    paragraphs: [
      "Furnish a Future accepts donated furniture and household goods from community members, and gives it to neighbors leaving domestic abuse, homelessness, or other situations that have left them with little or no furniture or means to purchase it.",
      "Published needs: new or gently used mattresses, box springs, beds, bedding, and pillows in queen, full, or twin. No King sizes please. Kitchen items: microwaves, toaster ovens, pots and pans, table service and tableware. Living room and bedroom furniture, especially sofas. Appliances: washer/dryers, refrigerators.",
      "Please do not give large furniture, window treatments, pictures, books, decorative items, or king-size beds or linens.",
      "To donate, email faf@denverumc.org and attach a picture if possible, or call (704) 269-2875.",
      "There is no public request form, and eligibility rules for asking for furniture are not listed.",
    ],
    schedule: [
      "Sorting: Tuesdays 10:00 a.m.–noon. Contact Dale Webster at faf@denverumc.org.",
      "Moving team, to be notified of pickups and deliveries: Dennis Lee, lkndawg@yahoo.com.",
    ],
    contacts: [
      { label: "Donations, faf@denverumc.org", href: "mailto:faf@denverumc.org" },
      { label: "Donations phone, (704) 269-2875", href: "tel:+17042692875" },
      { label: "Dale Webster, sorting, faf@denverumc.org", href: "mailto:faf@denverumc.org" },
      { label: "Dennis Lee, moving team, lkndawg@yahoo.com", href: "mailto:lkndawg@yahoo.com" },
    ],
    notes: [
      "Tuesday hours are listed two ways. One schedule is Tuesdays 10:00 a.m.–noon. The October newsletter says “Mission Depot is open Tues 9:00–11:00 am or by appointment,” and “Every Tues — Sort donations for Furnish a Future, 9:00–11:00 am.”",
      "The October newsletter says Furnish a Future provided 33 beds to families in need last month, compared with 66 beds provided year to date until then, and 171 volunteer hours served 26 families. A Walmart list is mentioned. No link is given.",
    ],
  },
  {
    slug: "elcm",
    name: "East Lincoln Christian Ministry",
    sentence:
      "ELCM is a community-wide ministry that provides financial assistance for neighbors experiencing an economic crisis, a grocery cart full of food and toiletries, and clothing for families who need them.",
    badge: "Partner",
    image: `${card}/2025/11/10/20/02/15/4aa87a2f-0203-42d9-9da6-4371397d385b/East-Lincoln-Christian-Ministry.jpg`,
    detailImage: `${card}/2025/11/10/18/08/10/75b8de6e-9aa2-4fb2-944c-64368652e902/East-Lincoln-Christian-Ministry.jpg`,
    group: "food",
    paragraphs: [
      "ELCM is a community-wide ministry that provides financial assistance for neighbors experiencing an economic crisis, a grocery cart full of food and toiletries, and clothing for families who need them. They are funded through clothing and furniture sales and financial donations from churches and others.",
      "Volunteers are needed for every part of the ministry and can apply on-site.",
      "Address: 4278 Catawba Burris Rd., Denver, NC. Phone: (704) 483-4415. Hours: Tuesday, Thursday, and Saturday, 9:00 to noon.",
    ],
    contacts: [
      { label: "(704) 483-4415", href: "tel:+17044834415" },
    ],
    links: [
      {
        label: "ELCM Facebook",
        href: "https://www.facebook.com/profile.php?id=100063620230853",
      },
      {
        label: "ELCM Info.pdf",
        href: "https://dq5pwpg1q8ru0.cloudfront.net/2025/11/12/03/05/20/8542e8fa-5d59-410a-a1a8-91e19f90cd6e/ELCM%20Info.pdf",
      },
    ],
    notes: [
      "The October newsletter says ELCM is accepting Thanksgiving donations of turkeys and hams. Contact Charlie Cicio at 631-455-8989.",
    ],
  },
  {
    slug: "birdies",
    name: "Birdies",
    sentence:
      "The Birdies group is a partnership between Helping Hands and the Lincoln County Schools social workers to fill the needs of children in local schools.",
    image: `${card}/2025/11/10/20/02/15/702ee964-b38b-431b-aa73-16fd532ced90/Birdies.jpg`,
    detailImage: `${card}/2025/11/10/17/31/36/f237570c-a746-45ad-a938-512d2165074d/Birdies.jpg`,
    group: "families",
    paragraphs: [
      "The Birdies group is a partnership between Helping Hands and the Lincoln County Schools social workers to fill the needs of children in local schools. They provide lice kits, and caps and gowns for students whose families would be burdened by the added expenses. They provide 100 filled Christmas stockings for middle and high school students chosen by those social workers, and address other family needs that are identified by these Birdies.",
      "This program is funded through the First Thursday Lunch fundraiser.",
      "Requests go through the school social workers. There is no public application.",
    ],
    contacts: [
      {
        label: "Carol Brown, outreach@denverumc.org",
        href: "mailto:outreach@denverumc.org",
      },
      {
        label: "Christmas stockings: carol.brown@denverumc.org",
        href: "mailto:carol.brown@denverumc.org",
      },
    ],
    notes: [
      "Two email addresses are listed for Carol Brown, and they are not the same.",
      "The October newsletter says: “We are filling 100 Christmas Stocking for local Middle and High School Students! Email carol.brown@denverumc.org if you or a group you are a part of are interested in providing 50 or 100 of specific items.”",
    ],
  },
  {
    slug: "school-mentoring",
    name: "School Mentoring",
    sentence:
      "Mentoring involves pairing specific children with nurturing adults who guide them in making good decisions and handling difficult situations.",
    image: `${card}/2026/01/28/16/01/55/38387e66-7d8f-420f-8db5-060523931b27/School-Mentoring.jpg`,
    detailImage: `${card}/2026/01/28/15/49/50/54ce8ffc-b7b5-4a8a-91a4-ef5bfc9c5f77/School-Mentoring.jpg`,
    group: "families",
    paragraphs: [
      "Rock Springs: Mentoring involves pairing specific children with nurturing adults who guide them in making good decisions and handling difficult situations. Mentors and students meet weekly. The relationships lead to improved grades, social skills, and self-worth for students. Contact Mary Repko, repkomary@gmail.com.",
      "Asbury Academy: An alternative school where volunteers mentor, tutor, and teach job skills to middle and high school students and make facility improvements. Contact Christina Sutton, christinasuttontransition@gmail.com.",
      "Battleground Elementary: Focused on increasing reading levels for students reading below grade level. Contact Bob Smith, bobs709356@gmail.com, for information or to volunteer.",
    ],
    contacts: [
      { label: "Mary Repko, Rock Springs, repkomary@gmail.com", href: "mailto:repkomary@gmail.com" },
      {
        label: "Christina Sutton, Asbury Academy, christinasuttontransition@gmail.com",
        href: "mailto:christinasuttontransition@gmail.com",
      },
      {
        label: "Bob Smith, Battleground Elementary, bobs709356@gmail.com",
        href: "mailto:bobs709356@gmail.com",
      },
    ],
    figures: [
      {
        src: "https://denverumc.org/df_media/W1siZiIsIjIwMjYvMDEvMjkvMDAvNDIvNTQvMzVjZTc2NzgtOTcwMy00NzE3LWJmNjktYjdmYTdlMTA1Y2EwL3JvY2sgc3ByaW5ncyAoMSkuanBnIl1d/rock%20springs%20%281%29.jpg?sha=2e16cb9c9f92b967",
        alt: "Rock Springs",
      },
      {
        src: "https://denverumc.org/df_media/W1siZiIsIjIwMjYvMDQvMDkvMTQvMTIvMDcvNjJlNjM0YTctZWZmYS00YjhjLTg4YTQtNWRhYWU4YTFhY2EzL0FzYnVyeSBBY2FkZW15LmpwZyJdXQ/Asbury%20Academy.jpg?sha=8157a470fd4b6c3f",
        alt: "Asbury Academy",
      },
      {
        src: "https://denverumc.org/df_media/W1siZiIsIjIwMjYvMDEvMjkvMDAvNDIvNTQvZmE0YzY5ZTMtNDMzNy00ZWNkLWIwMDEtY2M5NDg2M2Y0NTgxL2JhdHRsZWdyb3VuZCBlbGVtLmpwZyJdXQ/battleground%20elem.jpg?sha=a6e9b5cf0547a749",
        alt: "Battleground Elementary",
      },
    ],
    notes: [
      "The October newsletter asks for mentors to spend one hour a week with a child, and names Mary Repko for Rock Springs and Bob Smith for Battleground Elementary or any school you wish to serve at.",
    ],
  },
  {
    slug: "love-denver",
    name: "Love Denver",
    sentence:
      "Love Denver is a completely free back-to-school event where we join with other churches to offer free backpacks full of school supplies, gently worn clothing, sports physicals, haircuts, groceries, games, crafts, lunch, and more to local families needing help to prepare for the upcoming school year.",
    image: `${card}/2025/11/11/13/57/50/4611061e-8412-4985-bcc0-0732ffe82987/Love-Denver.jpg`,
    detailImage: `${card}/2025/11/10/20/37/35/e3a6e085-89be-419e-a080-a0aef6699237/Love-Denver.jpg`,
    group: "families",
    paragraphs: [
      "Love Denver is a completely free back-to-school event where we join with other churches to offer free backpacks full of school supplies, gently worn clothing, sports physicals, haircuts, groceries, games, crafts, lunch, and more to local families needing help to prepare for the upcoming school year.",
      "No date, place, or contact is listed.",
    ],
    links: [{ label: "Love Denver website", href: "https://www.lovedenver.net/#" }],
  },
  {
    slug: "moms-munchkins",
    name: "Moms & Munchkins",
    sentence:
      "Moms & Munchkins is a FREE, nonprofit parenting program, offering individualized & group engagements.",
    badge: "Partner",
    image: `${card}/2025/11/12/03/06/27/af542257-be74-4bfa-9c03-687214e15455/M%2526Ms.jpg`,
    detailImage: `${card}/2025/11/11/16/31/35/7278544c-3303-4288-9151-46d7638b2804/M%2526Ms.jpg`,
    group: "families",
    paragraphs: [
      "Moms & Munchkins is a FREE, nonprofit parenting program, offering individualized & group engagements.",
      "A schedule, ages, and a location are not listed.",
    ],
    contacts: [
      {
        label: "MomsandMunchkinsnc@gmail.com",
        href: "mailto:MomsandMunchkinsnc@gmail.com",
      },
    ],
    links: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100057396941921",
      },
    ],
    notes: [
      "Sunrise Resource Center uses the same email. How the two programs are connected is not listed.",
      "The October newsletter thanks Furnish a Future for donated beds, and says volunteer help and donations are needed for a Fall Festival on October 15. Contact Lea. No last name or email for Lea is listed.",
    ],
  },
  {
    slug: "sunrise",
    name: "Sunrise Resource Center",
    sentence:
      "The goal of the SRC is to provide free services to moms, children, and families, seek ways to cultivate relationships, and grow community standards.",
    badge: "Sunrise residents",
    image: `${card}/2025/11/12/03/06/21/164da5e7-b0fd-4b80-977f-9fd9de877e70/Sunrise-Resource-Center.jpg`,
    detailImage: `${card}/2025/11/11/16/26/41/2ffb665f-eb44-42ce-84a5-1de1c9c35f7b/Sunrise-Resource-Center.jpg`,
    group: "families",
    paragraphs: [
      "The goal of the SRC is to provide free services to moms, children, and families, seek ways to cultivate relationships, and grow community standards.",
      "Programs offered to Sunrise residents: Parenting Classes; Finance/Budgeting Initiative; Women’s Bible Study; Boys/Girls Bible Study; Community Gatherings (festivals, cookouts); After-School and Summer Programs for Elementary and Middle School Children; Early Literacy Enrichment Opportunities; Supplemental Food Pantry; Emergency Assistance, and much more.",
      "Where Sunrise is, who operates the housing, and when the programs meet are not listed. The supplemental food pantry is for Sunrise residents, not a public walk-up pantry.",
    ],
    contacts: [
      {
        label: "momsandmunchkinsnc@gmail.com",
        href: "mailto:momsandmunchkinsnc@gmail.com",
      },
    ],
    links: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100094729609403",
      },
    ],
  },
  {
    slug: "foster",
    name: "Foster Family Ministry",
    sentence:
      "Foster Family Ministry is a set of partner listings. There is no single intake for this group.",
    badge: "Partners",
    image: `${card}/2026/01/28/19/48/43/a5533257-e5e6-459a-9d8b-ee3609a1082d/Foster-Family.jpg`,
    detailImage: `${card}/2026/01/28/16/35/12/d204b318-4b27-41c3-8322-54445a5822a2/Foster-Family.jpg`,
    group: "families",
    paragraphs: [
      "Lincoln County DSS. Services are provided to assist families in overcoming crises. Contact Amy Ramsey, amy.ramsey@lincolncountync.gov.",
      "The Advocate Mission works to help families receive the physical, emotional, spiritual, and educational help they need to effectively support vulnerable children. Families need whole-family support, and the goal is to advocate and coordinate support for families by connecting them with partners and churches.",
      "Fostering Grace. Rooted in the heart of Lincoln County, North Carolina, Fostering Grace envisions a community where every foster, kinship, adoptive, and reunified family is strengthened by the love of Christ. It describes meeting practical needs, encouragement, prayer, and support.",
      "Child Advocacy Center. A comfortable, safe, child-friendly place where young victims of abuse and neglect and their families come to have a forensic interview and receive referrals for additional services. Volunteers are needed for fundraising events and for monetary and in-kind donations. We partner with the CAC to provide Christmas gifts for these children. Contact Sue Gauthier, sgauthier@cac-lincolncounty.org.",
      "Sipe’s Orchard Home. Sipe’s Orchard Home aims to empower young individuals on their journey to a brighter future in a stable and supportive environment.",
      "Guardian ad Litem. The Lincoln County Guardian ad Litem program recruits and trains volunteers to advocate for and be the voice of a child in District Court cases involving abuse and neglect. Contact Lilly Fostvedt, lfostvedt@yahoo.com.",
    ],
    contacts: [
      {
        label: "Amy Ramsey, Lincoln County DSS, amy.ramsey@lincolncountync.gov",
        href: "mailto:amy.ramsey@lincolncountync.gov",
      },
      {
        label: "Sue Gauthier, Child Advocacy Center, sgauthier@cac-lincolncounty.org",
        href: "mailto:sgauthier@cac-lincolncounty.org",
      },
      {
        label: "Lilly Fostvedt, Guardian ad Litem, lfostvedt@yahoo.com",
        href: "mailto:lfostvedt@yahoo.com",
      },
    ],
    links: [
      {
        label: "Lincoln County DSS foster care and adoption",
        href: "https://www.lincolncountync.gov/265/Foster-Care-and-Adoption",
      },
      { label: "The Advocate Mission", href: "https://www.theadvocate.us/" },
      { label: "Fostering Grace", href: "https://fosteringgracenc.org/" },
      {
        label: "Fostering Grace Facebook",
        href: "https://www.facebook.com/fostering.grace.nc",
      },
      { label: "Child Advocacy Center", href: "http://www.cac-lincolncounty.org/" },
      { label: "Sipe’s Orchard Home", href: "https://www.sipesorchardhome.org/" },
      {
        label: "Sipe’s Orchard Home Facebook",
        href: "https://www.facebook.com/SipesOrchardHomeNC/",
      },
      {
        label: "Guardian ad Litem Facebook",
        href: "https://www.facebook.com/lcncgal/",
      },
    ],
    figures: [
      {
        src: "https://denverumc.org/df_media/W1siZiIsIjIwMjYvMDEvMjkvMDAvMTgvMTIvNjcyM2JkYmQtMWEzZC00OTUzLTk1YjEtMDM0ODI1MjUzNjAzL0RTUy5qcGciXV0/DSS.jpg?sha=538876bc3ab2bd3c",
        alt: "DSS",
      },
      {
        src: "https://denverumc.org/df_media/W1siZiIsIjIwMjYvMDEvMjkvMDAvMTgvMTMvMjM0MDNjNGMtY2M0NC00ZjJiLThmOGUtMDQ4NDcxOGUyZGQ5L1RoZSBBZHZvY2F0ZS5qcGciXV0/The%20Advocate.jpg?sha=2214450c6b627c9c",
        alt: "The Advocate",
      },
      {
        src: "https://denverumc.org/df_media/W1siZiIsIjIwMjYvMDEvMjkvMDAvMTgvMTIvNzU5ZjkwOTAtMzIyNy00NzU4LWJlMTQtNzNlNmUzYzQ0MzM4L0Zvc3RlcmluZyBHcmFjZS5qcGciXV0/Fostering%20Grace.jpg?sha=28e6e32f8cfa7aa0",
        alt: "Fostering Grace",
      },
      {
        src: "https://denverumc.org/df_media/W1siZiIsIjIwMjYvMDEvMjkvMDAvMTgvMTIvNzY1YWExZTAtYmFiZC00NWZlLWEzYTctOWU4ODBkMzkzYjE4L0NoaWxkIEFkdm9jYWN5IENlbnRlciAoMSkuanBnIl1d/Child%20Advocacy%20Center%20%281%29.jpg?sha=1f1ebd3fae9917ca",
        alt: "Child Advocacy Center",
      },
      {
        src: "https://denverumc.org/df_media/W1siZiIsIjIwMjYvMDEvMjkvMDAvMTgvMTMvMTQ2ODRlMjUtNTRkZi00MTNhLWJkNmUtMDc1MTcwNDFjOTFmL1NpcGVzIE9yY2hhcmQuanBnIl1d/Sipes%20Orchard.jpg?sha=3445ed839289af01",
        alt: "Sipe’s Orchard",
      },
      {
        src: "https://denverumc.org/df_media/W1siZiIsIjIwMjYvMDEvMjkvMDAvMTgvMTIvODcxMWRhYjYtMWQwYS00YzI4LWE3NTYtYmVlZTkzY2NmNTgzL0d1YXJkaWFuIGFkIExpdGVtLmpwZyJdXQ/Guardian%20ad%20Litem.jpg?sha=2afdf1b114afe2fa",
        alt: "Guardian ad Litem",
      },
    ],
    notes: [
      "The October newsletter says foster care in Lincoln County has 82 children in the system and 33 foster families. More families and supporting churches are needed. Email amber.mayo@lincolncountync.gov. Amy Ramsey is listed with the foster-family partners. Amber Mayo is listed in the October newsletter. They are different people.",
      "A “Be Present” event is described as having been successful. No date is listed.",
      "The October newsletter lists Fostering Grace needs: Walmart and fast-food gift cards; diapers in sizes newborn, 1, and 2; a Denver-area storage unit.",
      "The October newsletter says Sipe’s Orchard Home supports residents 16–21 who do not have the financial, academic, emotional, or behavioral skills necessary for independent living.",
    ],
  },
  {
    slug: "building-repair",
    name: "Building & Repair Team",
    sentence:
      "The Building & Repair Team builds handicap ramps and decks, and makes certain repairs to unsafe homes for those who cannot afford to make the repairs themselves.",
    image: `${card}/2025/11/10/20/02/15/32311c75-91a1-4c99-89b1-cc9f8580bd95/Building-and-Repair-Team.jpg`,
    detailImage: `${card}/2025/11/10/17/44/44/5a133de2-2e54-4bee-828b-01aa87aec9da/Building-and-Repair-Team.jpg`,
    group: "care",
    paragraphs: [
      "The Building & Repair Team builds handicap ramps and decks, and makes certain repairs to unsafe homes for those who cannot afford to make the repairs themselves.",
      "Eligibility rules, a service area, a schedule, and a request form are not listed.",
    ],
    contacts: [
      {
        label: "Wally Mlynarski, wzm.fish@gmail.com",
        href: "mailto:wzm.fish@gmail.com",
      },
    ],
    notes: [
      "The October newsletter says the team removed a metal ramp in September and had work scheduled for a Thursday. The date is not listed.",
    ],
  },
  {
    slug: "sewing-ladies",
    name: "Sewing Ladies",
    sentence:
      "Our wonderful Sewing Ladies meet on Monday mornings from 9:00 a.m. to noon.",
    image: `${card}/2025/11/12/03/05/47/a50ddc71-5193-42a5-98f2-de0d005b699d/Sewing-Ladies.jpg`,
    detailImage: `${card}/2025/11/11/15/51/10/b4005124-c4ba-445b-8f2d-cf0046a72611/Sewing-Ladies.jpg`,
    group: "care",
    paragraphs: [
      "Our wonderful Sewing Ladies meet on Monday mornings from 9:00 a.m.–noon. They make pillowcase dresses given to little girls around the world through regional and international mission teams, and stockings filled with toiletries and treats for local middle and high school students. They have also made embroidered walker tote bags for assisted living, quilts for a birthing center in Haiti, and costumes for a children’s Christmas play.",
      "Volunteers can sew, measure, cut, or iron. No room is named. Monday mornings are the only schedule.",
    ],
    schedule: ["Mondays, 9:00 a.m.–noon. Room not stated."],
    contacts: [
      {
        label: "Wanda Reynolds, wandareynolds@gmail.com",
        href: "mailto:wandareynolds@gmail.com",
      },
    ],
  },
  {
    slug: "prayer-shawl",
    name: "Prayer Shawl Ministry",
    sentence:
      "The mission of the Prayer Shawl Ministry is to provide hope, comfort, and healing.",
    image: `${card}/2025/11/12/03/06/24/0214d867-cfca-4d4e-95d6-7c592228980a/Prayer-Shawl-Ministry.jpg`,
    detailImage: `${card}/2025/11/11/15/31/18/7d998acb-6cfb-4abe-ab57-9f959a0e8eca/Prayer-Shawl-Ministry.jpg`,
    group: "care",
    paragraphs: [
      "The mission of the Prayer Shawl Ministry is to provide hope, comfort, and healing. It is a unique way of reaching out to the community in a very tactile way. A prayer shawl can be seen as a symbolic “hug” from God.",
      "Open to all skill levels. Shawls can be made at home and given to a member to be blessed. The Prayer Shawl Ministry meets monthly in the library. Shawls are also given to celebrate happy occasions.",
      "Sunday, October 18, 2026, 4:00–6:00 p.m., in the library. New knitters and crocheters are welcome to come and learn to knit or crochet and make prayer shawls that will be prayed over and given to suffering neighbors.",
    ],
    schedule: [
      "Monthly, in the library.",
      "Sunday, October 18, 2026, 4:00–6:00 p.m.",
    ],
    contacts: [
      {
        label: "Shawn Eudy, shawnwyatteudy52@gmail.com",
        href: "mailto:shawnwyatteudy52@gmail.com",
      },
      { label: "Carla Freeman, freecef@aol.com", href: "mailto:freecef@aol.com" },
    ],
    links: [
      {
        label: "October 18, 2026 event page",
        href: "https://www.denverumc.org/events/prayer-shawl-ministry/2026-10-18",
      },
      {
        label: "Save October 18 to your calendar",
        href: "https://www.denverumc.org/events/prayer-shawl-ministry/2026-10-18.ics",
      },
    ],
    notes: [
      "The next prayer-shawl date after October 18, 2026 is not listed.",
    ],
  },
  {
    slug: "lakewood-tv",
    name: "Lakewood TV Project",
    sentence:
      "After years of supporting the residents of Lakewood Care Center, we realized that Lakewood Care Center had one community TV for all residents to share.",
    image: `${card}/2025/11/10/20/26/15/b6db57b8-2747-44c2-8553-97150fc701a0/Lakewood-TV-Project.jpg`,
    detailImage: `${card}/2025/11/10/20/20/57/409805ff-ae8f-4696-93f0-5c3a97d83d51/Lakewood-TV-Project.jpg`,
    group: "care",
    paragraphs: [
      "After years of supporting the residents of Lakewood Care Center, we realized that Lakewood Care Center had one community TV for all residents to share. We purchased TVs, mounted them to the walls, negotiated a contract with DirecTV, and sought sponsors to fund a year's service for the room of every resident who was cognitively and/or physically able to manipulate the remote control. This program continues thanks to the kind hearts and generosity of these sponsors.",
      "To sponsor TV service for a room: helpinghandsdenvernc@gmail.com.",
    ],
    contacts: [
      {
        label: "helpinghandsdenvernc@gmail.com",
        href: "mailto:helpinghandsdenvernc@gmail.com",
      },
    ],
    notes: [
      "The October newsletter says service for all 13 TVs is $200 a month.",
    ],
  },
  {
    slug: "rake-n-run",
    name: "Rake 'n Run",
    sentence:
      "Our annual Rake 'n Run is in partnership with East Lincoln Christian Ministries.",
    image: `${card}/2025/11/12/03/06/25/9468a692-f2e7-4342-9b26-3ab356132654/Rake-%2527n-Run.jpg`,
    detailImage: `${card}/2025/11/11/15/35/40/8f7cfe9e-8ef6-4513-9966-0a5638085572/Rake-%2527n-Run.jpg`,
    group: "care",
    paragraphs: [
      "Our annual Rake 'n Run is in partnership with East Lincoln Christian Ministries. Volunteers rake and remove leaves for those who would have a difficult time accomplishing the task without help. All ages are encouraged to participate.",
      "No year, date, time, or contact is listed with the program.",
    ],
    notes: [
      "Rake ’n Run’s signup is the 2025 form. It says: Join us Saturday, November 22nd, meet at 9:00 a.m. in the parking lot behind the Community Garden, bring family, friends, rakes, blowers and gas, trucks, leaf bags, and water. Contact Rich Benson, richjuliebenson@gmail.com. The event will be cancelled if the weather does not permit raking. The form asks for Your Name, Best Way to Reach You, Email, Phone, and How did you hear about Rake 'n run.",
      "November 22, 2025 has passed. That date is not this year’s event, and no current date is listed.",
    ],
    links: [
      { label: "Rake 'n Run (2025) form", href: "https://forms.ministryforms.net/viewForm.aspx?formid=c0d0ff66-46d2-45e6-a3bd-a75e70d8ec48" },
    ],
    contacts: [
      {
        label: "Rich Benson, 2025 form: richjuliebenson@gmail.com",
        href: "mailto:richjuliebenson@gmail.com",
      },
    ],
  },
  {
    slug: "homeless",
    name: "Homeless Ministries",
    sentence:
      "Homeless Ministries lists four partner efforts: Soul to Soul Outreach, The Hesed House of Hope, Journey of Hope, and Room in the Inn.",
    badge: "Partners",
    image: `${card}/2026/01/28/19/48/43/4665d309-3752-4a91-a29a-cebc379a2449/Homeless.jpg`,
    detailImage: `${card}/2026/01/28/16/08/12/f2fc0abd-e9bb-4491-8523-38b54e6ef96d/Homeless.jpg`,
    group: "network",
    paragraphs: [
      "Soul to Soul Outreach works to meet the needs of the homeless and indigent through advocacy, connection to resources, and spiritual guidance. Phone (704) 966-7785. Email soultosouloutreach22@gmail.com.",
      "The Hesed House of Hope is a non-profit organization and is currently the only homeless shelter in Lincoln County.",
      "Journey of Hope helps those experiencing chronic homelessness and/or those in danger of becoming homeless by providing love, support, and tangible items that are needed daily. It provides Christ-centered services to the poor, hungry, and unsheltered homeless through outreach, food/meals, blessing bags, and advocacy.",
      "Room in the Inn. We provide dinner, showers, a warm bed, and breakfast with other local churches in the summer to provide respite from the heat and in the winter for relief from the cold. Interested in volunteering? Text RITI to 980-389-7674.",
      "These are partner organizations. They are not a Helping Hands walk-in office.",
    ],
    contacts: [
      { label: "Soul to Soul, (704) 966-7785", href: "tel:+17049667785" },
      {
        label: "Soul to Soul, soultosouloutreach22@gmail.com",
        href: "mailto:soultosouloutreach22@gmail.com",
      },
      { label: "Room in the Inn: text RITI to 980-389-7674" },
    ],
    links: [
      { label: "Soul to Soul Outreach", href: "https://www.soultosouloutreach.org/" },
      { label: "The Hesed House of Hope", href: "https://www.hesedhouseofhope.com/" },
      { label: "Journey of Hope", href: "https://www.journeyofhopeministry.com/" },
      {
        label: "Journey of Hope Facebook",
        href: "https://www.facebook.com/journeyofhopeministrync",
      },
    ],
    figures: [
      {
        src: "https://denverumc.org/df_media/W1siZiIsIjIwMjYvMDEvMjgvMTYvMjEvNDIvYzk3MzZlNDMtYmRiYy00N2Q5LTllZDEtMWY1MjIwYzFkZjg2L1NvdWwgdG8gU291bC5qcGciXV0/Soul%20to%20Soul.jpg?sha=863bde30af535048",
        alt: "Soul to Soul",
      },
      {
        src: "https://denverumc.org/df_media/W1siZiIsIjIwMjYvMDEvMjgvMTYvMjEvNDIvOGMyMWFjMDgtZTVlZS00MzNmLWExMmItN2UyNzExMDdiYjhiL0hlc2VkIEhvdXNlLmpwZyJdXQ/Hesed%20House.jpg?sha=ed494096b22510dd",
        alt: "Hesed House",
      },
      {
        src: "https://denverumc.org/df_media/W1siZiIsIjIwMjYvMDEvMjgvMTYvMTIvNTkvNDBhNWM1ZjUtYmRhOS00YTdjLWEwMWYtNDc0OWE4ZmQ1OWVlL0pvdXJuZXkgb2YgSG9wZS5qcGciXV0/Journey%20of%20Hope.jpg?sha=2f8833cde97dcad6",
        alt: "Journey of Hope",
      },
      {
        src: "https://denverumc.org/df_media/W1siZiIsIjIwMjYvMDEvMjgvMTYvMjEvNDIvZTI1NmEwMzctYzJhNy00OTY5LWIwMzEtZWFjY2M3MjFmMDg5L1Jvb20gaW4gdGhlIElubi5qcGciXV0/Room%20in%20the%20Inn.jpg?sha=a27760b7c7ffbe47",
        alt: "Room in the Inn",
      },
    ],
    notes: [
      "The October newsletter lists the Hesed House Fashion Show on November 7, 6:00–9:00 p.m., at the James Warren Citizens Center. Tickets are $20. hesedhousedirector@gmail.com. Snacks for check-in are always needed.",
      "Soul to Soul “Soles for Souls” trail run, October 24, registration 8:15 a.m. if minimum numbers are met, 9:00 a.m. start. Event page: https://www.soultosouloutreach.org/events-1. The newsletter also thanks Furnish a Future, United Way, and Emmanuel Lutheran Church in connection with two partners getting apartments.",
      "The October newsletter lists Journey of Hope support as outreach, food/meals, blessing bags, financial assistance, and budgeting guidance.",
    ],
  },
  {
    slug: "harbour-health",
    name: "Harbour Health",
    sentence:
      "With nearly 800 abortions taking place in our county each year, your help is vital to saving lives.",
    badge: "Partner",
    image: `${card}/2025/11/10/20/26/16/5f458174-d5fa-4a8d-89de-e2f7d992c929/Harbour-Health.jpg`,
    detailImage: `${card}/2025/11/10/20/09/07/545f0ec3-5175-444d-bfdc-099f8a21bbb1/Harbour-Health.jpg`,
    group: "network",
    paragraphs: [
      "Formerly Heartbeats. “BE A PARTNER IN CHANGING HEARTS & SAVING LIVES.”",
      "With nearly 800 abortions taking place in our county each year, your help is vital to saving lives.",
      "Harbour Health asks people to spread awareness about abortion in the area. No local phone, hours, or address are listed.",
    ],
    links: [{ label: "Harbour Health website", href: "https://supportheartbeats.org/" }],
    notes: [
      "The October newsletter says Harbour Health has 50 active clients and provided 8 pregnancy tests, 20 ultrasounds, and 2 babies were born. It also mentions a Medical Mobile Unit and holiday sponsorship for active clients, with more to come. It also calls the program Harbour Health (Heartbeats) Women’s Center and says it provides free pregnancy tests, ultrasounds, counseling, and needed supplies for women experiencing an unexpected pregnancy.",
    ],
  },
  {
    slug: "amys",
    name: "Amy's Closet & Amy's House",
    sentence:
      "Amy's Closet is a Not-for-Profit resale shop that benefits Amy's House (Lincoln County Coalition Against Domestic Violence, a 501(c)3 organization).",
    badge: "Partner",
    image: `${card}/2025/10/30/13/16/06/e6ded960-3c3c-4c10-b066-9a5bd7c0646f/1.png`,
    detailImage: `${card}/2025/10/29/12/17/00/476f7d98-b784-4ef0-8b0d-712de6be493d/1.png`,
    group: "network",
    paragraphs: [
      "Amy's Closet is a Not-for-Profit resale shop that benefits Amy's House (Lincoln County Coalition Against Domestic Violence, a 501(c)3 organization).",
      "1584B Hwy 16, Denver, (704) 483-5515.",
      "849 S. Laurel St., Lincolnton, (704) 240-3688.",
      "Store hours are not listed.",
    ],
    contacts: [
      { label: "Denver store, (704) 483-5515", href: "tel:+17044835515" },
      { label: "Lincolnton store, (704) 240-3688", href: "tel:+17042403688" },
    ],
    links: [
      {
        label: "Amy's Closet Facebook",
        href: "https://www.facebook.com/profile.php?id=100066918399440#",
      },
      { label: "Amy's House website", href: "https://lincolncounty-cadv.org/" },
      {
        label: "Volunteer or donate to Amy's House",
        href: "https://lincolncounty-cadv.org/how-you-can-help/",
      },
      {
        label: "Wish list",
        href: "https://www.amazon.com/registries/gl/guest-view/G5BP0SOVFZ75",
      },
    ],
    notes: [
      "The October newsletter says Amy’s Closet sells like-new clothing to support Amy’s House, is open Tuesday–Saturday starting at 10:00 a.m., and that volunteer applications are available in the stores. A closing time is not listed.",
    ],
  },
  {
    slug: "missional-network",
    name: "Missional Network",
    sentence:
      "Our mission is to reach out to the local community in a variety of ways, including conducting home repairs and hosting events to allow the community to come together.",
    badge: "Church network",
    image: `${card}/2025/11/11/13/57/50/da08ae7d-737d-4fb8-ac2c-29b0118e32c9/Missional-Network.jpg`,
    detailImage: `${card}/2025/11/10/21/12/23/29588c9a-9af3-48de-8ddc-0da6f7f77ee9/Missional-Network.jpg`,
    group: "network",
    paragraphs: [
      "Also called United Methodist Friends.",
      "Our mission is to reach out to the local community in a variety of ways, including conducting home repairs and hosting events to allow the community to come together. Events we host include bi-annual workdays, bi-annual community fun days, and a spring and summer program for children.",
      "Churches named: Bethel, Denver, Ebenezer, Fairfield, Hill's Chapel, New Covenant, Rock Hill, Salem, St. James, Tucker's Grove, and Webb's Chapel.",
    ],
    links: [
      {
        label: "United Methodist Friends on Facebook",
        href: "https://www.facebook.com/Unitedmethodistfriends",
      },
    ],
    notes: [
      "The October newsletter lists a Missional Network Family Fun Day on October 24 at Rock Springs Campground, 11:00–2:00.",
    ],
  },
  {
    slug: "first-thursday",
    name: "First Thursday Lunch",
    sentence:
      "First Thursday Lunch is prepared and sold to the community on the first Thursday of each month (September–May).",
    image: `${card}/2025/11/10/20/02/15/99b51afa-34b1-42e2-881d-cf99e3e5d7ba/First-Thursday-Lunch.jpg`,
    detailImage: `${card}/2025/11/10/18/17/26/fe7d9980-9640-44ea-b295-e6798bdc4233/First-Thursday-Lunch.jpg`,
    group: "fundraising",
    paragraphs: [
      "First Thursday Lunch is prepared and sold to the community on the first Thursday of each month (September–May). Lunch options include chicken pie or baked spaghetti with sides or a hot dog meal. All proceeds help local children and their families.",
      "A complete meal with dessert and a drink is $10. 8x8 pies are $12.",
      "This is a fundraiser, not a free pantry. Birdies says it is funded through this lunch.",
      "Volunteer times: Wednesday before the lunch at 9:00 a.m. in the FLC to pick chicken, and Thursday 11:00 a.m.–1:00 p.m. to serve and clean up. The published location is FLC.",
      "Delicious homemade desserts are always appreciated.",
      "Pie orders: call the church office or email Beth Bynum, receptionist@denverumc.org. The church office phone is 704-483-1601.",
    ],
    schedule: [
      "First Thursday, September–May, 11:00 a.m.–1:00 p.m., in FLC.",
      "Next date: Thursday, November 5, 2026.",
      "Wednesday before the lunch, 9:00 a.m., in the FLC, to pick chicken.",
    ],
    contacts: [
      { label: "Denzil Bell, denzilmbell@gmail.com", href: "mailto:denzilmbell@gmail.com" },
      {
        label: "Wendi Sweet, desserts, wendi.sweet@denverumc.org",
        href: "mailto:wendi.sweet@denverumc.org",
      },
      {
        label: "Beth Bynum, pie orders, receptionist@denverumc.org",
        href: "mailto:receptionist@denverumc.org",
      },
      { label: "Church office, 704-483-1601", href: "tel:+17044831601" },
    ],
    links: [
      {
        label: "November 5, 2026 lunch page",
        href: "https://www.denverumc.org/events/first-thursday-lunch/2026-11-05",
      },
      {
        label: "Save November 5 to your calendar",
        href: "https://www.denverumc.org/events/first-thursday-lunch/2026-11-05.ics",
      },
    ],
    notes: [
      "December 3, 2026 is a later lunch date. Its details are not listed.",
    ],
  },
  {
    slug: "golf",
    name: "Charlie Blackburn Memorial Golf Tournament",
    sentence:
      "Our annual golf tournament supports our many ministries, is a great day of fellowship, and helps spread the word to anyone looking for local outreach opportunities.",
    image: `${card}/2025/11/10/20/02/15/f4f00436-1722-4fe8-afd0-4c740d55bc2c/Golf-Tournament.jpg`,
    detailImage: `${card}/2025/11/10/19/59/58/39ceddf4-17cd-48db-8bcb-fe26f7a25314/Golf-Tournament.jpg`,
    group: "fundraising",
    paragraphs: [
      "Our annual golf tournament supports our many ministries, is a great day of fellowship, and helps spread the word to anyone looking for local outreach opportunities.",
      "Visit the Denver UMC Facebook page for pictures from the 2026 tournament held on April 27.",
      "There is no course, fee, or registration link. The next date is Monday, April 26, 2027, 11:00 a.m.–6:00 p.m. Save the Date. No place is listed.",
    ],
    schedule: ["Monday, April 26, 2027, 11:00 a.m.–6:00 p.m. Save the Date. No place is listed."],
    links: [
      {
        label: "2026 tournament pictures on Facebook",
        href: "https://www.facebook.com/share/p/1GPqkkokeb/",
      },
      {
        label: "April 26, 2027 event page",
        href: "https://www.denverumc.org/events/golf-tournament/2027-04-26",
      },
    ],
  },
];

export const supportProgram = {
  name: "Support Helping Hands",
  sentence:
    "At age 74, David Garmon is taking on another half-triathlon — this time to raise funds for the Ministries of Helping Hands.",
  image: `${card}/2026/09/04/01/55/14/e2b7993a-9441-4e37-88ac-c57b56d3b495/HH-labels-new-25-1500-x-784-px.jpg`,
  detailImage: `${card}/2026/09/04/01/54/30/67c013f5-3af9-4b77-baa3-0fda9c469af1/HH-labels-new-25-1500-x-784-px.jpg`,
};

export const handUpCard = {
  name: "The Hand Up Newsletter",
  sentence:
    "The Hand Up is the Helping Hands newsletter. Issues are PDF downloads.",
  image: `${card}/2025/10/29/12/14/09/57ffa8ed-cc06-4b3d-a921-63461b3a3d7d/the-Hand-up.png`,
  detailImage: `${card}/2025/10/29/12/13/55/632e5679-518f-48bd-acd1-1bbc5f0e05ab/the-Hand-up.png`,
};
