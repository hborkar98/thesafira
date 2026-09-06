import type { Metadata } from "next";
import FilmsSection from "@/components/FilmsSection";
import { getFilms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Wedding Films",
  description:
    "Cinematic wedding films from theSafira — hover any film for a live preview, or watch in full.",
};

export default async function FilmsPage() {
  const films = await getFilms();

  return (
    <main className="pt-16">
      <FilmsSection films={films} />
    </main>
  );
}
