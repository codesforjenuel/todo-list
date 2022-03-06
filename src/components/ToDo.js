import React, { useState } from 'react'
import Task from './partials/Task'
import Controls from './Controls'
import styled from "styled-components"

export default function ToDo() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks"))||[]);
    const [newTask, setNewTask] = useState("");
    const handleChange = (e) => {
        setNewTask(e.target.value);
    }
    const handleNewTask = (e) => {
        e.preventDefault();
        //save the value of newTask into task state
        setTasks([...tasks, newTask]);
        //update the local storage with the new task
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]))
    }
    return (
        <TodoContainer>
            <h1>To Do List</h1>
            <InputStyle value={newTask} onChange={handleChange} />
            <button onClick={handleNewTask}>Create</button>
            {tasks.map((task, i) => {
                return (
                    <Task key={i} task={task} />
                )
            })}
            
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