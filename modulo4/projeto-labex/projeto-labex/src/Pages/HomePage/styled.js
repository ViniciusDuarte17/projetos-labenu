import styled from "styled-components"

export const ContainerHome = styled.div`
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ButtonSp = styled.div`
    width: 420px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin: auto;
   button{
       border-radius: 25px;
       :hover{
           background: #96A6D9;
       }
   }
`
export const DivFont = styled.div`
    position: absolute;
    margin-top: 225px;
    margin-right: 12px;
  
    h1{
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`

