import { MinistryPage, ministryMetadata } from "@/components/ministry-page";

export const metadata = ministryMetadata("asbury");

export default function AsburyPage() {
  return <MinistryPage slug="asbury" />;
}
