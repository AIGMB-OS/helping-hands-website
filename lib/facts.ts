export const donateFormUrl =
  "https://forms.ministryforms.net/viewForm.aspx?formid=4c65cb2b-e8b5-4284-9ad4-5b19cfdcaa30";

export const hhEmail = "helpinghandsdenvernc@gmail.com";

export const logoUrl =
  "https://dq5pwpg1q8ru0.cloudfront.net/2025/11/12/14/32/39/be91cb69-7741-4bf3-b6a5-9d465ed08d0d/Helping-Hands-logo.png";

export const missionParagraph =
  "Helping Hands is an outreach ministry founded at DUMC, featuring compassionate, community-wide volunteers dedicated to serving others in and around Lincoln County. We are well-connected with Lincoln County Schools, Christian Ministries, the domestic abuse and homeless shelters, and other churches and agencies. Because of these long-term relationships, the ministries within Helping Hands work to address the real needs of our neighbors.";

export const taxLine =
  "Helping Hands is a 501(c)(3) nonprofit. Tax ID 39-4766413.";

export const donationsSentence =
  "All donations directly support the mission of Helping Hands.";

export const church = {
  name: "Denver United Methodist Church",
  street: "3910 N. Hwy 16 Business, Denver, NC 28037",
  mailing: "PO Box 661, Denver, NC 28037",
  hours: "Monday–Thursday 10:00 a.m.–3:00 p.m.; Friday closed",
  phone: "704-483-1601",
  phoneHref: "tel:+17044831601",
  email: "denver@denverumc.org",
  map: "https://maps.app.goo.gl/9zGkSojevQNSfehJA",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/get-help", label: "Get Help" },
  { href: "/programs", label: "Programs" },
  { href: "/partners", label: "Partners" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const handUpLatest = {
  label: "The Handup Oct 2026.pdf",
  href: "https://dq5pwpg1q8ru0.cloudfront.net/2026/10/09/11/53/18/99828b18-4e34-4e9b-935a-0f310c9d4bfb/The%20Handup%20%20Oct%202026.pdf",
};

export const handUpArchive = [
  handUpLatest,
  {
    label: "The Handup Sept 2026 (1).pdf",
    href: "https://dq5pwpg1q8ru0.cloudfront.net/2026/09/16/16/58/28/e5a80f8b-c2eb-4a6f-bcc9-bebfc2667392/The%20Handup%20Sept%202026%20(1).pdf",
  },
  {
    label: "The Handup Aug 2026.pdf",
    href: "https://dq5pwpg1q8ru0.cloudfront.net/2026/08/10/20/05/05/7e741f8d-8576-46d5-808e-bf81374c8449/The%20Handup%20Aug%202026.pdf",
  },
  {
    label: "The Handup July 2026.pdf",
    href: "https://dq5pwpg1q8ru0.cloudfront.net/2026/07/09/17/52/05/618bb3f6-40bc-4b08-a2b6-6373e49abde8/The%20Handup%20July%202026.pdf",
  },
  {
    label: "The Handup June 2026.pdf",
    href: "https://dq5pwpg1q8ru0.cloudfront.net/2026/06/08/12/17/43/8d044d9c-80c4-40cc-8307-df87e3137f09/The%20Handup%20June%202026.pdf",
  },
  {
    label: "The Handup May 2026.pdf",
    href: "https://dq5pwpg1q8ru0.cloudfront.net/2026/05/07/13/46/11/f542dd0f-1575-4f1a-9c9a-f7160ff1fb09/The%20Handup%20May%202026.pdf",
  },
  {
    label: "The Handup April 2026.pdf",
    href: "https://dq5pwpg1q8ru0.cloudfront.net/2026/04/08/17/28/15/172d43cf-a58c-44f1-80c4-8048e6d43ce9/The%20Handup%20April%202026.pdf",
  },
  {
    label: "The Handup March 2026.pdf",
    href: "https://dq5pwpg1q8ru0.cloudfront.net/2026/03/05/07/14/45/a19f8c88-68f5-4466-afbd-3cbfb7ba783e/The%20Handup%20March%202026.pdf",
  },
  {
    label: "The Handup January 2026.pdf",
    href: "https://dq5pwpg1q8ru0.cloudfront.net/2026/01/08/22/10/03/00fdb0e2-171f-47d0-9389-1dd55812f664/The%20Handup%20January%202026.pdf",
  },
  {
    label: "The Handup December 2025.pdf",
    href: "https://dq5pwpg1q8ru0.cloudfront.net/2025/12/04/17/59/55/c8b24ade-e93b-4d6c-b000-a630748b5bf8/The%20Handup%20December%202025.pdf",
  },
  {
    label: "The+Handup+November+2025.pdf",
    href: "https://dq5pwpg1q8ru0.cloudfront.net/2025/12/07/04/52/30/027f7fea-daab-4c35-bf68-8c1157f5c931/The+Handup+November+2025.pdf",
  },
];

export const rakeFormUrl =
  "https://forms.ministryforms.net/viewForm.aspx?formid=c0d0ff66-46d2-45e6-a3bd-a75e70d8ec48";

export type ContactRow = {
  name: string;
  role: string;
  contact: string;
  href?: string;
  source: string;
};

export const ministryContacts: ContactRow[] = [
  {
    name: "Leslie Barlowe",
    role: "Asbury Resource Center",
    contact: "lesliebarlowe@gmail.com",
    href: "mailto:lesliebarlowe@gmail.com",
    source: "Asbury Resource Center",
  },
  {
    name: "Julie Doss",
    role: "Backpacks for Kids",
    contact: "julieadoss@gmail.com",
    href: "mailto:julieadoss@gmail.com",
    source: "Backpacks for Kids",
  },
  {
    name: "Jamie Sidler",
    role: "Backpacks for Kids",
    contact: "jsidler07@hotmail.com",
    href: "mailto:jsidler07@hotmail.com",
    source: "Backpacks for Kids",
  },
  {
    name: "Carol Brown",
    role: "Birdies, and Carol for the Community Garden",
    contact: "outreach@denverumc.org",
    href: "mailto:outreach@denverumc.org",
    source: "Birdies and the Community Garden",
  },
  {
    name: "Carol Brown",
    role: "Christmas stockings",
    contact: "carol.brown@denverumc.org",
    href: "mailto:carol.brown@denverumc.org",
    source: "October 2026 newsletter, Christmas stockings",
  },
  {
    name: "Wally Mlynarski",
    role: "Building & Repair Team",
    contact: "wzm.fish@gmail.com",
    href: "mailto:wzm.fish@gmail.com",
    source: "Building & Repair Team",
  },
  {
    name: "Denzil Bell",
    role: "First Thursday Lunch",
    contact: "denzilmbell@gmail.com",
    href: "mailto:denzilmbell@gmail.com",
    source: "First Thursday Lunch",
  },
  {
    name: "Wendi Sweet",
    role: "Dessert donations",
    contact: "wendi.sweet@denverumc.org",
    href: "mailto:wendi.sweet@denverumc.org",
    source: "First Thursday Lunch",
  },
  {
    name: "Beth Bynum",
    role: "Pie orders; church receptionist",
    contact: "receptionist@denverumc.org",
    href: "mailto:receptionist@denverumc.org",
    source: "First Thursday Lunch",
  },
  {
    name: "Amy Ramsey",
    role: "Lincoln County DSS questions",
    contact: "amy.ramsey@lincolncountync.gov",
    href: "mailto:amy.ramsey@lincolncountync.gov",
    source: "Foster Family Ministry",
  },
  {
    name: "Amber Mayo",
    role: "Foster-family details",
    contact: "amber.mayo@lincolncountync.gov",
    href: "mailto:amber.mayo@lincolncountync.gov",
    source: "October 2026 newsletter",
  },
  {
    name: "Sue Gauthier",
    role: "Child Advocacy Center",
    contact: "sgauthier@cac-lincolncounty.org",
    href: "mailto:sgauthier@cac-lincolncounty.org",
    source: "Foster Family Ministry",
  },
  {
    name: "Lilly Fostvedt",
    role: "Guardian ad Litem",
    contact: "lfostvedt@yahoo.com",
    href: "mailto:lfostvedt@yahoo.com",
    source: "Foster Family Ministry",
  },
  {
    name: "Dale Webster",
    role: "Furnish a Future sorting",
    contact: "faf@denverumc.org",
    href: "mailto:faf@denverumc.org",
    source: "Furnish a Future",
  },
  {
    name: "Dennis Lee",
    role: "Furnish a Future moving team",
    contact: "lkndawg@yahoo.com",
    href: "mailto:lkndawg@yahoo.com",
    source: "Furnish a Future",
  },
  {
    name: "Darlene Melton",
    role: "The Little Pantry",
    contact: "marvinjmelton@bellsouth.net",
    href: "mailto:marvinjmelton@bellsouth.net",
    source: "The Little Pantry",
  },
  {
    name: "Mary Repko",
    role: "Rock Springs mentoring",
    contact: "repkomary@gmail.com",
    href: "mailto:repkomary@gmail.com",
    source: "School Mentoring",
  },
  {
    name: "Christina Sutton",
    role: "Asbury Academy",
    contact: "christinasuttontransition@gmail.com",
    href: "mailto:christinasuttontransition@gmail.com",
    source: "School Mentoring",
  },
  {
    name: "Bob Smith",
    role: "Battleground Elementary",
    contact: "bobs709356@gmail.com",
    href: "mailto:bobs709356@gmail.com",
    source: "School Mentoring",
  },
  {
    name: "Shawn Eudy",
    role: "Prayer Shawl Ministry",
    contact: "shawnwyatteudy52@gmail.com",
    href: "mailto:shawnwyatteudy52@gmail.com",
    source: "Prayer Shawl Ministry",
  },
  {
    name: "Carla Freeman",
    role: "Prayer Shawl Ministry",
    contact: "freecef@aol.com",
    href: "mailto:freecef@aol.com",
    source: "Prayer Shawl Ministry",
  },
  {
    name: "Rich Benson",
    role: "Rake 'n Run questions on the 2025 form",
    contact: "richjuliebenson@gmail.com",
    href: "mailto:richjuliebenson@gmail.com",
    source: "Rake 'n Run (2025) form",
  },
  {
    name: "Wanda Reynolds",
    role: "Sewing Ladies",
    contact: "wandareynolds@gmail.com",
    href: "mailto:wandareynolds@gmail.com",
    source: "Sewing Ladies",
  },
  {
    name: "Charlie Cicio",
    role: "ELCM Thanksgiving food",
    contact: "631-455-8989",
    href: "tel:+16314558989",
    source: "October 2026 newsletter",
  },
  {
    name: "David Garmon",
    role: "Half-triathlon fundraiser",
    contact: "Support Helping Hands! form",
    href: donateFormUrl,
    source: "Support Helping Hands",
  },
];
