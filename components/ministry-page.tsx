import { ButtonLink, TextLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { programs, type Program } from "@/lib/programs";

const accessCopy: Record<string, string[]> = {
  asbury: [
    "School shopping is listed for November 3, and Sunrise shopping for November 7, both 9:00 a.m.–2:30 p.m.",
  ],
  "furnish-a-future": [
    "Tuesday sorting is published as 10:00 a.m.–noon and as 9:00–11:00 a.m. Mission Depot is open Tuesdays 9:00–11:00 a.m., or by appointment.",
  ],
};

export function MinistryPage({ slug }: { slug: string }) {
  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    return null;
  }

  const extra = accessCopy[program.slug] ?? [];
  const shown = new Set(program.paragraphs);
  const access = extra.filter((line) => !shown.has(line));

  return (
    <main>
      <PageIntro title={program.name} lede={program.sentence} />
      <div className="mx-auto max-w-6xl [&>*]:max-w-3xl space-y-8 px-5 py-12">
        {program.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {access.length > 0 ? (
          <section className="space-y-3">
            <h2 className="section-title">How to access</h2>
            {access.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </section>
        ) : null}

        {program.contacts && program.contacts.length > 0 ? (
          <section className="space-y-3">
            <h2 className="section-title">Contact</h2>
            <ul className="space-y-2">
              {program.contacts.map((contact) => (
                <li key={contact.label}>
                  {contact.href ? (
                    <TextLink href={contact.href}>{contact.label}</TextLink>
                  ) : (
                    contact.label
                  )}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {program.links && program.links.length > 0 ? (
          <ul className="space-y-2">
            {program.links.map((link) => (
              <li key={link.href}>
                <TextLink href={link.href}>{link.label}</TextLink>
              </li>
            ))}
          </ul>
        ) : null}

        <ButtonLink href="/get-help" variant="outline" className="w-fit">
          Get Help
        </ButtonLink>
      </div>
    </main>
  );
}

export function ministryMetadata(slug: string) {
  const program = programs.find((item) => item.slug === slug) as Program;
  return {
    title: program.name,
    description: program.sentence,
  };
}
