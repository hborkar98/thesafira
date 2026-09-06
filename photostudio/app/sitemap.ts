import { MetadataRoute } from "next";
import { getAllStorySlugs, getAllJournalSlugs } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.thesafira.example";
  const [storySlugs, journalSlugs] = await Promise.all([
    getAllStorySlugs(),
    getAllJournalSlugs(),
  ]);

  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/stories`, priority: 0.9 },
    { url: `${base}/journal`, priority: 0.7 },
    ...storySlugs.map((slug) => ({ url: `${base}/stories/${slug}`, priority: 0.8 })),
    ...journalSlugs.map((slug) => ({ url: `${base}/journal/${slug}`, priority: 0.5 })),
  ];
}
