import React,{ useState } from 'react'

const TextBox = () => {

    const [text, setText] = useState("")

    const handleTextChange = (event) => {
        setText(event.target.value)
    }
 

  return (
    <div>
        <input
            type='text'
            onChange={handleTextChange}
            value= {text}
            id="textbox"

        />
    </div>
  )
}

export default TextBox