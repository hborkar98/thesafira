"use client";

import Image from "next/image";
import Link from "next/link";
import { Story } from "@/lib/types";

export default function StoryCard({ story }: { story: Story }) {
  const date = new Date(story.date).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/stories/${story.slug}`}
      className="group mb-8 block break-inside-avoid"
    >
      <div className="relative overflow-hidden bg-espresso/5">
        <Image
          src={story.coverImage}
          alt={story.title}
          width={1200}
          height={1500}
          className="h-auto w-full object-cover transition-transform duration-[1200ms] ease-cinematic group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[12px] text-paper/80">{story.photoCount} photographs</p>
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="font-display text-xl text-ink">{story.title}</h3>
        <span className="text-[12px] text-ink/50">{date}</span>
      </div>
      <p className="mt-1 text-[13px] text-ink/60">{story.location}</p>
    </Link>
  );
}
