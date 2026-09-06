import type { Metadata } from "next";
import JournalCard from "@/components/JournalCard";
import Reveal from "@/components/Reveal";
import { getJournalPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on light, travel, gear and the craft of candid photography.",
};

export default async function JournalPage() {
  const posts = await getJournalPosts();

  return (
    <main className="px-6 pb-28 pt-36 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[13px] text-ink/50">Journal</p>
          <h1 className="mt-3 max-w-2xl font-display text-5xl font-light leading-tight text-ink md:text-6xl">
            Notes on light, travel and the craft.
          </h1>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={(i % 3) * 0.08}>
              <JournalCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
