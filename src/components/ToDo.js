import React, { useState } from 'react'
import Task from './partials/Task'
import Controls from './Controls'
import styled from "styled-components"

export default function ToDo() {
    const [todos, setTodos] = useState([]);
    const [inputText, setinputText] = useState("");

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }])
    }
    const handleinputText = (e) => {
        setinputText(e.target.value);

    }
    return (
        <TodoContainer>
            <h1>To Do List</h1>
            <InputStyle value={inputText} onChange={handleinputText} />
            <button onClick={submitTodoHandler}>Create</button>
            {todos.map((todo) => (
                <Task 
                key={todo.id} 
                text={todo.text}
                todos={todos}
                setTodos={setTodos}
                todo={todo} />

            ))}

            <Controls />
        </TodoContainer>
    )
}

const TodoContainer = styled.div`
backdrop-filter: blur(10px)  ;
border-radius:10px ;
width:120% ;
margin-top:15% ;
box-shadow: 0px 0px 15px black; 
text-align:center ;
background-color:none ;
`

const InputStyle = styled.input`
border-radius: 10px ;
border: 1px solid black ;
`;