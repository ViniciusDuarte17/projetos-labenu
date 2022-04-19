import styled from "styled-components";

export const ContainerCreateForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black;
`
export const CreateCart = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: solid green 2px;
    border-radius: 15px;
    width: 550px;
    height: 550px;
    background-color: #B6B3BB;
`

export const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    width: 400px;
    height: 390px;
    border: 1px green solid;
    border: none;
   
`
export const CampoSelect = styled.select`
    border: 1px black solid;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 70px;
    background-color: #B6B3BB;
`

export const TopButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px green;
    border: none;
    width: 220px;
    height: 50px;
    margin: auto;
    button{
       border-radius: 25px;
       :hover{
           background: #96A6D9;
       }
   }
`


// fiz isso para deixar o codigo create mais limpo
export const planets = [
    "Mercurio",
    "Vênus",
    "Terra",
    "Marte",
    "Jupiter",
    "Saturno" ,
    "Urano",
    "Nertuno",
    "Plutão"
  ]