"use client";

import Link from "next/link";
import { useState } from "react";
import { Story, TravelLocation } from "@/lib/types";
import Reveal from "./Reveal";

export default function TravelSection({
  locations,
  stories,
}: {
  locations: TravelLocation[];
  stories: Story[];
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = locations.find((l) => l.id === activeId);
  const activeStories = active
    ? stories.filter((s) => active.storySlugs.includes(s.slug))
    : [];

  return (
    <section className="bg-espresso px-6 py-28 text-paper md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[13px] text-paper/50">Wherever the story takes us</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-light leading-tight md:text-5xl">
            Travelling across India, and beyond.
          </h2>
          <p className="mt-3 text-[14px] text-paper/60">Available worldwide.</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr]">
          <Reveal delay={0.1}>
            {/* Stylised, illustrative map — not geographically precise */}
            <div className="relative aspect-[3/4] max-w-md rounded-sm bg-paper/5 p-6 sm:aspect-[4/5]">
              <svg viewBox="0 0 100 100" className="h-full w-full opacity-20">
                <path
                  d="M40 4 C55 4 60 14 62 22 C70 26 76 34 74 44 C82 50 80 62 72 66 C74 76 66 84 58 82 C56 90 46 96 40 90 C32 96 24 90 26 82 C16 80 14 68 20 62 C12 56 14 44 22 40 C20 30 28 20 38 20 C36 12 34 6 40 4 Z"
                  fill="currentColor"
                />
              </svg>

              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveId(loc.id === activeId ? null : loc.id)}
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  aria-label={loc.name}
                >
                  <span
                    className={`block h-2.5 w-2.5 rounded-full border transition-all ${
                      activeId === loc.id
                        ? "scale-150 border-paper bg-paper"
                        : "border-paper/60 bg-paper/20 hover:bg-paper/50"
                    }`}
                  />
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[15px] sm:grid-cols-2">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <button
                    onClick={() => setActiveId(loc.id === activeId ? null : loc.id)}
                    className={`transition-colors ${
                      activeId === loc.id ? "text-paper" : "text-paper/50 hover:text-paper/80"
                    }`}
                  >
                    {loc.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-10 min-h-[6rem] border-t border-paper/15 pt-6">
              {active ? (
                activeStories.length > 0 ? (
                  <div className="space-y-3">
                    <p className="text-[12px] uppercase text-paper/40">
                      Stories from {active.name}
                    </p>
                    {activeStories.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/stories/${s.slug}`}
                        className="block font-display text-lg text-paper hover:underline"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-[14px] text-paper/50">
                    No published stories from {active.name} yet — but we&rsquo;d
                    love to shoot one.
                  </p>
                )
              ) : (
                <p className="text-[14px] text-paper/40">
                  Select a location to see stories from there.
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
