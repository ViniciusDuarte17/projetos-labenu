import styled from "styled-components";

export const ContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;

`

export const PerfilSpan = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5%;
  p {
    padding: 0.3rem;
  }
`;

export const ButtonUi = styled.button`
  margin-top: -3.6rem;
  border: none;
  background-color: white;
`;

export const Rectangle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4.75rem;
  margin: 1rem 0;
  background-color: #eee;
  span {
    color: #b8b8b8;
     padding-left: 1%; 
  }
  p {
    padding-left: 1%; 
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    margin-top: 2%;
  }
  button {
    margin-left: -2.8rem;
    margin-top: 1.5rem;
    border: none;
  }
`;
export const HistoricoPedido = styled.div`
  border: 1px solid black;
  border-top: none;
  border-left: none;
  border-right: none;
  margin: 2%;
  span {
     padding-left : 2%;
    font-family: sans-serif;
    font-size: 1rem;
    font-size: 1rem;
  }
`;

export const ProfilePedidosVazios = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1.125rem;
    margin-top: 1.75rem;
`


