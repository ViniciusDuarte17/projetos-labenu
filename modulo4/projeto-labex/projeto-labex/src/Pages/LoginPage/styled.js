import styled from "styled-components"

export const ContainerLogin =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85.3vh;
    background:black;
    padding-top: 7%;
`

export const CampoLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 400px;
    margin: auto;
    background:#B6B3BB; 
    div, h1{
        color: black;
        font-family: sans-serif;
    }
`

export const TextoInput = styled.form`
    display: flex;
    flex-direction: column;
    width: 280px; 
   
    input{
        color: white;
    }
`
export const ContunButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 70px;
    background:#B6B3BB; 
    border: 1px solid green;
    border:none;
    button{
        border-radius: 25px;
        :hover{
            background: #B6B3BB;
        }
    }
`