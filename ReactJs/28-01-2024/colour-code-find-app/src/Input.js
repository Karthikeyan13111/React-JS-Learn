import React from 'react'
import convertCssColorNameToHex from 'convert-css-color-name-to-hex';

const Input = ({colorValue,setcolorValue,sethexValue,isDarkText,setisDarkText}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label>Add Color Name:</label>
        <input
        autoFocus
        type='text'
        placeholder='Ass Color Name'
        required
        value={colorValue}
        onChange={
            (e)=>{
                setcolorValue(e.target.value)
                sethexValue(convertCssColorNameToHex(e.target.value))
            }
        }
        />
        <button
        type='button'
        onClick={()=>setisDarkText(!isDarkText)}
        >
            Toggle Text COlor
        </button>

    </form>
  )
}

export default Input