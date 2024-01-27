import Header from "../src/Header";
import Content from "../src/Content";
import Footer from "../src/Footer";
import { useState } from 'react';
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [items,setItems]=useState(JSON.parse(
    localStorage.getItem('todo_list')
  )
    // [
    //   {
    //     id:1,
    //     checked:true,
    //     item:"Practice coding"
    //   },
    //   {
    //     id:2,
    //     checked:false,
    //     item:"Play Cricket"
    //   },
    //   {
    //     id:3,
    //     checked:false,
    //     item:"Read about AI"
    //   }
    // ]
    );

    const [newItem,setNewItem]=useState('')
    const [search,setSearch]=useState('')
    
    function setCommonItems(listItems){
      setItems(listItems);
      localStorage.setItem("todo_list",JSON.stringify(listItems));
    }

    const addItem=(item)=>{
      const id=items.length? items[items.length-1].id+1:1;
      const addNewItem={id,checked:false,item}
      const listItems=[...items,addNewItem]
      setCommonItems(listItems);
    }

    const handleCheck=(id)=>{
        console.log(`${id}`);
        const listItems=items.map(
            (item)=>item.id===id ?{...item,checked:!item.checked}:item
        );
        setCommonItems(listItems);
    }

    const handleDelete=(id)=>{
        const listItems=items.filter(
            (item)=>item.id!==id || item.checked===true
        );
        setCommonItems(listItems);
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      if (!newItem) return ;
      console.log(newItem)
      addItem(newItem);
      setNewItem('')
    }

  return (
    <div className="App">
      <Header title="Karthikeyan To Do List"/>

      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}
      />

      <Content 
      items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />

      <Footer length={items.length}/>
    </div>
  );
}

export default App;
