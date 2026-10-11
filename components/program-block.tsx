import { TextLink } from "@/components/button-link";
import { Note } from "@/components/note";
import { FittedPhoto } from "@/components/remote-image";
import { Badge } from "@/components/ui/badge";
import type { Program } from "@/lib/programs";

export function ProgramBlock({ program }: { program: Program }) {
  return (
    <article id={program.slug} className="scroll-mt-28 border-t border-border py-12">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-12">
        <div className="flex items-start">
          <FittedPhoto
            src={program.detailImage}
            alt={program.name}
            className="max-h-56"
          />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-3xl text-ink md:text-4xl">{program.name}</h3>
            {program.badge ? <Badge variant="secondary">{program.badge}</Badge> : null}
          </div>
          <div className="mt-5 space-y-4 text-base leading-relaxed">
            {program.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {program.schedule ? (
            <ul className="mt-5 list-disc space-y-1 pl-5">
              {program.schedule.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {program.contacts ? (
            <ul className="mt-5 space-y-1">
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
          ) : null}
          {program.links ? (
            <ul className="mt-4 space-y-1">
              {program.links.map((link) => (
                <li key={link.href}>
                  <TextLink href={link.href}>{link.label}</TextLink>
                </li>
              ))}
            </ul>
          ) : null}
          {program.notes?.map((note) => (
            <div key={note} className="mt-4">
              <Note>{note}</Note>
            </div>
          ))}
          {program.figures ? (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {program.figures.map((figure) => (
                <figure key={figure.src} className="space-y-2">
                  <FittedPhoto src={figure.src} alt={figure.alt} className="max-h-36" />
                  <figcaption className="text-sm text-muted-foreground">{figure.alt}</figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
