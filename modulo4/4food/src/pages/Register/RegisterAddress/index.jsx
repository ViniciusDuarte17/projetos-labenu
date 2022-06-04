import React from 'react'

import {useProtectedPage} from "../../../hooks/useProtectedPage"

import { Container, TextStyle3 } from "./styles";

import LogoFood from "../../../components/logoFood/LogoFood"
import RegisterForm from "./RegisterForm"



const RegisterAddress = () => {
  useProtectedPage();
  
  return (
    <Container>
      <LogoFood/>

      <TextStyle3> <p>  Meu Endereço </p> </TextStyle3>

      <RegisterForm/>
    </Container>
  )
}

export default RegisterAddress