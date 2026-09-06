import Reveal from "./Reveal";

const LINES = [
  "Beautiful photographs are not always about beautiful poses.",
  "Sometimes they're about waiting.",
  "Waiting for the right light.",
  "The unexpected laugh.",
  "The quiet glance.",
  "The moment when everything becomes real.",
];

export default function PhilosophySection() {
  return (
    <section className="bg-paper px-6 py-32 md:px-10">
      <div className="mx-auto max-w-4xl">
        {LINES.map((line, i) => (
          <Reveal key={line} delay={i * 0.08} y={20}>
            <p
              className={`font-display leading-[1.15] text-ink ${
                i === 0
                  ? "text-3xl font-light md:text-4xl"
                  : "mt-3 text-3xl font-light text-ink/40 md:text-4xl"
              }`}
            >
              {line}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
