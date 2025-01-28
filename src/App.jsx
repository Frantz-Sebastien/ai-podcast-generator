import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextBox from './TextBox'

function App() {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false); // Tracks loading state
  const [podcastScript, setPodcastScript] = useState(""); // Holds the generated podcast script



  const handleTextChange = (script) => {
    setText(script)
  }

  const handleSubmit = async () => {
    if (!text.trim()) {
      alert("Please enter some text to generate a podcast!");
      return;
    }
  
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/generate-podcast", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: text }),
      });
  
      const data = await response.json();
      if (data.success) {
        setPodcastScript(data.generatedText);
      } else {
        alert("Error generating podcast");
      }
    } catch (error) {
      console.error("Error connecting to backend:", error);
      alert("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };
  
  


  return (
    <>
     <TextBox text={text} textChange={handleTextChange} />
      <p>Current Text: {text}</p>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Generating..." : "Submit"}
      </button>   

      {podcastScript && (
        <div className='podcast-container'>
          <h2>Generated Podcast Script:</h2>
          {podcastScript.split("\n").map((line, index) => {
            const [speaker, ...content] = line.split(":");
            return (
              <p
                key={index}
                className={
                  speaker.trim().toLowerCase() === "host 1"
                  ? "host-one"
                  : "host-two"
                }>
                  <strong>{speaker.trim()}:</strong>{content.join(":").trim()}
              </p>
            )
          })}
        </div>
      )} 
      
      </>
  )
}

export default App
