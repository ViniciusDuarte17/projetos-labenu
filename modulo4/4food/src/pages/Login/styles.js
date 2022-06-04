import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3vh;
`;
export const Img = styled.img`
  width: 60%;
  height: 3.625rem;
  object-fit: contain;
`;
export const TextStyle3 = styled.span`
  p {
    width: 100%;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1.3rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: black;
  }
`;
export const SignUpButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin-bottom: 5vh;
`;
