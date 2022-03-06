import React from 'react'
import styled from "styled-components"

export default function Controls() {
  return (
    <ControlsContainer>
        <p>2 Task Left</p>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
        <div>
            <button>Delete Completed Task</button>
        </div>
    </ControlsContainer>
  )
}

const ControlsContainer = styled.div `
display:flex ;
flex-direction:row ;
justify-content: space-between;
align-items: center ;
background-color:lightgray ;

border-radius: 0px 0px 10px 10px ;
`