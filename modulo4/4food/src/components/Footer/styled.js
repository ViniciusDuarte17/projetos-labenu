import styled from "styled-components";

export const ContainerFooter = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  width: 100vw;
  height: 10vh;
  padding-top: 5px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-top: 3px solid #b8b8b8;
  gap: 60px;
`;
export const Button = styled.button`
  width: 20vw;
  height: 3vh;
  outline: none;
  border: none;
  text-decoration: none;
  background-color: #fff;
  cursor: pointer;
`;
