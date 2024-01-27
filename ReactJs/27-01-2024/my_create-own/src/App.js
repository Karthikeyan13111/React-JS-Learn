import Header from "../src/Header";
import Content from "../src/Content";
import Footer from "../src/Footer";
import { useState } from 'react';

function App() {
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
        localStorage.setItem("todo_list",JSON.stringify(listItems));
    }
    const handleDelete=(id)=>{
        const listItems=items.filter(
            (item)=>item.id!==id || item.checked===true
        );
        setItems(listItems);
        localStorage.setItem("todo_list",JSON.stringify(listItems));
    }
  return (
    <div className="App">
      <Header title="Karthikeyan To Do List"/>
      <Content 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
