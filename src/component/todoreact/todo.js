import React, { useEffect, useState } from 'react';
import './style.css';

const getStorageData = () => {
  let data = localStorage.getItem("myToDoList");
  if(data){
    return JSON.parse(data);
  }else{
    return [];
  }
}

const Todo = () => {

  const [inputData, setInputData] = useState(" ");
  const[items, setItems] = useState(getStorageData);
  const[isEditItem, setEditItem] = useState("");
  const[toggleButton, setToggleButton] = useState(false);

  const addItems = () => {
    if(!inputData){
      alert("Please enter Items to add")
    }else if (inputData && toggleButton){
      setItems(
        items.map(item =>{
          if(item.id === isEditItem ){
            return {...item, name: inputData};
          }
          return item;
        })
      )
      setEditItem(null);
      setInputData("");
      setToggleButton(false);
    }else{
      const myNewInputData = {
        id : new Date().getTime().toString(),
        name : inputData
      }
      setItems([...items, myNewInputData]);
      setInputData("");
    }  
  };

  const deleteItems = (index) =>{
      const updatedItems = items.filter((item) =>{
        return item.id!== index
      })
      setItems(updatedItems);
  }

  const editItem = (index) =>{
   const item_to_edited = items.find((item) =>{
    return item.id===index
   })
   setEditItem(index);
   setInputData(item_to_edited.name);
   setToggleButton(true);
  }

  useEffect(() =>{
    localStorage.setItem("myToDoList", JSON.stringify(items));
    },[items]);

  return (
    <>
    <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src='./images/todo.svg' alt='todo'/>
                <figcaption>Add your to do list here ✌</figcaption>
            </figure>
            <div className='addItems'>
                <input type='text' 
                  placeholder="✍ Add Items" 
                  className='form-control'
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                   />
                   {!toggleButton ? 
                        <i className="fa fa-plus add-btn" onClick={addItems}></i> :  
                      <i className="fa fa-edit add-btn" onClick={addItems}></i>}
            </div>
            {items.map((item) =>{
              return (
                <div className='showItems' key={item.id}>
                  <div className='eachItem'>
                    <h3>{item.name}</h3>
                    <div className='todo-btn'>
                      <i className='far fa-edit add-btn' onClick={()=>editItem(item.id)} ></i>
                      <i className='far fa-trash-alt add-btn' onClick={()=>deleteItems(item.id)}></i>
                    </div>
                  </div>
                </div>
           ) })}
            
            <div className='showItems'>
              <button className='btn effect04' data-sm-link-text='Remove All' onClick={()=>setItems([])}>
                  <span>Check List</span>
              </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Todo
