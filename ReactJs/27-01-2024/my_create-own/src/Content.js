import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items,setItems]=useState(
    [
      {
        id:1,
        checked:true,
        item:"Practice coding"
      },
      {
        id:2,
        checked:false,
        item:"Play Cricket"
      },
      {
        id:3,
        checked:false,
        item:"Read about AI"
      }
    ]
    );
    const handleCheck=(id)=>{
        console.log(`${id}`);
        const listItems=items.map(
            (item)=>item.id===id ?{...item,checked:!item.checked}:item
        );
        setItems(listItems);
    }
    const handleDelete=(id)=>{
        const listItems=items.filter(
            (item)=>item.id!==id || item.checked===true
        );
        setItems(listItems);
    }
  return (
    <main>
      <ul>
        {items.map((item)=>(
          <li className='item' key={item.id}>
            <input 
            type="checkbox" 
            onChange={()=>handleCheck(item.id)}
            checked={item.checked}/>
            <label>{item.item}</label>
            <FaTrashAlt 
            role='button' 
            tabIndex={0} 
            onClick={()=>handleDelete(item.id)}/>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content