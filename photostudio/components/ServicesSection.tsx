import Image from "next/image";
import Reveal from "./Reveal";

const CATEGORIES = [
  {
    name: "Weddings",
    desc: "Full-day, candid coverage that follows the story rather than a shot list.",
    img: "weddings-cat",
  },
  {
    name: "Couples",
    desc: "Pre-wedding sessions in places that mean something to you, not a studio backdrop.",
    img: "couples-cat",
  },
  {
    name: "Portraits",
    desc: "Individual and family portraits, shot with the same honesty as a wedding day.",
    img: "portraits-cat",
  },
  {
    name: "Travel",
    desc: "Documentary-style travel photography, personal and commissioned.",
    img: "travel-cat",
  },
  {
    name: "Events",
    desc: "Engagements, sangeets and receptions — the in-between moments included.",
    img: "events-cat",
  },
  {
    name: "Lifestyle",
    desc: "Everyday life, photographed as though no one were watching.",
    img: "lifestyle-cat",
  },
  {
    name: "Editorial",
    desc: "Fashion and brand work with a cinematic, story-first sensibility.",
    img: "editorial-cat",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-paper px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[13px] text-ink/50">What I Photograph</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-light leading-tight text-ink md:text-5xl">
            Seven kinds of stories, one way of seeing.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.08}>
              <div className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={`https://picsum.photos/seed/${c.img}/900/1125`}
                    alt={c.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-cinematic group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl text-ink">{c.name}</h3>
                <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-ink/60">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
