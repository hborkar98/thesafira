import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getAllJournalSlugs, getJournalPostBySlug } from "@/lib/data";

export async function generateStaticParams() {
  const slugs = await getAllJournalSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getJournalPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
      type: "article",
    },
  };
}

export default async function JournalDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getJournalPostBySlug(params.slug);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="px-6 pb-28 pt-36 md:px-10">
      <article className="mx-auto max-w-2xl">
        <Reveal>
          <p className="text-[13px] text-ink/50">
            {post.category} · {date} · {post.readingTime}
          </p>
          <h1 className="mt-3 font-display text-4xl font-light leading-tight text-ink md:text-5xl">
            {post.title}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(min-width: 768px) 42rem, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <div className="mt-10 space-y-6">
          {post.content.map((para, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <p className="text-[17px] leading-relaxed text-ink/75">{para}</p>
            </Reveal>
          ))}
        </div>
      </article>
    </main>
  );
}
