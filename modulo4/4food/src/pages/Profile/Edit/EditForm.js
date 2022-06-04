import { Button, TextField } from "@mui/material";
import React from "react";
import useForm from "../../../hooks/useForm";
import * as Styled from "./styled";
import { editar } from "../../../services/editar";
import { useNavigate } from "react-router-dom";

export const EditForm = () => {
  const navigate = useNavigate();
  const { form, onChange, clean } = useForm({ name: "", email: "", cpf: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    editar(form, clean, navigate);
  };

  return (
    <>
      <Styled.FormControl onSubmit={onSubmitForm}>
        <TextField
          label="Nome"
          name="name"
          fullWidth
          margin={"normal"}
          value={form.name}
          onChange={onChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin={"normal"}
          value={form.email}
          onChange={onChange}
          required
        />
        <TextField
          label="cpf"
          name="cpf"
          fullWidth
          margin={"normal"}
          value={form.cpf}
          onChange={onChange}
          required
        />
        <Button
          fullWidth
          variant="contained"
          color={"primary"}
          margin={"normal"}
          type={"submit"}
          required
        >
          Salvar
        </Button>
      </Styled.FormControl>
    </>
  );
};
