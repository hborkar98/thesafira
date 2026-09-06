import type { Metadata } from "next";
import TestimonialsSection from "@/components/TestimonialsSection";
import Reveal from "@/components/Reveal";
import { getTestimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What couples have to say about their theSafira wedding photography and films.",
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <main className="px-6 pb-28 pt-36 md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-[13px] text-ink/50">Testimonials</p>
          <h1 className="mt-3 font-display text-5xl font-light leading-tight text-ink md:text-6xl">
            In their words
          </h1>
        </Reveal>
      </div>

      {testimonials.length > 0 ? (
        <TestimonialsSection items={testimonials} />
      ) : (
        <Reveal>
          <p className="mx-auto mt-16 max-w-md text-center text-[15px] text-ink/50">
            Testimonials from real couples will appear here as they&rsquo;re
            shared — nothing on this page is ever written for you.
          </p>
        </Reveal>
      )}
    </main>
  );
}
