"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Film } from "@/lib/types";
import Reveal from "./Reveal";

// Pulls the video id out of a youtube.com/embed/<id> or youtu.be/<id> or
// watch?v=<id> url so we can build both the click-to-watch embed and the
// muted, looping hover-preview embed from the same stored videoUrl.
function getYouTubeId(url: string): string | null {
  const patterns = [
    /youtube\.com\/embed\/([^?&/]+)/,
    /youtu\.be\/([^?&/]+)/,
    /[?&]v=([^?&/]+)/,
  ];
  for (const p of patterns) {
    const match = url.match(p);
    if (match) return match[1];
  }
  return null;
}

function FilmCard({ film, onOpen }: { film: Film; onOpen: () => void }) {
  const [hovered, setHovered] = useState(false);
  const videoId = getYouTubeId(film.videoUrl);
  const previewSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1&showinfo=0&rel=0`
    : null;

  return (
    <Reveal>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group block w-full text-left"
      >
        <button onClick={onOpen} className="relative block aspect-video w-full overflow-hidden bg-paper/5">
          <Image
            src={film.thumbnail}
            alt={film.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={`object-cover transition-opacity duration-500 ${
              hovered && previewSrc ? "opacity-0" : "opacity-100 group-hover:scale-105"
            }`}
          />

          {/* Muted looping YouTube preview, only mounted on hover to avoid
              loading video for every card up front. */}
          {hovered && previewSrc && (
            <iframe
              src={previewSrc}
              title={`${film.title} preview`}
              className="pointer-events-none absolute inset-0 h-full w-full scale-[1.35] object-cover"
              allow="autoplay; encrypted-media"
              loading="lazy"
            />
          )}

          <div className="absolute inset-0 flex items-center justify-center bg-ink/25 transition-colors group-hover:bg-ink/35">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-paper/70 text-paper transition-transform duration-300 group-hover:scale-110">
              ▶
            </span>
          </div>
          <span className="absolute bottom-3 right-3 z-10 text-[11px] text-paper/80">
            {film.duration}
          </span>
        </button>
        <p className="mt-4 font-display text-lg text-paper">{film.title}</p>
        <p className="text-[13px] text-paper/50">{film.location}</p>
      </div>
    </Reveal>
  );
}

export default function FilmsSection({ films }: { films: Film[] }) {
  const [active, setActive] = useState<Film | null>(null);

  return (
    <section id="films" className="bg-ink px-6 py-28 text-paper md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[13px] text-paper/50">Wedding Films</p>
          <h2 className="mt-3 max-w-lg font-display text-4xl font-light leading-tight md:text-5xl">
            Some moments only make sense in motion.
          </h2>
          <p className="mt-3 text-[13px] text-paper/40">
            Hover a film to preview it, or tap to watch in full.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {films.map((film) => (
            <FilmCard key={film.id} film={film} onOpen={() => setActive(film)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 px-4"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-5 top-5 text-2xl text-paper/80 hover:text-paper"
              onClick={() => setActive(null)}
            >
              ✕
            </button>
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-video w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="h-full w-full"
                src={`${active.videoUrl}?autoplay=1`}
                title={active.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
