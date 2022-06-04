import React from "react";
import { Container, TextStyle3 } from "./styles";
import LogoFood from "../../../components/logoFood/LogoFood";
import RegisterForm from "./RegisterForm";
import Header from "../../../components/Header";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToProfile } from "../../../Routes/coodinator";

const AddAdress = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <Button onClick={() => goToProfile(navigate)}>
          <ArrowBackIosNewIcon />
        </Button>
        <h2>Endereço</h2>
        <div></div>
        <div></div>
      </Header>
      <RegisterForm />
    </Container>
  );
};

export default AddAdress;
