import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl [&>*]:max-w-3xl px-5 py-16">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 display">That page is not here</h1>
      <p className="mt-4 text-lg">
        Helping Hands does not have a page at this address. Try Home, Get Help,
        Programs, Partners, Volunteer, Donate, Events, About, or Contact.
      </p>
      <ButtonLink href="/" className="mt-8 w-fit">
        Back to home
      </ButtonLink>
    </main>
  );
}
