
import styled from "styled-components"


export const ContainerTripDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    height: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    h3{
        color: lawngreen;
    }
    p{
        color: white;
        font-size: 18px;
    }
    button{
        border-radius: 25px;
       :hover{
           background: #96A6D9;
       }
    }
`

export const CardTripDetail = styled.div` 
    display: flex;
    justify-content: center;
    flex-direction: column;
    word-wrap: break-word;
    width: 600px;
    height: 250px;
    background-color:#25007A;
    border-radius: 25px;
    margin: 8px;
    padding: 35px 0px 60px 20px;
    border: solid green 2px;
    :hover{
        background-color: #06023D;
    }
     strong{
        color: #DEEFE7;
        font-family: sans-serif;
    }
   p{
        color: #DEEFE7;
        font-family: sans-serif;
    }
`
export const CardTrip2 = styled.div`
  
    color: red;
    h1{
        color: lawngreen;
    }
    p {
        color: wheat;
        font-size: 18px;
    }
    strong {
        color:wheat;
        font-size: 18px;
    }
`
export const ButtonSps = styled.div`
    width: 320px;
    height: 50px;
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