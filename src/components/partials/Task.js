import React from 'react'
import styled from "styled-components"
export default function Task() {
  return (
    
        <TaskContainer>
        <input type="checkbox" />
        <p>Task Name</p>
        <button>Delete</button>
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