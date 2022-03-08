import React from 'react'
import styled from "styled-components"


export default function Task({ text, todo,  todos, setTodos }) {
  const deleteHandler = () => {
setTodos(todos.filter((el) => el.id !== todo.id));
  };

const completeHandler = () => {
    setTodos(todos.map(item =>{
        if(item.id === todo.id){
          return{
              ...item,completed: !item.completed
          }  
        }
        return item;
    }))
}  
    return (

        <TaskContainer >
            <Btn onClick={completeHandler}>Completed</Btn>
            <p className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</p>
            <Btn onClick={deleteHandler}>Delete</Btn>
        </TaskContainer>

    )
}
const Btn = styled.button`
height:30px ;


`

const TaskContainer = styled.div`
height:30px ;
 display:flex ;
 flex-direction: row ;
 justify-content: space-between ;
 align-items: center ;
 background-color:darkgray ;
 `


 
 