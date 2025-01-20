import React,{ useState } from 'react'

const TextBox = (props) => {


    const handleInputChange = (event) => {
        props.textChange(event.target.value)
    }

    // text textChange
 

  return (
    <div>
        <input
            type='text'
            onChange={handleInputChange}
            value= {props.text}
            id="textbox"

        />
    </div>
  )
}

export default TextBox