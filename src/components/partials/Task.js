import React from 'react'
import styled from "styled-components"
export default function Task({ task }) {
    return (

        <TaskContainer>
            <input type="checkbox" />
            <p>{task}</p>
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