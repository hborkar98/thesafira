import { Story } from "@/lib/types";
import StoryCard from "./StoryCard";

export default function PortfolioGrid({ stories }: { stories: Story[] }) {
  return (
    <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
}
