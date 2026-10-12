import { MinistryPage, ministryMetadata } from "@/components/ministry-page";

export const metadata = ministryMetadata("backpacks");

export default function BackpacksPage() {
  return <MinistryPage slug="backpacks" />;
}
