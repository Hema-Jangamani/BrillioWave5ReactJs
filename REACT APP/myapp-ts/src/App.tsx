import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from "react";

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  const [todos, settodos] = useState<Array<any>>([]);
    useEffect(() => {
        fetch('http://localhost:3001/todos')
        .then(res=>res.json())
        .then(data=>settodos(data));
       
    }, []);
    function AddToDoItem(data:any){
      settodos([...todos,data]);
    }
    function DeleteItem(id:any){
      fetch(`http://localhost:3001/todos/${id}`,{
        method:'DELETE'
      })
      .then(res=>{
        let todofilter=todos.filter(x=>x.id !==id)
        settodos([...todofilter]);
      });
    }
    function UpdateItem(id:any){
      let data=todos.find(x=>x.id===id);
      let isItemCompleted=data.isCompleted ? false : true;
      let item={
        id: data.id,
        text:data.text,
        isCompleted:isItemCompleted
      }
      
      fetch(`http://localhost:3001/todos/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(item)
      })
      .then(res=>{
        todos.filter(x=>x.id===id)[0].isCompleted=item.isCompleted;
        settodos([...todos]);
      })
    }
  return (
    <div className="container mt-3">
       <h2 className="text-center text-light">What's your plans today?</h2>
       <ToDoForm todoitem={AddToDoItem}/>
       <ToDoList MarkItem={UpdateItem} DelItem={DeleteItem} tododata={todos}/>
    </div>
  );
}

export default App;
