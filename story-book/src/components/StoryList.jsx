import StoryCard from "./StoryCard";


export default function StoryList({stories}) {
    return (
         <div>
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
    )
}