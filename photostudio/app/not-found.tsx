import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[13px] text-ink/50">404</p>
      <h1 className="mt-3 font-display text-4xl font-light text-ink">
        This story hasn&rsquo;t been told yet.
      </h1>
      <Link
        href="/"
        className="mt-8 border border-ink px-6 py-3 text-[13px] text-ink transition-colors hover:bg-ink hover:text-paper"
      >
        Back to the homepage
      </Link>
    </main>
  );
}
