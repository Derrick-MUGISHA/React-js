

// define the data source 

const BASE_URL= "https://sms-express-app-1-production-a843.up.railway.app/api";

export async function getStories(){
    const response = await fetch(`${BASE_URL}/stories`);

    if(!response.ok){
        throw new Error("Failed to fetch stories");
    }
    return response.json();
}


export async function createStory(story) {
    const response = await fetch(`${BASE_URL}/stories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(story),
    })

    if(!response.ok){
        throw new Error("Failed to create story");
    }

    return response.json();
}


// function getStoryById() {

// }


// function updateStoryById() {
    
// }

// function deleteStoryById() {
    
// }