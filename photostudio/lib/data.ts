import { stories } from "@/data/stories";
import { films, journalPosts, testimonials, travelLocations } from "@/data/content";
import { Story } from "@/lib/types";

// ---------------------------------------------------------------------------
// This module is the ONLY place pages/components should import content from.
// Right now it reads from the local /data files. To move to Supabase:
//   1. Create the tables described in supabase/schema.sql
//   2. Replace each function body below with a supabase.from(...) query
//   3. Nothing outside this file needs to change.
// ---------------------------------------------------------------------------

export async function getAllStories(): Promise<Story[]> {
  return [...stories].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getFeaturedStories(): Promise<Story[]> {
  return stories.filter((s) => s.featured);
}

export async function getStoryBySlug(slug: string): Promise<Story | undefined> {
  return stories.find((s) => s.slug === slug);
}

export async function getRelatedStories(slug: string, limit = 3): Promise<Story[]> {
  const current = stories.find((s) => s.slug === slug);
  return stories
    .filter((s) => s.slug !== slug && (!current || s.category === current.category))
    .slice(0, limit)
    .concat(stories.filter((s) => s.slug !== slug))
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, limit);
}

export async function getAllStorySlugs(): Promise<string[]> {
  return stories.map((s) => s.slug);
}

export async function getFilms() {
  return films;
}

export async function getTestimonials() {
  return testimonials;
}

export async function getJournalPosts() {
  return [...journalPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getJournalPostBySlug(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}

export async function getAllJournalSlugs() {
  return journalPosts.map((p) => p.slug);
}

export async function getTravelLocations() {
  return travelLocations;
}
