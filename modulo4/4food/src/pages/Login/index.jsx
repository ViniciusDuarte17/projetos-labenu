import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRegister } from "../../Routes/coodinator";
import { Container, SignUpButtonContainer, TextStyle3 } from "./styles";
import Button from "@mui/material/Button";
import LoginForm from "./LoginForm";
import LogoFood from "../../components/logoFood/LogoFood";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoFood />
      <TextStyle3>
        <p>Entrar</p>
      </TextStyle3>
      <LoginForm />

      <SignUpButtonContainer>
        <Button onClick={() => goToRegister(navigate)}>
          Não possui cadastro? Clique aqui.
        </Button>
      </SignUpButtonContainer>
    </Container>
  );
};

export default Login;
