import React from 'react';
import { useState } from 'react';
import Square from './Square';
import Input from './Input';


function App() {

  const [selectedColor,setSelectedColor]=useState('')

  const [color,setColor]=useState('black');

  const handleSubmit=()=>{
    const colors=color.map((c)=>c==='black'?'white':c)
    setColor(colors)    
  }
  const [colorValue,setcolorValue]=useState('');
  const [hexValue,sethexValue]=useState('');
  const [isDarkText,setisDarkText]=useState('');


  return (
    <div className='App'>
      <Square
      colorValue={colorValue}
      hexValue={hexValue}
      isDarkText={isDarkText}
      />
      <Input
      colorValue={colorValue}
      setcolorValue={setcolorValue}
      sethexValue={sethexValue}
      isDarkText={isDarkText}
      setisDarkText={setisDarkText}
      />
    </div>
    
  );
}
{/*<div>
       <label htmlFor='Color'>Select a color:</label>
      <input
      type='text'
      id='colorpicker'
      value={selectedColor}
      onChange={(e)=>setSelectedColor(e.target.value)}
      />
      <div style={{marginTop:'20px'}}>
        <p>Selected Color: </p>
        <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: selectedColor,
            color:{color}}}>{selectedColor}<br></br>
            {convertCssColorNameToHex(`${selectedColor}`)}
        </div>
      </div>
      <button
      onClick={()=>handleSubmit()}
      >Toggle Color</button>
    </div> */}
export default App;
