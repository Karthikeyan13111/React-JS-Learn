import Header from "../src/Header";
import Content from "../src/Content";
import Footer from "../src/Footer";
import { useState, useEffect } from 'react';
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const API_URL='http://localhost:3500/itemss';
  const [items,setItems]=useState([]);
    const [newItem,setNewItem]=useState('')
    const [search,setSearch]=useState('')
    const [fetchError,setfetchError]=useState(null)
    const [isLoading,setisLoading]=useState(true)


    useEffect(
     ()=>{
        // JSON.parse(
        //   localStorage.getItem('todo_list'))
        const fetchItems= async()=>{
          try {
            const response= await fetch(API_URL);
            if (!response.ok) {
              throw Error("Data Not Recived");
            }
            const listtems= await response.json();
            setItems(listtems);
            setfetchError(null)
          } catch (error) {
            // console.log(error.message)
            setfetchError(error.message)
          } finally{
            setisLoading(false);
          }
        }
        setTimeout(() => {
        (async ()=> await fetchItems())()
        }, 2000);
      },[]
    )
    
    function setCommonItems(listItems){
      setItems(listItems);
      //localStorage.setItem("todo_list",JSON.stringify(listItems));
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
      <Header title="Course List"/>

      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}
      />
<main>
  {isLoading && <p>{`Loading Items...`}</p>}
  {fetchError && <p>{`Error: ${fetchError}`}</p>}
  {!isLoading && !fetchError &&
    <Content 
      items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
  }

</main>
      

      <Footer length={items.length}/>
    </div>
  );
}

export default App;
