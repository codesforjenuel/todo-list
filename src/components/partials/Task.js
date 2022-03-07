import React from 'react'
import styled from "styled-components"


export default function Task({ text }) {
  const delKey = () => {
      localStorage.removeItem("tasks")
  }

       
    return (

        <TaskContainer className='taskCon'>
            <input type="checkbox" />
            <p>{text}</p>
            <button onClick={delKey}>Delete</button>
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