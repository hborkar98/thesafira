"use client";

import Image from "next/image";
import { useState } from "react";
import { StoryImage } from "@/lib/types";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

function Frame({
  image,
  onClick,
  sizes,
}: {
  image: StoryImage;
  onClick: () => void;
  sizes: string;
}) {
  return (
    <button onClick={onClick} className="group relative block w-full overflow-hidden text-left">
      <Image
        src={image.src}
        alt={image.alt}
        width={1800}
        height={1200}
        sizes={sizes}
        className={`h-auto w-full object-cover transition-transform duration-[1100ms] ease-cinematic group-hover:scale-[1.03] ${
          image.mono ? "grayscale" : ""
        }`}
      />
      {image.caption && (
        <span className="absolute bottom-3 left-3 bg-ink/60 px-2 py-1 text-[11px] text-paper opacity-0 transition-opacity group-hover:opacity-100">
          {image.caption}
        </span>
      )}
    </button>
  );
}

export default function StoryGallery({ images }: { images: StoryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Walk the images and lay them out in an editorial rhythm:
  // wide full-bleed, then a two-up pair, repeating — with any portrait
  // images naturally taking the two-up slots.
  const blocks: { type: "full" | "pair"; items: StoryImage[] }[] = [];
  let i = 0;
  while (i < images.length) {
    const img = images[i];
    if (img.orientation === "wide" || img.orientation === "landscape") {
      blocks.push({ type: "full", items: [img] });
      i += 1;
    } else {
      const pair = images.slice(i, i + 2);
      blocks.push({ type: "pair", items: pair });
      i += pair.length;
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      <div className="flex flex-col gap-6 md:gap-10">
        {blocks.map((block, bi) => (
          <Reveal key={bi} delay={0.05}>
            {block.type === "full" ? (
              <Frame
                image={block.items[0]}
                sizes="100vw"
                onClick={() => setOpenIndex(images.indexOf(block.items[0]))}
              />
            ) : (
              <div
                className={`grid gap-6 ${
                  block.items.length === 2 ? "grid-cols-2" : "grid-cols-1"
                }`}
              >
                {block.items.map((img) => (
                  <Frame
                    key={img.src}
                    image={img}
                    sizes="50vw"
                    onClick={() => setOpenIndex(images.indexOf(img))}
                  />
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>

      <Lightbox
        images={images}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </div>
  );
}
