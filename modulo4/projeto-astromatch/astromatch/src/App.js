import React from "react";
import axios from "axios";
import CardPage from "./components/CardPage/Card";
import { FaBeer } from 'react-icons/fa';
import styled from "styled-components";

const DirecaoButton = styled.button`
  display: flex ;
  flex-direction: center ;
  justify-content:center ;
  align-items: center;
  border: solid 1px green;
  border: none;
  border-radius: 30px;
  margin: auto;
  width: 50px;
  height: 30px;
  margin-top: 1%;
:hover{
  background-color: #267365;
  color:#731702;
}
`

function App() {
  
  const newRequest = () => {
    axios 
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/clear`)
  }
  
  return (
    <>
   <div>
     <CardPage />
     </div>
     <div>
        <DirecaoButton onClick={()=> newRequest()}><FaBeer /></DirecaoButton>
        </div>
   
   </>
  );
}

export default App;
