import * as Styled from "./styled";
import React from "react";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Header from "../../../components/Header";
import { EditForm } from "./EditForm";
import { useNavigate } from "react-router-dom";
import { goToProfile } from "../../../Routes/coodinator";

const EditPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header>
        <Button onClick={() => goToProfile(navigate)}>
          <ArrowBackIosNewIcon />
        </Button>
        <h2>Editar</h2>
        <div></div>
        <div></div>
      </Header>

      <Styled.Container>
        <EditForm />
      </Styled.Container>
    </div>
  );
};

export default EditPage;
