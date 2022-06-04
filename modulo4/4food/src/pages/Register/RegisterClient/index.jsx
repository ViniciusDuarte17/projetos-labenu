import React from 'react'

import { useUnprotectedPage } from '../../../hooks/useUnprotectedPage'

import { Container, TextStyle3 } from "./styles"

import LogoFood from "../../../components/logoFood/LogoFood"
import RegisterForm from "./RegisterForm"




const Register = () => {
 
  return (
    <Container>
      <LogoFood/>

      <TextStyle3> <p>  Cadastrar </p> </TextStyle3>

      <RegisterForm/>
    </Container>
  )
}

export default Register