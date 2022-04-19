import React from 'react';
import styled from 'styled-components';



const Borda = styled.p`
display:flex;
justify-content: start;
border: solid 1px black;
align-items: center;
margin-top: 2%;
padding-left: 2%;
height: 10vh;
`
const Caila = styled.img` 
width: 2.5vw;
height: 5vh;
margin-right: 10px;
border-radius:50px;
`

const Cardpequeno = (props)=>{
    return (
        <div className='pequeno-container'>
          
          <div>

          <Borda> <Caila src={ props.imagem1} />   {props.email}</Borda>
          <Borda> <Caila src={ props.imagem} />{props.endereco}</Borda>

          </div>
         
        </div>
    )
}
export default Cardpequeno;
