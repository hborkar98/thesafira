import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import StoryGallery from "@/components/StoryGallery";
import Reveal from "@/components/Reveal";
import {
  getAllStorySlugs,
  getRelatedStories,
  getStoryBySlug,
} from "@/lib/data";

export async function generateStaticParams() {
  const slugs = await getAllStorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const story = await getStoryBySlug(params.slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.excerpt,
    alternates: { canonical: `/stories/${story.slug}` },
    openGraph: {
      title: `${story.title} — ${story.location}`,
      description: story.excerpt,
      images: [{ url: story.coverImage }],
      type: "article",
    },
  };
}

export default async function StoryDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const story = await getStoryBySlug(params.slug);
  if (!story) notFound();

  const related = await getRelatedStories(story.slug, 3);
  const date = new Date(story.date).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: story.title,
    description: story.excerpt,
    contentLocation: story.location,
    datePublished: story.date,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative flex h-[80vh] w-full items-end overflow-hidden bg-ink">
        <Image
          src={story.coverImage}
          alt={story.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/30" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
          <p className="text-[13px] text-paper/70">
            {story.location} · {date}
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-5xl font-light leading-tight text-paper md:text-6xl">
            {story.title}
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <Reveal>
          <p className="mx-auto max-w-2xl text-center text-[17px] leading-relaxed text-ink/70">
            {story.description}
          </p>
        </Reveal>
      </section>

      <StoryGallery images={story.images} />

      {related.length > 0 && (
        <section className="mt-28 px-6 pb-28 md:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="text-[13px] text-ink/50">More Stories</p>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/stories/${r.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={r.coverImage}
                      alt={r.title}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-[1100ms] ease-cinematic group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-ink">{r.title}</h3>
                  <p className="text-[13px] text-ink/50">{r.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
