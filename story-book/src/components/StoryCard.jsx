export default function StoryCard({story}) {
    return (
        <div
        style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
        }}
        >
        <h2>{story.authorName}</h2>
      <p>{story.content}</p>
        </div>
    )
}