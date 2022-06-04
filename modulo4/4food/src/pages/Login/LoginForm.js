import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputContainer } from "./styles";
import {
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import useForm from "../../hooks/useForm";
import Button from "@mui/material/Button";
import { login } from "../../services/login";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

const LoginForm = () => {
  useUnprotectedPage();
  const { form, onChange, clean } = useForm({ email: "", password: "" });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); 

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clean, navigate);
  };

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>
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

        <br />
        <br />
        <Button
          fullWidth
          variant="contained"
          color={"primary"}
          margin={"normal"}
          type={"submit"}
        >
          Entrar
        </Button>
      </form>
    </InputContainer>
  );
};

export default LoginForm;
