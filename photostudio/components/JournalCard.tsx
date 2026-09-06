import Image from "next/image";
import Link from "next/link";
import { JournalPost } from "@/lib/types";

export default function JournalCard({ post }: { post: JournalPost }) {
  const date = new Date(post.date).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link href={`/journal/${post.slug}`} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1100ms] ease-cinematic group-hover:scale-105"
        />
      </div>
      <p className="mt-4 text-[12px] text-ink/50">
        {post.category} · {date} · {post.readingTime}
      </p>
      <h3 className="mt-2 font-display text-xl leading-snug text-ink">
        {post.title}
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-ink/60">
        {post.excerpt}
      </p>
    </Link>
  );
}
