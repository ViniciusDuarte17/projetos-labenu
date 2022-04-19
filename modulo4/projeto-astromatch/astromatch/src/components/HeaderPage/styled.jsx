import styled from "styled-components";

export  const ContainerHeader = styled.div`
    display: flex;
    flex-direction: start;
    justify-content: space-evenly;
    align-items: center;
     width: 390px;
    height: 70px;
    border: solid green 1px;
    border-top: none;
    border-left: none;
    border-right: none;
`
 export const ContainerImgMatch = styled.img`
     width: 200px;
     height: 60px;
 ` 

 export const ContainerIconeHome = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px ;
    height: 50px;
    border: solid 1px black;
    border: none;
    border-radius: 50px ;
    background: #1B7F7A;
    color:#0897B4;
    :hover{
        background: #8f1a8f;
        color:#1B7F7A;
    }
 `
 export const ContainerIconeTelaMatch = styled.label`
  display: flex;
    justify-content: center;
    align-items: center;
    width: 50px ;
    height: 50px;
    border: solid 1px black;
    border: none;
    border-radius: 50px ;
     background:#8f1a8f; ;
     color: #0897B4;
     :hover{
         background: #1B7F7A;
         color:#A1C7E0;
     }
 `
