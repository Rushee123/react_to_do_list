import React from 'react'
import "./App.css";
import { useState, useEffect } from 'react';


const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])
  const [editId,setEditId]= useState(0)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (editId){
      const editTodo = todos.find((i)=>i.id===editId);
      const updatedTodo=todos.map((t)=>t.id===editTodo.id ?(t={id:t.id,todo}):({id:t.id,todo:t.todo}))
      setTodos(updatedTodo)
      setEditId(0)
      setTodo("")
      return 
    }
    console.log(todo)
    console.log("todos", todos)
    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
    }
    setTodo("")

  }
  const handleDelete =(id)=>{
    console.log("delid",id)
    const delTodo= todos.filter((to)=>to.id!==id)
    console.log("del",delTodo)
    setTodos([...delTodo])
  }
  const handleEdit=(id)=>{
      const editTodo=todos.find((i)=>i.id=== id);
      setTodo(editTodo.todo)
      setEditId(id)
  }

  return (
    <>

      <div className='App'>
        <div className='container'>
          <h1>Todo List App</h1>
          <form className='todoForm' onSubmit={handleSubmit}>
            <input type='text' onChange={(e) => { setTodo(e.target.value) }} value={todo}/>

            <button type='submit'>{editId?"Edit":"Go"}</button>
          </form >
          <ul className='allTodos'>
            {
              todos.map((t)=>{
               return (<> <li className='singleTodo' key={t.id}><span className='todoText'>{t.todo}</span>

               <button onClick={()=>{handleEdit(t.id)}}>Edit</button>
               <button onClick={()=>{handleDelete(t.id)}}>Delete</button>
             </li></>)

              })
            }


          </ul>
        </div>

      </div>

    </>
  )
}

export default App
