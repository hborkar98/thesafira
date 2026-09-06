import Image from "next/image";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="bg-paper px-6 py-28 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] w-full max-w-lg overflow-hidden md:aspect-[3/4]">
            <Image
              src="https://picsum.photos/seed/photographer-portrait/1200/1500"
              alt="Portrait of the photographer"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[13px] text-ink/50">Behind the Lens</p>
          <h2 className="mt-3 font-display text-3xl font-light leading-snug text-ink md:text-4xl">
            I don&rsquo;t photograph perfect moments.
            <br />I photograph real ones.
          </h2>
          <div className="mt-6 max-w-prose space-y-4 text-[15px] leading-relaxed text-ink/70">
            <p>
              The laughter between two poses. The nervous hands before a
              ceremony. The glance nobody else noticed. The chaos, the
              silence, the people who make the day unforgettable.
            </p>
            <p>
              I&rsquo;ve spent over a decade photographing weddings and
              journeys across India, and the thing I still chase is the same
              one I started with — a photograph that doesn&rsquo;t need a
              caption to be understood.
            </p>
          </div>
          <p className="mt-8 text-[14px] text-ink/60">
            Based in Pune. Available across India and worldwide.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
