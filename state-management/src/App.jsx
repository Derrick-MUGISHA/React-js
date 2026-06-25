import { useState } from "react"
import Popup from "./components/Popup"

function App() {
  const [count, setCount] = useState(0)
  // Destructuring
  const [isPopupOpen, setIsPopupOpen] = useState(true)
  return (
    <>
     <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count +1)}>
         increase
      </button>
      <button onClick={() => setCount(count -1)}>
         decrease
      </button>
     

     <div className="App" style={{padding: '50px', textAlign: "center" }}>
      <h1>
        React Popup Example
      </h1>
      <button onClick={() => setIsPopupOpen(true)}>
        Open Popup
      </button>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2>
          Hello form the Pop-out!
        </h2>
        <p>
          this is a dynamic content passed as children to the popup component
        </p>
        </Popup>
     </div>
      </div> 
    </>
  )
}

export default App
