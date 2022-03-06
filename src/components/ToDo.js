import React from 'react'
import Task from './partials/Task'
import Controls from './Controls'
import styled from "styled-components"

export default function ToDo() {
  return (
      <TodoContainer>
          <h1>To Do List</h1>
    <InputStyle/>
    <Task />
    <Controls />
    </TodoContainer>
  )
}

const TodoContainer = styled.div`
backdrop-filter: blur(10px)  ;
border-radius:10px ;
width:120% ;
margin-top:40% ;
box-shadow: 0px 0px 15px black; 
text-align:center ;
background-color:none ;
`

const InputStyle = styled.input`
border-radius: 10px ;
border: 1px solid black ;
`;