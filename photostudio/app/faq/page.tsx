import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about booking theSafira for your wedding.",
};

const FAQS = [
  {
    question: "Which cities and destinations do you cover?",
    answer:
      "Based in Pune, and shooting across Maharashtra, Rajasthan, Goa and the rest of India regularly. Destination weddings outside India are welcome too — travel is built into the estimate.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "Most couples book 6–9 months ahead, especially for wedding-season dates (November–February). If your date is sooner, it's still worth asking — availability depends on the calendar at the time.",
  },
  {
    question: "Do you shoot both photos and films?",
    answer:
      "Yes. Photography and films can be booked together or separately, with a second shooter and a dedicated films team for full-day coverage.",
  },
  {
    question: "How many photographs do we receive, and how long does delivery take?",
    answer:
      "A full wedding day typically runs 400–800 edited photographs, delivered within 6–8 weeks. A curated highlight set is usually shared within the first two weeks.",
  },
  {
    question: "Can we see a full wedding gallery, not just highlights?",
    answer:
      "Yes — full galleries from recent weddings are shared on request during a call, alongside the published Stories on this site.",
  },
  {
    question: "What's included in an estimate?",
    answer:
      "Coverage hours, number of photographers/filmmakers, travel and stay for destination weddings, and delivery format. Send details through the contact form and an estimate will follow within 2–3 days.",
  },
];

export default function FaqPage() {
  return (
    <main className="px-6 pb-28 pt-36 md:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[13px] text-ink/50">FAQ</p>
          <h1 className="mt-3 font-display text-5xl font-light leading-tight text-ink md:text-6xl">
            Questions, answered.
          </h1>
        </Reveal>

        <div className="mt-14">
          <FaqAccordion items={FAQS} />
        </div>
      </div>
    </main>
  );
}
