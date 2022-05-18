import React, { useContext, useState } from "react"

import * as Styled from "./styles"
import { useNavigate } from "react-router-dom"
import { goToPokedex } from "../../Routes/coodinator"
import Card from "../../components/Card"
import Header from "../../components/Header"
import { Button } from "../../components/Button"
import GlobalStateContext from '../../Global/GlobalStateContext'
import Pagination from "../../components/pagination/Pagination"

const Home = () => {
  const navigate = useNavigate()
  const { pokemon } = useContext(GlobalStateContext)
 
  return (
    <Styled.Container>
      <Header>
        <Styled.Title>Home</Styled.Title>
        <Button onClick={() => goToPokedex(navigate)}>Pokedex</Button>
      </Header>
      <Styled.Content>
        {pokemon && pokemon.map((poke) => {
            return <Card key={poke.name} poke={poke} />
          })}
      </Styled.Content>
    </Styled.Container>
  )
}

export default Home
