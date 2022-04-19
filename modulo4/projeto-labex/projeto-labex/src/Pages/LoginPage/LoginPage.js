import React from "react";
import { useNavigate } from "react-router-dom";
import { CampoLogin, ContainerLogin, ContunButton, TextoInput } from "./styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useForm } from "../../hooks/useForm";

const LoginPage = () => {
  useProtectedPage();

  const { form, onChange, cleanFields } = useForm({
    email: '',
    password: ''
})

  const onSubmitLogin = (event) => {
    event.preventDefault()
  
    axios
      .post(`${BASE_URL}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin");
      })
      .catch(() => {
        alert("Você não possui autenticação, só os adm tem acesso!");
      });
      cleanFields()
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <ContainerLogin>
      <CampoLogin>
        <div>
          <h1>Login</h1>
        </div>

        <TextoInput onSubmit={onSubmitLogin}>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            type={"email"}
            label="Email"
            placeholder="Digite seu  E-mail"
            required
          />
          <br />
          <br />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label="senha"
            placeholder="Digite sua senha"
            type={"password"}
            required
          />
          <br />
          <br />
          <ContunButton>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            onClick={goBack}
          >
            Voltar
          </Button>
         
          <Button
            size="large"
            variant="contained"
            color="secondary"
            type={"submit"}
          >
            Entrar
          </Button>
        </ContunButton>
        </TextoInput>
        
      </CampoLogin>
    </ContainerLogin>
  );
};

export default LoginPage;
