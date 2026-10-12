import { DavidFundraiserFeature } from "@/components/david-fundraiser-feature";
import {
  davidFundraiserDescription,
  davidFundraiserTitle,
} from "@/lib/david-garmon";
import { donateFormUrl } from "@/lib/facts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: davidFundraiserTitle,
  description: davidFundraiserDescription,
};

export default function DavidGarmonPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <DavidFundraiserFeature heading="h1" actionHref={donateFormUrl} />
      </div>
    </main>
  );
}
