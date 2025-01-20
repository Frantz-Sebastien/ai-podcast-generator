import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextBox from './TextBox'

function App() {
  const [text, setText] = useState("")

  const handleTextChange = (script) => {
    setText(script)
  }


  return (
    <>
     <TextBox text={text} textChange={handleTextChange} />
      <p>Current Text: {text}</p>
    </>
  )
}

export default App
