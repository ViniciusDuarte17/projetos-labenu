import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputAdornment, InputLabel, OutlinedInput,TextField,} from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { InputContainer } from "./styles";

import useForm from "../../../hooks/useForm";
import { useUnprotectedPage } from "../../../hooks/useUnprotectedPage";

import { RegisterClient } from "../../../services/RegisterClient";

import MaskCpf from "../../../components/MaskCPF/MaskCPF"

import {goToRegisterAddress} from "../../../Routes/coodinator"

const RegisterForm = () => {
  // useUnprotectedPage();
  const navigate = useNavigate();

  const { form, onChange, clean } = useForm({ name: "", email: "", cpf: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    RegisterClient(form, clean, navigate); 
    goToRegisterAddress(navigate);
  };

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>

      <TextField
            type={"Nome e Sobrenome"}
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome e Sobrenome"}
            fullWidth
            margin={"normal"}
            placeholder="Nome e Sobrenome"
            required
            />

        <TextField
            type={"email"}
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            fullWidth
            margin={"normal"}
            placeholder="email@email.com"
            required
            />

        <TextField
          type={"text"}
          name={"cpf"}
          value={MaskCpf(form.cpf)}
          onChange={onChange}
          label={"CPF"}
          fullWidth
          margin={"normal"}
          placeholder="000.000.000-00"
          maxLength='11'
          required
        />

        <FormControl
          style={{ width: "100%", marginTop: "1em" }}
          variant="outlined"
        >
          <InputLabel htmlFor="campoSenha">Senha</InputLabel>
          <OutlinedInput
            id="campoSenha"
            name={"password"}
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            placeholder="Minimo 6 caracteres"
            required
            inputProps={{ pattern: "^.{6,}" }}
            title={"Minimo 6 caracteres"}
          />
          
        </FormControl>
        <FormControl
          style={{ width: "100%", marginTop: "1em" }}
          variant="outlined"
        >
          <InputLabel htmlFor="campoSenha">Confirmar Senha</InputLabel>
          <OutlinedInput
            id="campoConfirmarSenha"
            name={"password"}
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            placeholder="Minimo 6 caracteres"
            required
            inputProps={{ pattern: "^.{6,}" }}
            title={"Minimo 6 caracteres"}
          />
          
        </FormControl>

        <br />
        <br />
        <Button
          fullWidth
          variant="contained"
          color={"primary"}
          margin={"normal"}
          type={"submit"}
        >
          Cadastrar
          
        </Button>
      </form>
    </InputContainer>
  );
};

export default RegisterForm;