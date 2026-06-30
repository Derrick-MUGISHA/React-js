import { useState } from "react";
import { createStory } from "../API/stories";


export default function AddStory() {
  

    const [authorName, setAutherName ] = useState("");
    const [content, setContent ] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const newStory = {
            authorName,
            content
        }

        try {
            const result = await createStory(newStory);
            console.log("Story created:", result)
            alert("Story created");
        }catch (error) {
            console.log(error);
            alert("Error creating story");
        }
    }
  
    return (

    <form onSubmit={handleSubmit}>
        <label>
            Author Name:
            <input type="text" value={authorName} onChange={(e) => setAutherName(e.target.value)} />
        </label>
        <br />
        <label>
            Content:
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Story</button>
    </form>
  )
}

