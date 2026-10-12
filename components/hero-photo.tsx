import { missionParagraph } from "@/lib/facts";
import { Gift, HandHelping, Heart } from "lucide-react";
import Link from "next/link";

const missionParts = [
  "Helping Hands is an outreach ministry founded at DUMC, featuring ",
  "compassionate, community-wide volunteers",
  " dedicated to serving others in and around Lincoln County. We are well-connected with Lincoln County Schools, Christian Ministries, the domestic abuse and homeless shelters, and other churches and agencies. Because of these ",
  "long-term relationships",
  ", the ministries within Helping Hands work to address the ",
  "real needs of our neighbors",
  ".",
] as const;

export function HomeHero() {
  const plainMission = missionParts.join("");
  const emphasized = plainMission === missionParagraph;

  return (
    <section id="hero" aria-labelledby="hero-heading">
      {/* Approved photograph only. The introduction sits under it. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero.jpg"
        alt="Volunteers handing over a box of donated food"
        className="media"
      />
      <div className="wrap section">
        <div className="mission-grid">
          <h1 id="hero-heading" className="display">
            Building Community Through Service
          </h1>
          <div>
            {emphasized ? (
              <p className="mission-copy">
                {missionParts[0]}
                <strong>{missionParts[1]}</strong>
                {missionParts[2]}
                <strong>{missionParts[3]}</strong>
                {missionParts[4]}
                <strong>{missionParts[5]}</strong>
                {missionParts[6]}
              </p>
            ) : (
              <p className="mission-copy">{missionParagraph}</p>
            )}
            <div className="btn-row">
              <Link href="/get-help" className="btn btn-primary">
                <HandHelping aria-hidden="true" />
                Get Help
              </Link>
              <Link href="/volunteer" className="btn btn-secondary">
                <Heart aria-hidden="true" />
                Volunteer
              </Link>
              <Link href="/donate" className="btn btn-dark">
                <Gift aria-hidden="true" />
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
