# Amber & Ash — Photography Portfolio

A cinematic, editorial portfolio site for a wedding & travel photographer
based in Pune. Built with Next.js (App Router), TypeScript, Tailwind CSS
and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `app/` — pages (App Router): home, `/stories`, `/stories/[slug]`,
  `/journal`, `/journal/[slug]`, sitemap, robots, contact API route.
- `components/` — all UI building blocks (Navbar, Hero, PortfolioGrid,
  StoryCard, StoryGallery, Lightbox, FilmsSection, ContactForm, etc).
- `data/` — the current content source: `stories.ts`, `content.ts`
  (films, testimonials, journal posts, travel locations).
- `lib/data.ts` — the **only** place pages import content from. Swap this
  to query Supabase instead of the local files without touching any page.
- `lib/types.ts` — shared content types (`Story`, `Film`, `JournalPost`, …).
- `supabase/schema.sql` — table definitions matching those types, for when
  you're ready to move off local sample data.

## Adding a new photography project (today, no database yet)

Open `data/stories.ts` and add an object to the `stories` array following
the existing shape — title, slug, category, location, date, cover image,
description, an `images[]` array, and optionally `videoUrl`, `featured`,
`tags`. The `/stories`, homepage grid, and travel-map sections all pick it
up automatically; the detail page and its route are generated from the
slug.

Add journal posts the same way in `data/content.ts` → `journalPosts`.

Testimonials are intentionally empty (`testimonials` in `data/content.ts`)
— only add real, client-provided quotes there; nothing is fabricated.

## Moving to Supabase for a real CMS workflow

1. Create a Supabase project, then run `supabase/schema.sql` in its SQL
   editor to create `stories`, `films`, `testimonials`, `journal_posts`
   and `inquiries` tables.
2. Copy `.env.example` to `.env.local` and fill in your project URL and
   anon key.
3. In `lib/data.ts`, replace each function body with a call through the
   `supabase` client from `lib/supabase.ts`, e.g.:
   ```ts
   export async function getAllStories() {
     const { data } = await supabase.from("stories").select("*").order("date", { ascending: false });
     return data ?? [];
   }
   ```
4. In `app/api/contact/route.ts`, insert incoming inquiries into the
   `inquiries` table instead of just logging them.
5. For image storage, upload to Supabase Storage or Cloudinary and put the
   resulting URLs into `cover_image` / `images`. Add the storage domain to
   `images.remotePatterns` in `next.config.mjs`.

No page or component needs to change for this migration — they all read
through `lib/data.ts`.

## Replacing placeholder photography

Every image currently comes from `picsum.photos` (deterministic
placeholders) so the site works out of the box. Replace the `src` values
in `data/stories.ts` / `data/content.ts` with your own photograph URLs —
ideally already sized/optimised — once you have them hosted.

## Notes

- The WhatsApp button in the footer and contact section points at
  `wa.me/919999999999` — replace with the real number.
- Instagram/email links are placeholders — update in `components/Footer.tsx`
  and `components/ContactForm.tsx`.
- `metadataBase` in `app/layout.tsx` and the sitemap base URL in
  `app/sitemap.ts` / `app/robots.ts` use a placeholder domain — update once
  the site has a real one.
