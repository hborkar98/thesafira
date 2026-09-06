import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import Reveal from "@/components/Reveal";
import { getStoriesByCategory } from "@/lib/data";

export const metadata: Metadata = {
  title: "Couple Shoot",
  description:
    "Pre-wedding and couple photography from theSafira — shot in the places that actually mean something to you, not a studio backdrop.",
};

export default async function CoupleShootPage() {
  const stories = await getStoriesByCategory("Couple");

  return (
    <main className="px-6 pb-28 pt-36 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[13px] text-ink/50">Couple Shoot</p>
          <h1 className="mt-3 max-w-2xl font-display text-5xl font-light leading-tight text-ink md:text-6xl">
            Your story, before the wedding day.
          </h1>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink/65">
            Shot in the places that already mean something to you — a
            favourite street, a childhood home, a farm, a coastline — rather
            than a studio backdrop.
          </p>
        </Reveal>

        <div className="mt-16">
          {stories.length > 0 ? (
            <PortfolioGrid stories={stories} />
          ) : (
            <p className="text-[15px] text-ink/50">
              New couple shoots are added regularly — check back soon.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
