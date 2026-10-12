import { MinistryPage, ministryMetadata } from "@/components/ministry-page";

export const metadata = ministryMetadata("little-pantry");

export default function LittlePantryPage() {
  return <MinistryPage slug="little-pantry" />;
}
