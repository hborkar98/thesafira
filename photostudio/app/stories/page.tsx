import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import Reveal from "@/components/Reveal";
import { getAllStories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "A collection of candid wedding and travel stories, photographed across Pune, Goa, Rajasthan, Mumbai and beyond.",
};

export default async function StoriesPage() {
  const stories = await getAllStories();

  return (
    <main className="px-6 pb-28 pt-36 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[13px] text-ink/50">Stories</p>
          <h1 className="mt-3 max-w-2xl font-display text-5xl font-light leading-tight text-ink md:text-6xl">
            Not just photographs. Stories you can feel.
          </h1>
        </Reveal>

        <div className="mt-16">
          <PortfolioGrid stories={stories} />
        </div>
      </div>
    </main>
  );
}
