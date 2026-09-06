import { Testimonial } from "@/lib/types";
import Reveal from "./Reveal";

export default function TestimonialsSection({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;

  return (
    <section className="bg-paper px-6 py-28 md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-[13px] text-ink/50">In their words</p>
        </Reveal>

        <div className="mt-10 space-y-16">
          {items.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <blockquote className="font-display text-2xl font-light leading-snug text-ink md:text-3xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-5 text-[13px] text-ink/50">
                {t.name} — {t.context}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
