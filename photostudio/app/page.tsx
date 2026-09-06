import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesSection from "@/components/ServicesSection";
import FilmsSection from "@/components/FilmsSection";
import AboutSection from "@/components/AboutSection";
import TravelSection from "@/components/TravelSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JournalCard from "@/components/JournalCard";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import {
  getFeaturedStories,
  getFilms,
  getJournalPosts,
  getTestimonials,
  getTravelLocations,
  getAllStories,
} from "@/lib/data";

export default async function HomePage() {
  const [featured, films, journal, testimonials, locations, allStories] =
    await Promise.all([
      getFeaturedStories(),
      getFilms(),
      getJournalPosts(),
      getTestimonials(),
      getTravelLocations(),
      getAllStories(),
    ]);

  return (
    <main>
      <Hero />

      <section id="stories" className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-[13px] text-ink/50">Stories</p>
                <h2 className="mt-3 max-w-lg font-display text-4xl font-light leading-tight text-ink md:text-5xl">
                  Not just photographs. Stories you can feel.
                </h2>
              </div>
              <Link
                href="/stories"
                className="text-[13px] text-ink/70 underline-offset-4 hover:text-ink hover:underline"
              >
                View all stories
              </Link>
            </div>
          </Reveal>

          <div className="mt-14">
            <PortfolioGrid stories={featured} />
          </div>
        </div>
      </section>

      <PhilosophySection />
      <ServicesSection />
      <FilmsSection films={films} />
      <AboutSection />
      <TravelSection locations={locations} stories={allStories} />
      <TestimonialsSection items={testimonials} />

      <section className="bg-paper px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-[13px] text-ink/50">Journal</p>
                <h2 className="mt-3 max-w-lg font-display text-4xl font-light leading-tight text-ink md:text-5xl">
                  Notes on light, travel and the craft.
                </h2>
              </div>
              <Link
                href="/journal"
                className="text-[13px] text-ink/70 underline-offset-4 hover:text-ink hover:underline"
              >
                Read the journal
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {journal.slice(0, 3).map((post, i) => (
              <Reveal key={post.id} delay={i * 0.08}>
                <JournalCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
