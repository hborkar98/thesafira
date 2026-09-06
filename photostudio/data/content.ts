import { Film, JournalPost, Testimonial, TravelLocation } from "@/lib/types";

const img = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// Replace with real YouTube/Vimeo embeds when available.
export const films: Film[] = [
  {
    id: "f1",
    title: "Aarav & Meera — The Full Story",
    location: "Pune",
    duration: "6:42",
    thumbnail: img("film-1", 1600, 900),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "f2",
    title: "Rohan & Ananya — Tide Notes",
    location: "Goa",
    duration: "4:58",
    thumbnail: img("film-2", 1600, 900),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "f3",
    title: "Siddharth & Riya — Four Generations",
    location: "Jaipur",
    duration: "8:15",
    thumbnail: img("film-3", 1600, 900),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "f4",
    title: "Rajasthan — A Travel Film",
    location: "Rajasthan",
    duration: "5:30",
    thumbnail: img("film-4", 1600, 900),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

// Only real, provided testimonials should ever appear here — do not
// fabricate quotes. This array intentionally ships empty; add entries
// as clients provide them.
export const testimonials: Testimonial[] = [];

export const journalPosts: JournalPost[] = [
  {
    id: "j1",
    title: "What We Look For in Light Before a Ceremony Ever Starts",
    slug: "reading-light-before-the-ceremony",
    category: "Photography Tips",
    date: "2026-02-02",
    readingTime: "4 min read",
    coverImage: img("journal-1", 1600, 1000),
    excerpt:
      "Most of the important photographic decisions happen an hour before anyone notices the camera is out.",
    content: [
      "By the time the first guest arrives, most of the decisions that shape a day's photographs have already been made.",
      "We walk every venue at the same hour the ceremony will actually happen, not the hour on the schedule — schedules move, the sun doesn't care.",
      "The best frame of the day is rarely the one everyone is looking at. It's usually two feet to the left, in the light nobody planned for.",
    ],
  },
  {
    id: "j2",
    title: "Three Weeks in Rajasthan: Notes From a Personal Project",
    slug: "three-weeks-in-rajasthan",
    category: "Travel",
    date: "2025-08-20",
    readingTime: "6 min read",
    coverImage: img("journal-2", 1600, 1000),
    excerpt: "Why personal work matters as much as commissioned work — and what it teaches you about patience.",
    content: [
      "No client, no brief, no shot list — just three weeks and a camera bag.",
      "Personal projects are where the eye actually develops. Without a deliverable to chase, you start noticing things you'd otherwise walk past.",
    ],
  },
  {
    id: "j3",
    title: "Behind the Scenes: A Haveli Wedding in Jaipur",
    slug: "behind-the-scenes-jaipur-haveli",
    category: "Behind the Scenes",
    date: "2025-12-15",
    readingTime: "5 min read",
    coverImage: img("journal-3", 1600, 1000),
    excerpt: "How four generations of one family and one building shaped the way this wedding was photographed.",
    content: [
      "Some venues are so lived-in by a family that they become a character in the story rather than a backdrop.",
      "We spent the morning before the wedding just walking the haveli with Riya's grandmother, listening to which rooms mattered and why.",
    ],
  },
  {
    id: "j4",
    title: "The Gear That Actually Matters for Candid Wedding Work",
    slug: "gear-for-candid-wedding-work",
    category: "Gear",
    date: "2025-06-11",
    readingTime: "3 min read",
    coverImage: img("journal-4", 1600, 1000),
    excerpt: "A short, honest list — most of it isn't cameras.",
    content: [
      "A fast prime and a body you don't have to think about matter more than any amount of glass.",
      "The single most useful piece of gear on a wedding day is a second shooter who knows when to stay quiet.",
    ],
  },
];

// x/y are percentage positions on the India map illustration.
export const travelLocations: TravelLocation[] = [
  { id: "pune", name: "Pune", x: 40, y: 62, storySlugs: ["aarav-and-meera-pune"] },
  { id: "mumbai", name: "Mumbai", x: 33, y: 58, storySlugs: ["aditya-and-neha-mumbai"] },
  { id: "goa", name: "Goa", x: 36, y: 72, storySlugs: ["rohan-and-ananya-goa"] },
  { id: "rajasthan", name: "Rajasthan", x: 38, y: 32, storySlugs: ["siddharth-and-riya-jaipur", "travel-stories-rajasthan"] },
  { id: "kerala", name: "Kerala", x: 42, y: 90, storySlugs: [] },
  { id: "himachal", name: "Himachal Pradesh", x: 44, y: 12, storySlugs: [] },
  { id: "delhi", name: "Delhi", x: 45, y: 25, storySlugs: [] },
  { id: "hyderabad", name: "Hyderabad", x: 48, y: 62, storySlugs: [] },
];
