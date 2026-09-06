import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import PhilosophySection from "@/components/PhilosophySection";

export const metadata: Metadata = {
  title: "About",
  description:
    "theSafira is a candid wedding photography and film studio based in Pune, working across India and worldwide.",
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      <AboutSection />
      <PhilosophySection />
    </main>
  );
}
