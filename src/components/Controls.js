import React, { useState, useEffect } from 'react'
import styled from "styled-components"


export default function Controls({ todos, setFilteredTodos, setTodos }) {
  const [status, setStatus] = useState('all')

  const deleteAllHandler = () => {
    if (setFilteredTodos(todos.filter((todo) => todo.completed === false)))  {
todos.remove(todos);
setTodos(localStorage.removeItem(todos.value))
    }
  }
 const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'active':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
 
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
    let todoLocal =  JSON.parse(localStorage.getItem("todos"))
    setTodos(todoLocal);
    }
  }

  useEffect(() => {
    getLocalTodos();
  }, []);
 useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  
 
  
  const statusHandler = (e) => {
    setStatus(e.target.value)


  }


  return (
    <ControlsContainer>
      <p>2 Task Left</p>
      <div>

        <Btn value="all" onClick={statusHandler} >All</Btn>
        <Btn value="completed" onClick={statusHandler} >Completed</Btn>
        <Btn value="active" onClick={statusHandler} >Active</Btn>

      </div>
      <div>
        <button onClick={deleteAllHandler}>Delete Completed Task</button>
      </div>
    </ControlsContainer>
  )
}
const Btn = styled.button`
margin:10px ;
background:none ;
height: 20%;
width: 80px;
border-radius: 5px ;
border:2px solid aquamarine ;
&:hover{
  background-color:aquamarine ;
  transition-duration: 500ms ;
}

`


const ControlsContainer = styled.div`
padding-left: 2% ;
padding-right: 2% ;
display:flex ;
flex-direction:row ;
justify-content: space-between;
align-items: center ;
background-color:lightgray ;

border-radius: 0px 0px 10px 10px ;
`