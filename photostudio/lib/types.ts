export type StoryImage = {
  src: string;
  alt: string;
  orientation: "landscape" | "portrait" | "wide";
  caption?: string;
  mono?: boolean;
};

export type Story = {
  id: string;
  title: string; // e.g. "Aarav & Meera"
  slug: string;
  category: "Wedding" | "Couple" | "Travel" | "Portrait" | "Editorial";
  location: string;
  date: string; // ISO date
  coverImage: string;
  excerpt: string;
  description: string;
  photoCount: number;
  images: StoryImage[];
  videoUrl?: string;
  featured?: boolean;
  tags?: string[];
};

export type Film = {
  id: string;
  title: string;
  location: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
};

export type Testimonial = {
  id: string;
  name: string;
  context: string;
  quote: string;
};

export type JournalPost = {
  id: string;
  title: string;
  slug: string;
  category: "Wedding Stories" | "Travel" | "Photography Tips" | "Behind the Scenes" | "Locations" | "Gear";
  date: string;
  readingTime: string;
  coverImage: string;
  excerpt: string;
  content: string[];
};

export type TravelLocation = {
  id: string;
  name: string;
  x: number; // percentage position on the map illustration
  y: number;
  storySlugs: string[];
};
