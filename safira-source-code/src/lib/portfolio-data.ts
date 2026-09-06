import heroImage from "@/assets/hero-wedding.jpg";
import heroVideo from "@/assets/1788715784194142.MP4";
import goaImage from "@/assets/story-goa.jpg";
import jaipurImage from "@/assets/story-jaipur.jpg";
import monsoonImage from "@/assets/story-monsoon.jpg";
import photographerImage from "@/assets/photographer.jpg";


export const images = { heroImage, goaImage, jaipurImage, monsoonImage, photographerImage };
export const heroVideo = heroVideo;

export const stories = [
  { slug: "aarav-meera", title: "Aarav & Meera", location: "Pune, Maharashtra", category: "Wedding", date: "18 January 2026", image: heroImage, shape: "landscape" },
  { slug: "rohan-ananya", title: "Rohan & Ananya", location: "Goa, India", category: "Destination Wedding", date: "04 February 2026", image: goaImage, shape: "portrait" },
  { slug: "aditya-neha", title: "Aditya & Neha", location: "Jaipur, Rajasthan", category: "Wedding", date: "22 November 2025", image: jaipurImage, shape: "landscape" },
  { slug: "monsoon-stories", title: "Monsoon Stories", location: "Western Ghats", category: "Travel", date: "08 August 2025", image: monsoonImage, shape: "portrait" },
] as const;

export const journal = [
  { slug: "light-before-the-rain", category: "Photography", date: "12 Aug 2026", title: "The light before the rain", excerpt: "On waiting, watching, and the soft theatre of a monsoon sky.", image: monsoonImage },
  { slug: "a-palace-without-posing", category: "Wedding Stories", date: "28 Jul 2026", title: "A palace without posing", excerpt: "How quiet direction made room for honest moments in Jaipur.", image: jaipurImage },
  { slug: "goa-after-sunset", category: "Locations", date: "03 Jun 2026", title: "Goa, after sunset", excerpt: "What remains when the light fades and the celebration begins.", image: goaImage },
] as const;

export const services = [
  ["01", "Weddings", "Celebrations photographed with instinct, patience, and an eye for everything between the rituals."],
  ["02", "Couples", "Unhurried portraits shaped around your connection, not a list of poses."],
  ["03", "Editorial", "Portraits and visual narratives with a refined, art-directed point of view."],
  ["04", "Travel", "Personal journeys and distant places, documented with curiosity and restraint."],
] as const;
