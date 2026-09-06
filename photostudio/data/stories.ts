import { Story } from "@/lib/types";

// This file is the placeholder data source for portfolio "Stories".
// To connect real content, replace this array with a fetch from Supabase —
// see lib/data.ts, which every page already imports from instead of this
// file directly. The shape (Story type) stays identical either way.

const img = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const stories: Story[] = [
  {
    id: "1",
    title: "Aarav & Meera",
    slug: "aarav-and-meera-pune",
    category: "Wedding",
    location: "Pune, Maharashtra",
    date: "2026-01-18",
    coverImage: img("aarav-meera-cover", 1600, 2000),
    excerpt:
      "A monsoon-grey morning, a courtyard full of marigold, and two families that talked over each other in the best way.",
    description:
      "Aarav and Meera got married in the same courtyard where his grandparents were married sixty years earlier. We spent two days there before the wedding just listening — to the aunts arguing about the flowers, to Meera's father practising his speech in the car, to the small, ordinary moments that usually go unphotographed. This is that story.",
    photoCount: 142,
    images: [
      { src: img("am-1", 1800, 1200), alt: "Courtyard before the ceremony", orientation: "wide" },
      { src: img("am-2", 1200, 1600), alt: "Meera getting ready", orientation: "portrait" },
      { src: img("am-3", 1200, 1600), alt: "Aarav's mother adjusting his stole", orientation: "portrait" },
      { src: img("am-4", 1600, 1067), alt: "Guests arriving at dusk", orientation: "landscape", mono: true },
      { src: img("am-5", 1800, 1200), alt: "The pheras", orientation: "wide" },
      { src: img("am-6", 1200, 1600), alt: "A quiet moment between ceremonies", orientation: "portrait" },
    ],
    featured: true,
    tags: ["wedding", "candid", "pune"],
  },
  {
    id: "2",
    title: "Rohan & Ananya",
    slug: "rohan-and-ananya-goa",
    category: "Wedding",
    location: "Goa",
    date: "2025-11-02",
    coverImage: img("rohan-ananya-cover", 1600, 2000),
    excerpt: "A beach wedding that ignored its own schedule, in the best possible way.",
    description:
      "The plan said sunset vows at 6:15. The tide had other ideas. What we got instead was better than anything on the timeline — bare feet, salt air, and a ceremony that started twenty minutes late because nobody wanted to look away from the water.",
    photoCount: 168,
    images: [
      { src: img("ra-1", 1800, 1200), alt: "The mandap at low tide", orientation: "wide" },
      { src: img("ra-2", 1200, 1600), alt: "Ananya walking the shoreline", orientation: "portrait" },
      { src: img("ra-3", 1600, 1067), alt: "Reception under string lights", orientation: "landscape" },
      { src: img("ra-4", 1200, 1600), alt: "Rohan laughing mid-toast", orientation: "portrait", mono: true },
      { src: img("ra-5", 1800, 1200), alt: "First dance, barefoot in sand", orientation: "wide" },
    ],
    featured: true,
    tags: ["wedding", "beach", "goa"],
  },
  {
    id: "3",
    title: "Siddharth & Riya",
    slug: "siddharth-and-riya-jaipur",
    category: "Wedding",
    location: "Jaipur, Rajasthan",
    date: "2025-12-10",
    coverImage: img("sid-riya-cover", 1600, 2000),
    excerpt: "Pink sandstone, brass lanterns, and a haveli that has seen four generations of this family marry.",
    description:
      "Riya's family has held every wedding in the same haveli since her great-grandmother's. The walls know the choreography before the planners do. We tried to photograph the building the way the family sees it — not as a backdrop, but as another guest.",
    photoCount: 201,
    images: [
      { src: img("sr-1", 1800, 1200), alt: "Haveli courtyard at golden hour", orientation: "wide" },
      { src: img("sr-2", 1200, 1600), alt: "Riya in the mirror-work room", orientation: "portrait" },
      { src: img("sr-3", 1200, 1600), alt: "Siddharth's baraat", orientation: "portrait" },
      { src: img("sr-4", 1600, 1067), alt: "Lanterns being lit for the night ceremony", orientation: "landscape", mono: true },
      { src: img("sr-5", 1800, 1200), alt: "The pronouncement, from the balcony above", orientation: "wide" },
    ],
    featured: false,
    tags: ["wedding", "heritage", "jaipur"],
  },
  {
    id: "4",
    title: "Aditya & Neha",
    slug: "aditya-and-neha-mumbai",
    category: "Wedding",
    location: "Mumbai",
    date: "2025-09-27",
    coverImage: img("aditya-neha-cover", 1600, 2000),
    excerpt: "A city wedding, told through its in-between spaces — stairwells, terraces, the back of a cab.",
    description:
      "Aditya and Neha didn't want a single 'posed' photograph in the album. We spent the day chasing the spaces between events instead — the stairwell where Neha's sisters helped her walk in heels for the first time, the terrace where Aditya's college friends rehearsed a speech nobody used.",
    photoCount: 129,
    images: [
      { src: img("an-1", 1800, 1200), alt: "Terrace reception overlooking the city", orientation: "wide" },
      { src: img("an-2", 1200, 1600), alt: "Neha in the stairwell", orientation: "portrait" },
      { src: img("an-3", 1600, 1067), alt: "Traffic-lit ride to the venue", orientation: "landscape", mono: true },
      { src: img("an-4", 1200, 1600), alt: "Aditya reading his vows backstage", orientation: "portrait" },
    ],
    featured: false,
    tags: ["wedding", "city", "mumbai"],
  },
  {
    id: "5",
    title: "Travel Stories",
    slug: "travel-stories-rajasthan",
    category: "Travel",
    location: "Rajasthan",
    date: "2025-08-14",
    coverImage: img("rajasthan-cover", 1600, 2000),
    excerpt: "Three weeks across the desert state, chasing colour, dust and the particular quality of afternoon light.",
    description:
      "This is a personal project, not a commission — three weeks travelling between Jodhpur, Bikaner and the Thar with no brief except to keep the camera close. It became a study of how the same light changes character across a single state.",
    photoCount: 96,
    images: [
      { src: img("raj-1", 1800, 1200), alt: "Blue city rooftops, Jodhpur", orientation: "wide" },
      { src: img("raj-2", 1200, 1600), alt: "Camel herder near the Thar", orientation: "portrait" },
      { src: img("raj-3", 1600, 1067), alt: "Dust storm approaching Bikaner", orientation: "landscape", mono: true },
      { src: img("raj-4", 1800, 1200), alt: "Evening market", orientation: "wide" },
    ],
    featured: true,
    tags: ["travel", "personal-project", "rajasthan"],
  },
  {
    id: "6",
    title: "Monsoon in the Western Ghats",
    slug: "monsoon-western-ghats",
    category: "Travel",
    location: "Western Ghats, Maharashtra",
    date: "2025-07-05",
    coverImage: img("ghats-cover", 1600, 2000),
    excerpt: "A week following the first monsoon clouds up the coast into the hills.",
    description:
      "Every June the clouds move the same way — up from the Arabian Sea, over the coast, into the Ghats. I followed them for a week with nothing but a raincoat and a camera bag that never quite stayed dry.",
    photoCount: 74,
    images: [
      { src: img("ghats-1", 1800, 1200), alt: "Waterfall in full monsoon flow", orientation: "wide" },
      { src: img("ghats-2", 1200, 1600), alt: "Fog rolling over the valley", orientation: "portrait" },
      { src: img("ghats-3", 1600, 1067), alt: "Village road in the rain", orientation: "landscape" },
    ],
    featured: false,
    tags: ["travel", "monsoon", "landscape"],
  },
];
