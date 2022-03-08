import React, { useState } from 'react'
import Task from './partials/Task'
import Controls from './Controls'
import styled from "styled-components"

export default function ToDo() {
    const [todos, setTodos] = useState([]);
    const [inputText, setinputText] = useState("");

    const [filteredTodos, setFilteredTodos] = useState([])

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
            <Btn onClick={submitTodoHandler}>Create</Btn>
            {filteredTodos.map((todo) => (
                <Task
                    key={todo.id}
                    text={todo.text}
                    todos={todos}
                    setTodos={setTodos}
                    todo={todo} />

            ))}

            <Controls
            
            setTodos={setTodos}
                todos={todos}
                setFilteredTodos={setFilteredTodos}
                filteredTodos={filteredTodos} />
        </TodoContainer>
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
border: 0px solid ;

&:focus {
    outline:none ;
}
`;