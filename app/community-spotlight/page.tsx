import { CommunityStoryForm } from "@/components/community-story-form";
import { PageIntro } from "@/components/page-intro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Share a Community Story",
  description:
    "Is there a person in the community you think we should spotlight? Someone helping others or a story you want to share? We'd love to hear about it.",
};

export default function CommunitySpotlightPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Community Spotlight"
        title="Share a Community Story"
        lede="Is there a person in the community you think we should spotlight? Someone helping others or a story you want to share? We'd love to hear about it."
      />
      <div className="mx-auto max-w-6xl [&>*]:max-w-3xl px-5 py-12">
        <div className="rounded-xl border border-border bg-card p-5 sm:p-8">
          <CommunityStoryForm />
        </div>
      </div>
    </main>
  );
}
