import React from 'react'
import { useState } from 'react';

const Content = () => {
  const [items,setItems]=useState(
    [
      {
        id:1,
        checked:true,
        item:"Practice coding"
      },
      {
        id:1,
        checked:false,
        item:"Play Cricket"
      },
      {
        id:1,
        checked:true,
        item:"Read about AI"
      }
    ]
    );
  return (
    <main>
      <ul>
        {items.map((item)=>(
          <li>
            <input type="checkbox" checked={item.checked}/>
            <label>{item.item}</label>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content