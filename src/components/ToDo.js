import React, { useState } from 'react'
import Task from './partials/Task'
import Controls from './Controls'
import styled from "styled-components"

export default function ToDo() {
    const [todos, setTodos] = useState([]);
    const [inputText, setinputText] = useState("");
const [JSONImport, SetJSONImport] = useState([])
    const [filteredTodos, setFilteredTodos] = useState([])

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }])
    }
    const handleinputText = (e) => {
        setinputText(e.target.value);

    }
const handleJSONText = (e) => {
    e.preventDefault();
    SetJSONImport(e.target.value)
}


    const handleJSONImport = (e) => {
        e.preventDefault();
        const newToDos = JSON.parse(JSONImport);
        //Map all the new task and set todos
        setTodos( [...todos, ...newToDos.tasks]);
    }
    return (
        <>
        <TodoContainer>
            <h1>To Do List</h1>
            <InputContainer>
            <div>
            <h2>Create Task</h2>
            <InputStyle value={inputText} onChange={handleinputText} />
            <Btn onClick={submitTodoHandler}>Create</Btn>
            </div>
 <div>
            <h2>Import Via JSON</h2>
            <InputStyle  value ={JSONImport} onChange={handleJSONText} />
            <Btn onClick={handleJSONImport}>Import</Btn>
        </div>
</InputContainer>
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
       
        </>
    )
}

const InputContainer = styled.div`
display:flex ;
flex-direction: row ;
justify-content: center ;
`

const Btn = styled.button`
margin:10px ;
background:lightgray ;
height: 20%;
width: 80px;
border-radius: 5px ;
border:2px solid #0598FA;
&:hover{
  background-color:#0598FA ;
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

