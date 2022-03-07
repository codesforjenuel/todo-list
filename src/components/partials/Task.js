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

        <TaskContainer className='taskCon'>
            <button onClick={completeHandler}>Completed</button>
            <p className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</p>
            <button onClick={deleteHandler}>Delete</button>
        </TaskContainer>

    )
}
const TaskContainer = styled.div`
 display:flex ;
 flex-direction: row ;
 justify-content: space-between ;
 align-items: center ;
 background-color:darkgray ;
 `


 
 