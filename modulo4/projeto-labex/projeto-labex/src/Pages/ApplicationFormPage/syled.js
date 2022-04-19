
import styled from "styled-components"

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    background:black;
    h1{
        color:whitesmoke;
        font-family: sans-serif;
    }
`

export const CardForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 550px;
    height: 600px;
    padding-top: 2%;
    margin-bottom: 2%;
    padding-bottom: 2%;
    background:#B6B3BB;
`

export const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    input{
        font-family: sans-serif;
    }
    select{
        font-family: sans-serif;
        font-size: 15px;
        height: 50px;
        background-color: #B6B3BB;
    }
`

export const TyleButton = styled.div`
    display: flex;
    width: 350px;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    button{
        border-radius: 25px;
        :hover{
            background: #96A6D9;
        }
    }
`
