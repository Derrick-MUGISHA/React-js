import { useEffect, useState } from "react"
import { getStories } from "./API/stories";
import StoryList from "./components/StoryList";
import AddStory from "./components/AddStory";

export default function App(){

  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{

    async function fetchStory(){
      try {
       const data = await getStories();
       setStories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
      
    }

    fetchStory();
    
  }, []);

  if(loading) return <div>Loading...</div>


  return(
    <div>
      <h1>Story Book</h1>
      <p>Story Book is a platform for sharing stories</p>


      <AddStory />

      <StoryList stories={stories} />
    </div>
  )
}